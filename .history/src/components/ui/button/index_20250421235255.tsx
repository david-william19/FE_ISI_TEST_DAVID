import React from "react";

type ButtonType = 'primary' | 'secondary'

interface ButtonProps {
    children: React.ReactNode;
    type: ButtonType;
}

export function Button({children, type, ...props}: ButtonProps) {
    if(type == 'primary') {
        return (
            <button
                className="bg-[#644A07] hover:bg-[#594100] text-[#FFC6C6] "
                {...props}
            >

            </button>
        )
    }
}