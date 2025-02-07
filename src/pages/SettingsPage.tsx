import { useMemo } from 'react'
import SelectionGroup from '../components/SelectionGroup'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { setTheme } from '../redux/settingsSlice'

export default function SettingsPage() {
    const theme = useAppSelector((state) => state.settings.theme)
    const dispatch = useAppDispatch()

    const themeOptions = [
        { title: 'System', value: 'system' },
        { title: 'Light', value: 'light' },
        { title: 'Dark', value: 'dark' },
    ]
    const currentThemeIndex =
        useMemo(() => {
            for (let i = 0; i < themeOptions.length; i++) {
                if (themeOptions[i].value === theme) return i
            }
        }, [theme]) ?? 0

    const onSelectTheme = (themeValue: string) => {
        dispatch(setTheme(themeValue))
    }

    return (
        <div className="flex flex-col flex-1 w-full h-full gap-lg">
            <div className="flex items-center justify-between px-lg h-2xl w-full border-b-2 border-b-border-light dark:border-b-border-dark">
                <h1 className="text-2xl font-semibold">Settings</h1>
            </div>
            <main className="flex flex-col flex-1 w-full h-full gap-lg pb-lg px-lg">
                <label>Theme</label>
                <SelectionGroup
                    direction="horizontal"
                    options={themeOptions.map((themeOption) => ({
                        contentElement: <>{themeOption.title}</>,
                        onClick: () => onSelectTheme(themeOption.value),
                    }))}
                    selectedIndex={currentThemeIndex}
                    className="w-48"
                />
            </main>
        </div>
    )
}
