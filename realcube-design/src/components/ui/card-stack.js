'use client'
var __spreadArray =
    (this && this.__spreadArray) ||
    function (to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar) ar = Array.prototype.slice.call(from, 0, i)
                    ar[i] = from[i]
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from))
    }
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
var interval
export var CardStack = function (_a) {
    var items = _a.items,
        offset = _a.offset,
        scaleFactor = _a.scaleFactor
    var CARD_OFFSET = offset || 10
    var SCALE_FACTOR = scaleFactor || 0.06
    var _b = useState(items),
        cards = _b[0],
        setCards = _b[1]
    useEffect(function () {
        startFlipping()
        return function () {
            return clearInterval(interval)
        }
    }, [])
    var startFlipping = function () {
        interval = setInterval(function () {
            setCards(function (prevCards) {
                var newArray = __spreadArray([], prevCards, true)
                newArray.unshift(newArray.pop())
                return newArray
            })
        }, 5000)
    }
    return _jsx('div', {
        className: 'relative h-full w-full flex items-center justify-center',
        children: cards.map(function (card, index) {
            return _jsxs(
                motion.div,
                {
                    className:
                        'absolute w-full max-w-2xl h-60 md:h-80 rounded-3xl p-4 shadow-lg flex flex-col justify-between bg-card text-foreground border border-muted shadow-muted/10 dark:shadow-muted/5',
                    style: { transformOrigin: 'top center' },
                    animate: {
                        top: index * -CARD_OFFSET,
                        scale: 1 - index * SCALE_FACTOR,
                        zIndex: cards.length - index,
                    },
                    children: [
                        _jsx('div', {
                            className: 'font-normal text-muted-foreground',
                            children: card.content,
                        }),
                        _jsxs('div', {
                            children: [
                                _jsx('p', {
                                    className: 'text-foreground font-medium',
                                    children: card.name,
                                }),
                                _jsx('p', {
                                    className:
                                        'text-muted-foreground font-normal',
                                    children: card.designation,
                                }),
                            ],
                        }),
                    ],
                },
                card.id,
            )
        }),
    })
}
