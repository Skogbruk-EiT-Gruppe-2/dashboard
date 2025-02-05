import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

export default function Button(props: ButtonProps) {
    const propsWithoutClassName = { ...props }
    delete propsWithoutClassName.className

    return (
        <button
            {...propsWithoutClassName}
            className={twMerge(
                'bg-primary hover:cursor-pointer text-white p-md rounded-sm hover:opacity-90 transition-opacity h-min',
                props.className
            )}
        ></button>
    )
}
