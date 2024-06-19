
export default function OtraPage({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h1>Hello Root desde aqui </h1>

            {children}
            
        </div>
    );
}


