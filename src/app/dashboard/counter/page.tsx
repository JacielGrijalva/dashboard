'use client'
import { useState } from "react"

export default function CounterPage() {



    const [numero, setNumero] = useState<number>(10)


    const incremetnNumero = () => {
        setNumero(numero + 1)
    }
    const decrementNumero = () => {
        if (numero > 0) {
            setNumero(numero - 1)

        }
    }

    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <span>Prductos del carrito</span>
            <span className='text-9xl'>{numero}</span>

            <div className='flex'>

                <button
                    onClick={incremetnNumero}
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'>+1</button>

                <button
                    onClick={decrementNumero}
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'>-1</button>
            </div>
        </div>
    )
}

