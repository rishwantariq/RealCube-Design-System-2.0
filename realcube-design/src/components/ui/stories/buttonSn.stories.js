import { Button } from '../button'
var meta = {
    title: 'RealCube/button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: [
                'default',
                'secondary',
                'destructive',
                'ghost',
                'link',
                'outline',
            ],
        },
        size: {
            control: { type: 'select' },
            options: ['default', 'icon', 'sm', 'lg'],
        },
    },
    parameters: {
        layout: 'centered',
    },
}
export default meta
//color
export var Default = {
    args: {
        variant: 'default',
        children: 'ButtonShadcn',
    },
}
export var Secondary = {
    args: {
        variant: 'secondary',
        children: 'ButtonShadcn',
    },
}
export var Destructive = {
    args: {
        variant: 'destructive',
        children: 'ButtonShadcn',
    },
}
export var Ghost = {
    args: {
        variant: 'ghost',
        children: 'ButtonShadcn',
    },
}
export var Link = {
    args: {
        variant: 'link',
        children: 'ButtonShadcn',
    },
}
export var Outline = {
    args: {
        variant: 'outline',
        children: 'ButtonShadcn',
    },
}
//size
export var SizeDefault = {
    args: {
        size: 'default',
        children: 'ButtonShadcn',
    },
}
export var SizeIcon = {
    args: {
        size: 'icon',
        children: 'icon',
    },
}
export var SizeLarge = {
    args: {
        size: 'lg',
        children: 'ButtonShadcn',
    },
}
export var SizeSmall = {
    args: {
        size: 'sm',
        children: 'ButtonShadcn',
    },
}
