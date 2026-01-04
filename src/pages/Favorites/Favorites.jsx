import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import FavoritesCard from "./FavoritesCard";
import Loader from "../../components/Loader";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { Fade } from "react-awesome-reveal";
import { HiOutlineHeart, HiOutlineSparkles } from "react-icons/hi2";
import { Link } from "react-router";

const Favorites = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [art, setArt] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/favorites-list?email=${user?.email}`)
      .then((res) => {
        setLoading(false);
        setArt(res.data.result);
      })
      .catch(() => setLoading(false));
  }, [user, axiosSecure]);

  const handleUnfavorite = (id) => {
    axiosSecure.delete(`/unFevorites?id=${id}`).then((res) => {
      if (res.data.success) {
        setArt((prev) => prev.filter((a) => a._id !== id));
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
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-base-200 pb-8">
        <div className="space-y-3">
          <Fade direction="down" triggerOnce>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full border border-secondary/20">
              <HiOutlineHeart
                className="text-secondary animate-pulse"
                size={16}
              />
              <p className="text-secondary font-bold tracking-widest uppercase text-[10px]">
                Personal Collection
              </p>
            </div>
          </Fade>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Favorites
            </span>
          </h2>
        </div>
        <p className="text-neutral/60 max-w-xs text-sm border-l-2 border-primary pl-4 italic leading-relaxed">
          A curated list of masterpieces that inspired your creative journey.
        </p>
      </div>

      {/* Content Section */}
      {art.length === 0 ? (
        <Fade triggerOnce>
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-6 bg-base-200/30 rounded-[2rem] border-2 border-dashed border-base-300">
            <div className="w-20 h-20 bg-base-100 rounded-2xl flex items-center justify-center shadow-xl text-neutral/20">
              <HiOutlineHeart size={40} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black uppercase tracking-tight">
                No favorites yet
              </h3>
              <p className="text-neutral/50 text-sm max-w-xs mx-auto">
                Explore the gallery and heart the artworks that speak to you.
              </p>
            </div>
            <Link
              to="/all-artworks"
              className="btn btn-primary btn-md rounded-xl px-8 shadow-lg shadow-primary/20"
            >
              Explore Artworks
            </Link>
          </div>
        </Fade>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {art.map((item, index) => (
            <Fade key={item._id} direction="up" delay={index * 100} triggerOnce>
              <div className="group relative">
                {/* Decorative Frame for each card (Matches Home UI) */}
                <div className="absolute -inset-1.5 border border-primary/10 rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <FavoritesCard
                    art={item}
                    handleUnfavorite={handleUnfavorite}
                  />
                </div>
              </div>
            </Fade>
          ))}
        </div>
      )}

      {/* Bottom Inspiration Tag */}
      {art.length > 0 && (
        <div className="flex justify-center pt-10">
          <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-neutral/30">
            <HiOutlineSparkles size={14} />
            Keep Discovering New Perspectives
            <HiOutlineSparkles size={14} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Favorites;
