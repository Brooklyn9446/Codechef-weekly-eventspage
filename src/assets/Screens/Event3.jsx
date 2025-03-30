import React from "react";
import Navbar from "../components/Navbar";
import Event from "../images/Event3.jpeg"
import { Link } from "react-router-dom";
import Twitter from "../images/Twitter.jpg"
import Facebook from "../images/Facebook.jpg"
import Linkedin from "../images/LinkedIn.jpg"
import WhatsApp from "../images/WhatsApp.jpg"

function Event3() {
    return (
        <>
            <Navbar></Navbar>
            <div className="px-[30px] sm:px-[60px] mt-[20px] font-Aboshi">

                <div className=" h-[700px] sm:h-[595px] w-full bg-cover bg-no-repeat object-bottom rounded-lg" style={{ backgroundImage: `url(${Event})` }}>
                    <div className=" bg-[#13131580] h-full rounded-lg">
                        <div className="w-1/3 py-20 ml-4 sm:ml-10">
                            <Link to='/' ><button className="bg-[#7848F4] text-white border-none p-3 px-4 mb-5 cursor-pointer">Back</button></Link>
                            <span className="block text-white text-3xl sm:text-5xl w-[250px] sm:w-[450px] leading-[70px]">
                                Dream world wide in jakatra
                            </span>
                            <span className="block text-white text-lg sm:text-2xl mt-5">
                                IIIT Sonepat
                            </span>
                            <span className="block text-white mt-3 text-wrap w-[550px] max-sm:w-[300px]">
                                DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.
                            </span>
                        </div>
                    </div>
                </div>

                <div>
                    <span className="font-bold block mt-16 text-2xl">Description</span>
                    <span className="text-[#7E7E7E] mt-14 block">DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.</span>
                    <span className="text-[#7E7E7E] mt-7 block">DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.</span>
                </div>

                <div className="mt-20 ml-0 sm:ml-12 flex flex-col md:flex-row justify-between mb-40">
                    <div>
                        <span className="font-medium ">Date & Time</span>
                        <div className="mt-4">
                            <span className="text-[#7E7E7E] mr-12">Date: </span>
                            <span className="text-[#7848F4]">23/03/25 - 24/03/25</span>

                        </div>
                        <div className="mt-7">
                            <span className="text-[#7E7E7E] mr-12">Time: </span>
                            <span className="text-[#7848F4]">7PM - 10PM</span>
                        </div>
                    </div>

                    <div className="mt-7 md:mt-0">
                        <span className="text-2xl  mr-17">Share with friends</span>
                        <div className="flex gap-3 mt-2">
                        <img src={Facebook}/>
                        <img src={WhatsApp}/>
                        <img src={Linkedin}/>
                        <img src={Twitter}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event3;