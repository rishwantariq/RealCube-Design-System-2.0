'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import Link from 'next/link'
import Image from 'next/image'
import { MultiStepForm } from '../../../ui/multi-step-form'
import { cn } from '../../../../lib/utils'
import { Button, buttonVariants } from '../../../ui/button'
import {
    TypographyH1,
    TypographyH2,
    TypographyP,
} from '../../../typography/typography'
import { FlipWords } from '../../../ui/flip-words'
import Head from 'next/head'
export default function SignupPage(_a) {
    var steps = _a.steps,
        schema = _a.schema,
        onSubmit = _a.onSubmit,
        _b = _a.siteConfig,
        siteConfig =
            _b === void 0
                ? {
                      logo: '/images/default-logo.png',
                      name: 'Default Site',
                      title: '',
                      description: '',
                  }
                : _b,
        _c = _a.backgroundImage,
        backgroundImage = _c === void 0 ? '' : _c,
        _d = _a.flipWords,
        flipWords =
            _d === void 0
                ? ['Efficiency', 'Compliance', 'Streamlined Workflows']
                : _d,
        metaData = _a.metaData,
        _e = _a.termsLink,
        termsLink = _e === void 0 ? '/terms' : _e,
        _f = _a.privacyLink,
        privacyLink = _f === void 0 ? '/privacy' : _f
    return _jsxs('div', {
        className:
            'w-full min-h-screen overflow-hidden flex flex-col lg:flex-row',
        children: [
            metaData &&
                _jsxs(Head, {
                    children: [
                        _jsx('title', { children: metaData.title }),
                        _jsx('meta', {
                            name: 'description',
                            content: metaData.description,
                        }),
                    ],
                }),
            _jsxs('div', {
                className:
                    'flex w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen flex-col p-8 lg:p-16 text-white dark:border-r \n                   bg-gradient-to-b from-[#FFFDE7] to-white dark:bg-gradient-to-b dark:from-[#2a2a1f] dark:to-[#1a1a0f]',
                children: [
                    _jsx(Button, {
                        variant: 'outline',
                        className: cn(
                            buttonVariants({ variant: 'ghost' }),
                            'absolute top-4 right-4 md:top-8 md:right-8 text-sm lg:hidden',
                        ),
                        children: 'Log in',
                    }),
                    _jsx('div', {
                        className: 'relative z-20 mb-8',
                        children: _jsx(Image, {
                            width: 120,
                            height: 120,
                            src: siteConfig.logo,
                            alt: siteConfig.name,
                            className:
                                'dark:brightness-0 dark:invert brightness-0 saturate-0',
                        }),
                    }),
                    _jsx('div', {
                        className: 'flex flex-col justify-center h-full',
                        children: _jsxs('blockquote', {
                            className: 'space-y-2 max-w-[90%] lg:max-w-full',
                            children: [
                                _jsx(TypographyH1, {
                                    className:
                                        'text-3xl text-secondary-foreground lg:text-4xl font-bold leading-tight tracking-tight text-left',
                                    children: 'Join Our Platform with',
                                }),
                                _jsx(TypographyH1, {
                                    className:
                                        'text-3xl ml-[-7px] text-secondary-foreground lg:text-4xl font-bold leading-tight tracking-tight text-left',
                                    children: _jsx(FlipWords, {
                                        words: flipWords,
                                    }),
                                }),
                                _jsx(TypographyH2, {
                                    className:
                                        'text-sm font-light text-secondary-foreground/40 lg:text-base leading-relaxed pt-4 text-left',
                                    children:
                                        'Set up your account to start using advanced workflow tools.',
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            _jsxs('div', {
                className:
                    'flex w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen bg-background flex-col justify-center lg:p-12 xl:p-16',
                children: [
                    _jsx('div', {
                        className: 'flex lg:hidden justify-end p-4',
                        children: _jsx(Button, {
                            variant: 'outline',
                            className: cn(
                                buttonVariants({ variant: 'ghost' }),
                                'absolute top-4 right-4 md:top-8 md:right-8 text-sm',
                            ),
                            children: 'Log in',
                        }),
                    }),
                    _jsxs('div', {
                        className:
                            'mx-auto  w-full max-w-lg p-10 sm:w-[90%] md:w-[500px] lg:p-0 space-y-6',
                        children: [
                            _jsxs('div', {
                                className:
                                    'flex flex-col ml-5 space-y-4 text-center md:text-left',
                                children: [
                                    _jsx(TypographyH1, {
                                        className:
                                            'text-2xl lg:text-3xl font-semibold tracking-tight text-foreground/90',
                                        children: 'Create Your Account',
                                    }),
                                    _jsx(TypographyP, {
                                        className:
                                            'text-sm lg:text-base text-muted-foreground/80',
                                        children:
                                            'Fill in your details to get started with our platform.',
                                    }),
                                    _jsx('div', {
                                        className:
                                            'h-[2px] w-8 bg-primary/60 mt-2 mx-auto md:mx-0',
                                    }),
                                ],
                            }),
                            _jsx('div', {
                                className: 'w-full',
                                children: _jsx(MultiStepForm, {
                                    schema: schema,
                                    steps: steps,
                                    onSubmit: onSubmit,
                                }),
                            }),
                            _jsxs(TypographyP, {
                                className:
                                    'px-4 md:px-8 text-center text-xs lg:text-sm text-muted-foreground/70',
                                children: [
                                    'By signing up, you agree to our',
                                    ' ',
                                    _jsx(Link, {
                                        href: termsLink,
                                        className:
                                            'underline underline-offset-4 hover:text-primary transition-colors',
                                        children: 'Terms',
                                    }),
                                    ' ',
                                    'and',
                                    ' ',
                                    _jsx(Link, {
                                        href: privacyLink,
                                        className:
                                            'underline underline-offset-4 hover:text-primary transition-colors',
                                        children: 'Privacy Policy',
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    })
}
