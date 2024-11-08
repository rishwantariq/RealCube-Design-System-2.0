import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../tooltip'
import { Button } from '../button'
var meta = {
    title: 'RealCube/tooltip',
    component: function () {
        return _jsx(TooltipProvider, {
            children: _jsxs(Tooltip, {
                children: [
                    _jsx(TooltipTrigger, {
                        asChild: true,
                        children: _jsx(Button, {
                            variant: 'outline',
                            children: 'Hover',
                        }),
                    }),
                    _jsx(TooltipContent, {
                        children: _jsx('p', { children: 'Add to library' }),
                    }),
                ],
            }),
        })
    },
    parameters: {
        layout: 'centered',
    },
}
export default meta
//colors
export var TooltipDemo = {
    args: {},
}
