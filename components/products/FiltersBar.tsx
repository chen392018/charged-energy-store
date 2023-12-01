'use client'
import {useState} from 'react'

import {ChevronDownIcon} from '@heroicons/react/24/solid'

export default function FiltersBar () {

    const [extended, setExtended] = useState<boolean>(false)

    const handleClick = () => {
        setExtended(!extended)
    }

    return (
        <div className={`flex flex-col p-4 md:h-auto h-[4rem] ${extended ? 'h-fit' : ''}`}>
            <h3 className='text-xl font-bold tracking-tight text-accent-900 mb-8 '>
                Filters
            </h3>

            <div className="w-fit rounded-lg">

                <div className={`flex items-center justify-between bg-accent-200 p-2 transition-all ${extended ? 'rounded-t-lg': 'rounded-lg'}`}>
                    <h3 className="font-semibold text-gray-900">Availability</h3>
                    <ChevronDownIcon className={`h-4 w-4 ${extended ? 'rotate-180' : ''} transition-transform cursor-pointer`} onClick={handleClick} />
                </div>

                <ul className={`bg-accent-200 p-2 transition-all transform origin-top ${extended ? 'scale-y-100' : 'scale-y-0'} overflow-hidden text-sm font-medium text-gray-900 pl-4 rounded-b-lg`}>
                
                    <li className="w-full rounded-t-lg">
                        <div className="flex items-center ps-1">
                            <input id="all" type="checkbox" value="" className="w-4 h-4"/>
                            <label htmlFor="all" className="w-full py-1 ms-2 text-sm font-medium text-accent-900">All</label>
                        </div>
                    </li>
                    <li className="w-full">
                        <div className="flex items-center ps-1">
                            <input id="available" type="checkbox" value="" className="w-4 h-4"/>
                            <label htmlFor="available" className="w-full py-1 ms-2 text-sm font-medium text-accent-900">Available</label>
                        </div>
                    </li>
                    <li className="w-full rounded-b-lg">
                        <div className="flex items-center ps-1">
                            <input id="coming-soon" type="checkbox" value="" className="w-4 h-4"/>
                            <label htmlFor="coming-soon" className="w-full py-1 ms-2 text-sm font-medium text-accent-900 ">Coming Soon</label>
                        </div>
                    </li>
                    
                </ul>

            </div>
        </div>
    )

}
