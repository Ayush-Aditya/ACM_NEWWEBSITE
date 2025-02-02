import PropTypes from 'prop-types';
import Image from 'next/image';

export default function EventCard({ 
    title, 
    description, 
    imageSrc, 
    number
}) {
    const isEven = parseInt(number) % 2 === 0;

    return (
        <div className={`flex px-16 container ${isEven ? 'justify-end' : 'justify-start'}`}>
        <div className="flex flex-col items-center justify-center">
            <h2 className='w-48 text-lg md:text-2xl text-end font-semibold bg-gradient-to-r from-[#00C2FF] to-[#00C187] bg-clip-text text-transparent'>
                {title}
            </h2>
            <p className='w-48 text-sm md:text-lg text-white text-wrap text-end'>{description}</p>
        </div>
        <div className="group relative">
            <img src={imageSrc} alt="Logic Lounge" className='bg-contain' />
            <div className="absolute top-0 right-0 flex items-center justify-center">
                <img src="/ellipse.png" alt="circle" className="relative" />
                <span className="absolute text-white font-bold">{number}</span>
            </div>
        </div>
    </div>
    );
}

EventCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
};
