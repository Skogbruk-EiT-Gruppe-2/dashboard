import { twMerge } from 'tailwind-merge'

export type ListElementProps = {
    title: string
    description?: string
    className?: string
}

export default function ListElement(props: ListElementProps) {
    const { title, description, className } = props
    return (
        <div
            className={twMerge(
                'p-md rounded-sm border border-border-light dark:border-border-dark flex-1 dark:bg-container-dark',
                className
            )}
        >
            <p className="text-md pb-sm">{title}</p>
            <p className="text-sm">{description}</p>
        </div>
    )
}
