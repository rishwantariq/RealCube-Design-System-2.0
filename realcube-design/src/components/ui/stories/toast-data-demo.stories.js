import { ToastDemo } from '../demo/toast-data-demo'
var meta = {
    title: 'RealCube/toast',
    component: ToastDemo,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive'],
        },
    },
    parameters: {},
}
export default meta
export var Toast = {
    args: {
        title: 'Shadcn-ui',
        description: 'like shadcn-ui',
    },
}
export var ToastStyleDestructive = {
    args: {
        title: 'Shadcn-ui',
        description: 'not like shadcn-ui',
        variant: 'destructive',
    },
}
export var ToastNotDescription = {
    args: {
        title: 'Shadcn-ui',
    },
}
export var ToastNotTitle = {
    args: {
        description: 'like shadcn-ui',
    },
}
