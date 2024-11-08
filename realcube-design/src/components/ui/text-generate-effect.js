'use client'
import { jsxs as _jsxs, jsx as _jsx } from 'react/jsx-runtime'
import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { cn } from '@/lib/utils'
export var TextGenerateEffect = function (_a) {
    var words = _a.words,
        className = _a.className,
        _b = _a.filter,
        filter = _b === void 0 ? true : _b,
        _c = _a.duration,
        duration = _c === void 0 ? 0.5 : _c
    var _d = useAnimate(),
        scope = _d[0],
        animate = _d[1]
    var wordsArray = words.split(' ')
    useEffect(
        function () {
            animate(
                'span',
                {
                    opacity: 1,
                    filter: filter ? 'blur(0px)' : 'none',
                },
                {
                    duration: duration || 1,
                    delay: stagger(0.2),
                },
            )
        },
        [animate, filter, duration],
    )
    var renderWords = function () {
        return _jsx(motion.div, {
            ref: scope,
            children: wordsArray.map(function (word, idx) {
                return _jsxs(
                    motion.span,
                    {
                        className:
                            'opacity-0 text-muted-foreground font-medium text-lg',
                        style: {
                            filter: filter ? 'blur(10px)' : 'none',
                        },
                        children: [word, ' '],
                    },
                    word + idx,
                )
            }),
        })
    }
    return _jsx('div', {
        className: cn('font-bold', className),
        children: _jsx('div', {
            className: 'mt-4',
            children: _jsx('div', {
                className:
                    ' dark:text-white text-black text-2xl leading-snug tracking-wide',
                children: renderWords(),
            }),
        }),
    })
}
