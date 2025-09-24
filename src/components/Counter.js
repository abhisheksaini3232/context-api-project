import React from "react";

const Counter = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-6 bg-gray-50">
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow active:scale-95 transition">
        Increment
      </button>
      <h1 className="text-4xl font-bold text-gray-700 mx-4">0</h1>
      <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow active:scale-95 transition">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
