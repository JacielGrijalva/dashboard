//rafc

import Image from 'next/image'
import SideBarMenuItem from './SideBarMenuItem';
import { IoLogoReact } from "@react-icons/all-files/io5/IoLogoReact";
import { IoBrowsersOutline } from "@react-icons/all-files/io5/IoBrowsersOutline";
import { IoCalculator } from "@react-icons/all-files/io5/IoCalculator";
import { IoFootball } from "@react-icons/all-files/io5/IoFootball";

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40} />,
        title: 'Dashboard',
        subTitle: 'Visualización'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40} />,
        title: 'counter',
        subTitle: 'contador cliente side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootball size={40} />,
        title: 'Pokemons',
        subTitle: 'pokemons generación estatica'
    },
]

const SideBar = () => {
    return (
        <div id="menu"
            style={{ width: '400px' }}
            className=" bg-gray-900  z-10 text-slate-300 w-64 left-0  ">

            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center  text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className='mr-2' />
                    Dash
                    <span className="text-blue-500">
                        8
                    </span>.</h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>

            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-8 h-8"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                            alt=""
                            width={50}
                            height={50}
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Jaciel Grijalva
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">

                {
                    menuItems.map((item) => (
                        <SideBarMenuItem key={item.path} {...item} />

                    ))
                }

            </div>
        </div>
    )
}

export default SideBar
