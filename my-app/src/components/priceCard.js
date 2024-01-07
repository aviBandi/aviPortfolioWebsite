import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const PriceCard = ({ title, description, cost, whyMe }) => {

    return (

        <div className="mx-auto mt-16 rounded-2xl ring-1 ring-gray-200 sm:mt-8 lg:mx-0 lg:flex max-w-5xl">
            <div className="p-8 sm:p-5 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                    {description}
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">Why me:</h4>
                    <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                    {whyMe.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                            <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 ">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                        <p className="text-base font-semibold text-gray-600">Starting at</p>
                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                            <span className="text-4xl font-bold tracking-tight text-gray-900">${cost}</span>
                            <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                        </p>
                        <Link to="/contact">
                            <p className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center border-2 border-blue-600 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-blue-600 transition-colors">
                                Contact Me
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PriceCard
