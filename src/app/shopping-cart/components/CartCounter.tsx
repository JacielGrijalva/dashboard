'use client'
import { useState } from "react"

//al agregarle el ? entonces significa que es opcional entonces la tenemos que inicializar

interface Props {
    namber?: number
}
const CartShoping = ({ namber = 5 }: Props) => {


    const [numero, setNumero] = useState<number>(namber)

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

export default CartShoping

 