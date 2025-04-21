import React from "react";

type ButtonType = 'primary' | 'secondary'

interface ButtonProps {
    children: React.ReactNode;
    type: ButtonType
}

export function Button({children, type}: ButtonProps) {
    if(type == 'primary')
}