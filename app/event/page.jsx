import EventCard from '../components/EventCard';
import Card from '../components/Card';
import Profile from '../components/Profile';
import Footer from '../components/Footer';

export default function Event() {
    return (
        <>
            <div className='bg-black flex flex-col items-center'>
                <div id="events" className="bg-black container flex justify-center">
                    {/* Reduced container height and padding */}
                    <div className="h-full bg-[url('/bg-green.png')] bg-cover bg-center py-12 w-full">
                        <div className="flex items-center pr-2 md:pr-12 xl:pr-36">
                            <div className="h-[0.08rem] flex-grow bg-gradient-to-r from-transparent to-white/80 " />
                            <div className="text-sm sm:text-xl text-center flex gap-2">
                                <div className="text-[#31D7B9] pl-1 sm:pl-4">03</div>
                                <div className="text-[#31D7B9]">|</div>
                                <div className="text-[#C6C6C6]">OUR EVENTS</div>
                            </div>
                        </div>
                        <div className="flex mt-8 justify-end w-full items-center pr-2 md:pr-12 xl:pr-36">
                            <h1 className="text-[#00FFF2] text-lg sm:text-4xl font-bold">EVENTS</h1>
                            <div className="bg-[url('/box-icon.png')] w-12 h-12 md:w-24 md:h-24 bg-cover"></div>
                        </div>
                        <div className="flex flex-col items-center gap-y-0 m-4"></div>
                        {/* Reduced top margin and ensured no extra gap between grid rows */}
                        <div className="flex flex-col items-center gap-y-0 m-4">
                            <h4 className="text-white place-self-end font-light text-sm sm:text-xl text-right md:text-end leading-tight mb-8 md:mb-0 pr-6 sm:pr-12 md:pr-24 lg:pr-72">
                                Instead of focusing just on the problem, we <br />take the holistic approach so we can build  <br /> a solution that works end to end.
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
                            <div className='mt-32 lg:px-36 flex justify-center items-center container'>

                                <img src="/arrow.png" alt="Left" className='h-4 lg:h-12' />
                                <div className="relative">
                                    <img src="/events.png" alt="Events" className='w-full' />
                                    <h1 className="absolute text-6xl text-[32px] sm:text-[48px]  md:text-[64px] lg:text-[72px] xl:text-[96px]  top-0 left-6 sm:top-4 lg:top-2 xl:top-2 xl:left-24 2xl:top-8 2xl:left-36 text-white">
                                        E V E N T S
                                    </h1>
                                </div>
                                <img src="/arrow.png" alt="Right" className='h-4 lg:h-12 scale-x-[-1]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="testimonials" className="bg-black w-full h-full text-white container mt-32 px-4 md:px-16 lg:px-36 animate-fadeIn">
                    <div className="flex items-center pr-2 md:pr-12 xl:pr-36 hover:scale-105 transition-all duration-300">
                        <div className="text-sm sm:text-xl text-center flex gap-2">
                            <div className="text-[#E64467] pr-1 sm:pr-4">04</div>
                            <div className="text-[#E64467]">|</div>
                            <div className="text-[#C6C6C6]">TESTIMONALS</div>
                        </div>
                        <div className="h-[0.08rem] flex-grow bg-gradient-to-r from-transparent to-white/80 " />
                    </div>
                    <div className="flex mt-8 gap-2 group">
                        <div className="bg-[url('/pink.png')] w-12 h-12 md:w-24 md:h-24 bg-cover group-hover:rotate-12 transition-transform duration-500" />
                        <div className="flex flex-col hover:-translate-y-1 transition-transform duration-300">
                            <h1 className="text-white font-extrabold text-lg sm:text-2xl md:text-4xl hover:text-[#E64467] transition-colors duration-300">Testimonials.</h1>
                            <h1 className='bg-gradient-to-b from-[#E64467] to-[#7E5CC5] bg-clip-text text-transparent text-lg sm:text-2xl md:text-4xl font-bold hover:scale-105 transition-transform duration-300' >OUR TEAM</h1>
                            <p className='mt-8 text-wrap max-w-96 opacity-80 group-hover:opacity-100 transition-opacity duration-300'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-16 md:flex-row justify-center items-center mt-32 text-center md:gap-4">
                        <div className="hover:-translate-y-2 transition-transform duration-300 delay-100">
                            <Card
                                name="Jessy K."
                                designation={"Front-End Developer"}
                                quote={"Great service and custom service! Perfect!"}
                                imageSrc={"/image.png"}
                            />
                        </div>
                        <div className="hover:-translate-y-2 transition-transform duration-300 delay-200">
                            <Card
                                name="Jessy K."
                                designation={"Front-End Developer"}
                                quote={"Great service and custom service! Perfect!"}
                                imageSrc={"/image.png"}
                            />
                        </div>
                        <div className="hover:-translate-y-2 transition-transform duration-300 delay-300">
                            <Card
                                name="Jessy K."
                                designation={"Front-End Developer"}
                                quote={"Great service and custom service! Perfect!"}
                                imageSrc={"/image.png"}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-36 mb-12 group'>
                        <img src="/arrow.png" className='h-4 lg:h-12 group-hover:-translate-x-2 transition-transform duration-300' />
                        <div className="flex flex-col w-[80px] md:w-[120px] lg:w-[300px] 2xl:w-[374px]">
                            <div className="h-[120px] md:h-[160px] lg:h-[260px] 2xl:h-[389px] border-t border-b border-l border-[#C1C1C1] bg-[#0D0D0D]"></div>
                        </div>
                        <div className="flex flex-col w-[240px] md:w-[300px] lg:w-[517px] 2xl:w-[517px]">
                            <div className=' h-[280px] md:h-[300px] lg:h-[400px] 2xl:h-[497px] border border-[#C1C1C1] bg-[#0D0D0D]' />
                            <div className="bg-white flex justify-between px-8 py-2 mt-2">
                                <div>
                                    <h2 className='text-black font-extrabold text-2xl'>Raj Aryan</h2>
                                    <p className='text-black font-extrabold text-lg opacity-80'>President</p>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col w-[80px]  md:w-[120px] lg:w-[300px] 2xl:w-[374px]">
                            <div className="h-[120px] md:h-[160px] lg:h-[260px] 2xl:h-[389px] border-t border-b border-r border-[#C1C1C1] bg-[#0D0D0D]"></div>
                        </div>
                        <img src="/arrow.png" className='h-4 lg:h-12 scale-x-[-1] group-hover:translate-x-2 transition-transform duration-300' />
                    </div>

                    <div className="p-8 rounded-lg shadow mb-8 bg-gradient-to-b from-[#0c0c0c] to-[#0b0022] hover:shadow-2xl transition-all duration-300">
                        <p className="text-3xl font-bold text-center text-gray-800 dark:text-white hover:scale-105 transition-transform duration-300">
                            The Team
                        </p>
                        <p className="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-300 hover:text-gray-200 transition-colors duration-300">
                            Meet the best team in the world
                        </p>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 animate-fadeIn">
                            <div className="hover:-translate-y-2 transition-transform duration-300">
                                <Profile />
                            </div>
                            <div className="hover:-translate-y-2 transition-transform duration-300 delay-100">
                                <Profile />
                            </div>
                            <div className="hover:-translate-y-2 transition-transform duration-300 delay-200">
                                <Profile />
                            </div>
                            <div className="hover:-translate-y-2 transition-transform duration-300 delay-300">
                                <Profile />
                            </div>
                            <div className="hover:-translate-y-2 transition-transform duration-300 delay-400">
                                <Profile />
                            </div>
                            <div className="hover:-translate-y-2 transition-transform duration-300 delay-500">
                                <Profile />
                            </div>
                            <div className="hover:-translate-y-2 transition-transform duration-300 delay-600">
                                <Profile />
                            </div>
                            <div className="hover:-translate-y-2 transition-transform duration-300 delay-700">
                                <Profile />
                            </div>
                            <div className="hover:-translate-y-2 transition-transform duration-300 delay-800">
                                <Profile />
                            </div>
                            <div className="hover:-translate-y-2 transition-transform duration-300 delay-900">
                                <Profile />
                            </div>
                            <div className="hover:-translate-y-2 transition-transform duration-300 delay-1000">
                                <Profile />
                            </div>
                            <div className="hover:-translate-y-2 transition-transform duration-300 delay-1100">
                                <Profile />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="contact-us" className='container bg-black text-white px-4 md:px-16 lg:px-36 w-full h-full mt-16'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-12'>Get in Touch with our
                        <span className='bg-gradient-to-b from-[#005DF9] to-[#A7DAFF] bg-clip-text text-transparent px-2'>
                            Team.
                        </span>
                    </h1>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Form Section */}
                        <div className="flex-1 w-full md:w-1/2">
                            <div className="mt-8 space-y-4 w-full">
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        placeholder="Name" 
                                        className="w-full p-3 pl-10 bg-transparent border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none"
                                    />
                                    <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input 
                                        type="email" 
                                        placeholder="Email" 
                                        className="w-full p-3 pl-10 bg-transparent border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none"
                                    />
                                    <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input 
                                        type="tel" 
                                        placeholder="Phone Number" 
                                        className="w-full p-3 pl-10 bg-transparent border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none"
                                    />
                                    <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <textarea 
                                        placeholder="Message" 
                                        rows="4" 
                                        className="w-full p-3 pl-10 bg-transparent border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
                                    />
                                    <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 00-2-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                            </div>
                            <button className="mt-4 px-8 py-3 bg-[#9949FF] text-white rounded-2xl hover:opacity-90 transition-opacity">
                                Submit Now
                            </button>
                        </div>
                        {/* Image Section */}
                        <div className="flex-1 w-full md:w-1/2">
                            <div className="relative h-[420px] w-full">
                                <img 
                                    src="/contact.png" 
                                    alt="Contact Us" 
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
