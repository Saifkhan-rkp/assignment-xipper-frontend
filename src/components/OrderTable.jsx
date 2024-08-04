import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'

function OrderTable() {
    const [pageNo, setPageNo] = useState(1)
    const { data: orderData, isLoading, isError, refetch } = useQuery({
        queryKey: ["orderData"],
        queryFn: () => axios.get(`${process.env.REACT_APP_API_URL}/api/order/get/page/${pageNo}`)
            .then(res => res.data),
    })

    const addrSequence = ["name", "phone", "address1", "address2", "company", "city", "province", "country", "zip",]

    return (

        <>
            {/* <main className="flex-1 flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border max-w-[calc(100%_-_312px)] mq1100:max-w-full"> */}
            <section className="self-stretch flex flex-col items-start justify-start gap-[24.3px] max-w-full text-left text-5xl text-gray-900 font-text-sm-leading-5-font-medium">
                <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <a className="[text-decoration:none] relative leading-[32px] font-semibold text-[inherit] inline-block min-w-[67px] mq450:text-[19px] mq450:leading-[26px]">
                            Order
                        </a>
                    </div>
                </div>
                <div className="self-stretch h-px relative bg-gray-300" />

                <div className=" self-stretch px-2 py-1">
                    <div className="mt-4 w-full">
                        <div className="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
                            <div className="relative flex w-full max-w-2xl items-center">
                                {/* <h2>Orders</h2> */}
                            </div>

                            <button type="button" className="relative mr-auto inline-flex cursor-pointer items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 focus:shadow sm:mr-0">
                                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                                <svg className="mr-2 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                                Filter
                            </button>
                            {/* <hr/> */}
                        </div>
                    </div>

                    <div className="mt-6 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4">
                        <table className="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
                            <thead className="border-b lg:table-header-group">
                                <tr className="">
                                    <td className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                                        Order Date
                                        <svg xmlns="http://www.w3.org/2000/svg" className="float-right mt-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                    </td>

                                    <td className="whitespace-normal text-center py-4 text-sm font-medium text-gray-500 sm:px-3">Order ID</td>
                                    <td className="whitespace-normal py-4 text-center text-sm font-medium text-gray-500 sm:px-3">Order No.</td>
                                    <td className="whitespace-normal py-4 text-center text-sm font-medium text-gray-500 sm:px-3">Ship Address</td>

                                    <td className="whitespace-normal py-4 text-center text-sm font-medium text-gray-500 sm:px-3">Customer</td>
                                    <td className="whitespace-normal py-4 text-center text-sm font-medium text-gray-500 sm:px-3">Items</td>

                                    <td className="whitespace-normal py-4 text-center text-sm font-medium text-gray-500 sm:px-3">Fulfillment</td>

                                    <td className="whitespace-normal py-4 text-center text-sm font-medium text-gray-500 sm:px-3">
                                        Price
                                    </td>

                                    <td className="whitespace-normal py-4 text-center text-sm font-medium text-gray-500 sm:px-3">Status</td>
                                </tr>
                            </thead>

                            <tbody className="bg-white lg:border-gray-300">
                                {!isLoading && orderData?.orders?.map((order, idx) => (
                                    <tr key={idx}>
                                        <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                                            {new Date(order?.created_at).toDateString()}
                                        </td>

                                        <td className="whitespace-no-wrap   py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell"><a href={`/order/details/${order?.order_id}`}>{order?.order_id}</a></td>

                                        <td className="whitespace-no-wrap text-center py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{order?.order_number}</td>

                                        <td className="whitespace-no-wrap text-wrap py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                                            {addrSequence.map(val => order?.shipping_address[val]).filter(val => val !== null || val != undefined).join(", ")}
                                        </td>
                                        <td className="whitespace-no-wrap   py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                                            {order?.customer?.first_name + " " + order?.customer?.last_name}

                                            <div className="mt-1 flex flex-col text-xs font-medium lg:hidden">
                                                <div className="flex items-center">
                                                    {order?.customer?.email}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">{order?.line_items?.map(val=> val.name).join(", ")}
                                            <div className="mt-1 flex flex-col text-xs font-medium lg:hidden">
                                                <div className="flex items-center">
                                                    Item Count: {order?.line_items?.length}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">

                                            <span className={`mt-1 ml-auto block w-fit whitespace-nowrap rounded-full ${order?.fulfillment_status==="pending"?"bg-purple-100":"bg-yellow-100"} px-2 py-0.5 text-center text-xs ${order?.fulfillment_status==="pending"?"text-purple-800":"text-yellow-600"} lg: `}>{order?.fulfillment_status}</span>
                                        </td>
                                        <td className="whitespace-no-wrap py-4 text-center text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                                            {order?.currency + " " + order?.total_price}
                                        </td>

                                        <td className="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell lg:text-left">
                                            <span className={`ml-2 mr-3 whitespace-nowrap rounded-full ${order?.confirmed?"bg-green-100":"bg-red-100"} px-2 py-0.5 ${order?.confirmed?"text-green-800":"text-red-600"}`}>{order?.confirmed?"confirmed":"not confirmed"}</span>
                                        </td>

                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {/* </main> */}
        </>
    )
}

export default OrderTable