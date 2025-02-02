import EventCard from '../components/EventCard';

export default function Event() {
    return (
        <div id="events" className="bg-black w-full h-full p-4">
            {/* Reduced container height and padding */}
            <div className="h-full bg-[url('/bg-green.png')] bg-cover bg-center py-12">
                <div className="flex items-center pr-2 md:pr-12 xl:pr-36">
                    <div className="h-[0.08rem] flex-grow bg-gradient-to-r from-transparent to-white/80 " />
                    <div className="text-sm sm:text-xl text-center flex gap-2">
                        <div className="text-[#31D7B9]">03</div>
                        <div className="text-[#31D7B9]">|</div>
                        <div className="text-[#C6C6C6]">OUR EVENTS</div>
                    </div>
                </div>
                <div className="flex mt-8 justify-end w-full items-center pr-2 md:pr-12 xl:pr-36">
                    <h1 className="text-[#00FFF2] text-lg sm:text-4xl font-bold">EVENTS</h1>
                    <div className="bg-[url('/box-icon.png')] w-12 h-12 md:w-24 md:h-24 bg-cover"></div>
                </div>
                {/* Reduced top margin and ensured no extra gap between grid rows */}
                <div className="flex flex-col gap-y-0 m-4">
                    <h4 className="text-white font-light text-sm sm:text-xl text-right md:text-end leading-tight mb-8 md:mb-0 pr-6 sm:pr-12 md:pr-24 lg:pr-72">
                        Instead of focusing just on the problem, we <br/>take the holistic approach so we can build  <br/> a solution that works end to end.
                    </h4>
                    <EventCard 
                        title={"LOGIC LOUNGE"}
                        description={"Every project starts with understanding the challenge and the landscape..."}
                        imageSrc={'/logic-lounge.png'}
                        number={1}
                    />
                    <EventCard 
                        title={"HACK-A-BIT"}
                        description={"...allowing us to design a solution that meets your needs..."}
                        imageSrc={'/hack-a-bit.png'}
                        number={2}
                    />
                    <EventCard 
                        title={"CQM"}
                        description={"...keeping development quality high and costs low..."}
                        imageSrc={'/cqm.png'}
                        number={3}
                    />
                    <EventCard 
                        title={"CODEZILLA"}
                        description={"...resulting in a tailored solution that provides you value."}
                        imageSrc={'/codezilla.png'}
                        number={4}
                    />
                
                </div>
            </div>
        </div>
    );
}
