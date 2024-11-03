import React from 'react'
import { ScrollArea } from '../ui/scroll-area'
import { SiteFooter } from '../ui/site-footer'

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
    scrollable = false,
    footerSections = [],
    logoSrc = '',
    companyName = '',
    hideInfo = false,
}: PageContainerProps) {
    return (
        <>
            {scrollable ? (
                <ScrollArea className="h-[calc(100dvh-52px)]">
                    <div className="h-full px-[20px] py-4 mx-auto">
                        {children}
                    </div>
                    <div className="mt-[80px]">
                        <SiteFooter
                            sections={footerSections}
                            logoSrc={logoSrc}
                            companyName={companyName}
                            hideInfo={hideInfo}
                        />
                    </div>
                </ScrollArea>
            ) : (
                <div className="h-full p-4 px-[20px]">{children}</div>
            )}
        </>
    )
}
