import {
    jsx as _jsx,
    Fragment as _Fragment,
    jsxs as _jsxs,
} from 'react/jsx-runtime'
import { ScrollArea } from '../scroll-area'
import { Separator } from '../separator'
var tags = Array.from({ length: 50 }).map(function (_, i, a) {
    return 'v1.2.0-beta.'.concat(a.length - i)
})
export function ScrollAreaDemo() {
    return _jsx(ScrollArea, {
        className: 'h-72 w-48 rounded-md border',
        children: _jsxs('div', {
            className: 'p-4',
            children: [
                _jsx('h4', {
                    className: 'mb-4 text-sm font-medium leading-none',
                    children: 'Tags',
                }),
                tags.map(function (tag) {
                    return _jsxs(_Fragment, {
                        children: [
                            _jsx(
                                'div',
                                { className: 'text-sm', children: tag },
                                tag,
                            ),
                            _jsx(Separator, { className: 'my-2' }),
                        ],
                    })
                }),
            ],
        }),
    })
}
