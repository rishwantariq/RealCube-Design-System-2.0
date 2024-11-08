import { jsx as _jsx } from 'react/jsx-runtime'
import { Input } from '../../../ui/input'
export function Search() {
    return _jsx('div', {
        children: _jsx(Input, {
            type: 'search',
            placeholder: 'Search...',
            className: 'md:w-[100px] lg:w-[300px]',
        }),
    })
}
