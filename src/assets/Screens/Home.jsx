import React from "react";
import Navbar from "../components/Navbar";
import Landing from "../images/Landing.jpeg"
import Event1 from "../images/Event1.jpeg"
import Event2 from "../images/Event2.jpeg"
import Event3 from "../images/Event3.jpeg"
import { Link } from "react-router-dom";

function Home() {

    return (
        <div className="bg-[#F8F8FA]">
            <Navbar></Navbar>
            <div className="bg-[#F8F8FA]">
                <div className="font-Aboshi flex mt-10  flex-col lg:flex-row">
                    <div className="mx-3 sm:mx-13 md:ml-25 w-70 md:w-145 leading-[4] md:leading-[6]">
                        <span className="text-4xl sm:text-7xl ">Event<span className="text-[#7848F4]">Hive</span>-ing the Best.Day. Ever.</span>
                        <div className="flex gap-3 mt-2">
                            <div className="bg-[#7848F4] text-white w-63 flex flex-col px-3 rounded-xl py-8  ">
                                <span className="text-2xl mb-3">2k+</span>
                                <span className="text-sm">Total Events Hosted</span>
                            </div>
                            <div className="bg-[#7848F4] text-white w-63 flex flex-col px-3 rounded-xl py-8  ">
                                <span className="text-2xl mb-3">100k+</span>
                                <span className="text-sm">Total Events Live</span>
                            </div>
                        </div>
                    </div>

                    <img src={Landing} className=" mx-13 md:mx-25 lg:ml-4 w-3/4 mt-4 lg:mt-0 lg:w-full h-[500px] rounded-xl" />
                </div>

                <div className="px-[60px] md:px-[120px] flex mt-10 font-Aboshi justify-between">
                    <span className=" text-3xl"><span className="text-[#7848F4]">Events </span>around you</span>
                    <select className="bg-[#687C940D] px-7 py-3">
                        <option>Weekdays</option>
                        <option>Weekend</option>
                    </select>
                </div>

                {/* Grid */}
                <div className="mx-[50px] md:mx-[110px] mt-6 font-Aboshi flex flex-wrap gap-6 mb-15">

                    <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]    flex w-[386px] h-[400px] rounded-xl">
                        <div className="mx-[19px] flex flex-col relative">
                            <div className="bg-white text-[#7848F4] z-10 absolute top-6 left-1 w-[40px] rounded-sm text-center">Free</div>
                            <img src={Event1} className=" mt-4 w-[347px] h-[240px] rounded-md mb-2" />
                            <Link to="/Event3" >
                                <span className="decoration-2 hover:underline">BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</span>
                            </Link>
                            <span className="text-[#7848F4] text-xs mt-3">Saturday, March 18, 9.30PM</span>
                            <span className="text-[#7E7E7E] mt-8 text-sm">ONLINE EVENT - Attend anywhere</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] flex w-[386px] h-[400px] rounded-xl">
                        <div className="mx-[19px] flex flex-col relative">
                            <div className="bg-white text-[#7848F4] z-10 absolute top-6 left-1 w-[40px] rounded-sm text-center">Free</div>
                            <img src={Event2} className=" mt-4 w-[347px] h-[240px] rounded-md mb-2" />
                            <Link to="/Event3" >
                                <span className="decoration-2 hover:underline">BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</span>
                            </Link>
                            <span className="text-[#7848F4] text-xs mt-3">Saturday, March 18, 9.30PM</span>
                            <span className="text-[#7E7E7E] mt-8 text-sm">ONLINE EVENT - Attend anywhere</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] flex w-[386px] h-[400px] rounded-xl">
                        <div className="mx-[19px] flex flex-col relative">
                            <div className="bg-white text-[#7848F4] z-10 absolute top-6 left-1 w-[40px] rounded-sm text-center">Free</div>
                            <img src={Event3} className=" mt-4 w-[347px] h-[240px] rounded-md mb-2" />
                            <Link to="/Event3" >
                                <span className="decoration-2 hover:underline">BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</span>
                            </Link>
                            <span className="text-[#7848F4] text-xs mt-3">Saturday, March 18, 9.30PM</span>
                            <span className="text-[#7E7E7E] mt-8 text-sm">ONLINE EVENT - Attend anywhere</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] flex w-[386px] h-[400px] rounded-xl">
                        <div className="mx-[19px] flex flex-col relative">
                            <div className="bg-white text-[#7848F4] z-10 absolute top-6 left-1 w-[40px] rounded-sm text-center">Free</div>
                            <img src={Event3} className=" mt-4 w-[347px] h-[240px] rounded-md mb-2" />
                            <Link to="/Event3" >
                                <span className="decoration-2 hover:underline">BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</span>
                            </Link>
                            <span className="text-[#7848F4] text-xs mt-3">Saturday, March 18, 9.30PM</span>
                            <span className="text-[#7E7E7E] mt-8 text-sm">ONLINE EVENT - Attend anywhere</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] flex w-[386px] h-[400px] rounded-xl">
                        <div className="mx-[19px] flex flex-col relative">
                            <div className="bg-white text-[#7848F4] z-10 absolute top-6 left-1 w-[40px] rounded-sm text-center">Free</div>
                            <img src={Event3} className=" mt-4 w-[347px] h-[240px] rounded-md mb-2" />
                            <Link to="/Event3" >
                                <span className="decoration-2 hover:underline">BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</span>
                            </Link>
                            <span className="text-[#7848F4] text-xs mt-3">Saturday, March 18, 9.30PM</span>
                            <span className="text-[#7E7E7E] mt-8 text-sm">ONLINE EVENT - Attend anywhere</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] flex w-[386px] h-[400px] rounded-xl">
                        <div className="mx-[19px] flex flex-col relative">
                            <div className="bg-white text-[#7848F4] z-10 absolute top-6 left-1 w-[40px] rounded-sm text-center">Free</div>
                            <img src={Event1} className=" mt-4 w-[347px] h-[240px] rounded-md mb-2" />
                            <Link to="/Event3" >
                                <span className="decoration-2 hover:underline">BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</span>
                            </Link>
                            <span className="text-[#7848F4] text-xs mt-3">Saturday, March 18, 9.30PM</span>
                            <span className="text-[#7E7E7E] mt-8 text-sm">ONLINE EVENT - Attend anywhere</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;