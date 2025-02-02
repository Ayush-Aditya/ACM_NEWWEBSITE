import Image from "next/image";
import Event from "./event/event.jsx";
import Landing from "@/components/Landing.jsx";

export default function Home() {
    return (
        <>
            <Landing />
            <Event />
        </>
    );
}

