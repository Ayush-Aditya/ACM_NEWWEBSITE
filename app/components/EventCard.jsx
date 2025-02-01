export default function EventCard({ 
    title, 
    description, 
    imageSrc, 
    numberSrc, 
    colSpan = 5, 
    colStart = 2,
    rowSpan = 1,
    rowStart,
    number
}) {
    const isEven = parseInt(number) % 2 === 0;

    return (
        <div className={`col-span-${colSpan} col-start-${colStart} ${rowStart ? `row-start-${rowStart}` : ''} 
            ${rowSpan > 1 ? `row-span-${rowSpan}` : ''} flex items-center ${isEven ? 'place-self-end' : ''} 
            hover:scale-105 transition-all duration-300`}>
            <div className="flex flex-col items-end">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#00C187] to-[#00C2FF] bg-clip-text text-transparent
                    drop-shadow-[0_0_8px_rgba(0,193,135,0.3)]">
                    {title}
                </h3>
                <p className="text-white font-light text-end w-40 drop-shadow-md">
                    {description}
                </p>
            </div> 
            <div className="relative group">
                <img 
                    src={imageSrc} 
                    alt={title} 
                    className="drop-shadow-[0_0_15px_rgba(0,255,242,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(0,255,242,0.5)]
                    transition-all duration-300"
                />
                <div className="absolute -top-0 -right-0 w-10 h-10 drop-shadow-lg">
                    <img src={numberSrc} alt="Number Background" className="drop-shadow-[0_0_8px_rgba(49,215,185,0.4)]" />
                    <span className="absolute inset-0 flex items-center justify-center text-white drop-shadow-md">
                        {number}
                    </span>
                </div>
            </div>
        </div>
    );
}
