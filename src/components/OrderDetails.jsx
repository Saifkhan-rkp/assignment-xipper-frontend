import React from 'react'
import { order } from './testdata'

function OrderDetails() {

    const {
        order_number,
        created_at,
        current_total_price,
        current_total_discounts,
        total_shipping_price_set,
        customer,
        shipping_address,
        billing_address,
        line_items,
        shipping_lines
    } = order;

    const addrSequence = ["name", "phone", "address1", "address2", "company", "city", "province", "country", "zip",]
    return (
        <>
            <div className="py-14 px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <div className="flex justify-start item-start space-y-2 flex-col">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #{order_number}</h1>
                    <p className="text-base font-medium leading-6 text-gray-600">{new Date(created_at).toLocaleString()}</p>
                </div>
                <div className="mt-10 flex flex-row justify-center items-stretch w-full space-x-8  md:space-y-6 space-y-0">
                    <div className="flex flex-col justify-start items-start w-full md:space-y-6 space-y-8">
                        <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 p-8 w-full">
                            <p className="text-lg md:text-xl font-semibold leading-5 text-gray-800">Customer’s Cart</p>
                            {line_items.map((item) => (
                                <div key={item.id} className="mt-4 flex flex-row justify-start items-start space-y-4 space-x-8 w-full">
                                    <div class="w-full md:w-40">
                                        <img class="w-full hidden md:block" src="https://i.ibb.co/s6snNx0/Rectangle-17.png" alt="dress" />
                                        <img class="w-full md:hidden" src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png" alt="dress" />
                                    </div>
                                    <div className="border-b border-gray-200 flex-row flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-2xl font-semibold leading-6 text-gray-800">{item.title}</h3>
                                            <div className="flex justify-start items-start flex-col space-y-2">
                                                <p className="text-sm leading-none text-gray-800"><span className="text-gray-500">SKU: </span> {item.sku}</p>
                                                <p className="text-sm leading-none text-gray-800"><span className="text-gray-500">Quantity: </span> {item.quantity}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between space-x-8 items-start w-full">
                                            <p className="text-lg leading-6">{item.price} {order.currency}</p>
                                            <p className="text-lg font-semibold leading-6 text-gray-800">{(item.price * item.quantity).toFixed(2)} {order.currency}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 space-x-8">
                            <div className="flex flex-col px-4 py-6 md:p-6 p-8 w-full bg-gray-50 space-y-6">
                                <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                    <div className="flex justify-between w-full">
                                        <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                        <p className="text-base leading-4 text-gray-600">{order.current_subtotal_price_set.shop_money.amount} {order.currency}</p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base leading-4 text-gray-800">Discount</p>
                                        <p className="text-base leading-4 text-gray-600">-{current_total_discounts} {order.currency}</p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base leading-4 text-gray-800">Shipping</p>
                                        <p className="text-base leading-4 text-gray-600">{total_shipping_price_set.shop_money.amount} {order.currency}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                    <p className="text-base font-semibold leading-4 text-gray-600">{current_total_price} {order.currency}</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center px-4 py-6 md:p-6 p-8 w-full bg-gray-50 space-y-6">
                                <h3 className="text-xl font-semibold leading-5 text-gray-800">Shipping</h3>
                                <div className="flex justify-between items-start w-full">
                                    {shipping_lines.map((line) => (
                                        <div key={line.id} className="flex justify-between items-center w-full">
                                            <div className="flex justify-center items-center space-x-4">
                                                <div className="w-8 h-8">
                                                    <img className="w-full h-full" alt="logo" src="https://via.placeholder.com/32" />
                                                </div>
                                                <div className="flex flex-col justify-start items-center">
                                                    <p className="text-lg leading-6 font-semibold text-gray-800">{line.title}<br /><span className="font-normal">Price: {line.price} {order.currency}</span></p>
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
                    <div className="bg-gray-50 w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 p-8 flex-col">
                        <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer</h3>
                        <div className="flex md:flex-row flex-col justify-start items-stretch h-full w-full space-x-0 md:space-x-6 lg:space-x-8">
                            <div className="flex flex-col justify-start items-start flex-shrink-0">
                                <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                    <img src="https://via.placeholder.com/150" alt="avatar" />
                                    <div className="flex justify-start items-start flex-col space-y-2">
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
                            <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                    <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                        <p className="text-base   font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                        <p className="w-48 lg:w-full   xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{addrSequence.map(val => shipping_address[val]).filter(val => val !== null || val != undefined).join(", ")}</p>
                                    </div>
                                    <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                        <p className="text-base   font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                                        <p className="w-48 lg:w-full   xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{addrSequence.map(val => billing_address[val]).filter(val => val !== null || val != undefined).join(", ")}</p>
                                    </div>
                                </div>
                                {/* <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                    <button className="mt-6 md:mt-0  py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Edit Details</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderDetails