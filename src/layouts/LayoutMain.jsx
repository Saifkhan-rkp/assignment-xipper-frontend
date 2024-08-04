import React from 'react'
import { Outlet } from 'react-router-dom';

function LayoutMain() {
    return (
        <>
            <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-8 box-border gap-8 leading-[normal] tracking-[normal] text-left text-sm text-gray-900 font-body-caption-12 mq1100:pl-5 mq1100:box-border gap-4">
                <div className="h-[1088px] w-[280px] bg-gray-50 border-gray-300 border-r-[1px] border-solid box-border flex flex-col items-start justify-start py-5 px-[23px] mq1100:hidden gap-[58px]">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-between">
                        {/* <Menu /> */}
                        <nav
                            className={`m-0 self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[460.7px] gap-8 text-left text-base text-gray-900 font-body-caption-12 mq750:pb-[194px] mq750:box-border mq1025:pb-[299px] mq1025:box-border`}
                        >
                            <div className="self-stretch flex flex-row items-center justify-between py-0 pl-1.5 pr-3 gap-5 text-3xl text-chocolate font-text-sm-leading-5-font-medium">
                                <div className="flex flex-row items-center justify-start py-[10.5px] px-0 gap-[7.2px]">
                                    <a className="[text-decoration:none] relative font-extrabold text-[inherit] inline-block min-w-[82px] mq450:text-lg">
                                        Dashboard
                                    </a>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-center justify-start gap-1">
                                <div className="self-stretch flex flex-row items-center justify-start py-3 pl-3 pr-[101px] gap-3">
                                    
                                    <a className="[text-decoration:none] flex-1 relative leading-[24px] text-[inherit]">
                                        Dashboard
                                    </a>
                                </div>
                                <div className="self-stretch rounded-lg bg-gray-200 flex flex-row items-center justify-start py-3 pl-3 pr-[140px] gap-3">
                                    
                                    <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[44px]">
                                        Order
                                    </a>
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-start py-3 pl-3 pr-[134px] gap-3">
                                    
                                    <a href='/customers' className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[50px]">
                                        Customers
                                    </a>
                                </div>
                                
                            </div>
                        </nav>
                        <div className="self-stretch flex flex-row items-center justify-between py-0 px-3 gap-[5.5px]">
                            <div className="w-[178.5px] flex flex-row items-center justify-start py-0 pl-0 pr-[13px] box-border gap-2">


                            </div>
                        </div>
                    </div>
                </div>

                <main className="flex-1 flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border max-w-[calc(100%_-_312px)] mq1100:max-w-full">
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default LayoutMain