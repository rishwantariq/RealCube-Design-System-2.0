import * as React from 'react'
interface FooterLink {
    title: string
    href: string
}
interface FooterProps {
    sections?: {
        title: string
        links: FooterLink[]
    }[]
    newsletterForm?: React.ReactNode
    logoSrc: string
    companyName: string
    hideInfo?: boolean
}
export declare function SiteFooter({
    sections,
    newsletterForm,
    logoSrc,
    companyName,
    hideInfo,
}: FooterProps): import('react/jsx-runtime').JSX.Element | null
export {}
