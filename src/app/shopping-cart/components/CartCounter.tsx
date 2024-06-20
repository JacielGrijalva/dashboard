'use client'
import { useState } from "react"

const cartShoping = () => {


    const [numero, setNumero] = useState<number>(5)

    return (
        <>
            <span className='text-9xl'>{numero}</span>

            <div className='flex'>

                <button
                    onClick={() => setNumero(numero + 1)}
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'>+1</button>

                <button
                    onClick={() => setNumero(numero - 1)}
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'>-1</button>
            </div>
        </>
    )
}

export default cartShoping
