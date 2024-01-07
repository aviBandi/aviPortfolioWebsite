import React from 'react'
import testing from "../images/testing.png"
const Testimonial = () => {
    return (
        <div>
            <div className='border-[1px] border-black px-4 py-4 rounded-xl shadow-lg'>
                <p className='text-slate-gray font-montserrat text-md'>
                    Ut repellendus doloribus a accusantium eligendi est ducimus nihil aut numquam voluptas! Sit atque atque est amet quibusdam ut aliquid omnis et facere porro quo quia fugiat et sint quas dicta.
                </p>
                <div className="flex items-center gap-x-6 mt-4">
                    <img className="h-16 w-16 rounded-full" src={testing} alt="" />
                    <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-blue-600">Avi bandi</h3>
                        <p className="text-sm font-semibold leading-6 text-slate-gray">CEO of Counterz</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
