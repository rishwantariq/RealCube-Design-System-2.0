'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
export var StickyScroll = function (_a) {
    var _b
    var content = _a.content,
        contentClassName = _a.contentClassName
    var _c = React.useState(0),
        activeCard = _c[0],
        setActiveCard = _c[1]
    var ref = useRef(null)
    var scrollYProgress = useScroll({
        // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
        // target: ref
        container: ref,
        offset: ['start start', 'end start'],
    }).scrollYProgress
    var cardLength = content.length
    useMotionValueEvent(scrollYProgress, 'change', function (latest) {
        var cardsBreakpoints = content.map(function (_, index) {
            return index / cardLength
        })
        var closestBreakpointIndex = cardsBreakpoints.reduce(function (
            acc,
            breakpoint,
            index,
        ) {
            var distance = Math.abs(latest - breakpoint)
            if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                return index
            }
            return acc
        }, 0)
        setActiveCard(closestBreakpointIndex)
    })
    var backgroundColors = [
        'var(--primary)',
        'var(--black)',
        'var(--secondary)',
    ]
    var linearGradients = useMemo(function () {
        return [
            'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
            'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
            'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))',
        ]
    }, [])
    var _d = useState(linearGradients[0]),
        backgroundGradient = _d[0],
        setBackgroundGradient = _d[1]
    useEffect(
        function () {
            setBackgroundGradient(
                linearGradients[activeCard % linearGradients.length],
            )
        },
        [activeCard, linearGradients],
    )
    return _jsxs(motion.div, {
        animate: {
            backgroundColor:
                backgroundColors[activeCard % backgroundColors.length],
        },
        className:
            'h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10',
        ref: ref,
        children: [
            _jsx('div', {
                className: 'div relative flex items-start px-4',
                children: _jsxs('div', {
                    className: 'max-w-2xl',
                    children: [
                        content.map(function (item, index) {
                            return _jsxs(
                                'div',
                                {
                                    className: 'my-20',
                                    children: [
                                        _jsx(motion.h2, {
                                            initial: {
                                                opacity: 0,
                                            },
                                            animate: {
                                                opacity:
                                                    activeCard === index
                                                        ? 1
                                                        : 0.3,
                                            },
                                            className:
                                                'text-2xl font-bold text-foreground',
                                            children: item.title,
                                        }),
                                        _jsx(motion.p, {
                                            initial: {
                                                opacity: 0,
                                            },
                                            animate: {
                                                opacity:
                                                    activeCard === index
                                                        ? 1
                                                        : 0.3,
                                            },
                                            className:
                                                'text-kg text-foreground max-w-sm mt-10',
                                            children: item.description,
                                        }),
                                    ],
                                },
                                item.title + index,
                            )
                        }),
                        _jsx('div', { className: 'h-40' }),
                    ],
                }),
            }),
            _jsx('div', {
                style: { background: backgroundGradient },
                className: cn(
                    'hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden',
                    contentClassName,
                ),
                children:
                    (_b = content[activeCard].content) !== null && _b !== void 0
                        ? _b
                        : null,
            }),
        ],
    })
}
