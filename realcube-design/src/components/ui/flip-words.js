'use client'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../../lib/utils'
export var FlipWords = function (_a) {
    var words = _a.words,
        _b = _a.duration,
        duration = _b === void 0 ? 3000 : _b,
        className = _a.className
    var _c = useState(words[0]),
        currentWord = _c[0],
        setCurrentWord = _c[1]
    var _d = useState(false),
        isAnimating = _d[0],
        setIsAnimating = _d[1]
    // thanks for the fix Julian - https://github.com/Julian-AT
    var startAnimation = useCallback(
        function () {
            var word = words[words.indexOf(currentWord) + 1] || words[0]
            setCurrentWord(word)
            setIsAnimating(true)
        },
        [currentWord, words],
    )
    useEffect(
        function () {
            if (!isAnimating)
                setTimeout(function () {
                    startAnimation()
                }, duration)
        },
        [isAnimating, duration, startAnimation],
    )
    return _jsx(AnimatePresence, {
        onExitComplete: function () {
            setIsAnimating(false)
        },
        children: _jsx(
            motion.div,
            {
                initial: {
                    opacity: 0,
                    y: 10,
                },
                animate: {
                    opacity: 1,
                    y: 0,
                },
                transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                },
                exit: {
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: 'blur(8px)',
                    scale: 2,
                    position: 'absolute',
                },
                className: cn(
                    'z-10 inline-block relative text-left text-primary dark:text-primary px-2',
                    className,
                ),
                children: currentWord
                    .split(' ')
                    .map(function (word, wordIndex) {
                        return _jsxs(
                            motion.span,
                            {
                                initial: {
                                    opacity: 0,
                                    y: 10,
                                    filter: 'blur(8px)',
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0,
                                    filter: 'blur(0px)',
                                },
                                transition: {
                                    delay: wordIndex * 0.3,
                                    duration: 0.3,
                                },
                                className: 'inline-block whitespace-nowrap',
                                children: [
                                    word
                                        .split('')
                                        .map(function (letter, letterIndex) {
                                            return _jsx(
                                                motion.span,
                                                {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 10,
                                                        filter: 'blur(8px)',
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0,
                                                        filter: 'blur(0px)',
                                                    },
                                                    transition: {
                                                        delay:
                                                            wordIndex * 0.3 +
                                                            letterIndex * 0.05,
                                                        duration: 0.2,
                                                    },
                                                    className: 'inline-block',
                                                    children: letter,
                                                },
                                                word + letterIndex,
                                            )
                                        }),
                                    _jsx('span', {
                                        className: 'inline-block',
                                        children: '\u00A0',
                                    }),
                                ],
                            },
                            word + wordIndex,
                        )
                    }),
            },
            currentWord,
        ),
    })
}
