import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '../select'
var meta = {
    title: 'RealCube/select',
    component: function () {
        return _jsxs(Select, {
            children: [
                _jsx(SelectTrigger, {
                    className: 'w-[280px]',
                    children: _jsx(SelectValue, {
                        placeholder: 'Select a timezone',
                    }),
                }),
                _jsxs(SelectContent, {
                    children: [
                        _jsxs(SelectGroup, {
                            children: [
                                _jsx(SelectLabel, {
                                    children: 'North America',
                                }),
                                _jsx(SelectItem, {
                                    value: 'est',
                                    children: 'Eastern Standard Time (EST)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'cst',
                                    children: 'Central Standard Time (CST)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'mst',
                                    children: 'Mountain Standard Time (MST)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'pst',
                                    children: 'Pacific Standard Time (PST)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'akst',
                                    children: 'Alaska Standard Time (AKST)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'hst',
                                    children: 'Hawaii Standard Time (HST)',
                                }),
                            ],
                        }),
                        _jsxs(SelectGroup, {
                            children: [
                                _jsx(SelectLabel, {
                                    children: 'Europe & Africa',
                                }),
                                _jsx(SelectItem, {
                                    value: 'gmt',
                                    children: 'Greenwich Mean Time (GMT)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'cet',
                                    children: 'Central European Time (CET)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'eet',
                                    children: 'Eastern European Time (EET)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'west',
                                    children:
                                        'Western European Summer Time (WEST)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'cat',
                                    children: 'Central Africa Time (CAT)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'eat',
                                    children: 'East Africa Time (EAT)',
                                }),
                            ],
                        }),
                        _jsxs(SelectGroup, {
                            children: [
                                _jsx(SelectLabel, { children: 'Asia' }),
                                _jsx(SelectItem, {
                                    value: 'msk',
                                    children: 'Moscow Time (MSK)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'ist',
                                    children: 'India Standard Time (IST)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'cst_china',
                                    children: 'China Standard Time (CST)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'jst',
                                    children: 'Japan Standard Time (JST)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'kst',
                                    children: 'Korea Standard Time (KST)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'ist_indonesia',
                                    children:
                                        'Indonesia Central Standard Time (WITA)',
                                }),
                            ],
                        }),
                        _jsxs(SelectGroup, {
                            children: [
                                _jsx(SelectLabel, {
                                    children: 'Australia & Pacific',
                                }),
                                _jsx(SelectItem, {
                                    value: 'awst',
                                    children:
                                        'Australian Western Standard Time (AWST)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'acst',
                                    children:
                                        'Australian Central Standard Time (ACST)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'aest',
                                    children:
                                        'Australian Eastern Standard Time (AEST)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'nzst',
                                    children:
                                        'New Zealand Standard Time (NZST)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'fjt',
                                    children: 'Fiji Time (FJT)',
                                }),
                            ],
                        }),
                        _jsxs(SelectGroup, {
                            children: [
                                _jsx(SelectLabel, {
                                    children: 'South America',
                                }),
                                _jsx(SelectItem, {
                                    value: 'art',
                                    children: 'Argentina Time (ART)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'bot',
                                    children: 'Bolivia Time (BOT)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'brt',
                                    children: 'Brasilia Time (BRT)',
                                }),
                                _jsx(SelectItem, {
                                    value: 'clt',
                                    children: 'Chile Standard Time (CLT)',
                                }),
                            ],
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
export var SelectScrollableDemo = {
    args: {},
}
