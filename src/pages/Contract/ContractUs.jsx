import React from 'react';
import { Fade } from 'react-awesome-reveal';
// HiOutlineMail এর বদলে HiOutlineEnvelope ব্যবহার করা হয়েছে
import { 
    HiOutlineEnvelope, 
    HiOutlinePhone, 
    HiOutlineMapPin, 
    HiOutlineChatBubbleLeftRight 
} from 'react-icons/hi2'; 
import toast from 'react-hot-toast';

const ContractUs = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Message sent! Artify team will reach out soon.");
        e.target.reset();
    };

    const infoCardClass = "flex flex-col items-center p-8 bg-base-100 border border-base-200 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden";
    const iconContainerClass = "w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-500";

    return (
        <section className="relative py-16 lg:py-24 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Fade direction="down" triggerOnce>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-4">
                            <HiOutlineChatBubbleLeftRight className="text-primary" size={18} />
                            <p className="text-primary font-black tracking-[0.2em] uppercase text-[10px]">
                                Get In Touch
                            </p>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-tight">
                            Connect with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                The Art Community
                            </span>
                        </h2>
                        <p className="text-neutral/60 text-lg italic mt-4">
                            Have questions about a masterpiece? We're here to help you navigate Artify.
                        </p>
                    </Fade>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    <Fade direction="up" cascade damping={0.1} triggerOnce>
                        {/* Email Card */}
                        <div className={infoCardClass}>
                            <div className="absolute -inset-1 border border-primary/10 rounded-[2rem] rotate-2 group-hover:rotate-0 transition-transform duration-500 pointer-events-none"></div>
                            <div className={iconContainerClass}>
                                <HiOutlineEnvelope size={28} />
                            </div>
                            <h4 className="text-xl font-black uppercase tracking-tight mb-2">Email Us</h4>
                            <p className="text-neutral/60 text-sm italic">support@artify.com</p>
                        </div>

                        {/* Phone Card */}
                        <div className={infoCardClass}>
                            <div className="absolute -inset-1 border border-secondary/10 rounded-[2rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500 pointer-events-none"></div>
                            <div className={iconContainerClass}>
                                <HiOutlinePhone size={28} />
                            </div>
                            <h4 className="text-xl font-black uppercase tracking-tight mb-2">Call Us</h4>
                            <p className="text-neutral/60 text-sm italic">+880 1234 567 890</p>
                        </div>

                        {/* Address Card */}
                        <div className={infoCardClass}>
                            <div className="absolute -inset-1 border border-primary/10 rounded-[2rem] rotate-1 group-hover:rotate-0 transition-transform duration-500 pointer-events-none"></div>
                            <div className={iconContainerClass}>
                                <HiOutlineMapPin size={28} />
                            </div>
                            <h4 className="text-xl font-black uppercase tracking-tight mb-2">Visit Studio</h4>
                            <p className="text-neutral/60 text-sm text-center italic">Banani, Dhaka, Bangladesh</p>
                        </div>
                    </Fade>
                </div>

                {/* Form Section */}
                <div className="max-w-5xl mx-auto">
                    <Fade direction="up" triggerOnce>
                        <div className="relative group">
                            <div className="absolute -inset-4 border border-primary/10 rounded-[3rem] rotate-1 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
                            
                            <div className="relative bg-base-100 border border-base-200 rounded-[2.5rem] shadow-2xl p-8 lg:p-16 flex flex-col lg:flex-row gap-12">
                                <div className="lg:w-1/3 space-y-6">
                                    <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">
                                        Send a <br /><span className="text-primary">Message</span>
                                    </h3>
                                    <p className="text-neutral/50 text-sm leading-relaxed italic">
                                        Fill out the form and our team will get back to you within 24 hours. 
                                    </p>
                                </div>

                                <div className="lg:w-2/3">
                                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">Full Name</label>
                                            <input type="text" placeholder="John Doe" className="input input-bordered w-full rounded-xl bg-base-200/50 border-none focus:ring-2 focus:ring-primary/20" required />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">Email</label>
                                            <input type="email" placeholder="john@example.com" className="input input-bordered w-full rounded-xl bg-base-200/50 border-none focus:ring-2 focus:ring-primary/20" required />
                                        </div>
                                        <div className="md:col-span-2 space-y-1">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">Message</label>
                                            <textarea className="textarea textarea-bordered w-full rounded-xl bg-base-200/50 border-none focus:ring-2 focus:ring-primary/20 h-32 resize-none" placeholder="How can we help?" required></textarea>
                                        </div>
                                        <div className="md:col-span-2">
                                            <button type="submit" className="btn btn-primary w-full rounded-xl text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20 transition-all">
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default ContractUs;