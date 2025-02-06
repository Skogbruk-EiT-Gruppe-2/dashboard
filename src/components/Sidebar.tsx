import { Bird, Home, Settings } from 'lucide-react'
import { useLocation } from 'react-router'
import { twJoin } from 'tailwind-merge'

type SidebarLinkProps = {
    selected?: boolean
    href?: string
    children?: React.ReactNode
}

function SidebarLink(props: SidebarLinkProps) {
    const { href, selected, children } = props

    return (
        <a href={href} className="h-min">
            <div className="w-full aspect-square flex justify-center items-center relative">
                <div
                    className={twJoin(
                        'absolute top-xs left-xs bottom-xs right-xs bg-black dark:bg-white rounded-full',
                        selected ? 'opacity-10' : 'opacity-0'
                    )}
                />
                <div className="z-10">{children}</div>
            </div>
        </a>
    )
}

export default function Sidebar() {
    const { pathname } = useLocation()

    return (
        <nav className="flex flex-col w-2xl px-md h-dvh items-center bg-container-light dark:bg-container-dark py-md gap-lg">
            <Bird />
            <div className="flex flex-col flex-1 w-full justify-between gap-lg">
                <div className="grow">
                    <SidebarLink href="/" selected={pathname === '/'}>
                        <Home />
                    </SidebarLink>
                </div>
                <SidebarLink
                    href="/settings"
                    selected={pathname === '/settings'}
                >
                    <Settings />
                </SidebarLink>
            </div>
        </nav>
    )
}
