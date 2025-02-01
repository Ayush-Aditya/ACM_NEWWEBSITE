import EventCard from '../components/EventCard';

export default function Event() {
    return (
        <div id="events" className="bg-black w-full h-full p-4">
            {/* Reduced container height and padding */}
            <div className="h-full bg-[url('/bg-green.png')] bg-cover bg-center py-12 drop-shadow-2xl ">
                <div className="flex items-center pr-36">
                    <div className="h-[0.08rem] flex-grow bg-gradient-to-r from-transparent to-white/80" />
                    <div className="text-xl text-center flex gap-2">
                        <div className="text-[#31D7B9]">03</div>
                        <div className="text-[#31D7B9]">|</div>
                        <div className="text-[#C6C6C6]">OUR EVENTS</div>
                    </div>
                </div>
                <div className="flex mt-8 justify-end w-full items-center pr-36">
                    <h1 className="text-[#00FFF2] text-4xl font-bold">EVENTS</h1>
                    <div className="bg-[url('/box-icon.png')] w-24 h-24 bg-cover"></div>
                </div>
                {/* Reduced top margin and ensured no extra gap between grid rows */}
                <div className="grid grid-cols-12 gap-y-0 mt-4">
                    <h4 className="text-white font-light col-span-3 col-start-8 text-right md:text-end leading-tight">
                        Instead of focusing just on the problem, we take the holistic approach so we can build a solution that works end to end.
                    </h4>
                    <EventCard 
                        title="LOGIC LOUNGE"
                        description="Every project starts with understanding the challenge and the landscape..."
                        imageSrc="/logic-lounge.png"
                        numberSrc="/ellipse.png"
                        number="1"
                        colSpan={5}
                        colStart={2}
                        rowStart={1}
                        rowSpan={1}
                    />
                    <EventCard 
                        title="HACKABIT"
                        description="...allowing us to design a solution that meets your needs..."
                        imageSrc="/hack-a-bit.png"
                        numberSrc="/ellipse.png"
                        number="2"
                        rowStart={2}
                        rowSpan={1}
                        colSpan={5}
                        colStart={6}
                    />
                    <EventCard 
                        title="CQM"
                        description="...keeping development quality high and costs low..."
                        imageSrc="/cqm.png"
                        numberSrc="/ellipse.png"
                        number="3"
                        colSpan={5}
                        colStart={2}
                        rowStart={3}
                        rowSpan={1}
                    />
                    <EventCard 
                        title="CODEZILLA"
                        description="...resulting in a tailored solution that provides you value."
                        imageSrc="/codezilla.png"
                        numberSrc="/ellipse.png"
                        number="4"
                        colSpan={5}
                        colStart={6}
                        rowStart={4}
                        rowSpan={1}
                    />
                </div>
            </div>
        </div>
    );
}
