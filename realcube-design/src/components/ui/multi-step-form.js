'use client'
var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i]
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p]
                }
                return t
            }
        return __assign.apply(this, arguments)
    }
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
import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Progress } from '../ui/progress'
import { Button } from '../ui/button'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from '../ui/card'
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '../ui/select'
import { Checkbox } from '../ui/checkbox'
import { ArrowLeft, ArrowRight, Check, AlertCircle } from 'lucide-react'
import PageContainer from './page-container'
export var MultiStepForm = function (_a) {
    var schema = _a.schema,
        steps = _a.steps,
        onSubmit = _a.onSubmit
    var _b = useState(0),
        currentStep = _b[0],
        setCurrentStep = _b[1]
    // Generate step-specific schema validation
    var stepSchema = z.object(
        Object.fromEntries(
            steps[currentStep].fields
                .filter(function (field) {
                    return !field.hidden
                }) // Ignore hidden fields in validation
                .map(function (field) {
                    return [field.name, schema.shape[field.name]]
                })
                .filter(function (_a) {
                    var value = _a[1]
                    return value !== undefined
                }),
        ),
    )
    var form = useForm({
        resolver: zodResolver(stepSchema),
        mode: 'onChange',
        criteriaMode: 'all',
    })
    var handleSubmit = form.handleSubmit,
        _c = form.formState,
        errors = _c.errors,
        isValid = _c.isValid,
        isSubmitting = _c.isSubmitting,
        trigger = form.trigger
    var progressPercentage = ((currentStep + 1) / steps.length) * 100
    var nextStep = function () {
        return __awaiter(void 0, void 0, void 0, function () {
            var isStepValid
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4 /*yield*/, trigger()]
                    case 1:
                        isStepValid = _a.sent()
                        if (isStepValid) setCurrentStep(currentStep + 1)
                        return [2 /*return*/]
                }
            })
        })
    }
    var prevStep = function () {
        return currentStep > 0 && setCurrentStep(currentStep - 1)
    }
    return _jsx(PageContainer, {
        children: _jsx(
            Form,
            __assign({}, form, {
                children: _jsxs(Card, {
                    className: 'w-full mx-auto shadow-lg',
                    children: [
                        _jsxs(CardHeader, {
                            className: 'space-y-1',
                            children: [
                                _jsxs('div', {
                                    className: 'flex items-center space-x-2',
                                    children: [
                                        steps[currentStep].icon,
                                        _jsx(CardTitle, {
                                            className: 'text-2xl',
                                            children: steps[currentStep].title,
                                        }),
                                    ],
                                }),
                                steps[currentStep].description &&
                                    _jsx(CardDescription, {
                                        children:
                                            steps[currentStep].description,
                                    }),
                            ],
                        }),
                        _jsxs(CardContent, {
                            children: [
                                _jsx(Progress, {
                                    value: progressPercentage,
                                    className: 'mb-4 h-2',
                                }),
                                _jsx(AnimatePresence, {
                                    mode: 'wait',
                                    children: _jsx(
                                        motion.div,
                                        {
                                            initial: { opacity: 0, y: 20 },
                                            animate: { opacity: 1, y: 0 },
                                            exit: { opacity: 0, y: -20 },
                                            transition: { duration: 0.3 },
                                            children: steps[
                                                currentStep
                                            ].fields.map(
                                                function (fieldConfig, index) {
                                                    return (
                                                        !fieldConfig.hidden && // Only render fields that are not hidden
                                                        _jsx(
                                                            FormField,
                                                            {
                                                                control:
                                                                    form.control,
                                                                name: fieldConfig.name,
                                                                render: function (
                                                                    _a,
                                                                ) {
                                                                    var _b, _c
                                                                    var field =
                                                                        _a.field
                                                                    return _jsxs(
                                                                        FormItem,
                                                                        {
                                                                            className:
                                                                                'py-2',
                                                                            children:
                                                                                [
                                                                                    _jsx(
                                                                                        FormLabel,
                                                                                        {
                                                                                            children:
                                                                                                fieldConfig.label,
                                                                                        },
                                                                                    ),
                                                                                    _jsx(
                                                                                        FormControl,
                                                                                        {
                                                                                            children:
                                                                                                fieldConfig.type ===
                                                                                                'select'
                                                                                                    ? _jsxs(
                                                                                                          Select,
                                                                                                          {
                                                                                                              onValueChange:
                                                                                                                  function (
                                                                                                                      value,
                                                                                                                  ) {
                                                                                                                      return field.onChange(
                                                                                                                          value,
                                                                                                                      )
                                                                                                                  },
                                                                                                              value: field.value,
                                                                                                              disabled:
                                                                                                                  fieldConfig.disabled,
                                                                                                              children:
                                                                                                                  [
                                                                                                                      _jsx(
                                                                                                                          SelectTrigger,
                                                                                                                          {
                                                                                                                              className:
                                                                                                                                  'w-full',
                                                                                                                              children:
                                                                                                                                  _jsx(
                                                                                                                                      SelectValue,
                                                                                                                                      {
                                                                                                                                          placeholder:
                                                                                                                                              fieldConfig.placeholder,
                                                                                                                                      },
                                                                                                                                  ),
                                                                                                                          },
                                                                                                                      ),
                                                                                                                      _jsx(
                                                                                                                          SelectContent,
                                                                                                                          {
                                                                                                                              children:
                                                                                                                                  (_b =
                                                                                                                                      fieldConfig.options) ===
                                                                                                                                      null ||
                                                                                                                                  _b ===
                                                                                                                                      void 0
                                                                                                                                      ? void 0
                                                                                                                                      : _b.map(
                                                                                                                                            function (
                                                                                                                                                option,
                                                                                                                                                i,
                                                                                                                                            ) {
                                                                                                                                                return _jsx(
                                                                                                                                                    SelectItem,
                                                                                                                                                    {
                                                                                                                                                        value: option,
                                                                                                                                                        children:
                                                                                                                                                            option,
                                                                                                                                                    },
                                                                                                                                                    i,
                                                                                                                                                )
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                          },
                                                                                                                      ),
                                                                                                                  ],
                                                                                                          },
                                                                                                      )
                                                                                                    : fieldConfig.type ===
                                                                                                        'checkbox'
                                                                                                      ? _jsxs(
                                                                                                            'div',
                                                                                                            {
                                                                                                                className:
                                                                                                                    'flex items-center space-x-2',
                                                                                                                children:
                                                                                                                    [
                                                                                                                        _jsx(
                                                                                                                            Checkbox,
                                                                                                                            {
                                                                                                                                id: fieldConfig.name,
                                                                                                                                checked:
                                                                                                                                    !!field.value,
                                                                                                                                onCheckedChange:
                                                                                                                                    function (
                                                                                                                                        checked,
                                                                                                                                    ) {
                                                                                                                                        return field.onChange(
                                                                                                                                            checked,
                                                                                                                                        )
                                                                                                                                    },
                                                                                                                                disabled:
                                                                                                                                    fieldConfig.disabled,
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        _jsx(
                                                                                                                            'label',
                                                                                                                            {
                                                                                                                                htmlFor:
                                                                                                                                    fieldConfig.name,
                                                                                                                                children:
                                                                                                                                    fieldConfig.label,
                                                                                                                            },
                                                                                                                        ),
                                                                                                                    ],
                                                                                                            },
                                                                                                        )
                                                                                                      : _jsxs(
                                                                                                            'div',
                                                                                                            {
                                                                                                                className:
                                                                                                                    'relative',
                                                                                                                children:
                                                                                                                    [
                                                                                                                        _jsx(
                                                                                                                            Input,
                                                                                                                            __assign(
                                                                                                                                {
                                                                                                                                    type: fieldConfig.type,
                                                                                                                                    placeholder:
                                                                                                                                        fieldConfig.placeholder,
                                                                                                                                },
                                                                                                                                field,
                                                                                                                                {
                                                                                                                                    disabled:
                                                                                                                                        fieldConfig.disabled,
                                                                                                                                    className:
                                                                                                                                        fieldConfig.icon
                                                                                                                                            ? 'pl-10'
                                                                                                                                            : '',
                                                                                                                                },
                                                                                                                                fieldConfig.type ===
                                                                                                                                    'number' && {
                                                                                                                                    inputMode:
                                                                                                                                        'numeric',
                                                                                                                                    onChange:
                                                                                                                                        function (
                                                                                                                                            e,
                                                                                                                                        ) {
                                                                                                                                            return field.onChange(
                                                                                                                                                parseFloat(
                                                                                                                                                    e
                                                                                                                                                        .target
                                                                                                                                                        .value,
                                                                                                                                                ) ||
                                                                                                                                                    0,
                                                                                                                                            )
                                                                                                                                        },
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        fieldConfig.icon &&
                                                                                                                            _jsx(
                                                                                                                                'div',
                                                                                                                                {
                                                                                                                                    className:
                                                                                                                                        'absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none',
                                                                                                                                    children:
                                                                                                                                        fieldConfig.icon,
                                                                                                                                },
                                                                                                                            ),
                                                                                                                    ],
                                                                                                            },
                                                                                                        ),
                                                                                        },
                                                                                    ),
                                                                                    _jsx(
                                                                                        FormMessage,
                                                                                        {
                                                                                            children:
                                                                                                errors[
                                                                                                    fieldConfig
                                                                                                        .name
                                                                                                ] &&
                                                                                                _jsxs(
                                                                                                    'div',
                                                                                                    {
                                                                                                        className:
                                                                                                            'flex items-center space-x-1 text-destructive',
                                                                                                        children:
                                                                                                            [
                                                                                                                _jsx(
                                                                                                                    AlertCircle,
                                                                                                                    {
                                                                                                                        size: 16,
                                                                                                                    },
                                                                                                                ),
                                                                                                                _jsx(
                                                                                                                    'span',
                                                                                                                    {
                                                                                                                        children:
                                                                                                                            (_c =
                                                                                                                                errors[
                                                                                                                                    fieldConfig
                                                                                                                                        .name
                                                                                                                                ]) ===
                                                                                                                                null ||
                                                                                                                            _c ===
                                                                                                                                void 0
                                                                                                                                ? void 0
                                                                                                                                : _c.message,
                                                                                                                    },
                                                                                                                ),
                                                                                                            ],
                                                                                                    },
                                                                                                ),
                                                                                        },
                                                                                    ),
                                                                                ],
                                                                        },
                                                                    )
                                                                },
                                                            },
                                                            index,
                                                        )
                                                    )
                                                },
                                            ),
                                        },
                                        currentStep,
                                    ),
                                }),
                            ],
                        }),
                        _jsxs(CardFooter, {
                            className: 'flex justify-between mt-4',
                            children: [
                                _jsxs(Button, {
                                    type: 'button',
                                    variant: 'outline',
                                    onClick: prevStep,
                                    disabled: currentStep === 0,
                                    children: [
                                        _jsx(ArrowLeft, {
                                            className: 'w-4 h-4 mr-2',
                                        }),
                                        'Previous',
                                    ],
                                }),
                                currentStep < steps.length - 1
                                    ? _jsx('div', {
                                          className:
                                              'flex justify-center items-center',
                                          children: _jsxs(Button, {
                                              type: 'button',
                                              onClick: nextStep,
                                              disabled: !isValid,
                                              children: [
                                                  'Next',
                                                  _jsx(ArrowRight, {
                                                      className:
                                                          'w-4 h-4 ml-2 bg-transparent',
                                                  }),
                                              ],
                                          }),
                                      })
                                    : _jsx(Button, {
                                          type: 'submit',
                                          onClick: handleSubmit(onSubmit),
                                          disabled: !isValid || isSubmitting,
                                          children: isSubmitting
                                              ? _jsxs(_Fragment, {
                                                    children: [
                                                        _jsxs('svg', {
                                                            className:
                                                                'animate-spin -ml-1 mr-3 h-5 w-5 text-white',
                                                            xmlns: 'http://www.w3.org/2000/svg',
                                                            fill: 'none',
                                                            viewBox:
                                                                '0 0 24 24',
                                                            children: [
                                                                _jsx('circle', {
                                                                    className:
                                                                        'opacity-25',
                                                                    cx: '12',
                                                                    cy: '12',
                                                                    r: '10',
                                                                    stroke: 'currentColor',
                                                                    strokeWidth:
                                                                        '4',
                                                                }),
                                                                _jsx('path', {
                                                                    className:
                                                                        'opacity-75',
                                                                    fill: 'currentColor',
                                                                    d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
                                                                }),
                                                            ],
                                                        }),
                                                        'Submitting...',
                                                    ],
                                                })
                                              : _jsxs(_Fragment, {
                                                    children: [
                                                        'Submit',
                                                        _jsx(Check, {
                                                            className:
                                                                'w-4 h-4 ml-2',
                                                        }),
                                                    ],
                                                }),
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
        ),
    })
}
