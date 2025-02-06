import { twMerge } from 'tailwind-merge'

type ButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    variant?: 'regular' | 'outlined'
}

const getStyleClassName = (variant?: string) => {
    switch (variant) {
        case 'outlined':
            return 'bg-inherit border border-text-light dark:border-text-dark text-text-light dark:text-text-dark'
        default:
            return 'bg-primary text-white hover:opacity-90'
    }
}

export default function Button(props: ButtonProps) {
    const propsWithoutClassName = { ...props }
    delete propsWithoutClassName.className

    const { variant } = props
    const styleClassName = getStyleClassName(variant)

    return (
        <button
            {...propsWithoutClassName}
            className={twMerge(
                styleClassName,
                'hover:cursor-pointer p-md rounded-sm transition-opacity h-min',
                props.className
            )}
        ></button>
    )
}
