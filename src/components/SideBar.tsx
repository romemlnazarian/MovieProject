import { useState } from 'react'
import WatchLater from '../assets/Icons/Time.png'
import Genres from '../assets/icons/Genres.png'
import Search from '../assets/icons/Search.png'
import Home from '../assets/icons/Home.png'
import Movies from '../assets/icons/Movies.png'
import TV from '../assets/icons/TV.png'

const menuItems = [
    { icon: Search, label: 'Search' },
    { icon: Home, label: 'Home' },
    { icon: TV, label: 'TV Shows' },
    { icon: Movies, label: 'Movies' },
    { icon: Genres, label: 'Genres' },
    { icon: WatchLater, label: 'Watch Later' },
];

const Sidebar = ({ children, onItemSelect }: any) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <div className='flex relative'>
            {isExpanded && (
                <div
                    className="fixed inset-0 bg-opacity-50 z-40"
                    onClick={() => setIsExpanded(false)}
                />
            )}

            <div
                className={`absolute top-0 left-0 z-50  bg-[#1a1a1a] h-screen ${isExpanded ? "w-48" : "w-16"
                    } flex flex-col text-white transition-all duration-300 ease-in-out`}
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
            >

                <div className="flex flex-col py-6 px-2 space-y-8 mt-10">
                    {isExpanded &&
                        <div className='w-[100px] h-[100px] rounded-full bg-cover bg-center ml-5 '
                            style={{
                                backgroundImage: `url(/images/profile.png)`,
                            }}
                        >
                        </div>
                    }
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => { setActiveIndex(index), onItemSelect?.(item.label) }}
                            className={`flex items-center px-3 py-3 cursor-pointer transition-all duration-200

                            ${!isExpanded ? activeIndex === index && "bg-[#3b486d] rounded-full" : activeIndex === index ? "bg-[#3b486d] rounded-xl" : "hover:bg-[#2a2a2a] rounded-xl"}`

                            }
                        >
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="w-6 h-6 min-w-[25px]"
                            />
                            <span
                                className={`ml-4 text-sm font-medium whitespace-nowrap transition-all duration-300 
                                ${isExpanded
                                        ? "opacity-100 scale-100"
                                        : "opacity-0 scale-95 invisible"
                                    }`}
                            >
                                {item.label}
                            </span>


                        </div>
                    ))}
                    {isExpanded &&
                        <div className='absolute bottom-10 space-y-5 text-[#858688] ont-bold text-lg cursor-pointer ml-3'>
                            <p >Language</p>
                            <p >Get Help</p>
                            <p>Exit</p>
                        </div>
                    }
                </div>
            </div>
            <div className="flex-1 h-full pl-16 relative z-10">
                {children}
            </div>

        </div>
    );
};

export default Sidebar;
