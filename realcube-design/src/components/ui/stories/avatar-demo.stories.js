import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'
//meta
var meta = {
    title: 'RealCube/avatar',
    render: function (args) {
        return _jsxs(Avatar, {
            children: [
                _jsx(AvatarImage, {
                    src: 'https://github.com/shadcn.png',
                    alt: '@shadcn',
                }),
                _jsx(AvatarFallback, { children: 'Shadcn' }),
            ],
        })
    },
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
}
export default meta
export var AvatarWithImage = {
    args: {},
    render: function (args) {
        return _jsxs(Avatar, {
            children: [
                _jsx(AvatarImage, {
                    src: 'https://github.com/shadcn.png',
                    alt: '@shadcn',
                }),
                _jsx(AvatarFallback, { children: 'Shadcn' }),
            ],
        })
    },
}
export var AvatarWithFallback = {
    args: {},
    render: function (args) {
        return _jsxs(Avatar, {
            children: [
                _jsx(AvatarImage, { src: '', alt: '@shadcn' }),
                _jsx(AvatarFallback, { children: 'CN' }),
            ],
        })
    },
}
