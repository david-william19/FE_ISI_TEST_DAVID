import React from "react";

type ButtonType = 'primary' | 'secondary'

interface ButtonProps {
    children: React.ReactNode;
    type: ButtonType;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onChange?: React.ChangeEventHandler<HTMLButtonElement>;
}

export function Button({children, type, ...props}: ButtonProps) {
    if(type == 'primary') {
        return (
            <button
                className={"bg-[#644A07] hover:bg-[#594100] text-[#FFC6C6] p-3 " + props.className}
                {...props}
            >
                {children}
            </button>
        )
    }

    if(type == 'secondary') {
        return (
            <button
                className={"bg-[#FFDBDB] hover:bg-[#FFC6C6] text-[#594100] p-3 " + props.className}
                {...props}
            >
                {children}
            </button>
        )
    }
}