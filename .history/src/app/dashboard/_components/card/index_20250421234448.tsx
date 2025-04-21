export function Card({children}: {children: React.ReactNode}) {
    return (
        <div className="p-5 rounded-lg bg-white">
            {children}
        </div>
    )
}

export Card.title = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex justify-between mb-3">
            {children}
        </div>
    )
}

export constHeader = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="w-full">
            {children}
        </div>
    )
}