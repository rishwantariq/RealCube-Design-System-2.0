'use client'

import * as React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    MoveRight,
    PhoneCall,
    MoveUpRight,
    MoveDownLeft,
    Check,
    Moon,
    Sun,
    Palette,
    Type,
    Zap,
    Shield,
    Sparkles,
    Box,
    Layers,
    Layout,
    List,
    Sliders,
    ToggleLeft,
    User,
    PaintBucket,
    Paintbrush,
    CheckCheck,
    Code,
} from 'lucide-react'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { MultiStepLoader } from '@/components/ui/multi-step-loader'
import { FlipWords } from '@/components/ui/flip-words'
import PageContainer from '@/components/ui/page-container'
import {
    TypographyH1,
    TypographyH2,
    TypographyH3,
    TypographyH4,
    TypographyP,
    TypographyLead,
    TypographySmall,
} from '@/components/typography/typography'
import { cn } from '@/lib/utils'
import { Checkbox } from '@radix-ui/react-checkbox'
import { RadioGroup } from '@radix-ui/react-dropdown-menu'
import { RadioGroupItem } from '@radix-ui/react-radio-group'
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@radix-ui/react-select'
import { Slider } from '@radix-ui/react-slider'
import { Switch } from '@radix-ui/react-switch'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Highlight = ({ children }: { children: React.ReactNode }) => (
    <span
        className={cn(
            'font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5',
        )}
    >
        {children}
    </span>
)

const ColorSwatch = ({ name, color }: { name: string; color: string }) => (
    <div className="flex flex-col items-center">
        <div className={`w-16 h-16 rounded-full ${color}`} />
        <TypographySmall className="mt-2">{name}</TypographySmall>
    </div>
)

export default function Home() {
    const { theme, setTheme } = useTheme()
    const [date, setDate] = useState<Date>()
    const [showLoader, setShowLoader] = useState(false)
    const [carouselApi, setCarouselApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [titleNumber, setTitleNumber] = useState(0)

    const titles = useMemo(
        () => ['powerful', 'flexible', 'accessible', 'modern', 'scalable'],
        [],
    )

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTitleNumber((prev) =>
                prev === titles.length - 1 ? 0 : prev + 1,
            )
        }, 2000)
        return () => clearTimeout(timeoutId)
    }, [titleNumber, titles])

    useEffect(() => {
        if (!carouselApi) return
        const interval = setInterval(() => {
            if (
                carouselApi.selectedScrollSnap() + 1 ===
                carouselApi.scrollSnapList().length
            ) {
                setCurrent(0)
                carouselApi.scrollTo(0)
            } else {
                carouselApi.scrollNext()
                setCurrent(current + 1)
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [carouselApi, current])

    useEffect(() => {
        if (!carouselApi) return
        const interval = setInterval(() => {
            carouselApi.scrollNext()
        }, 3000)
        return () => clearInterval(interval)
    }, [carouselApi])

    const componentCategories = [
        { name: 'Layout', icon: <Layout className="w-6 h-6" /> },
        { name: 'Forms', icon: <Box className="w-6 h-6" /> },
        { name: 'Data Display', icon: <List className="w-6 h-6" /> },
        { name: 'Feedback', icon: <Zap className="w-6 h-6" /> },
        { name: 'Surfaces', icon: <Layers className="w-6 h-6" /> },
        { name: 'Navigation', icon: <ToggleLeft className="w-6 h-6" /> },
        { name: 'Typography', icon: <Type className="w-6 h-6" /> },
        { name: 'Theming', icon: <Palette className="w-6 h-6" /> },
        { name: 'Data Input', icon: <Sliders className="w-6 h-6" /> },
        { name: 'User', icon: <User className="w-6 h-6" /> },
    ]

    return (
        <PageContainer>
            <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
                <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="container flex h-14 items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <a className="flex items-center space-x-2" href="/">
                                <span className="font-bold sm:inline-block">
                                    RealCube Design System
                                </span>
                            </a>
                            <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
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
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="w-full py-20 lg:py-40">
                    <div className="container mx-auto">
                        <div className="flex gap-8 items-center justify-center flex-col">
                            <div>
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    className="gap-4"
                                    onClick={() =>
                                        window.open(
                                            process.env
                                                .NEXT_PUBLIC_STORYBOOK_URL,
                                            '_blank',
                                        )
                                    }
                                >
                                    Explore our components{' '}
                                    <MoveRight className="w-4 h-4" />
                                </Button>
                            </div>
                            <div className="flex gap-4 flex-col">
                                <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                                    <span className="text-primary">
                                        RealCube 2.0 is
                                    </span>
                                    <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                                        &nbsp;
                                        {titles.map((title, index) => (
                                            <motion.span
                                                key={index}
                                                className="absolute font-semibold"
                                                initial={{
                                                    opacity: 0,
                                                    y: '-100',
                                                }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 50,
                                                }}
                                                animate={
                                                    titleNumber === index
                                                        ? { y: 0, opacity: 1 }
                                                        : {
                                                              y:
                                                                  titleNumber >
                                                                  index
                                                                      ? -150
                                                                      : 150,
                                                              opacity: 0,
                                                          }
                                                }
                                            >
                                                {title}
                                            </motion.span>
                                        ))}
                                    </span>
                                </h1>
                                <TypographyLead className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                                    Elevate your design workflow with RealCube
                                    2.0. Our comprehensive design system
                                    streamlines development, ensuring
                                    consistency and accessibility across all
                                    your projects.
                                </TypographyLead>
                            </div>
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-row gap-3">
                                    <Button
                                        size="lg"
                                        className="gap-4"
                                        onClick={() =>
                                            window.open(
                                                'https://miro.com/app/board/uXjVLTOkSSA=/?share_link_id=768981108472',
                                                '_blank',
                                            )
                                        }
                                    >
                                        View Process{' '}
                                        <MoveRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="w-full py-20 lg:py-40 bg-card">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="flex gap-4 flex-col items-start">
                                <Badge>Impact</Badge>
                                <div className="flex gap-2 flex-col">
                                    <TypographyH2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                                        Transforming design workflows
                                    </TypographyH2>
                                    <TypographyP className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                                        RealCube 2.0 is revolutionizing how
                                        teams approach design and development.
                                        Our comprehensive system simplifies
                                        processes, enhances consistency, and
                                        boosts productivity across projects of
                                        all sizes.
                                    </TypographyP>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-4">
                                    {[
                                        {
                                            icon: (
                                                <Code className="w-6 h-6 mb-4 text-primary" />
                                            ),
                                            count: '100+',
                                            label: 'Components',
                                            description:
                                                'Ready-to-use, customizable UI elements',
                                        },
                                        {
                                            icon: (
                                                <MoveUpRight className="w-6 h-6 mb-4 text-primary" />
                                            ),
                                            count: '50%',
                                            label: 'Faster Development',
                                            description:
                                                'Development time reduction',
                                        },
                                        {
                                            icon: (
                                                <CheckCheck className="w-6 h-6 mb-4 text-primary" />
                                            ),
                                            count: 'WCAG 2.1',
                                            label: 'Compliant',
                                            description:
                                                'Ensuring accessibility for all users',
                                        },
                                        {
                                            icon: (
                                                <Paintbrush className="w-6 h-6 mb-4 text-primary" />
                                            ),
                                            count: 'Adaptable',
                                            label: 'Design System',
                                            description:
                                                'Adapts to different products and needs',
                                        },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col justify-between p-6 border rounded-md hover:shadow-lg transition-shadow"
                                        >
                                            {item.icon}
                                            <div className="flex flex-col items-baseline gap-2">
                                                <Badge
                                                    variant="secondary"
                                                    className="text-xs font-medium px-2 py-1"
                                                >
                                                    {item.label}
                                                </Badge>
                                                <h2 className="text-4xl tracking-tighter font-semibold text-left">
                                                    {item.count}
                                                </h2>
                                            </div>
                                            <p className="mt-2 text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="w-full py-20 lg:py-40">
                    <div className="container mx-auto">
                        <div className="flex gap-4 flex-col items-start">
                            <Badge>Features</Badge>
                            <div className="flex gap-2 flex-col">
                                <TypographyH2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
                                    Why choose RealCube 2.0?
                                </TypographyH2>
                                <TypographyP className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
                                    Our design system is built to empower your
                                    team and streamline your workflow.
                                </TypographyP>
                            </div>
                            <div className="flex gap-10 pt-12 flex-col w-full">
                                <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
                                    <div className="flex flex-row gap-6 w-full items-start">
                                        <Check className="w-4 h-4 mt-2 text-primary" />
                                        <div className="flex flex-col gap-1">
                                            <p>
                                                Comprehensive Component Library
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                100+ customizable, ready-to-use
                                                components.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-6 items-start">
                                        <Check className="w-4 h-4 mt-2 text-primary" />
                                        <div className="flex flex-col gap-1">
                                            <p>Accessibility First</p>
                                            <p className="text-muted-foreground text-sm">
                                                WCAG 2.1 AA compliant out of the
                                                box.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-6 items-start">
                                        <Check className="w-4 h-4 mt-2 text-primary" />
                                        <div className="flex flex-col gap-1">
                                            <p>Flexible Theming</p>
                                            <p className="text-muted-foreground text-sm">
                                                Easily customize to match your
                                                brand.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-6 w-full items-start">
                                        <Check className="w-4 h-4 mt-2 text-primary" />
                                        <div className="flex flex-col gap-1">
                                            <p>Responsive Design</p>
                                            <p className="text-muted-foreground text-sm">
                                                Optimized for all screen sizes
                                                and devices.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-6 items-start">
                                        <Check className="w-4 h-4 mt-2 text-primary" />
                                        <div className="flex flex-col gap-1">
                                            <p>Developer Friendly</p>
                                            <p className="text-muted-foreground text-sm">
                                                Built with modern web
                                                technologies.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-6 items-start">
                                        <Check className="w-4 h-4 mt-2 text-primary" />
                                        <div className="flex flex-col gap-1">
                                            <p>Regular Updates</p>
                                            <p className="text-muted-foreground text-sm">
                                                Continuous improvements and new
                                                features.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trusted By Section */}
                <section className="w-full py-20 lg:py-40 bg-background">
                    <div className="container mx-auto">
                        <TypographyH2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                            RealCube 2.0 Component Library
                        </TypographyH2>
                        <TypographyP className="text-center mb-12 text-muted-foreground">
                            Explore our comprehensive set of customizable,
                            accessible components
                        </TypographyP>

                        <div className="mb-0">
                            <Carousel
                                setApi={setCarouselApi}
                                className="w-full"
                            >
                                <CarouselContent>
                                    {componentCategories.map(
                                        (category, index) => (
                                            <CarouselItem
                                                key={index}
                                                className="basis-1/2 md:basis-1/3 lg:basis-1/5"
                                            >
                                                <div className="flex flex-col items-center justify-center p-4 bg-card rounded-lg h-32">
                                                    {category.icon}
                                                    <span className="mt-2 text-sm font-semibold">
                                                        {category.name}
                                                    </span>
                                                </div>
                                            </CarouselItem>
                                        ),
                                    )}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </div>
                </section>

                <section className="w-full py-20 lg:py-40 bg-background">
                    <div className="container mx-auto">
                        <Badge>Component Showcase</Badge>
                        <TypographyH2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular mt-4">
                            Explore Essential UI Components
                        </TypographyH2>
                        <TypographyP className="text-lg max-w-2xl leading-relaxed tracking-tight text-muted-foreground mt-4">
                            Our library includes versatile components that
                            elevate your projects.
                        </TypographyP>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                            {/* Button Component */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Button</CardTitle>
                                    <CardDescription>
                                        Interactive button component with
                                        variants
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex flex-wrap gap-2">
                                    <Button variant="default">Default</Button>
                                    <Button variant="secondary">
                                        Secondary
                                    </Button>
                                    <Button variant="outline">Outline</Button>
                                    <Button variant="ghost">Ghost</Button>
                                </CardContent>
                            </Card>

                            {/* Input Component */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Input</CardTitle>
                                    <CardDescription>
                                        Flexible input component for various
                                        data types
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Input type="email" placeholder="Email" />
                                </CardContent>
                            </Card>

                            {/* Tabs Component */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Tabs</CardTitle>
                                    <CardDescription>
                                        Organize content into separate views
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Tabs defaultValue="account">
                                        <TabsList>
                                            <TabsTrigger value="account">
                                                Account
                                            </TabsTrigger>
                                            <TabsTrigger value="password">
                                                Password
                                            </TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="account">
                                            Account settings
                                        </TabsContent>
                                        <TabsContent value="password">
                                            Change password
                                        </TabsContent>
                                    </Tabs>
                                </CardContent>
                            </Card>

                            {/* Checkbox Component */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Checkbox</CardTitle>
                                    <CardDescription>
                                        Selectable input for multiple options
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex items-center space-x-2">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms">
                                        Accept terms and conditions
                                    </Label>
                                </CardContent>
                            </Card>

                            {/* Radio Group Component */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Radio Group</CardTitle>
                                    <CardDescription>
                                        Select a single option from a set
                                    </CardDescription>
                                </CardHeader>
                                <CardContent></CardContent>
                            </Card>

                            {/* Select Component */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Select</CardTitle>
                                    <CardDescription>
                                        Dropdown selection component
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a fruit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="apple">
                                                Apple
                                            </SelectItem>
                                            <SelectItem value="banana">
                                                Banana
                                            </SelectItem>
                                            <SelectItem value="orange">
                                                Orange
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </CardContent>
                            </Card>

                            {/* Slider Component */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Slider</CardTitle>
                                    <CardDescription>
                                        Select a value from a range
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Slider
                                        defaultValue={[50]}
                                        max={100}
                                        step={1}
                                    />
                                </CardContent>
                            </Card>

                            {/* Switch Component */}
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

                            {/* Badge Component */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Badge</CardTitle>
                                    <CardDescription>
                                        Small status descriptors
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex flex-wrap gap-2">
                                    <Badge>Default</Badge>
                                    <Badge variant="secondary">Secondary</Badge>
                                    <Badge variant="outline">Outline</Badge>
                                    <Badge variant="destructive">
                                        Destructive
                                    </Badge>
                                </CardContent>
                            </Card>

                            {/* Avatar Component */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Avatar</CardTitle>
                                    <CardDescription>
                                        Visual representation of a user
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex space-x-4">
                                    <Avatar>
                                        <AvatarImage
                                            src="https://github.com/shadcn.png"
                                            alt="@shadcn"
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Avatar>
                                        <AvatarImage
                                            src="https://github.com/vercel.png"
                                            alt="@vercel"
                                        />
                                        <AvatarFallback>VC</AvatarFallback>
                                    </Avatar>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="mt-12 text-center">
                            <Button
                                size="lg"
                                onClick={() =>
                                    window.open(
                                        process.env.NEXT_PUBLIC_STORYBOOK_URL,
                                        '_blank',
                                    )
                                }
                            >
                                Explore All Components
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Color Palette Section */}
                <section className="w-full py-20 lg:py-40">
                    <div className="container mx-auto">
                        <Badge>Color System</Badge>
                        <TypographyH2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular mt-4">
                            Harmonious and Accessible Color Palette
                        </TypographyH2>
                        <TypographyP className="text-lg max-w-2xl leading-relaxed tracking-tight text-muted-foreground mt-4">
                            Our carefully crafted color system ensures
                            consistency, accessibility, and flexibility across
                            all your projects.
                        </TypographyP>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 mt-12">
                            <ColorSwatch name="Primary" color="bg-primary" />
                            <ColorSwatch
                                name="Secondary"
                                color="bg-secondary"
                            />
                            <ColorSwatch name="Accent" color="bg-accent" />
                            <ColorSwatch name="Muted" color="bg-muted" />
                            <ColorSwatch name="Card" color="bg-card" />
                            <ColorSwatch
                                name="Destructive"
                                color="bg-destructive"
                            />
                            <ColorSwatch name="Success" color="bg-success" />
                            <ColorSwatch name="Warning" color="bg-warning" />
                        </div>
                    </div>
                </section>

                {/* Typography Section */}
                <section className="w-full py-20 lg:py-40 bg-card">
                    <div className="container mx-auto">
                        <Badge>Typography</Badge>
                        <TypographyH2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular mt-4">
                            Clear and Consistent Typography with Poppins
                        </TypographyH2>
                        <TypographyP className="text-lg max-w-2xl leading-relaxed tracking-tight text-muted-foreground mt-4">
                            Our typography system is designed for readability
                            and scalability across all devices and platforms.
                        </TypographyP>
                        <div className="mt-12 space-y-8">
                            <div>
                                <TypographyH1>Heading 1</TypographyH1>
                                <TypographySmall className="text-muted-foreground">
                                    Used for main page titles
                                </TypographySmall>
                            </div>
                            <div>
                                <TypographyH2>Heading 2</TypographyH2>
                                <TypographySmall className="text-muted-foreground">
                                    Used for section headers
                                </TypographySmall>
                            </div>
                            <div>
                                <TypographyH3>Heading 3</TypographyH3>
                                <TypographySmall className="text-muted-foreground">
                                    Used for subsection headers
                                </TypographySmall>
                            </div>
                            <div>
                                <TypographyP>Body Text</TypographyP>
                                <TypographySmall className="text-muted-foreground">
                                    Used for main content
                                </TypographySmall>
                            </div>
                            <div>
                                <TypographySmall>Small Text</TypographySmall>
                                <br></br>
                                <TypographySmall className="text-muted-foreground">
                                    Used for captions and helper text
                                </TypographySmall>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-20 lg:py-40 bg-background">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-10">
                            <div>
                                <Badge variant="outline">FAQ</Badge>
                                <TypographyH2 className="text-3xl md:text-5xl tracking-tighter font-regular mt-4">
                                    Frequently Asked Questions
                                </TypographyH2>
                                <TypographyP className="text-lg max-w-lg leading-relaxed tracking-tight text-muted-foreground mt-4">
                                    Get answers to common questions about
                                    RealCube 2.0 Design System and how it can
                                    benefit your projects.
                                </TypographyP>
                                <Button
                                    className="gap-4 mt-4"
                                    variant="outline"
                                >
                                    Contact Support{' '}
                                    <PhoneCall className="w-4 h-4" />
                                </Button>
                            </div>
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                            >
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        What is RealCube 2.0 Design System?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        RealCube 2.0 is a comprehensive design
                                        system that provides a set of reusable
                                        components, guidelines, and tools to
                                        create consistent and accessible user
                                        interfaces for web applications.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        How does RealCube 2.0 ensure
                                        accessibility?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        All components in RealCube 2.0 are
                                        designed and tested to meet WCAG 2.1 AA
                                        standards, ensuring that your
                                        applications are accessible to a wide
                                        range of users, including those with
                                        disabilities.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>
                                        Can I customize RealCube 2.0 to match my
                                        brand?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Yes, RealCube 2.0 is highly
                                        customizable. You can easily modify
                                        colors, typography, and other design
                                        tokens to align with your brand
                                        guidelines while maintaining consistency
                                        across your projects.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>
                                        Is RealCube 2.0 suitable for large-scale
                                        applications?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Absolutely. RealCube 2.0 is built to
                                        scale, with performance optimizations
                                        and a modular architecture that makes it
                                        suitable for projects of any size, from
                                        small websites to large enterprise
                                        applications.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>
                                        How often is RealCube 2.0 updated?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        We regularly update RealCube 2.0 with
                                        new features, components, and
                                        improvements. Our team is committed to
                                        keeping the design system current with
                                        the latest web standards and best
                                        practices.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full py-20 lg:py-40 bg-primary text-primary-foreground">
                    <div className="container mx-auto text-center">
                        <TypographyH2 className="text-3xl md:text-5xl tracking-tighter font-regular mb-4">
                            Ready to elevate your design workflow?
                        </TypographyH2>
                        <TypographyP className="text-xl max-w-2xl mx-auto mb-8">
                            Start building beautiful, accessible, and consistent
                            user interfaces with RealCube 2.0 Design System
                            today.
                        </TypographyP>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" variant="secondary">
                                View Storybook
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="w-full py-12 bg-background border-t">
                    <div className="container mx-auto grid gap-8 lg:grid-cols-3">
                        <div>
                            <TypographyH3 className="text-lg font-semibold mb-4">
                                RealCube Design System 2.0
                            </TypographyH3>
                            <TypographyP className="text-sm text-muted-foreground">
                                Building the future of web design, one component
                                at a time.
                            </TypographyP>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <TypographyH4 className="text-sm font-semibold mb-4">
                                    Resources
                                </TypographyH4>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground"
                                        >
                                            Documentation
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground"
                                        >
                                            Components
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground"
                                        >
                                            Examples
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <TypographyH4 className="text-sm font-semibold mb-4">
                                    Company
                                </TypographyH4>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground"
                                        >
                                            Careers
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <TypographyH4 className="text-sm font-semibold mb-4">
                                Stay Updated
                            </TypographyH4>
                            <TypographyP className="text-sm text-muted-foreground mb-4">
                                Subscribe to our newsletter for the latest
                                updates and features.
                            </TypographyP>
                            <div className="flex space-x-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-3 py-2 bg-background border rounded-md text-sm"
                                />
                                <Button>Subscribe</Button>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto mt-8 pt-8 border-t">
                        <TypographySmall className="text-center text-muted-foreground">
                            © 2024 RealCube Design System. All rights reserved.
                        </TypographySmall>
                    </div>
                </footer>
            </div>
        </PageContainer>
    )
}
