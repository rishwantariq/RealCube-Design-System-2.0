'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [6914],
    {
        './src/components/ui/stories/table-demo.stories.ts': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Table: () => Table,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => table_demo_stories,
                })
            var _Table$parameters,
                _Table$parameters2,
                defineProperty = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                ),
                react = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                table = __webpack_require__('./src/components/ui/table.tsx'),
                __jsx = react.createElement,
                invoices = [
                    {
                        invoice: 'INV001',
                        paymentStatus: 'Paid',
                        totalAmount: '$250.00',
                        paymentMethod: 'Credit Card',
                    },
                    {
                        invoice: 'INV002',
                        paymentStatus: 'Pending',
                        totalAmount: '$150.00',
                        paymentMethod: 'PayPal',
                    },
                    {
                        invoice: 'INV003',
                        paymentStatus: 'Unpaid',
                        totalAmount: '$350.00',
                        paymentMethod: 'Bank Transfer',
                    },
                    {
                        invoice: 'INV004',
                        paymentStatus: 'Paid',
                        totalAmount: '$450.00',
                        paymentMethod: 'Credit Card',
                    },
                    {
                        invoice: 'INV005',
                        paymentStatus: 'Paid',
                        totalAmount: '$550.00',
                        paymentMethod: 'PayPal',
                    },
                    {
                        invoice: 'INV006',
                        paymentStatus: 'Pending',
                        totalAmount: '$200.00',
                        paymentMethod: 'Bank Transfer',
                    },
                    {
                        invoice: 'INV007',
                        paymentStatus: 'Unpaid',
                        totalAmount: '$300.00',
                        paymentMethod: 'Credit Card',
                    },
                ]
            function TableDemo() {
                return __jsx(
                    table.iA,
                    null,
                    __jsx(table.Rn, null, 'A list of your recent invoices.'),
                    __jsx(
                        table.xD,
                        null,
                        __jsx(
                            table.SC,
                            null,
                            __jsx(
                                table.ss,
                                { className: 'w-[100px]' },
                                'Invoice',
                            ),
                            __jsx(table.ss, null, 'Status'),
                            __jsx(table.ss, null, 'Method'),
                            __jsx(
                                table.ss,
                                { className: 'text-right' },
                                'Amount',
                            ),
                        ),
                    ),
                    __jsx(
                        table.RM,
                        null,
                        invoices.map(function (invoice) {
                            return __jsx(
                                table.SC,
                                { key: invoice.invoice },
                                __jsx(
                                    table.pj,
                                    { className: 'font-medium' },
                                    invoice.invoice,
                                ),
                                __jsx(table.pj, null, invoice.paymentStatus),
                                __jsx(table.pj, null, invoice.paymentMethod),
                                __jsx(
                                    table.pj,
                                    { className: 'text-right' },
                                    invoice.totalAmount,
                                ),
                            )
                        }),
                    ),
                    __jsx(
                        table.yt,
                        null,
                        __jsx(
                            table.SC,
                            null,
                            __jsx(table.pj, { colSpan: 3 }, 'Total'),
                            __jsx(
                                table.pj,
                                { className: 'text-right' },
                                '$2,500.00',
                            ),
                        ),
                    ),
                )
            }
            function ownKeys(e, r) {
                var t = Object.keys(e)
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e)
                    r &&
                        (o = o.filter(function (r) {
                            return Object.getOwnPropertyDescriptor(e, r)
                                .enumerable
                        })),
                        t.push.apply(t, o)
                }
                return t
            }
            function _objectSpread(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {}
                    r % 2
                        ? ownKeys(Object(t), !0).forEach(function (r) {
                              ;(0, defineProperty.Z)(e, r, t[r])
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(t),
                            )
                          : ownKeys(Object(t)).forEach(function (r) {
                                Object.defineProperty(
                                    e,
                                    r,
                                    Object.getOwnPropertyDescriptor(t, r),
                                )
                            })
                }
                return e
            }
            TableDemo.displayName = 'TableDemo'
            const table_demo_stories = {
                title: 'RealCube/table',
                component: TableDemo,
                parameters: { layout: 'centered' },
            }
            var Table = { args: {} }
            Table.parameters = _objectSpread(
                _objectSpread({}, Table.parameters),
                {},
                {
                    docs: _objectSpread(
                        _objectSpread(
                            {},
                            null === (_Table$parameters = Table.parameters) ||
                                void 0 === _Table$parameters
                                ? void 0
                                : _Table$parameters.docs,
                        ),
                        {},
                        {
                            source: _objectSpread(
                                { originalSource: '{\n  args: {}\n}' },
                                null ===
                                    (_Table$parameters2 = Table.parameters) ||
                                    void 0 === _Table$parameters2 ||
                                    null ===
                                        (_Table$parameters2 =
                                            _Table$parameters2.docs) ||
                                    void 0 === _Table$parameters2
                                    ? void 0
                                    : _Table$parameters2.source,
                            ),
                        },
                    ),
                },
            )
            const __namedExportsOrder = ['Table']
        },
        './src/components/ui/table.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                RM: () => TableBody,
                Rn: () => TableCaption,
                SC: () => TableRow,
                iA: () => Table,
                pj: () => TableCell,
                ss: () => TableHead,
                xD: () => TableHeader,
                yt: () => TableFooter,
            })
            var _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__('./src/lib/utils.ts'),
                _excluded = ['className'],
                _excluded2 = ['className'],
                _excluded3 = ['className'],
                _excluded4 = ['className'],
                _excluded5 = ['className'],
                _excluded6 = ['className'],
                _excluded7 = ['className'],
                _excluded8 = ['className'],
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                Table = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                    function (_ref, ref) {
                        var className = _ref.className,
                            props = (0,
                            _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                                _ref,
                                _excluded,
                            )
                        return __jsx(
                            'div',
                            { className: 'relative w-full overflow-auto' },
                            __jsx(
                                'table',
                                (0,
                                _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                                    {
                                        ref,
                                        className: (0,
                                        _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                            'w-full caption-bottom text-sm',
                                            className,
                                        ),
                                    },
                                    props,
                                ),
                            ),
                        )
                    },
                )
            Table.displayName = 'Table'
            var TableHeader = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref2, ref) {
                    var className = _ref2.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                            _ref2,
                            _excluded2,
                        )
                    return __jsx(
                        'thead',
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                    '[&_tr]:border-b',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            TableHeader.displayName = 'TableHeader'
            var TableBody = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref3, ref) {
                    var className = _ref3.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                            _ref3,
                            _excluded3,
                        )
                    return __jsx(
                        'tbody',
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                    '[&_tr:last-child]:border-0',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            TableBody.displayName = 'TableBody'
            var TableFooter = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref4, ref) {
                    var className = _ref4.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                            _ref4,
                            _excluded4,
                        )
                    return __jsx(
                        'tfoot',
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                    'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            TableFooter.displayName = 'TableFooter'
            var TableRow = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref5, ref) {
                    var className = _ref5.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                            _ref5,
                            _excluded5,
                        )
                    return __jsx(
                        'tr',
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                    'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            TableRow.displayName = 'TableRow'
            var TableHead = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref6, ref) {
                    var className = _ref6.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                            _ref6,
                            _excluded6,
                        )
                    return __jsx(
                        'th',
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                    'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            TableHead.displayName = 'TableHead'
            var TableCell = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref7, ref) {
                    var className = _ref7.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                            _ref7,
                            _excluded7,
                        )
                    return __jsx(
                        'td',
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                    'p-4 align-middle [&:has([role=checkbox])]:pr-0',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            TableCell.displayName = 'TableCell'
            var TableCaption = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
                function (_ref8, ref) {
                    var className = _ref8.className,
                        props = (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                            _ref8,
                            _excluded8,
                        )
                    return __jsx(
                        'caption',
                        (0,
                        _Users_rishwantariq_Documents_Exalogic_code_realcube_design_system_realcube_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                            {
                                ref,
                                className: (0,
                                _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                    'mt-4 text-sm text-muted-foreground',
                                    className,
                                ),
                            },
                            props,
                        ),
                    )
                },
            )
            TableCaption.displayName = 'TableCaption'
            try {
                ;(Table.displayName = 'Table'),
                    (Table.__docgenInfo = {
                        description: '',
                        displayName: 'Table',
                        props: {},
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/table.tsx#Table'
                        ] = {
                            docgenInfo: Table.__docgenInfo,
                            name: 'Table',
                            path: 'src/components/ui/table.tsx#Table',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
    },
])
