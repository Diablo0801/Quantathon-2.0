import React from 'react';

const EventDetails = () => {
  return (
    <div className="h-auto flex flex-col justify-around items-center my-10 bg-gray-600 mt-36">
      <div className="min-h-screen max-h-full flex flex-col justify-center items-center my-10">
        <h1 className="flex text-[#F0286A] font-bold text-5xl lg:text-6xl justify-center text-shadow my-10">MENTORS</h1>
        <div className="flex flex-wrap justify-center gap-10 my-10 w-[80vw]">
          <div className="w-[250px] h-[300px] hover:bg-mentor-card rounded-xl p-5 hover:shadow-[0_0_10px_1px_rgba(0,0,0)] flex flex-col justify-center items-center duration-150">
            <img className="w-[150px] h-[175px] object-cover rounded-lg duration-200" src="#" alt="image here" />
            <h1 className="mt-5 text-black text-center text-2xl font-medium">Student name</h1>
          </div>
          <div className="w-[250px] h-[300px] hover:bg-mentor-card rounded-xl p-5 hover:shadow-[0_0_10px_1px_rgba(0,0,0)] flex flex-col justify-center items-center duration-150">
            <img className="w-[150px] h-[175px] object-cover rounded-lg duration-200" src="#" alt="image here" />
            <h1 className="mt-5 text-black text-center text-2xl font-medium">Student name</h1>
          </div>
          <div className="w-[250px] h-[300px] hover:bg-mentor-card rounded-xl p-5 hover:shadow-[0_0_10px_1px_rgba(0,0,0)] flex flex-col justify-center items-center duration-150">
            <img className="w-[150px] h-[175px] object-cover rounded-lg duration-200" src="#" alt="image here" />
            <h1 className="mt-5 text-black text-center text-2xl font-medium">Student name</h1>
          </div>
          <div className="w-[250px] h-[300px] hover:bg-mentor-card rounded-xl p-5 hover:shadow-[0_0_10px_1px_rgba(0,0,0)] flex flex-col justify-center items-center duration-150">
            <img className="w-[150px] h-[175px] object-cover rounded-lg duration-200" src="#" alt="image here" />
            <h1 className="mt-5 text-black text-center text-2xl font-medium">Student name</h1>
          </div>
          <div className="w-[250px] h-[300px] hover:bg-mentor-card rounded-xl p-5 hover:shadow-[0_0_10px_1px_rgba(0,0,0)] flex flex-col justify-center items-center duration-150">
            <img className="w-[150px] h-[175px] object-cover rounded-lg duration-200" src="#" alt="image here" />
            <h1 className="mt-5 text-black text-center text-2xl font-medium">Student name</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
