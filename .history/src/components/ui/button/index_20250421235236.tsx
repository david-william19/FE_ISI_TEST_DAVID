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
                className=""
                {...props}
            >

            </button>
        )
    }
}