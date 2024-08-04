import React from 'react'

const customer = {
    id: 706405506930370000,
    email: 'bob@biller.com',
    created_at: '2024-08-04T03:45:02+05:30',
    updated_at: '2024-08-04T03:45:02+05:30',
    first_name: 'Bob',
    last_name: 'Biller',
    orders_count: 0,
    state: 'disabled',
    total_spent: '0.00',
    last_order_id: null,
    note: 'This customer loves ice cream',
    verified_email: true,
    multipass_identifier: null,
    tax_exempt: false,
    tags: '',
    last_order_name: null,
    currency: 'INR',
    phone: null,
    addresses: [],
    tax_exemptions: [],
    email_marketing_consent: null,
    sms_marketing_consent: null,
    admin_graphql_api_id: 'gid://shopify/Customer/706405506930370084'
  };

function CustomerDetails() {

    
    return (
        <section className="self-stretch flex flex-col items-start justify-start gap-[24.3px] max-w-full text-left text-5xl text-gray-900 font-text-sm-leading-5-font-medium">
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <a className="[text-decoration:none] relative leading-[32px] font-semibold text-[inherit] inline-block min-w-[67px] mq450:text-[19px] mq450:leading-[26px]">
                        Customer details
                    </a>
                </div>
            </div>
            <div className="self-stretch h-px relative bg-gray-300" />

            <div class="w-full md:w-9/12 mx-2 h-64">
                <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">About</span>
                    </div>
                    <div className="text-gray-700">
            <div className="grid grid-cols-2 text-sm">
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">First Name</div>
                    <div className="px-4 py-2">{customer.first_name}</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Last Name</div>
                    <div className="px-4 py-2">{customer.last_name}</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email</div>
                    <div className="px-4 py-2">
                        <a className="text-blue-800" href={`mailto:${customer.email}`}>{customer.email}</a>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">{customer.phone || 'N/A'}</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">State</div>
                    <div className="px-4 py-2">{customer.state}</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Total Spent</div>
                    <div className="px-4 py-2">{customer.total_spent}</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Note</div>
                    <div className="px-4 py-2">{customer.note}</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Verified Email</div>
                    <div className="px-4 py-2">{customer.verified_email ? 'Yes' : 'No'}</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Tax Exempt</div>
                    <div className="px-4 py-2">{customer.tax_exempt ? 'Yes' : 'No'}</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Currency</div>
                    <div className="px-4 py-2">{customer.currency}</div>
                </div>
            </div>
        </div>
                    
                </div>
            </div>
        </section>
    )
}

export default CustomerDetails