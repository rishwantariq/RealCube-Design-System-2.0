import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
// Core component that receives mouse positions and renders pointer and content
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion'
import { cn } from '@/lib/utils'
export var FollowerPointerCard = function (_a) {
    var children = _a.children,
        className = _a.className,
        title = _a.title
    var x = useMotionValue(0)
    var y = useMotionValue(0)
    var ref = React.useRef(null)
    var _b = useState(null),
        rect = _b[0],
        setRect = _b[1]
    var _c = useState(false),
        isInside = _c[0],
        setIsInside = _c[1] // Add this line
    useEffect(function () {
        if (ref.current) {
            setRect(ref.current.getBoundingClientRect())
        }
    }, [])
    var handleMouseMove = function (e) {
        if (rect) {
            var scrollX_1 = window.scrollX
            var scrollY_1 = window.scrollY
            x.set(e.clientX - rect.left + scrollX_1)
            y.set(e.clientY - rect.top + scrollY_1)
        }
    }
    var handleMouseLeave = function () {
        setIsInside(false)
    }
    var handleMouseEnter = function () {
        setIsInside(true)
    }
    return _jsxs('div', {
        onMouseLeave: handleMouseLeave,
        onMouseEnter: handleMouseEnter,
        onMouseMove: handleMouseMove,
        style: {
            cursor: 'none',
        },
        ref: ref,
        className: cn('relative', className),
        children: [
            _jsx(AnimatePresence, {
                children:
                    isInside &&
                    _jsx(FollowPointer, { x: x, y: y, title: title }),
            }),
            children,
        ],
    })
}
export var FollowPointer = function (_a) {
    var x = _a.x,
        y = _a.y,
        title = _a.title
    var colors = [
        'var(--sky-500)',
        'var(--neutral-500)',
        'var(--teal-500)',
        'var(--green-500)',
        'var(--blue-500)',
        'var(--red-500)',
        'var(--yellow-500)',
    ]
    return _jsxs(motion.div, {
        className: 'h-4 w-4 rounded-full absolute z-50',
        style: {
            top: y,
            left: x,
            pointerEvents: 'none',
        },
        initial: {
            scale: 1,
            opacity: 1,
        },
        animate: {
            scale: 1,
            opacity: 1,
        },
        exit: {
            scale: 0,
            opacity: 0,
        },
        children: [
            _jsx('svg', {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: '1',
                viewBox: '0 0 16 16',
                className:
                    'h-6 w-6 text-sky-500 transform -rotate-[70deg] -translate-x-[12px] -translate-y-[10px] stroke-sky-600',
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
                children: _jsx('path', {
                    d: 'M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z',
                }),
            }),
            _jsx(motion.div, {
                style: {
                    backgroundColor:
                        colors[Math.floor(Math.random() * colors.length)],
                },
                initial: {
                    scale: 0.5,
                    opacity: 0,
                },
                animate: {
                    scale: 1,
                    opacity: 1,
                },
                exit: {
                    scale: 0.5,
                    opacity: 0,
                },
                className:
                    'px-2 py-2 bg-neutral-200 text-white whitespace-nowrap min-w-max text-xs rounded-full',
                children: title || 'Rishwan',
            }),
        ],
    })
}
