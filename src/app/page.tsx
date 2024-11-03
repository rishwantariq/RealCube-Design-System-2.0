'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { useToast } from '@/components/ui/use-toast'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Calendar } from '@/components/ui/calendar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import {
    Moon,
    Sun,
    Code,
    Palette,
    Zap,
    AlertTriangle,
    Info,
    CheckCircle,
    Lightbulb,
    Puzzle,
    Repeat,
    Shield,
    Calendar as CalendarIcon,
    Accessibility,
    Layers,
    Search,
    Wand2,
} from 'lucide-react'
import { MultiStepLoader } from '@/components/ui/multi-step-loader'
import { FlipWords } from '@/components/ui/flip-words'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import {
    TypographyH1,
    TypographyH2,
    TypographyH3,
    TypographyH4,
    TypographyP,
    TypographyInlineCode,
    TypographyLead,
    TypographyLarge,
    TypographySmall,
    TypographyMuted,
} from '@/components/typography/typography'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { FollowerPointerCard } from '@/components/ui/following-pointer'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { Input } from '@/components/ui/input'
import * as LucideIcons from 'lucide-react'
import { type LucideIcon } from 'lucide-react'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import PageContainer from '@/components/ui/page-container'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { CardStack } from '@/components/ui/card-stack'

interface CardItem {
    id: number
    name: string
    designation: string
    content: React.ReactNode
}

// Define the props for the Highlight component
interface HighlightProps {
    children: React.ReactNode
    className?: string
}

const Highlight = ({ children, className }: HighlightProps) => {
    return (
        <span
            className={cn(
                'font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5',
                className,
            )}
        >
            {children}
        </span>
    )
}

function CardStackDemo() {
    return (
        <div className="flex w-full h-[15rem] items-center mx-auto justify-center">
            <CardStack items={CARDS} />
        </div>
    )
}

function ColorSwatch({
    name,
    color,
    textColor,
}: {
    name: string
    color: string
    textColor: string
}) {
    return (
        <div className={`p-4 rounded-lg ${color} ${textColor}`}>
            <TypographySmall className="font-semibold">{name}</TypographySmall>
            <br></br>
            <TypographySmall className="opacity-80">
                {color.replace('bg-', '')}
            </TypographySmall>
        </div>
    )
}

const CARDS: CardItem[] = [
    {
        id: 0,
        name: 'RealCube Design Team',
        designation: 'Component Architects',
        content: (
            <p>
                Our design system boasts <Highlight>100+ components</Highlight>{' '}
                built on top of shadcn/ui, providing an extensive, customizable
                library ready to suit various project needs.
            </p>
        ),
    },
    {
        id: 1,
        name: 'Accessibility Advocates',
        designation: 'Inclusivity Champions',
        content: (
            <p>
                Every component is meticulously crafted to meet{' '}
                <Highlight>WCAG 2.1 AA standards</Highlight>, ensuring
                accessible, inclusive experiences for all users, without
                compromise.
            </p>
        ),
    },
    {
        id: 2,
        name: 'UX Consistency Experts',
        designation: 'Experience Designers',
        content: (
            <p>
                Our design system enforces <Highlight>consistent UX</Highlight>{' '}
                across all platforms, helping teams maintain a cohesive look and
                feel that users intuitively understand and trust.
            </p>
        ),
    },
]

export default function Home() {
    const { toast } = useToast()
    const { theme, setTheme } = useTheme()
    const [date, setDate] = React.useState<Date>()
    const [showLoader, setShowLoader] = React.useState(false)

    const showToast = () => {
        toast({
            title: 'Toast Notification',
            description: 'This is how our toast notifications look!',
        })
    }

    const steps = [
        { text: 'Setting up your RealCube Profile' },
        { text: 'Loading Data' },
        { text: 'Defining Workflows' },
        { text: 'Loading Assets' },
        { text: 'Setting up Dashboard' },
        { text: 'Almost done' },
        { text: 'Welcome to RealCube 2.0' },
    ]

    const words = ` Explore the Realcube design system’s primary typeface: Poppins. Designed for readability, Poppins ensures a visually cohesive and accessible experience across our components and layouts.`

    const content = [
        {
            title: 'Heading 1',
            description:
                'Large and bold, used for main page titles and primary sections.',
            content: (
                <div className="flex items-center justify-center text-5xl font-extrabold text-foreground h-full w-full bg-gradient-to-br from-primary to-primary/90">
                    <TypographyH1>Heading 1</TypographyH1>
                </div>
            ),
        },
        {
            title: 'Heading 2',
            description:
                'Section headings with clear hierarchy, ideal for subsections.',
            content: (
                <div className="flex items-center justify-center text-4xl font-bold text-foreground h-full w-full bg-gradient-to-br from-secondary to-secondary/90">
                    <TypographyH2>Heading 2</TypographyH2>
                </div>
            ),
        },
        {
            title: 'Heading 3',
            description:
                'Subsection titles, smaller than H2 but still prominent.',
            content: (
                <div className="flex items-center justify-center text-3xl font-bold text-foreground h-full w-full bg-gradient-to-br from-muted to-muted/90">
                    <TypographyH3>Heading 3</TypographyH3>
                </div>
            ),
        },
        {
            title: 'Body Text',
            description:
                'Standard text size for paragraphs and main content areas.',
            content: (
                <div className="flex items-center justify-center text-lg text-background h-full w-full bg-gradient-to-br from-accent to-accent/90">
                    <TypographyP>Body Text</TypographyP>
                </div>
            ),
        },
        {
            title: 'Small Text',
            description: 'Used for captions, notes, and fine print.',
            content: (
                <div className="flex items-center justify-center text-sm text-foreground h-full w-full bg-gradient-to-br from-muted-foreground to-muted-foreground/90">
                    <TypographySmall>Small Text</TypographySmall>
                </div>
            ),
        },
    ]

    return (
        <PageContainer>
            <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
                <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="container flex h-14 items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <a className="flex items-center space-x-2" href="/">
                                <span className="font-bold sm:inline-block">
                                    RealCube Design System
                                </span>
                            </a>
                            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                                <a
                                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                                    href="#features"
                                >
                                    Features
                                </a>
                                <a
                                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                                    href="#components"
                                >
                                    Components
                                </a>
                                <a
                                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                                    href="#showcase"
                                >
                                    Showcase
                                </a>
                                <a
                                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                                    href="#why-design-system"
                                >
                                    Why Design System?
                                </a>
                            </nav>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                                setTheme(theme === 'light' ? 'dark' : 'light')
                            }
                        >
                            {theme === 'light' ? (
                                <Moon className="h-5 w-5" />
                            ) : (
                                <Sun className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </header>
                <main className="flex-1">
                    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
                        <BackgroundBeams />
                        <div className="container relative z-10 text-center">
                            <TypographyH1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                                RealCube 2.0 Design System
                            </TypographyH1>
                            <TypographyLead className="max-w-2xl mx-auto mb-8">
                                Build projects with an intuitive, consistent,
                                and powerful design system.
                            </TypographyLead>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                                <Button
                                    size="lg"
                                    onClick={() => {
                                        window.location.href =
                                            '/storybook/?path=/docs/introduction-introduction--docs'
                                    }}
                                >
                                    View Stories
                                </Button>
                            </div>
                            <div className="w-full max-w-sm mx-auto mb-8">
                                <MultiStepLoader
                                    loadingStates={steps}
                                    loading={showLoader}
                                    duration={1500}
                                />
                            </div>
                            <TypographyLarge className="font-medium">
                                Featuring{' '}
                                <FlipWords
                                    words={[
                                        '100+ Components',
                                        'WCAG Compliance',
                                        'Customizable Themes',
                                    ]}
                                />
                            </TypographyLarge>
                        </div>
                    </section>
                    <section id="why-design-system" className="py-16 md:py-24">
                        <div className="container">
                            <TypographyH2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-12">
                                Why We Need a Design System
                            </TypographyH2>
                            <div className="grid gap-8 md:grid-cols-3">
                                <Card>
                                    <CardHeader>
                                        <Puzzle className="w-10 h-10 mb-3 text-primary" />
                                        <CardTitle>
                                            Consistency at Scale
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <TypographyP>
                                            A design system ensures visual and
                                            functional consistency across all
                                            touchpoints of your real estate
                                            platform, from property listings to
                                            user dashboards.
                                        </TypographyP>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <Zap className="w-10 h-10 mb-3 text-primary" />
                                        <CardTitle>
                                            Accelerated Development
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <TypographyP>
                                            With pre-built, tested components,
                                            developers can focus on building
                                            features rather than reinventing the
                                            wheel, significantly speeding up the
                                            development process.
                                        </TypographyP>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <Lightbulb className="w-10 h-10 mb-3 text-primary" />
                                        <CardTitle>Improved UX</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <TypographyP>
                                            By standardizing UI elements and
                                            interactions, we create a more
                                            intuitive and learnable interface
                                            for users, enhancing their overall
                                            experience with your real estate
                                            platform.
                                        </TypographyP>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>
                    <section id="features" className="py-16 md:py-24">
                        <div className="container">
                            <TypographyH2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-12">
                                Key Features
                            </TypographyH2>
                            <div className="h-[30rem] flex items-center justify-center w-full">
                                <CardStackDemo></CardStackDemo>
                            </div>
                        </div>
                    </section>

                    <section
                        id="typography"
                        className="w-full py-16 md:py-24 lg:py-32 bg-background"
                    >
                        <div className="container px-4 md:px-6">
                            <TypographyH1 className="text-center mb-8">
                                Typography
                            </TypographyH1>
                            <TextGenerateEffect
                                className="text-center mx-auto pt-2 w-[70%] text-primary font-regular"
                                words={words}
                            />

                            <div className="mt-12">
                                <StickyScroll content={content} />
                            </div>
                        </div>
                    </section>

                    <section id="components" className="py-16 md:py-24">
                        <div className="container">
                            <TypographyH2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-12">
                                Component Showcase
                            </TypographyH2>
                            <Tabs defaultValue="data" className="w-full">
                                <TabsList className="grid w-full grid-cols-6 mb-8">
                                    <TabsTrigger value="data">
                                        Data Display
                                    </TabsTrigger>
                                    <TabsTrigger value="input">
                                        Input
                                    </TabsTrigger>
                                    <TabsTrigger value="feedback">
                                        Feedback
                                    </TabsTrigger>
                                    <TabsTrigger value="layout">
                                        Layout
                                    </TabsTrigger>
                                    <TabsTrigger value="advanced">
                                        Advanced
                                    </TabsTrigger>
                                    <TabsTrigger value="actions">
                                        Actions
                                    </TabsTrigger>
                                </TabsList>
                                {/* Data Display Tab */}
                                <TabsContent value="data">
                                    <div className="grid gap-8 lg:grid-cols-2">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>
                                                    Data Table
                                                </CardTitle>
                                                <CardDescription>
                                                    Powerful data grid with
                                                    sorting and filtering
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Table>
                                                    <TableHeader>
                                                        <TableRow>
                                                            <TableHead>
                                                                Property
                                                            </TableHead>
                                                            <TableHead>
                                                                Location
                                                            </TableHead>
                                                            <TableHead>
                                                                Price
                                                            </TableHead>
                                                            <TableHead>
                                                                Status
                                                            </TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell>
                                                                Sunset Villa
                                                            </TableCell>
                                                            <TableCell>
                                                                Miami, FL
                                                            </TableCell>
                                                            <TableCell>
                                                                $1,200,000
                                                            </TableCell>
                                                            <TableCell>
                                                                <Badge>
                                                                    Available
                                                                </Badge>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>
                                                                Ocean View Condo
                                                            </TableCell>
                                                            <TableCell>
                                                                Malibu, CA
                                                            </TableCell>
                                                            <TableCell>
                                                                $2,500,000
                                                            </TableCell>
                                                            <TableCell>
                                                                <Badge variant="secondary">
                                                                    Pending
                                                                </Badge>
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Accordion</CardTitle>
                                                <CardDescription>
                                                    Expandable content sections
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Accordion
                                                    type="single"
                                                    collapsible
                                                >
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            Is it accessible?
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            Yes. All components
                                                            follow WAI-ARIA
                                                            guidelines for
                                                            maximum
                                                            accessibility.
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                    <AccordionItem value="item-2">
                                                        <AccordionTrigger>
                                                            Is it customizable?
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            Absolutely. Use
                                                            Tailwind CSS or CSS
                                                            variables to
                                                            customize the look
                                                            and feel to match
                                                            your brand.
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent>
                                {/* Input Tab */}
                                <TabsContent value="input">
                                    <div className="grid gap-8 lg:grid-cols-2">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Slider</CardTitle>
                                                <CardDescription>
                                                    Intuitive range selection
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Slider
                                                    defaultValue={[33]}
                                                    max={100}
                                                    step={1}
                                                />
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Switch</CardTitle>
                                                <CardDescription>
                                                    Toggle between two states
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="flex items-center space-x-2">
                                                <Switch id="airplane-mode" />
                                                <Label htmlFor="airplane-mode">
                                                    Airplane Mode
                                                </Label>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent>
                                {/* Feedback Tab */}
                                <TabsContent value="feedback">
                                    <div className="grid gap-8 lg:grid-cols-2">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Progress</CardTitle>
                                                <CardDescription>
                                                    Visual indicator of progress
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Progress
                                                    value={33}
                                                    className="w-full"
                                                />
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Alert</CardTitle>
                                                <CardDescription>
                                                    Informative messages for
                                                    users
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Alert>
                                                    <AlertTriangle className="h-4 w-4" />
                                                    <AlertTitle>
                                                        Warning
                                                    </AlertTitle>
                                                    <AlertDescription>
                                                        This action cannot be
                                                        undone.
                                                    </AlertDescription>
                                                </Alert>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent>
                                {/* Layout Tab */}
                                <TabsContent value="layout">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Separator</CardTitle>
                                            <CardDescription>
                                                A horizontal or vertical
                                                separator line
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-1">
                                                <TypographyH4>
                                                    Radix Primitives
                                                </TypographyH4>
                                                <TypographyMuted>
                                                    An open-source UI component
                                                    library.
                                                </TypographyMuted>
                                            </div>
                                            <Separator className="my-4" />
                                            <div className="flex h-5 items-center space-x-4 text-sm">
                                                <div>Blog</div>
                                                <Separator orientation="vertical" />
                                                <div>Docs</div>
                                                <Separator orientation="vertical" />
                                                <div>Source</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                                {/* Advanced Tab */}
                                <TabsContent value="advanced">
                                    <div className="grid gap-8 lg:grid-cols-2">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Calendar</CardTitle>
                                                <CardDescription>
                                                    A date picker with range
                                                    selection
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={'outline'}
                                                            className={cn(
                                                                'w-[280px] justify-start text-left font-normal',
                                                                !date &&
                                                                    'text-muted-foreground',
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {date ? (
                                                                format(
                                                                    date,
                                                                    'PPP',
                                                                )
                                                            ) : (
                                                                <span>
                                                                    Pick a date
                                                                </span>
                                                            )}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                        <Calendar
                                                            mode="single"
                                                            selected={date}
                                                            onSelect={setDate}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Avatar</CardTitle>
                                                <CardDescription>
                                                    A visual representation of a
                                                    user
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="flex space-x-4">
                                                <Avatar>
                                                    <AvatarImage
                                                        src="https://github.com/shadcn.png"
                                                        alt="@shadcn"
                                                    />
                                                    <AvatarFallback>
                                                        CN
                                                    </AvatarFallback>
                                                </Avatar>
                                                <Avatar>
                                                    <AvatarImage
                                                        src="https://github.com/vercel.png"
                                                        alt="@vercel"
                                                    />
                                                    <AvatarFallback>
                                                        VC
                                                    </AvatarFallback>
                                                </Avatar>
                                                <Avatar>
                                                    <AvatarFallback>
                                                        JD
                                                    </AvatarFallback>
                                                </Avatar>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent>
                                {/* Actions Tab */}
                                <TabsContent value="actions">
                                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                                        <Button
                                            size="lg"
                                            onClick={() =>
                                                setShowLoader(!showLoader)
                                            }
                                        >
                                            {showLoader
                                                ? 'Hide Loader'
                                                : 'Show Loader'}
                                        </Button>
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            onClick={showToast}
                                        >
                                            Try Toast
                                        </Button>
                                    </div>
                                    {showLoader && (
                                        <div className="max-w-lg mx-auto">
                                            <MultiStepLoader
                                                loadingStates={steps}
                                            />
                                        </div>
                                    )}
                                </TabsContent>
                            </Tabs>
                        </div>
                    </section>

                    <section
                        id="color-palette-and-alerts"
                        className="w-full py-12 md:py-24 lg:py-32"
                    >
                        <div className="container px-4 md:px-6">
                            <TypographyH2 className="tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                                Color Palette & Alerts
                            </TypographyH2>
                            <div className="grid gap-6 lg:grid-cols-2">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Color Palette</CardTitle>
                                        <CardDescription>
                                            Our design system&apos;s
                                            comprehensive color scheme,
                                            organized into categories.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        {/* Background Colors */}
                                        <div className="mb-6 mt-6">
                                            <TypographyH4>
                                                Background Colors
                                            </TypographyH4>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                                <ColorSwatch
                                                    name="Background"
                                                    color="bg-background"
                                                    textColor="text-foreground"
                                                />
                                                <ColorSwatch
                                                    name="Foreground"
                                                    color="bg-foreground"
                                                    textColor="text-background"
                                                />
                                                <ColorSwatch
                                                    name="Card"
                                                    color="bg-card"
                                                    textColor="text-card-foreground"
                                                />
                                            </div>
                                        </div>

                                        {/* Primary and Secondary Colors */}
                                        <div className="mb-6 mt-6">
                                            <TypographyH4>
                                                Primary & Secondary Colors
                                            </TypographyH4>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                                <ColorSwatch
                                                    name="Primary"
                                                    color="bg-primary"
                                                    textColor="text-primary-foreground"
                                                />
                                                <ColorSwatch
                                                    name="Secondary"
                                                    color="bg-secondary"
                                                    textColor="text-secondary-foreground"
                                                />
                                                <ColorSwatch
                                                    name="Accent"
                                                    color="bg-accent"
                                                    textColor="text-accent-foreground"
                                                />
                                            </div>
                                        </div>

                                        {/* Utility Colors */}
                                        <div className="mb-6 mt-6">
                                            <TypographyH4>
                                                Utility Colors
                                            </TypographyH4>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                                <ColorSwatch
                                                    name="Muted"
                                                    color="bg-muted"
                                                    textColor="text-muted-foreground"
                                                />
                                                <ColorSwatch
                                                    name="Destructive"
                                                    color="bg-destructive"
                                                    textColor="text-destructive-foreground"
                                                />
                                                <ColorSwatch
                                                    name="Success"
                                                    color="bg-success"
                                                    textColor="text-success-foreground"
                                                />
                                                <ColorSwatch
                                                    name="Warning"
                                                    color="bg-warning"
                                                    textColor="text-warning-foreground"
                                                />
                                                <ColorSwatch
                                                    name="Info"
                                                    color="bg-info"
                                                    textColor="text-info-foreground"
                                                />
                                                <ColorSwatch
                                                    name="Action"
                                                    color="bg-action"
                                                    textColor="text-action-foreground"
                                                />
                                            </div>
                                        </div>

                                        {/* Chart Colors */}
                                        <div className="mb-6 mt-6">
                                            <TypographyH4>
                                                Chart Colors
                                            </TypographyH4>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                                <ColorSwatch
                                                    name="Chart 1"
                                                    color="bg-[hsl(var(--chart-1))]"
                                                    textColor="text-foreground"
                                                />
                                                <ColorSwatch
                                                    name="Chart 2"
                                                    color="bg-[hsl(var(--chart-2))]"
                                                    textColor="text-foreground"
                                                />
                                                <ColorSwatch
                                                    name="Chart 3"
                                                    color="bg-[hsl(var(--chart-3))]"
                                                    textColor="text-foreground"
                                                />
                                                <ColorSwatch
                                                    name="Chart 4"
                                                    color="bg-[hsl(var(--chart-4))]"
                                                    textColor="text-foreground"
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Alert Types</CardTitle>
                                        <CardDescription>
                                            Various alert styles for different
                                            scenarios.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <Alert>
                                            <Info className="h-4 w-4" />
                                            <AlertTitle>Information</AlertTitle>
                                            <AlertDescription>
                                                This is an information alert.
                                            </AlertDescription>
                                        </Alert>
                                        <Alert variant="failure">
                                            <AlertTriangle className="h-4 w-4" />
                                            <AlertTitle>Error</AlertTitle>
                                            <AlertDescription>
                                                This is an error alert.
                                            </AlertDescription>
                                        </Alert>
                                        <Alert variant="warning">
                                            <AlertTriangle className="h-4 w-4" />
                                            <AlertTitle>Warning</AlertTitle>
                                            <AlertDescription>
                                                This is a warning alert.
                                            </AlertDescription>
                                        </Alert>
                                        <Alert variant="success">
                                            <CheckCircle className="h-4 w-4" />
                                            <AlertTitle>Success</AlertTitle>
                                            <AlertDescription>
                                                This is a success alert.
                                            </AlertDescription>
                                        </Alert>
                                        <Alert variant="info">
                                            <Info className="h-4 w-4" />
                                            <AlertTitle>Info</AlertTitle>
                                            <AlertDescription>
                                                This is an info alert.
                                            </AlertDescription>
                                        </Alert>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="py-6 bg-background border-t">
                    <div className="container">
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                            <TypographyMuted className="text-center md:text-left">
                                © 2024 RealCube Design System. All rights
                                reserved.
                            </TypographyMuted>
                            <nav className="flex items-center gap-4">
                                <a
                                    className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                                    href="#"
                                >
                                    Terms
                                </a>
                                <a
                                    className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                                    href="#"
                                >
                                    Privacy
                                </a>
                                <a
                                    className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                                    href="#"
                                >
                                    Accessibility
                                </a>
                            </nav>
                        </div>
                    </div>
                </footer>
            </div>
        </PageContainer>
    )
}
