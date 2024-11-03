'use client'

import * as React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import {
    TypographyH1,
    TypographyH2,
    TypographyMuted,
    TypographyP,
    TypographySmall,
} from '../components/typography/typography'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../components/ui/accordion'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '../components/ui/card'

function Introduction() {
    const { theme } = useTheme() // Hook to get the theme

    return (
        <main className="py-12 px-6">
            <div className="flex flex-col gap-4">
                <TypographyH1>
                    Introduction to the Realcube Design System
                </TypographyH1>
                <TypographyMuted className="mt-2">
                    A dedicated design system for Realcube, built on top of
                    ShadCN and Radix UI with custom branding and unique
                    components.
                </TypographyMuted>
            </div>
            <TypographyP className="max-w-2xl mt-6">
                Realcube’s design system is a centralized collection of reusable
                components tailored specifically for Realcube’s applications and
                branding. It’s not just a component library—it’s a standalone
                Storybook-based package distributed via npm for seamless
                integration across projects.
            </TypographyP>

            <section className="mt-12">
                <TypographyH2>
                    Why Realcube Needs Its Own Design System
                </TypographyH2>
                <TypographyP className="max-w-2xl mt-4">
                    While ShadCN provides a powerful foundation of generic
                    components, it lacks customization specific to Realcube’s
                    branding and user needs. To build our unique brand identity,
                    we needed customizations that go beyond ShadCN’s generic
                    components. Realcube’s design system incorporates these
                    customizations and extensions, giving us consistent, branded
                    components like configurable sidebars, customized top
                    navigation, dynamic progress forms, and customizable data
                    tables.
                </TypographyP>
                <TypographyP className="max-w-2xl mt-4">
                    This design system is critical to ensure that all Realcube
                    applications have a cohesive look and feel while remaining
                    flexible enough for future scaling. By distributing it as a
                    central npm package, we eliminate the need for manual
                    component usage across projects, ensuring consistent updates
                    and performance improvements.
                </TypographyP>
                <TypographySmall className="italic mt-4">
                    Our design system is a single source of truth, allowing
                    designers, developers, and stakeholders a unified point of
                    reference for building Realcube products.
                </TypographySmall>
                <TypographyP className="max-w-2xl mt-4">
                    For a comprehensive overview of the process for versioning,
                    adding new components, and overall workflow, please refer to
                    our Miro board below.
                    <br />
                    <a
                        href="https://miro.com/app/board/uXjVLTOkSSA=/?share_link_id=9212010908"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                    >
                        Realcube Design System Process Board
                    </a>
                </TypographyP>
            </section>

            <section
                id="flow-diagrams"
                className="w-full py-12 md:py-24 lg:py-32 mt-12"
            >
                <div className="container px-4 md:px-6">
                    <TypographyH2 className="tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                        Design System Workflow
                    </TypographyH2>
                    <div className="grid gap-6 lg:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Creation Process</CardTitle>
                                <CardDescription>
                                    The journey from concept to a fully-fledged
                                    design system
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/assets/UI-1.jpg"
                                    alt="Design System Creation Process"
                                    width={600}
                                    height={400}
                                    className="rounded-lg object-cover w-full h-auto"
                                    style={{
                                        filter:
                                            theme === 'dark'
                                                ? 'invert(1)'
                                                : 'none',
                                    }}
                                />
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Maintenance Workflow</CardTitle>
                                <CardDescription>
                                    Keeping the design system up-to-date and
                                    evolving with your needs
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/assets/UI-2.jpg"
                                    alt="Design System Maintenance Workflow"
                                    width={600}
                                    height={400}
                                    className="rounded-lg object-cover w-full h-auto"
                                    style={{
                                        filter:
                                            theme === 'dark'
                                                ? 'invert(1)'
                                                : 'none',
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="mt-12">
                <TypographyH2>FAQ</TypographyH2>
                <Accordion
                    type="single"
                    collapsible
                    className="max-w-xs md:max-w-sm lg:max-w-2xl mt-6"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Why does Realcube use ShadCN as a base?
                        </AccordionTrigger>
                        <AccordionContent>
                            <TypographyP className="max-w-2xl">
                                ShadCN offers a strong foundation of base
                                components and utilities built with Radix UI and
                                Tailwind CSS, making it an efficient starting
                                point. However, ShadCN is generic by nature and
                                widely used by other applications, so Realcube’s
                                design system extends it with unique branding
                                and functionalities.
                            </TypographyP>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Why is Storybook necessary for Realcube?
                        </AccordionTrigger>
                        <AccordionContent>
                            <TypographyP className="max-w-2xl">
                                Storybook provides an interactive platform for
                                developing, testing, and documenting components
                                in isolation. For Realcube, it’s essential to
                                have a clear, centralized point where all team
                                members can view and test components
                                consistently. This ensures that the design
                                system evolves seamlessly and remains aligned
                                with Realcube’s branding.
                            </TypographyP>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Why distribute Realcube’s design system as an npm
                            package?
                        </AccordionTrigger>
                        <AccordionContent>
                            <TypographyP className="max-w-2xl">
                                Publishing the design system as an npm package
                                allows for consistent and rapid adoption of
                                Realcube’s components across projects. This
                                approach avoids manual copying and pasting of
                                components, which would lead to inconsistencies
                                and maintenance challenges over time.
                            </TypographyP>
                            <TypographyP className="max-w-2xl">
                                As a central package, it ensures easy access to
                                the latest updates, performance improvements,
                                and bug fixes.
                            </TypographyP>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            What additional components are included in
                            Realcube’s design system?
                        </AccordionTrigger>
                        <AccordionContent>
                            <TypographyP className="max-w-2xl">
                                Beyond the basic components provided by ShadCN,
                                Realcube’s design system includes:
                            </TypographyP>
                            <ul className="list-disc ml-5">
                                <li>
                                    Configurable Sidebar with multi-level
                                    navigation
                                </li>
                                <li>
                                    Top Navigation with customizable menus and
                                    actions
                                </li>
                                <li>
                                    Dynamic Progress Forms that adapt to user
                                    input
                                </li>
                                <li>Advanced, customizable Data Tables</li>
                                <li>
                                    And much more, with additional components
                                    being added continuously
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            How will new components be added?
                        </AccordionTrigger>
                        <AccordionContent>
                            <TypographyP className="max-w-2xl">
                                As Realcube’s requirements evolve, new
                                components will be developed and added to the
                                design system. Each addition will follow a
                                strict review and testing process within
                                Storybook to ensure that it meets Realcube’s
                                standards for usability and branding
                                consistency.
                            </TypographyP>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </main>
    )
}

export default Introduction
