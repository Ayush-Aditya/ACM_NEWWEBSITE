export default function Card({imageSrc, name, designation, quote}) {
    return <div className="relative">
    <img src={imageSrc} className='w-16 absolute -top-8 left-1/2 -translate-x-1/2'/>
    <div className='bg-[#161E25] flex flex-col pt-16 pb-4 items-center justify-center max-w-72 gap-4 rounded-xl'>
        <img src="/quote.png" className='w-8'  />
        <h3 className='text-center font-bold text-xl'>{quote}</h3>

        <div>
            <h4 className='font-semibold'>{name}</h4>
            <p className='text-light text-[#C6C6C6] text-sm'>{designation}</p>
        </div>
    </div>
    </div>;
}