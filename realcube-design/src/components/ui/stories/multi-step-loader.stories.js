import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { useState } from 'react'
import { MultiStepLoader as Loader } from '../multi-step-loader'
import { IconSquareRoundedX } from '@tabler/icons-react'
var loadingStates = [
    { text: 'Setting up your RealCube Profile' },
    { text: 'Loading Data' },
    { text: 'Defining Workflows' },
    { text: 'Loading Assets' },
    { text: 'Setting up Dashboard' },
    { text: 'Almost done' },
    { text: 'Welcome to RealCube 2.0' },
]
var meta = {
    title: 'RealCube/multi-step-loader',
    component: Loader,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        loadingStates: {
            control: 'object',
            description:
                'An array of loading states, each representing a step in the loader sequence.',
            table: {
                type: { summary: 'Array<{ text: string }>' },
            },
        },
        loading: {
            control: 'boolean',
            description:
                'Controls the loading state. When `true`, the loader is active and cycles through loading steps.',
            table: {
                type: { summary: 'boolean' },
            },
        },
        duration: {
            control: 'number',
            description:
                'Duration (in milliseconds) for each loading state step.',
            table: {
                type: { summary: 'number' },
            },
            defaultValue: 2000,
        },
    },
}
export default meta
var ExampleLoader = function () {
    var _a = useState(false),
        loading = _a[0],
        setLoading = _a[1]
    return _jsxs('div', {
        className: 'w-full h-[60vh] flex items-center justify-center',
        children: [
            _jsx(Loader, {
                loadingStates: loadingStates,
                loading: loading,
                duration: 2000,
            }),
            _jsx('button', {
                onClick: function () {
                    return setLoading(true)
                },
                className:
                    'bg-primary hover:bg-primary/80 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center',
                style: {
                    boxShadow:
                        '0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset',
                },
                children: 'Click to load',
            }),
            loading &&
                _jsx('button', {
                    className:
                        'fixed top-4 right-4 text-black dark:text-white z-[120]',
                    onClick: function () {
                        return setLoading(false)
                    },
                    children: _jsx(IconSquareRoundedX, {
                        className: 'h-10 w-10',
                    }),
                }),
        ],
    })
}
export var Example = {
    render: function () {
        return _jsx(ExampleLoader, {})
    },
    args: {
        loadingStates: loadingStates,
        loading: false,
        duration: 2000,
    },
}
Example.parameters = {
    docs: {
        description: {
            component:
                'The **MultiStepLoader** component is a customizable loader that guides users through a sequence of steps with descriptive messages, simulating a multi-stage process.\n\n**Usage**:\n- **loadingStates**: Array of steps, each with a text description.\n- **loading**: Boolean to activate or deactivate the loader.\n- **duration**: Time (in milliseconds) for each step display.\n\nThe interactive buttons in this story control the loader to demonstrate its functionality.',
        },
    },
}
