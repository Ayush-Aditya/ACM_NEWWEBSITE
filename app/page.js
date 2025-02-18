
'use client';
import Image from "next/image";
import Event from "./event/event.jsx";
import Landing from "@/components/Landing.jsx";
import Landing1 from "@/components/Landing1.jsx";

export default function Home() {
    return (
        <div className="bg-black">
            <div className="relative  ">
                <Landing />
            </div>
            <div className="relative pt-16 pb-16">
                <Event />
            </div>
        </div>
    );
}
