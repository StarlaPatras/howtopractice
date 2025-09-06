import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { IoMdArrowDropright } from "react-icons/io";

export default function Sidebar({ isOpen, onClose }) {
  const [expanded, setExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className={`h-[800px] shadow-2xl rounded-lg transition-all duration-300 overflow-hidden
              ${!expanded ? "w-[380px] p-6 ml-[20px] relative shrink-0" : ""}
              ${
                expanded
                  ? "absolute top-0 left-0 w-[1200px] z-50 bg-white p-6"
                  : ""
              }`}
    >
      {/* Close button */}
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => {
          if (expanded) {
            setExpanded(false);
          } else {
            onClose();
          }
        }}
      >
        <MdCancel className="text-gray-600 text-2xl" />
      </div>

      {/* Main sidebar content */}
      <div className="flex h-full">
        {/* Left side (normal sidebar content) */}
        <div className="flex-1">
          <p className="font-aspire text-gray-600 mb-2">Part Search</p>
          <input
            placeholder="search"
            className="w-full border mb-5 border-gray-300 text-base p-1 rounded-md"
          />
          <p className="font-aspire leading-3 mb-2 text-gray-600 text-sm">
            Question 1:
          </p>
          <p className="font-aspire leading-3 text-gray-600 text-sm">
            Select a Category to see parts
          </p>

          {/* Row */}
          <div className="mt-5">
            <div
              className="w-full items-center justify-between flex rounded-full p-2 border text-gray-600 border-gray-300 cursor-pointer"
              onClick={() => setExpanded(!expanded)}
            >
              <div className="gap-2 items-center flex">
                <CiStar className="text-lg text-gray-400" />
                Brake Pads
              </div>
              <IoMdArrowDropright
                className={`text-xl text-gray-400 transition-transform duration-300 ${
                  expanded ? "rotate-90" : ""
                }`}
              />
            </div>
          </div>
        </div>

        {/* Right side (extra text when expanded) */}
        {expanded && (
          <div className=" pl-4 ">
            <p className="font-aspire text-gray-700 text-sm">
              Here is more detail about brake pads.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              You can add any content here (images, links, etc.).
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
