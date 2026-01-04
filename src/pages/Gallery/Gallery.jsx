import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import GalleryCard from "./GalleryCard";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Loader from "../../components/Loader";
import { Fade } from "react-awesome-reveal";
import { HiOutlinePhoto, HiOutlineSparkles, HiPlus } from "react-icons/hi2";
import { Link } from "react-router";

const Gallery = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/my-gallery?email=${user.email}`)
      .then((res) => {
        setArts(res.data?.result || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user, axiosSecure]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This masterpiece will be removed from your gallery!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      background: "#fff",
      customClass: {
        title: "font-black uppercase tracking-tighter",
        confirmButton: "rounded-xl font-bold uppercase tracking-widest text-xs",
        cancelButton: "rounded-xl font-bold uppercase tracking-widest text-xs",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-artwork?id=${id}`).then((res) => {
          setArts((prevArts) => prevArts.filter((art) => art._id !== id));
          Swal.fire("Deleted!", "Artwork has been removed.", "success");
        });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }
  return (
    <section className="relative space-y-10">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-base-200 pb-8">
        <div className="space-y-3">
          <Fade direction="down" triggerOnce>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
              <HiOutlinePhoto
                className="text-primary animate-pulse"
                size={16}
              />
              <p className="text-primary font-bold tracking-widest uppercase text-[10px]">
                Artist Portfolio
              </p>
            </div>
          </Fade>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Gallery
            </span>
          </h2>
        </div>

        <Link
          to="/dashboard/add-artworks"
          className="btn btn-primary rounded-2xl gap-2 shadow-lg shadow-primary/20"
        >
          <HiPlus size={20} />
          Add New Art
        </Link>
      </div>

      {/* Content Section */}
      {arts.length === 0 ? (
        <Fade triggerOnce>
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-6 bg-base-200/30 rounded-[2rem] border-2 border-dashed border-base-300">
            <div className="w-20 h-20 bg-base-100 rounded-2xl flex items-center justify-center shadow-xl text-neutral/20">
              <HiOutlinePhoto size={40} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black uppercase tracking-tight">
                Gallery is empty
              </h3>
              <p className="text-neutral/50 text-sm max-w-xs mx-auto">
                Start your journey by adding your first masterpiece.
              </p>
            </div>
            <Link
              to="/dashboard/add-artwork"
              className="btn btn-primary btn-md rounded-xl px-8 shadow-lg"
            >
              Upload Artwork
            </Link>
          </div>
        </Fade>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {arts.map((art, index) => (
            <Fade key={art._id} direction="up" delay={index * 100} triggerOnce>
              <GalleryCard art={art} handleDelete={handleDelete} />
            </Fade>
          ))}
        </div>
      )}

      {/* Footer Sparkle */}
      {arts.length > 0 && (
        <div className="flex justify-center pt-10">
          <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-neutral/30">
            <HiOutlineSparkles size={14} />
            Showcasing Your Creative Vision
            <HiOutlineSparkles size={14} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
