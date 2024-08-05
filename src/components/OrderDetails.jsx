import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loader from './Loader';
import { useParams } from 'react-router-dom';

function OrderDetails() {
    const params = useParams();
    const { data: orderDetails, isLoading, isError, error } = useQuery({
        queryKey: ["orderDetails"],
        queryFn: () => axios.get(`${process.env.REACT_APP_API_URL}/api/shopify/order/${params.id}`).then(res => res.data)
    })
    const {
        order_number,
        created_at,
        current_total_price,
        current_total_discounts,
        total_shipping_price_set,
        total_tax,
        customer,
        shipping_address,
        billing_address,
        line_items,
        shipping_lines
    } = orderDetails || {};

    const addrSequence = ["address1", "address2", "company", "city", "province", "country", "zip",]
    return (
        <>
            <div className=' px-4 py-4 bg-white shadow-md container rounded-md'>
                {isLoading && <Loader />}
                {!isLoading && orderDetails && <>
                    <div className=" pt-2 mt-5 flex justify-start item-start space-y-2 flex-col">
                        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #{order_number}</h1>
                        <p className="text-base font-medium leading-6 text-gray-600">{new Date(created_at).toLocaleString()}</p>
                    </div>
                    <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                            <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
                                {line_items.map((item) => (
                                    <div key={item.id} className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                        <div className="pb-4 md:pb-8 w-full md:w-40">
                                            <img className="w-full" src="https://picsum.photos/seed/picsum/150/150" alt={item.name} />
                                        </div>
                                        <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                            <div className="w-full flex flex-col justify-start items-start space-y-8">
                                                <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{item.title}</h3>
                                                <div className="flex justify-start items-start flex-col space-y-2">
                                                    <p className="text-sm leading-none text-gray-800"><span className="text-gray-400">SKU: </span> {item.sku}</p>
                                                    <p className="text-sm leading-none text-gray-800"><span className="text-gray-500">Quantity: </span> {item.quantity}</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between space-x-8 items-start w-full">
                                                <p className="text-base xl:text-lg leading-6">{item.price} {orderDetails.currency}</p>
                                                <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">{(item.price * item.quantity).toFixed(2)} {orderDetails.currency}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                                <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6">
                                    <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                                    <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                        <div className="flex justify-between w-full">
                                            <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                            <p className="text-base leading-4 text-gray-600">{orderDetails.current_subtotal_price_set.shop_money.amount} {orderDetails.currency}</p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-base leading-4 text-gray-800">Discount</p>
                                            <p className="text-base leading-4 text-gray-600">-{current_total_discounts} {orderDetails.currency}</p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-base leading-4 text-gray-800">Shipping</p>
                                            <p className="text-base leading-4 text-gray-600">{total_shipping_price_set.shop_money.amount} {orderDetails.currency}</p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-base leading-4 text-gray-800">Tax</p>
                                            <p className="text-base leading-4 text-gray-600">+{total_tax} {orderDetails.currency}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                        <p className="text-base font-semibold leading-4 text-gray-600">{current_total_price} {orderDetails.currency}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6">
                                    <h3 className="text-xl font-semibold leading-5 text-gray-800">Shipping</h3>
                                    <div className="flex justify-between items-start w-full">
                                        {shipping_lines.map((line) => (
                                            <div key={line.id} className="flex justify-between items-center w-full">
                                                <div className="flex justify-center items-center space-x-4">
                                                    <div className="w-8 h-8">
                                                        <svg className=' fill-current text-green-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M388.3 104.1a4.7 4.7 0 0 0 -4.4-4c-2 0-37.2-.8-37.2-.8s-21.6-20.8-29.6-28.8V503.2L442.8 472S388.7 106.5 388.3 104.1zM288.7 70.5a116.7 116.7 0 0 0 -7.2-17.6C271 32.9 255.4 22 237 22a15 15 0 0 0 -4 .4c-.4-.8-1.2-1.2-1.6-2C223.4 11.6 213 7.6 200.6 8c-24 .8-48 18-67.3 48.8-13.6 21.6-24 48.8-26.8 70.1-27.6 8.4-46.8 14.4-47.2 14.8-14 4.4-14.4 4.8-16 18-1.2 10-38 291.8-38 291.8L307.9 504V65.7a41.7 41.7 0 0 0 -4.4 .4S297.9 67.7 288.7 70.5zM233.4 87.7c-16 4.8-33.6 10.4-50.8 15.6 4.8-18.8 14.4-37.6 25.6-50 4.4-4.4 10.4-9.6 17.2-12.8C232.2 54.9 233.8 74.5 233.4 87.7zM200.6 24.4A27.5 27.5 0 0 1 215 28c-6.4 3.2-12.8 8.4-18.8 14.4-15.2 16.4-26.8 42-31.6 66.5-14.4 4.4-28.8 8.8-42 12.8C131.3 83.3 163.8 25.2 200.6 24.4zM154.2 244.6c1.6 25.6 69.3 31.2 73.3 91.7 2.8 47.6-25.2 80.1-65.7 82.5-48.8 3.2-75.7-25.6-75.7-25.6l10.4-44s26.8 20.4 48.4 18.8c14-.8 19.2-12.4 18.8-20.4-2-33.6-57.2-31.6-60.8-86.9-3.2-46.4 27.2-93.3 94.5-97.7 26-1.6 39.2 4.8 39.2 4.8L221.4 225.4s-17.2-8-37.6-6.4C154.2 221 153.8 239.8 154.2 244.6zM249.4 82.9c0-12-1.6-29.2-7.2-43.6 18.4 3.6 27.2 24 31.2 36.4Q262.6 78.7 249.4 82.9z" /></svg>
                                                    </div>
                                                    <div className="grid grid-cols-2 ustify-start items-center">
                                                        <p className="text-lg leading-6 font-semibold text-gray-800">{line?.source}<br /><span className="font-normal"> {line.title}</span></p>
                                                        <p className="text-lg leading-6 font-semibold text-gray-800"><span className="font-normal">Price: {line.price} {orderDetails.currency}</span><br />Discount: {line.discounted_price} {orderDetails.currency}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="w-full flex justify-center items-center">
                                        <button className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">View Carrier Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer</h3>
                            <div class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                                <div class="flex flex-col justify-start items-start flex-shrink-0">
                                    <div class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                        <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                                        <div class="flex justify-start items-start flex-col space-y-2">
                                            <p className="text-base font-semibold leading-4 text-left text-gray-800">{customer.first_name} {customer.last_name}</p>
                                            <p className="text-sm leading-5 text-gray-600">Previous Orders: {customer.orders_count}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center text-gray-800 md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 7L12 13L21 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p className="cursor-pointer text-sm leading-5">{customer.email}</p>
                                    </div>
                                </div>
                                <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                                    <div class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                        <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                            <p class="text-base   font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                            <p class="w-48 lg:w-full   xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                                {shipping_address?.name}
                                                <br />
                                                Phone No.:{shipping_address?.phone}
                                                <br />
                                                {addrSequence.map(val => shipping_address[val]).filter(val => val !== null || val !== undefined).join(", ")}
                                            </p>
                                        </div>
                                        <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                            <p class="text-base   font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                                            <p class="w-48 lg:w-full   xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                                {billing_address?.name}
                                                <br />
                                                Phone No.:{billing_address?.phone}
                                                <br />
                                                {addrSequence.map(val => billing_address[val]).filter(val => val !== null || val !== undefined).join(", ")}
                                            </p>
                                        </div>
                                        <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                            <p class="text-base   font-semibold leading-4 text-center md:text-left text-gray-800">Payment</p>
                                            <p class="w-48 lg:w-full   xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                            <b>Staus:</b> {orderDetails?.financial_status}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex w-full justify-center items-center md:justify-start md:items-start">
                                        <button class="mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">Edit Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                }
                {isError &&
                    <div className='text-red-600'>{error?.message}</div>}
            </div>
        </>
    )
}

export default OrderDetails