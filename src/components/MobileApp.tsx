"use client";
import { useState } from "react";
import { Home, Compass, CalendarCheck, Tag, User } from "lucide-react";
import HomeView from "./MobileViews/HomeView";
import CartView from "./MobileViews/CartView";
import MapView from "./MobileViews/MapView";
import OffersView from "./MobileViews/OffersView";
import ProfileView from "./MobileViews/ProfileView";

type Tab = "home" | "discover" | "consult" | "offers" | "profile";

export default function MobileApp() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <div className="flex flex-col h-[100dvh] w-full bg-gray-50 text-black overflow-hidden font-sans">
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-20">
        {activeTab === "home" && <HomeView />}
        {activeTab === "discover" && <MapView />}
        {activeTab === "consult" && <CartView />}
        {activeTab === "offers" && <OffersView />}
        {activeTab === "profile" && <ProfileView />}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex justify-around items-center px-2 z-50 rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <NavButton
          icon={<Home />}
          label="Ana Sayfa"
          isActive={activeTab === "home"}
          onClick={() => setActiveTab("home")}
        />
        <NavButton
          icon={<Compass />}
          label="Keşfet"
          isActive={activeTab === "discover"}
          onClick={() => setActiveTab("discover")}
        />
        <NavButton
          icon={<CalendarCheck />}
          label="Randevu"
          isActive={activeTab === "consult"}
          onClick={() => setActiveTab("consult")}
        />
        <NavButton
          icon={<Tag />}
          label="Fırsatlar"
          isActive={activeTab === "offers"}
          onClick={() => setActiveTab("offers")}
        />
        <NavButton
          icon={<User />}
          label="Profil"
          isActive={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
        />
      </div>
    </div>
  );
}

function NavButton({
  icon,
  label,
  isActive,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300 ${
        isActive ? "text-[#C9A96E]" : "text-gray-400 hover:text-gray-600"
      }`}
    >
      <div
        className={`transition-all duration-300 ${
          isActive ? "transform scale-110" : ""
        }`}
      >
        {/* We adjust icon size directly in CSS if needed, but default Lucide size is good */}
        <div className="[&>svg]:w-5 [&>svg]:h-5">{icon}</div>
      </div>
      <span
        className={`text-[10px] font-medium transition-all duration-300 ${
          isActive ? "opacity-100" : "opacity-70"
        }`}
      >
        {label}
      </span>
    </button>
  );
}
