export default function Card({children}: {children: React.ReactNode}) {
    return (
        <div className="p-5 rounded-lg bg-white">
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
        <div className="text-gray-600">
            {children}
        </div>
    )
}