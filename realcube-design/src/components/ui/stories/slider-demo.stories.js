var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i]
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p]
                }
                return t
            }
        return __assign.apply(this, arguments)
    }
import { jsx as _jsx } from 'react/jsx-runtime'
import { cn } from '../../../lib/utils'
import { Slider } from '../slider'
var meta = {
    title: 'RealCube/slider',
    component: function (props) {
        return _jsx(
            Slider,
            __assign(
                {
                    defaultValue: [50],
                    max: 100,
                    step: 1,
                    className: cn('w-[60%]', props.className),
                },
                props,
            ),
        )
    },
}
export default meta
export var Default = {
    args: {},
}
