export default function Card({children}: {children: React.ReactNode}) {
    return (
        <div className="p-3 rounded-lg bg-white">
            {children}
        </div>
    )
}

Card.title = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex justify-between my-2.5">
            {children}
        </div>
    )
}

Card.content = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            {children}
        </div>
    )
}