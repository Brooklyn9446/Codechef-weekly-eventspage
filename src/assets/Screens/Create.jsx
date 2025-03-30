import React from "react";
import Navbar from "../components/Navbar";

function Create() {

    return (
        <div className="bg-[#F8F8FA] font-Aboshi">
            <Navbar ></Navbar>

            <div className="font-Aboshi flex justify-center bg-[#F8F8FA]" >
                <div className="flex flex-col w-3/4">


                    <div className="flex justify-center text-3xl w-full "><span>Create Event</span></div>

                    <span className="block mt-3">Event Title</span>
                    <input placeholder="Enter your mail" className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] px-2 py-3 rounded-lg"></input>
                    <span className="block mt-9">Event Venue</span>
                    <input placeholder="Enter Venue" className="mt-4 bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] px-2 py-3 rounded-lg"></input>
                    <div className="mt-9 flex flex-col md:flex-row md:justify-between">
                        <div className="flex   flex-col  w-xl mr-15">
                            <span>Start Time</span>
                            <input placeholder="Enter your mail" className=" mt-4 w-1/2 sm:w-3/4 md:w-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] px-2 py-3 rounded-lg"></input>
                        </div>
                        <div className="flex flex-col w-xl">
                            <span>End Time</span>
                            <input placeholder="End Time" className="mt-4 w-1/2 sm:w-3/4 md:w-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] px-2 py-3 rounded-lg"></input>
                        </div>
                    </div>
                    <div className="mt-9 flex flex-col md:flex-row md:justify-between">
                        <div className="flex flex-col w-xl mr-15" >
                            <span>Start Date</span>
                            <input placeholder="Start Date" className="mt-4 w-1/2 sm:w-3/4 md:w-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] px-2 py-3 rounded-lg"></input>
                        </div>
                        <div className="flex flex-col w-xl" >
                            <span>End Date</span>
                            <input placeholder="End Date" className="mt-4 w-1/2 sm:w-3/4 md:w-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] px-2 py-3 rounded-lg"></input>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center text-5xl font-Aboshi mt-7 ">Event Description</div>
            <div className="flex flex-col items-center mt-7">
                <div className="flex justify-start w-[813px] "><span>Event Image</span></div>
                <div className=" w-[313px] sm:w-[413px] md:w-[813px] h-[254px] bg-[#ECECEC] mt-4 rounded-xl">
                </div>
            </div>
            <div className="flex flex-col items-center mt-7  ">
                <div className="flex justify-start w-[813px]"><span>Event Description</span></div>
                <textarea rows={10} cols={100} className=" flex mt-4 mb-20 text-[#687C94] border-1 rounded-xl px-1 resize-x" >Type Here...</textarea>

            </div>

            <div className="flex justify-center"><button className="text-white bg-[#7848F4] w-[813px] py-4 rounded-lg mb-20">Create Event</button></div>
        </div>
    )
}

export default Create;