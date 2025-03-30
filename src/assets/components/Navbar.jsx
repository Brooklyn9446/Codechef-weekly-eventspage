import React from "react";
import { Link } from "react-router-dom";

function Navbar(){

    return(
        <>
        <div className="flex justify-between mt-10">
            <span className="font-Aboshi text-3xl sm:text-4xl md:text-5xl ml-3 sm:ml-7 md:ml-[90px]">Event <span className="text-[#7848F4]">Hive</span></span>
            <div className="md:mr-25 sm:mr-7 ">
                <Link to="/" ><button className="bg-white  text-[16px] border-none font-Aboshi w-[100px] sm:w-[140px] md:w-[161px] h-[53px] cursor-pointer">All Events</button></Link>
                <Link to="/Create" ><button className="bg-[#7848F4] border-none text-[16px] font-Aboshi w-[100px] sm:w-[140px] md:w-[161px] h-[53px] cursor-pointer rounded-md text-white">Add Events</button></Link>
            </div>
        </div>
        </>
    )
}

export default Navbar;