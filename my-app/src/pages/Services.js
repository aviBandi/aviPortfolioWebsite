import React from 'react'
import PriceCard from '../components/priceCard'
import Nav from "../components/Nav.js"
import { servicesList } from '../data.js'
import Footer from '../components/Footer.js'


const Services = () => {
    {window.scrollTo(0, 0)}

    return (
        <div>
            <Nav />
            <div className="isolate bg-white px-6 lg:px-8">

                <div className="mx-auto max-w-5xl text-center">
                    <div className='flex items-center pt-40'>
                        <hr class="h-0.5 mt-2 rounded-2xl bg-slate-gray flex-1 mr-12"></hr>
                        <h2 className="text-3xl text-blue-600 font-bold font-palanquin tracking-tight sm:text-4xl">Services</h2>
                        <hr class="h-0.5 mt-2 rounded-2xl bg-slate-gray flex-1 ml-12"></hr>
                    </div>
                    <div className='max-w-lg mx-auto mt-3'>
                        <p className="text-slate-gray mt-1 font-palanquin text-md text-center">
                            Interested in working with me? Check out the services I offer below. None of the prices are fixed and are open to negotiation. I appreciate your buisness!
                        </p>
                    </div>

                    {
                        servicesList.map((service) => (
                            <PriceCard title={service.title} cost={service.cost} whyMe={service.whyMe} description={service.description} />

                        ))
                    }

                </div>
            </div>
            <br></br>
            <Footer />
        </div>
    )
}

export default Services




