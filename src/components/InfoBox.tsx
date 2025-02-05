import { twMerge } from 'tailwind-merge'

type InfoBoxProps = {
    title: string
    value?: string
    description?: string
    icon?: React.ReactNode
    className?: string
    children?: React.ReactNode
}

export default function InfoBox(props: InfoBoxProps) {
    const { title, value, description, icon, className, children } = props

    return (
        <div
            className={twMerge(
                'rounded-sm border border-border-light dark:border-border-dark dark:bg-container-dark p-md flex justify-between flex-col relative',
                className
            )}
        >
            <div className="h-full flex flex-col">
                <div>
                    <p className="text-lg">{title}</p>
                    {value !== undefined && (
                        <p className="text-2xl font-semibold">{value}</p>
                    )}
                </div>
                {children !== undefined && (
                    <div className="flex-1 pb-lg pt-sm">{children}</div>
                )}
            </div>
            <p className="text-sm shrink">{description}</p>
            {icon && (
                <div className=" absolute right-md bottom-md rounded-full bg-gray-50 dark:bg-gray-950 p-sm">
                    {icon}
                </div>
            )}
        </div>
    )
}
