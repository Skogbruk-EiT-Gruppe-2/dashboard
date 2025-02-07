import { twMerge } from 'tailwind-merge'
import Button from './Button'

type SelectionGroupOption = {
    contentElement: React.ReactNode
    onClick?: () => any
    className?: string
}

type SelectionGroupProps = {
    options: SelectionGroupOption[]
    direction?: 'horizontal' | 'vertical'
    className?: string
    selectedIndex?: number
}

export default function SelectionGroup(props: SelectionGroupProps) {
    const { options, direction, className, selectedIndex } = props

    const onSelection = (option: SelectionGroupOption) => {
        const { onClick: onClickExternal } = option
        if (onClickExternal) onClickExternal()
    }

    return (
        <div
            className={twMerge(
                'flex rounded-sm bg-container-light dark:bg-container-dark',
                direction === 'vertical' && 'flex-col',
                className
            )}
        >
            {options.map((option, index) => (
                <Button
                    variant="outlined"
                    className={twMerge(
                        'flex-1 border-border-light dark:border-border-dark p-sm',
                        index === selectedIndex
                            ? 'bg-selection-light dark:bg-selection-dark'
                            : '',
                        index === 0 && 'rounded-l-sm rounded-r-none border-r-0',
                        index === options.length - 1 &&
                            'rounded-l-none rounded-r-sm',
                        index !== 0 &&
                            index !== options.length - 1 &&
                            'rounded-none border-r-0',
                        option.className
                    )}
                    onClick={() => onSelection(option)}
                >
                    {option.contentElement}
                </Button>
            ))}
        </div>
    )
}
