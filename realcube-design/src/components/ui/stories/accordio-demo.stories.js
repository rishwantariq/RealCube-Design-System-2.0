var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value)
                  })
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value))
                } catch (e) {
                    reject(e)
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value))
                } catch (e) {
                    reject(e)
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected)
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next(),
            )
        })
    }
var __generator =
    (this && this.__generator) ||
    function (thisArg, body) {
        var _ = {
                label: 0,
                sent: function () {
                    if (t[0] & 1) throw t[1]
                    return t[1]
                },
                trys: [],
                ops: [],
            },
            f,
            y,
            t,
            g
        return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === 'function' &&
                (g[Symbol.iterator] = function () {
                    return this
                }),
            g
        )
        function verb(n) {
            return function (v) {
                return step([n, v])
            }
        }
        function step(op) {
            if (f) throw new TypeError('Generator is already executing.')
            while ((g && ((g = 0), op[0] && (_ = 0)), _))
                try {
                    if (
                        ((f = 1),
                        y &&
                            (t =
                                op[0] & 2
                                    ? y['return']
                                    : op[0]
                                      ? y['throw'] ||
                                        ((t = y['return']) && t.call(y), 0)
                                      : y.next) &&
                            !(t = t.call(y, op[1])).done)
                    )
                        return t
                    if (((y = 0), t)) op = [op[0] & 2, t.value]
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op
                            break
                        case 4:
                            _.label++
                            return { value: op[1], done: false }
                        case 5:
                            _.label++
                            y = op[1]
                            op = [0]
                            continue
                        case 7:
                            op = _.ops.pop()
                            _.trys.pop()
                            continue
                        default:
                            if (
                                !((t = _.trys),
                                (t = t.length > 0 && t[t.length - 1])) &&
                                (op[0] === 6 || op[0] === 2)
                            ) {
                                _ = 0
                                continue
                            }
                            if (
                                op[0] === 3 &&
                                (!t || (op[1] > t[0] && op[1] < t[3]))
                            ) {
                                _.label = op[1]
                                break
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1]
                                t = op
                                break
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2]
                                _.ops.push(op)
                                break
                            }
                            if (t[2]) _.ops.pop()
                            _.trys.pop()
                            continue
                    }
                    op = body.call(thisArg, _)
                } catch (e) {
                    op = [6, e]
                    y = 0
                } finally {
                    f = t = 0
                }
            if (op[0] & 5) throw op[1]
            return { value: op[0] ? op[1] : void 0, done: true }
        }
    }
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { userEvent, within } from '@storybook/testing-library'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../../ui/accordion'
import { expect } from '@storybook/jest'
var meta = {
    title: 'RealCube/accordion',
    render: function (args) {
        return _jsxs(Accordion, {
            type: 'single',
            collapsible: true,
            className: 'w-80',
            children: [
                _jsxs(AccordionItem, {
                    value: 'item-1',
                    children: [
                        _jsx(AccordionTrigger, {
                            children: 'Is it accessible?',
                        }),
                        _jsx(AccordionContent, {
                            children:
                                'Yes. It adheres to the WAI-ARIA design pattern.',
                        }),
                    ],
                }),
                _jsxs(AccordionItem, {
                    value: 'item-2',
                    children: [
                        _jsx(AccordionTrigger, { children: 'Is it styled?' }),
                        _jsx(AccordionContent, {
                            children:
                                "Yes. It comes with default styles that matches the other components' aesthetic.",
                        }),
                    ],
                }),
                _jsxs(AccordionItem, {
                    value: 'item-3',
                    children: [
                        _jsx(AccordionTrigger, { children: 'Is it animated?' }),
                        _jsx(AccordionContent, {
                            children:
                                "Yes. It's animated by default, but you can disable it if you prefer.",
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
export var AcorrdionDemo = {
    args: {},
}
export var AccordionWithOneItem = {
    args: {},
    render: function (args) {
        return _jsx(Accordion, {
            type: 'single',
            collapsible: true,
            className: 'w-80',
            children: _jsxs(AccordionItem, {
                value: 'item-1',
                children: [
                    _jsx(AccordionTrigger, { children: 'Accordion' }),
                    _jsx(AccordionContent, {
                        'data-testid': 'description',
                        children:
                            'A vertically stacked set of interactive headings that each reveal a section of content.',
                    }),
                ],
            }),
        })
    },
    play: function (_a) {
        var canvasElement = _a.canvasElement,
            step = _a.step
        return __awaiter(void 0, void 0, void 0, function () {
            var canvas, elementButtonControl
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        canvas = within(canvasElement)
                        return [4 /*yield*/, canvas.findByRole('button')]
                    case 1:
                        elementButtonControl = _b.sent()
                        return [
                            4 /*yield*/,
                            expect(elementButtonControl).toBeVisible(),
                        ]
                    case 2:
                        _b.sent()
                        return [
                            4 /*yield*/,
                            step('simulation click accordion', function () {
                                return __awaiter(
                                    void 0,
                                    void 0,
                                    void 0,
                                    function () {
                                        var elementAccordionContent
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    return [
                                                        4 /*yield*/,
                                                        userEvent.click(
                                                            elementButtonControl,
                                                        ),
                                                    ]
                                                case 1:
                                                    _a.sent()
                                                    return [
                                                        4 /*yield*/,
                                                        canvas.findByTestId(
                                                            'description',
                                                        ),
                                                    ]
                                                case 2:
                                                    elementAccordionContent =
                                                        _a.sent()
                                                    return [
                                                        4 /*yield*/,
                                                        expect(
                                                            elementAccordionContent,
                                                        ).toBeVisible(),
                                                    ]
                                                case 3:
                                                    _a.sent()
                                                    return [2 /*return*/]
                                            }
                                        })
                                    },
                                )
                            }),
                        ]
                    case 3:
                        _b.sent()
                        return [2 /*return*/]
                }
            })
        })
    },
}
