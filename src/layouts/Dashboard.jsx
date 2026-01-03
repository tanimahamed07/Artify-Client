import React from "react";
import { NavLink, Outlet } from "react-router";
import {
  HiHome,
  HiPlusCircle,
  HiPhoto,
  HiHeart,
  HiUser,
} from "react-icons/hi2";

const Dashboard = () => {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all
     ${
       isActive
         ? "bg-primary text-white shadow-lg"
         : "text-neutral/70 hover:bg-base-200"
     }`;

  return (
    <div className="min-h-screen bg-base-100 flex">
      {/* Sidebar */}
      <aside className="w-72 hidden lg:flex flex-col border-r border-base-200 bg-base-100 relative">
        {/* Glow */}
        <div className="absolute top-0 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

        {/* Sidebar Header */}
        <div className="px-6 py-6 border-b border-base-200">
          <h2 className="text-2xl font-black uppercase tracking-tighter">
            Dashboard
          </h2>
          <p className="text-xs text-neutral/60 tracking-widest uppercase">
            Artist Panel
          </p>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2 relative z-10">
          <NavLink to="/dashboard" end className={linkStyle}>
            <HiHome className="text-xl" />
            Overview
          </NavLink>

          <NavLink to="/dashboard/add-artwork" className={linkStyle}>
            <HiPlusCircle className="text-xl" />
            Add Artwork
          </NavLink>

          <NavLink to="/dashboard/my-gallery" className={linkStyle}>
            <HiPhoto className="text-xl" />
            My Gallery
          </NavLink>

          <NavLink to="/dashboard/favorites" className={linkStyle}>
            <HiHeart className="text-xl" />
            Favorites
          </NavLink>

          <NavLink to="/dashboard/profile" className={linkStyle}>
            <HiUser className="text-xl" />
            Profile
          </NavLink>
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-base-200 bg-base-100 sticky top-0 z-20">
          <h1 className="text-xl font-black tracking-tight">
            Dashboard Overview
          </h1>

          <div className="text-sm text-neutral/60">
            Welcome back 👋
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 lg:p-10">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Total Artworks", value: "12" },
              { title: "Total Likes", value: "248" },
              { title: "Favorites", value: "7" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative bg-base-100 border border-base-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="absolute -inset-1 border border-primary/20 rounded-2xl -rotate-1"></div>
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-widest text-neutral/50 mb-2">
                    {item.title}
                  </p>
                  <h3 className="text-3xl font-black tracking-tighter">
                    {item.value}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Nested Routes */}
          <div className="bg-base-100 border border-base-200 rounded-2xl p-6 shadow-sm">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
