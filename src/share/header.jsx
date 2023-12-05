import React from "react";
import UseData from "../hooks/use-data";
import { cn } from './../utils'

const Header = () => {

    const { menuItemTwo, selectedTab, setSelectedTab } = UseData();

    return (
        <header className="lg:w-[526px] h-[226px] sm:h-[144px] block  p-[30px] ml-auto mb-10 lg:mt-0 mt-10 rounded-[16px] bg-white dark:bg-[#111111] ">
            <nav>
                <ul
                    className="sm:flex grid grid-cols-3 gap-2.5 sm:gap-0"
                >
                    {menuItemTwo.map((item) =>
                        <span
                            onClick={() => {
                                setSelectedTab(item?.link)
                            }}
                            key={item.id}
                            style={{
                                fontSize: '.8125rem'
                            }}
                            className={cn('w-full h-20 rounded-[10px] mx-2.5 cursor-pointer transition-all duration-300 ease-in-out font-poppins bg-[#F3F6F6] font-medium text-xtiny text-gray-lite dark:text-[#A6A6A6] justify-center flex flex-col items-center',
                                selectedTab === "/homeTwo" && item.id === "01" ? 'lg:text-white lg:dark:text-white lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476]' : '',
                                selectedTab === item?.link ? 'text-white  bg-gradient-to-r from-[#FA5252] to-[#DD2476] linked' : 'transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]')}>
                            <span className="text-xl mb-1">{item?.icon}</span> {item?.name}
                        </span>)}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
