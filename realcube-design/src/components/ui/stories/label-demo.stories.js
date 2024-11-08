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
import { Label } from '../label'
var meta = {
    title: 'RealCube/form',
    args: {
        children: 'Shadcn',
    },
    component: function (args) {
        return _jsx(Label, __assign({}, args, { children: args.children }))
    },
    parameters: {
        layout: 'centered',
    },
}
export default meta
//render componente
export var LabelDemo = {
    args: {},
}
