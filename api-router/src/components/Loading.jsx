import React from "react";

function Loading() {
  return (
    <div className="w-3/4 mx-auto mt-20">
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div
          style={{ borderTopColor: "transparent" }}
          className="border-solid animate-spin rounded-full border-red-400 border-8 h-32 w-32"
        ></div>
      </div>
    </div>
  );
}

export default Loading;
