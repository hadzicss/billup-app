import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Dobrodošao! 🎉
        </h1>
        <p className="text-gray-700 text-lg">
          Uspješno si se prijavio na BillUp aplikaciju!
        </p>
      </div>
    </div>
  );
};

export default Home;
