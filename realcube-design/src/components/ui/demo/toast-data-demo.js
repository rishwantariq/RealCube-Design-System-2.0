'use client'
import { jsx as _jsx } from 'react/jsx-runtime'
import { Button } from '../button'
import { useToast } from '../use-toast'
export function ToastDemo(_a) {
    var description = _a.description,
        title = _a.title,
        _b = _a.variant,
        variant = _b === void 0 ? 'default' : _b
    var toast = useToast().toast
    return _jsx(Button, {
        variant: 'outline',
        onClick: function () {
            toast({
                title: title,
                description: description,
                variant: variant,
            })
        },
        children: 'shadcn',
    })
}
