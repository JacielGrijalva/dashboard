import { CartCounter } from "@/app/shopping-cart"

export const metadata = {
    title: 'Counter Page',
    description: 'Un simple contador'
}

export default function CounterPage() {


    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <span>Prductos del carrito</span>
            <CartCounter namber={5} />
        </div>
    )
}

