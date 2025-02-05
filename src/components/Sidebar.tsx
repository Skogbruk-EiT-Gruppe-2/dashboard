import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { setFromDate } from '../redux/filtersSlice'
import Button from './Button'

export default function Sidebar() {
    const fromDate = useAppSelector((state) => state.filters.fromDate)
    const dispatch = useAppDispatch()

    return (
        <div className="flex flex-col w-3xl h-dvh items-center bg-container-light dark:bg-container-dark">
            <Button onClick={() => dispatch(setFromDate(new Date()))}>
                Set to now
            </Button>
            <p>From date: {fromDate?.toString()}</p>
        </div>
    )
}
