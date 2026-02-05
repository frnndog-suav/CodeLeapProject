import type React from "react"

interface IProps {
    children: React.ReactNode
}

export function Content({ children }: IProps) {
    return <div className="bg-white h-full p-6">{children}</div>
}