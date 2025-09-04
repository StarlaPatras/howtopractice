"use client";
import React, { useState } from "react";
import { RiImageAddLine } from "react-icons/ri";
import { SiCashapp } from "react-icons/si";
import { BsSpeedometer2 } from "react-icons/bs";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { MdAutorenew } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import Chat from "./Chat";
import { MdCancel } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { IoMdArrowDropright } from "react-icons/io";
import Sidebar from "./Sidebar";

const Home = () => {
  const [isChat, setIsChat] = useState(false);
  const [sidebarOpen, setSidebarIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <aside className="relative w-[320px]  shadow-[6px_0_12px_-4px_rgba(0,0,0,0.15)] flex flex-col pt-4">
        {/* Logo */}
        <div className="px-6">
          <img
            src="/assets/images/logo_black.png"
            alt="Logo"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Vehicle Info */}
        <div className="flex flex-col items-center mt-6">
          <img
            src="https://dvwz1pyggbvkv.cloudfront.net/51014/51014_cc0640_032_PW4.png"
            alt="Car"
            className="w-[180px] object-cover"
          />
          <p className="mt-2 text-center font-aspire text-sm font-medium">
            2024 Alfa Romeo Stelvio
          </p>
          <p className="text-xs font-aspire text-gray-400">2.0L 4 cyl</p>
          <button className="mt-3 rounded-full bg-gray-800 px-6 py-2 text-sm font-medium text-white hover:bg-gray-100">
            Change Vehicle
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex mx-[40px] flex-col items-center gap-2">
          <SidebarButton label="Saved Videos" />
          <SidebarButton label="Chat History" />
          <SidebarButton label="Parts" />
          <SidebarButton label="DIY Videos" />
        </nav>

        {/* Footer */}
        <div className="absolute bottom-5 w-full text-center text-sm">
          <p>
            Make Money <span className="font-semibold block">With HowTo</span>
          </p>
          <button className="mt-2 rounded-md bg-white px-3 py-1 text-xs text-red-600 hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </aside>

      {/* Main Content */}

      <main className="flex-1 relative bg-gray-50">
        <nav className="p-4 ">
          <ul className="flex items-center gap-2 justify-end">
            <li>Parts</li>
            <li>Garage</li>
            <li className="text-red">Learn</li>
            <li>
              <IoCartOutline className="text-2xl" />
            </li>
            <li>
              <IoIosNotificationsOutline className="text-2xl" />
            </li>
            <li>
              <div className="w-[25px] h-[25px]">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </li>
          </ul>
        </nav>

        <div className="relative flex">
          {/* Chat Sidebar */}
          {sidebarOpen && <Sidebar />}

          {/* Chat / Center Content */}
          <div className="flex-1 min-h-[800px] p-4">
            {isChat ? (
              <>
                <div className="max-w-[900px] mx-auto   h-[700px] overflow-y-auto pb-20">
                  <Chat initialMessage={inputValue} />
                </div>
                <div className="absolute z-[99] bottom-20 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <button
                    className="relative inline-flex cursor-pointer items-center justify-center px-6 py-2 text-sm text-white rounded-full shadow-lg animate-gradient bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] bg-[length:300%_300%]"
                    onClick={() => {
                      setSidebarIsOpen(true);
                    }}
                  >
                    See what Orion can do
                  </button>
                </div>
              </>
            ) : (
              <div className=" flex flex-col items-center justify-center text-gray-900 h-full">
                {/* Avatar */}
                <div className="w-[110px] h-[110px]">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZExXZfuy_mIpsM-T69cjwfWlNiY8MJK_shQ&s"
                    className="w-full h-full object-cover rounded-full shadow-[0_0_25px_rgba(68,188,255,0.7)]"
                  />
                </div>

                {/* Headings */}
                <div className="mt-4 text-center font-aspire">
                  <p className="text-2xl font-bold">Hi Starla</p>
                  <p className="text-lg">
                    I’m Orion, your personal AI mechanic
                  </p>
                </div>

                {/* Description */}
                <div className="mt-4 text-center font-aspire text-[11px] leading-relaxed">
                  <p>I can help you with anything on your Alfa Romeo</p>
                  <p>Select the button to see what I can do.</p>
                </div>

                {/* Button */}
                <div className="relative inline-flex mt-6">
                  <div className="absolute -inset-px rounded-full blur-lg opacity-90 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] animate-gradient"></div>

                  <button
                    className="relative inline-flex cursor-pointer items-center justify-center px-6 py-2 text-sm text-white rounded-full shadow-lg animate-gradient bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] bg-[length:300%_300%] "
                    onClick={() => {
                      setSidebarIsOpen(true);
                    }}
                  >
                    See what Orion can do
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Floating Bottom Input Box */}

        <div className="absolute z-[99] bottom-6 left-1/2 border border-gray-200 rounded-2xl p-2 w-[90%] max-w-3xl -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 shadow-lg px-4 py-3">
            {/* Input */}
            <input
              type="text"
              placeholder="Ask me anything"
              className="flex-1 border-none outline-none text-gray-700"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {/* Button */}
            <button
              onClick={() => {
                if (!inputValue.trim()) return; // prevent empty

                setSidebarIsOpen(true);
                setIsChat(true);
              }}
              disabled={!inputValue.trim()}
              className={`rounded-xl px-4 py-1 text-sm 
    ${
      inputValue.trim()
        ? "cursor-pointer bg-gradient-to-r from-blue-400 to-indigo-400 text-white"
        : "cursor-not-allowed bg-gradient-to-r from-blue-400 text-white to-indigo-400"
    }`}
            >
              Ask Orion
            </button>
          </div>
          {/* Icons Row */}
          <div className="mt-2 flex items-center justify-between px-2 text-gray-500 text-xs">
            <div className="flex gap-6">
              <span className="flex items-center font-aspire  flex-col gap-1">
                <RiImageAddLine className="text-lg" />{" "}
                <span className="text-[8px] ">Image</span>
              </span>
              <span className="flex items-center font-aspire  flex-col gap-1">
                <SiCashapp className="text-lg" />{" "}
                <span className="text-[8px] ">Cost</span>
              </span>

              <span className="flex items-center font-aspire  flex-col gap-1">
                <BsSpeedometer2 className="text-lg" />{" "}
                <span className="text-[8px] ">Beginner</span>
              </span>
              <span className="flex items-center font-aspire  flex-col gap-1">
                <MdOutlineQrCodeScanner className="text-lg" />{" "}
                <span className="text-[8px] ">Code</span>
              </span>
            </div>
            <span className="flex items-center font-aspire  flex-col gap-1">
              <MdAutorenew className="text-lg" />{" "}
              <span className="text-[8px] ">New Chat</span>
            </span>
          </div>
        </div>

        {/* Footer (Terms & Conditions) */}
        <div className="absolute bottom-0 left-0 right-0 text-center text-xs text-gray-500 py-[6px]">
          By using this site you agree to our{" "}
          <span className="text-red-500 cursor-pointer">
            Terms and Conditions
          </span>
        </div>
      </main>
    </div>
  );
};

const SidebarButton = ({ label }) => (
  <button className="w-full rounded-full bg-white px-6 py-2 text-sm text-gray-400 border border-gray-400 shadow hover:bg-gray-100">
    {label}
  </button>
);

export default Home;
