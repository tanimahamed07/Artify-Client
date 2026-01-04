import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useNavigate } from "react-router";
import { Fade } from "react-awesome-reveal";
import { HiOutlineCloudArrowUp, HiOutlineInformationCircle } from "react-icons/hi2";

const AddArtWorks = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const handleAddArtwork = (event) => {
    event.preventDefault();

    const artwork = {
      imageUrl: event.target.imageUrl.value,
      title: event.target.title.value,
      category: event.target.category.value,
      medium: event.target.medium.value,
      description: event.target.description.value,
      dimensions: event.target.dimensions.value || "",
      price: event.target.price?.value || "",
      visibility: event.target.visibility.value === "true",
      artistName: user?.displayName,
      artistEmail: user?.email,
      createdAt: new Date(),
      artistImage: user?.photoURL,
      likes: 0,
    };

    axiosSecure.post("/add-artworks", artwork).then((res) => {
      if (res.data.result.insertedId) {
        toast.success("Artwork Added Successfully!");
        navigate("/dashboard/my-gallary");
      } else {
        toast.error("Failed to Add Artwork!");
      }
    });

    event.target.reset();
  };

  const inputClass = "w-full bg-base-100 border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 outline-none transition-all duration-300 font-medium placeholder:text-neutral/40 placeholder:font-normal";

  return (
    <div className="max-w-4xl mx-auto py-4">
      <Fade direction="up" triggerOnce>
        <div className="relative group">
          {/* Decorative Frame (Matches Community Highlights style) */}
          <div className="absolute -inset-2 border border-primary/20 rounded-[2.5rem] rotate-1 group-hover:rotate-0 transition-transform duration-500 pointer-events-none"></div>

          <div className="relative z-10 bg-base-100 border border-base-200 rounded-[2rem] shadow-2xl p-8 lg:p-12">
            {/* Header Section */}
            <div className="text-center mb-10 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-2">
                <HiOutlineCloudArrowUp className="text-primary" size={18} />
                <p className="text-primary font-bold tracking-widest uppercase text-[10px]">
                  Curator Studio
                </p>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-none">
                Submit Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Masterpiece
                </span>
              </h2>
              <p className="text-neutral/60 text-sm italic border-b border-dashed border-base-300 pb-4 inline-block mx-auto">
                Share your creative vision with the world's art community.
              </p>
            </div>

            <form onSubmit={handleAddArtwork} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">Artwork Image URL</label>
                  <input type="text" name="imageUrl" placeholder="https://..." className={inputClass} required />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">Title of Artwork</label>
                  <input type="text" name="title" placeholder="e.g. Floating Flora" className={inputClass} required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">Category</label>
                    <select name="category" className={`${inputClass} appearance-none`}>
                      <option value="Watercolor">Watercolor</option>
                      <option value="Acrylic">Acrylic</option>
                      <option value="Oil Painting">Oil Painting</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">Medium</label>
                    <input type="text" name="medium" placeholder="Canvas, Brush" className={inputClass} required />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">Dimensions</label>
                    <input type="text" name="dimensions" placeholder="24x36 in" className={inputClass} />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">Price ($)</label>
                    <input type="text" name="price" placeholder="450.00" className={inputClass} />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">Artist Description</label>
                  <textarea name="description" placeholder="Tell the story behind this piece..." className={`${inputClass} h-[132px] resize-none`} required />
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">Artist Info (Read-Only)</label>
                    <div className="flex gap-2">
                        <input type="text" value={user?.displayName || ""} className={`${inputClass} bg-base-200/50 cursor-not-allowed text-neutral/50`} readOnly />
                        <select name="visibility" className={`${inputClass} w-1/3`}>
                            <option value="true">Public</option>
                            <option value="false">Private</option>
                        </select>
                    </div>
                  </div>
                  <input type="email" value={user?.email || ""} className={`${inputClass} bg-base-200/50 cursor-not-allowed text-neutral/50`} readOnly />
                </div>

                {/* Info Box */}
                <div className="flex items-start gap-3 p-4 bg-secondary/5 rounded-xl border border-secondary/10">
                   <HiOutlineInformationCircle className="text-secondary shrink-0" size={20} />
                   <p className="text-[11px] text-neutral/60 leading-relaxed italic">
                     By clicking 'Add Artwork', your submission will be listed in the Explore Gallery for all users to discover.
                   </p>
                </div>
              </div>

              {/* Submit Button - Full Width */}
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="group/btn relative w-full h-14 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Add Artwork <HiOutlineCloudArrowUp size={22} className="group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default AddArtWorks;