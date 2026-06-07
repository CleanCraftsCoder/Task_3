import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log(`Count changed to: ${count}`);
  }, [count]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center w-[700px]">

        <h1 className="text-5xl font-bold text-blue-600 mb-6">
          Counter App
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          State Management using React Hooks
        </p>

        <div className="text-7xl font-extrabold text-purple-600 mb-10">
          {count}
        </div>

        <div className="flex justify-center gap-8 flex-wrap">

          <button
            onClick={() => setCount(count + 1)}
            className="w-44 bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition duration-300 transform hover:scale-110"
          >
            ➕ Increment
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="w-44 bg-red-500 hover:bg-red-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition duration-300 transform hover:scale-110"
          >
            ➖ Decrement
          </button>

          <button
            onClick={() => setCount(0)}
            className="w-44 bg-gray-500 hover:bg-gray-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition duration-300 transform hover:scale-110"
          >
            🔄 Reset
          </button>

        </div>

      </div>
    </div>
  );
}

export default Counter;