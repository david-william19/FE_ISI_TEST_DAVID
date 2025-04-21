export default function Card({children}: {children: React.ReactNode}) {
    return (
        <div className="p-3 rounded-lg bg-white">
            {children}
        </div>
    )
}

Card.title = ({children}) => {
    return (
        <div className="flex justi">

        </div>
    )
}