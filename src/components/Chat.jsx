"use client";
import React, { useEffect, useState } from "react";

const Chat = ({ initialMessage }) => {
  const [message, setMessage] = useState("");

  const parts = [
    {
      name: "WindsShiled Wiper",
      price: "$26.64",
      para: "15 Trico Pro",
    },
    {
      name: "WindsShiled Wiper",
      price: "$26.64",
      para: "15 Trico Pro",
    },
    {
      name: "WindsShiled Wiper",
      price: "$26.64",
      para: "15 Trico Pro",
    },
    {
      name: "WindsShiled Wiper",
      price: "$26.64",
      para: "15 Trico Pro",
    },
  ];
  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  return (
    <div className="">
      <div className="flex justify-end">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-[300px] outline-none border-none  bg-gray-200 text-gray-400  p-2 rounded-md"
        />
      </div>
      <h4 className="text-2xl font-semibold">About This Demo ⚡</h4>
      <p className="text-gray-600 mt-3 mb-5">
        This is a short example of common HTML tags used in real projects. It’s
        great for testing styles, layouts, and accessibility🎯
      </p>
      <div className=" p-2 mb-5 border-l-5  border-gray-500">
        <blockquote className="text-gray-600">
          Good structure is half the design. Anonymous Designer
        </blockquote>
      </div>
      <div className="mb-5">
        <h5 className="text-xl font-medium mb-3">Features 🔍</h5>
        <li className="text-gray-600">Clear headings </li>
        <li className="text-gray-600">Inline links and emojis 😊</li>
        <li className="text-gray-600">Quotes and lists</li>
      </div>
      <div className="mb-5">
        <h5 className="text-xl font-medium mb-3">Steps to Test ✅</h5>

        <ol>
          <li className="text-gray-600">1. Clear headings</li>
          <li className="text-gray-600">2. Inline links and emojis 😊</li>
          <li className="text-gray-600">3. Quotes and lists</li>
        </ol>
      </div>
      <p className="text-gray-600 mb-3">
        Want to learn HTML in under 10 minutes? Watch.
      </p>
      <div className=" rounded-md border border-gray-300 w-[750px] p-2">
        <h6 className="font-aspire text-gray-500">Parts</h6>
        <div className="flex gap-2">
          {parts.map((part, i) => (
            <div
              key={i}
              className="flex-1 border border-gray-300 rounded-md p-4 flex flex-col items-center justify-center h-[180px]"
            >
              <p className="font-aspire">Trico</p>

              <div className="w-[80px] h-[50px] ">
                <img
                  src="https://d2o110bfz0s3sp.cloudfront.net/TR_12155_Fro.jpg"
                  className="w-full h-full object-cover "
                />
              </div>
              <p className="text-[10px] text-gray-500">{part.name}</p>
              <p className="text-xs">{part.para}</p>
              <p className="text-blue-600 text-sm">{part.price}</p>
              <p className="text-sm text-gray-500">Front</p>
            </div>
          ))}

          {/* See More Box */}
          <div
            className="flex-1 relative border border-gray-300 rounded-md h-[180px] bg-cover bg-center flex items-center justify-center text-white font-semibold"
            style={{
              backgroundImage:
                "url('/assets/images/troubleshoot/parts-see-more.png')",
            }}
          >
            <p className="z-10">See More</p>
            <div className="absolute inset-0 bg-black/40 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
