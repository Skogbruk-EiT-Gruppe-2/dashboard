import { twMerge } from 'tailwind-merge'

export type ListElementProps = {
    title: string
    description?: string
    footer?: string
    className?: string
}

export default function ListElement(props: ListElementProps) {
    const { title, description, className, footer } = props
    return (
        <div
            className={twMerge(
                'p-md rounded-sm border border-border-light dark:border-border-dark flex-1 dark:bg-container-dark flex flex-col justify-between',
                className
            )}
        >
            <div>
                <p className="text-md pb-sm">{title}</p>
                <p className="text-sm">{description}</p>
            </div>
            {footer && <p className="text-sm opacity-50">{footer}</p>}
        </div>
    )
}
