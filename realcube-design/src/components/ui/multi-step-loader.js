'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { cn } from '../../lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
var CheckIcon = function (_a) {
    var className = _a.className
    return _jsx('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        className: cn('w-6 h-6 ', className),
        children: _jsx('path', {
            d: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
        }),
    })
}
var CheckFilled = function (_a) {
    var className = _a.className
    return _jsx('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        fill: 'currentColor',
        className: cn('w-6 h-6 ', className),
        children: _jsx('path', {
            fillRule: 'evenodd',
            d: 'M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z',
            clipRule: 'evenodd',
        }),
    })
}
var LoaderCore = function (_a) {
    var loadingStates = _a.loadingStates,
        _b = _a.value,
        value = _b === void 0 ? 0 : _b
    return _jsx('div', {
        className:
            'flex relative justify-start max-w-xl mx-auto flex-col mt-40',
        children: loadingStates.map(function (loadingState, index) {
            var distance = Math.abs(index - value)
            var opacity = Math.max(1 - distance * 0.2, 0) // Minimum opacity is 0, keep it 0.2 if you're sane.
            return _jsxs(
                motion.div,
                {
                    className: cn('text-left flex gap-2 mb-4'),
                    initial: { opacity: 0, y: -(value * 40) },
                    animate: { opacity: opacity, y: -(value * 40) },
                    transition: { duration: 0.5 },
                    children: [
                        _jsxs('div', {
                            children: [
                                index > value &&
                                    _jsx(CheckIcon, {
                                        className: 'text-black dark:text-white',
                                    }),
                                index <= value &&
                                    _jsx(CheckFilled, {
                                        className: cn(
                                            'text-black dark:text-white',
                                            value === index &&
                                                'text-black dark:text-primary opacity-100',
                                        ),
                                    }),
                            ],
                        }),
                        _jsx('span', {
                            className: cn(
                                'text-black dark:text-white',
                                value === index &&
                                    'text-black dark:text-primary opacity-100',
                            ),
                            children: loadingState.text,
                        }),
                    ],
                },
                index,
            )
        }),
    })
}
export var MultiStepLoader = function (_a) {
    var loadingStates = _a.loadingStates,
        loading = _a.loading,
        _b = _a.duration,
        duration = _b === void 0 ? 2000 : _b,
        _c = _a.loop,
        loop = _c === void 0 ? true : _c
    var _d = useState(0),
        currentState = _d[0],
        setCurrentState = _d[1]
    useEffect(
        function () {
            if (!loading) {
                setCurrentState(0)
                return
            }
            var timeout = setTimeout(function () {
                setCurrentState(function (prevState) {
                    return loop
                        ? prevState === loadingStates.length - 1
                            ? 0
                            : prevState + 1
                        : Math.min(prevState + 1, loadingStates.length - 1)
                })
            }, duration)
            return function () {
                return clearTimeout(timeout)
            }
        },
        [currentState, loading, loop, loadingStates.length, duration],
    )
    return _jsx(AnimatePresence, {
        mode: 'wait',
        children:
            loading &&
            _jsxs(motion.div, {
                initial: {
                    opacity: 0,
                },
                animate: {
                    opacity: 1,
                },
                exit: {
                    opacity: 0,
                },
                className:
                    'w-full h-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl',
                children: [
                    _jsx('div', {
                        className: 'h-96  relative',
                        children: _jsx(LoaderCore, {
                            value: currentState,
                            loadingStates: loadingStates,
                        }),
                    }),
                    _jsx('div', {
                        className:
                            'bg-gradient-to-t inset-x-0 z-20 bottom-0 bg-white dark:bg-black h-full absolute [mask-image:radial-gradient(900px_at_center,transparent_30%,white)]',
                    }),
                ],
            }),
    })
}
