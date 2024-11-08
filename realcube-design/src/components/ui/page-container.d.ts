import React from 'react'
interface PageContainerProps {
    children: React.ReactNode
    scrollable?: boolean
    footerSections?: Array<any>
    logoSrc?: string
    companyName?: string
    hideInfo?: boolean
}
export default function PageContainer({
    children,
    scrollable,
    footerSections,
    logoSrc,
    companyName,
    hideInfo,
}: PageContainerProps): import('react/jsx-runtime').JSX.Element
export {}
