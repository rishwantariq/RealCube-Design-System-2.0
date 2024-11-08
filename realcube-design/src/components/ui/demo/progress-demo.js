'use client'
import { jsx as _jsx } from 'react/jsx-runtime'
import * as React from 'react'
import { Progress } from '../progress'
export function ProgressDemo() {
    var _a = React.useState(13),
        progress = _a[0],
        setProgress = _a[1]
    React.useEffect(function () {
        var timer = setTimeout(function () {
            return setProgress(66)
        }, 500)
        return function () {
            return clearTimeout(timer)
        }
    }, [])
    return _jsx(Progress, { value: progress, className: 'w-[60%] bg-black' })
}
