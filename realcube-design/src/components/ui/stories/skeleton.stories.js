import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime'
import { buttonVariants } from '../button'
import { Skeleton } from '../skeleton'
var meta = {
    title: 'RealCube/skeleton',
    component: function () {
        return _jsxs('div', {
            className: 'flex w-96 items-center space-x-4',
            children: [
                _jsx(Skeleton, {
                    className: 'h-12 w-12 rounded-full bg-slate-300',
                }),
                _jsxs('div', {
                    className: 'space-y-2',
                    children: [
                        _jsx(Skeleton, {
                            className: 'h-4 w-[250px] bg-slate-300',
                        }),
                        _jsx(Skeleton, {
                            className: 'h-4 w-[200px] bg-slate-300',
                        }),
                    ],
                }),
            ],
        })
    },
    parameters: {
        layout: 'centered',
    },
}
export default meta
export var SkeletonUser = {
    args: {},
}
export var SkeletonCardNotification = {
    args: {},
    render: function () {
        return _jsx(_Fragment, {
            children: _jsxs(Skeleton, {
                className:
                    'flex h-64 w-[250px] flex-col gap-2 bg-slate-300 p-5',
                children: [
                    _jsxs('div', {
                        className: 'flex flex-col gap-2',
                        children: [
                            _jsx(Skeleton, {
                                className: 'h-6 w-20 bg-slate-400',
                            }),
                            _jsx(Skeleton, {
                                className: 'h-4 w-20 bg-slate-400',
                            }),
                        ],
                    }),
                    _jsx(Skeleton, {
                        className: 'rounred h-16 w-full bg-slate-400 ',
                    }),
                    _jsx(Skeleton, { className: 'h-4 w-full bg-slate-400' }),
                    _jsx(Skeleton, { className: 'h-4 w-full bg-slate-400' }),
                    _jsx(Skeleton, { className: 'h-4 w-full bg-slate-400' }),
                    _jsx(Skeleton, {
                        className:
                            buttonVariants({
                                variant: 'default',
                                size: 'default',
                            }) + ' w-full bg-slate-400',
                    }),
                ],
            }),
        })
    },
}
