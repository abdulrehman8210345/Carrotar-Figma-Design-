// import React from 'react'

const Body = () => {
  return (
    <div className="absolute top-52 left-0 w-full h-full ">
      <div className="absolute top-[-10%] left-0 w-[40%] h-[100%]">
        <div className="flex flex-col p-24 text-6xl gap-6 font-extrabold text-white">
          <h1>Join Our</h1>
          <h1>Ecosystem</h1>
          <h1>and rule the</h1>
          <h1>market</h1>
        </div>
        <div className="px-36">
            <button className="bg-yellow-400 rounded-3xl px-8 py-2 text-xl font-bold">Get it now</button>
        </div>
      </div>
      <div className="absolute top-[-20%] right-0 w-[60%] h-[100%]">
        <img
          src="dashboard.png"
          alt="Hero Image"
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
    </div>
  );
};

export default Body;
