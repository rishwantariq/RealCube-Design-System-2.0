'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [485],
    {
        './node_modules/@radix-ui/react-popper/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                ee: () => $cf1ac5d9fe0e8206$export$b688253958b8dfe7,
                Eh: () => $cf1ac5d9fe0e8206$export$21b07c8f274aebd5,
                VY: () => $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2,
                fC: () => $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9,
                D7: () => $cf1ac5d9fe0e8206$export$722aac194ae923,
            })
            var esm_extends = __webpack_require__(
                    './node_modules/@babel/runtime/helpers/esm/extends.js',
                ),
                react = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                floating_ui_react_dom = __webpack_require__(
                    './node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs',
                ),
                floating_ui_dom = __webpack_require__(
                    './node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs',
                ),
                floating_ui_core = __webpack_require__(
                    './node_modules/@floating-ui/core/dist/floating-ui.core.mjs',
                ),
                dist = __webpack_require__(
                    './node_modules/@radix-ui/react-primitive/dist/index.mjs',
                )
            const $7e8f5cd07187803e$export$21b07c8f274aebd5 = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const {
                        children,
                        width = 10,
                        height = 5,
                        ...arrowProps
                    } = props
                    return (0, react.createElement)(
                        dist.WV.svg,
                        (0, esm_extends.Z)({}, arrowProps, {
                            ref: forwardedRef,
                            width,
                            height,
                            viewBox: '0 0 30 10',
                            preserveAspectRatio: 'none',
                        }),
                        props.asChild
                            ? children
                            : (0, react.createElement)('polygon', {
                                  points: '0,0 30,0 15,10',
                              }),
                    )
                }),
                $7e8f5cd07187803e$export$be92b6f5f03c0fe9 =
                    $7e8f5cd07187803e$export$21b07c8f274aebd5
            var react_compose_refs_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-compose-refs/dist/index.mjs',
                ),
                react_context_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-context/dist/index.mjs',
                ),
                react_use_callback_ref_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs',
                ),
                react_use_layout_effect_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs',
                ),
                react_use_size_dist = __webpack_require__(
                    './node_modules/@radix-ui/react-use-size/dist/index.mjs',
                )
            const [
                    $cf1ac5d9fe0e8206$var$createPopperContext,
                    $cf1ac5d9fe0e8206$export$722aac194ae923,
                ] = (0, react_context_dist.b)('Popper'),
                [
                    $cf1ac5d9fe0e8206$var$PopperProvider,
                    $cf1ac5d9fe0e8206$var$usePopperContext,
                ] = $cf1ac5d9fe0e8206$var$createPopperContext('Popper'),
                $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props) => {
                    const { __scopePopper, children } = props,
                        [anchor, setAnchor] = (0, react.useState)(null)
                    return (0, react.createElement)(
                        $cf1ac5d9fe0e8206$var$PopperProvider,
                        {
                            scope: __scopePopper,
                            anchor,
                            onAnchorChange: setAnchor,
                        },
                        children,
                    )
                },
                $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = (0,
                react.forwardRef)((props, forwardedRef) => {
                    const { __scopePopper, virtualRef, ...anchorProps } = props,
                        context = $cf1ac5d9fe0e8206$var$usePopperContext(
                            'PopperAnchor',
                            __scopePopper,
                        ),
                        ref = (0, react.useRef)(null),
                        composedRefs = (0, react_compose_refs_dist.e)(
                            forwardedRef,
                            ref,
                        )
                    return (
                        (0, react.useEffect)(() => {
                            context.onAnchorChange(
                                (null == virtualRef
                                    ? void 0
                                    : virtualRef.current) || ref.current,
                            )
                        }),
                        virtualRef
                            ? null
                            : (0, react.createElement)(
                                  dist.WV.div,
                                  (0, esm_extends.Z)({}, anchorProps, {
                                      ref: composedRefs,
                                  }),
                              )
                    )
                }),
                [
                    $cf1ac5d9fe0e8206$var$PopperContentProvider,
                    $cf1ac5d9fe0e8206$var$useContentContext,
                ] = $cf1ac5d9fe0e8206$var$createPopperContext('PopperContent'),
                $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = (0,
                react.forwardRef)((props, forwardedRef) => {
                    var _arrowSize$width,
                        _arrowSize$height,
                        _middlewareData$arrow,
                        _middlewareData$arrow2,
                        _middlewareData$arrow3,
                        _middlewareData$trans,
                        _middlewareData$trans2,
                        _middlewareData$hide
                    const {
                            __scopePopper,
                            side = 'bottom',
                            sideOffset = 0,
                            align = 'center',
                            alignOffset = 0,
                            arrowPadding = 0,
                            avoidCollisions = !0,
                            collisionBoundary = [],
                            collisionPadding: collisionPaddingProp = 0,
                            sticky = 'partial',
                            hideWhenDetached = !1,
                            updatePositionStrategy = 'optimized',
                            onPlaced,
                            ...contentProps
                        } = props,
                        context = $cf1ac5d9fe0e8206$var$usePopperContext(
                            'PopperContent',
                            __scopePopper,
                        ),
                        [content, setContent] = (0, react.useState)(null),
                        composedRefs = (0, react_compose_refs_dist.e)(
                            forwardedRef,
                            (node) => setContent(node),
                        ),
                        [arrow, setArrow] = (0, react.useState)(null),
                        arrowSize = (0, react_use_size_dist.t)(arrow),
                        arrowWidth =
                            null !==
                                (_arrowSize$width =
                                    null == arrowSize
                                        ? void 0
                                        : arrowSize.width) &&
                            void 0 !== _arrowSize$width
                                ? _arrowSize$width
                                : 0,
                        arrowHeight =
                            null !==
                                (_arrowSize$height =
                                    null == arrowSize
                                        ? void 0
                                        : arrowSize.height) &&
                            void 0 !== _arrowSize$height
                                ? _arrowSize$height
                                : 0,
                        desiredPlacement =
                            side + ('center' !== align ? '-' + align : ''),
                        collisionPadding =
                            'number' == typeof collisionPaddingProp
                                ? collisionPaddingProp
                                : {
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      left: 0,
                                      ...collisionPaddingProp,
                                  },
                        boundary = Array.isArray(collisionBoundary)
                            ? collisionBoundary
                            : [collisionBoundary],
                        hasExplicitBoundaries = boundary.length > 0,
                        detectOverflowOptions = {
                            padding: collisionPadding,
                            boundary: boundary.filter(
                                $cf1ac5d9fe0e8206$var$isNotNull,
                            ),
                            altBoundary: hasExplicitBoundaries,
                        },
                        {
                            refs,
                            floatingStyles,
                            placement,
                            isPositioned,
                            middlewareData,
                        } = (0, floating_ui_react_dom.YF)({
                            strategy: 'fixed',
                            placement: desiredPlacement,
                            whileElementsMounted: (...args) =>
                                (0, floating_ui_dom.Me)(...args, {
                                    animationFrame:
                                        'always' === updatePositionStrategy,
                                }),
                            elements: { reference: context.anchor },
                            middleware: [
                                (0, floating_ui_core.cv)({
                                    mainAxis: sideOffset + arrowHeight,
                                    alignmentAxis: alignOffset,
                                }),
                                avoidCollisions &&
                                    (0, floating_ui_core.uY)({
                                        mainAxis: !0,
                                        crossAxis: !1,
                                        limiter:
                                            'partial' === sticky
                                                ? (0, floating_ui_core.dr)()
                                                : void 0,
                                        ...detectOverflowOptions,
                                    }),
                                avoidCollisions &&
                                    (0, floating_ui_core.RR)({
                                        ...detectOverflowOptions,
                                    }),
                                (0, floating_ui_core.dp)({
                                    ...detectOverflowOptions,
                                    apply: ({
                                        elements,
                                        rects,
                                        availableWidth,
                                        availableHeight,
                                    }) => {
                                        const {
                                                width: anchorWidth,
                                                height: anchorHeight,
                                            } = rects.reference,
                                            contentStyle =
                                                elements.floating.style
                                        contentStyle.setProperty(
                                            '--radix-popper-available-width',
                                            `${availableWidth}px`,
                                        ),
                                            contentStyle.setProperty(
                                                '--radix-popper-available-height',
                                                `${availableHeight}px`,
                                            ),
                                            contentStyle.setProperty(
                                                '--radix-popper-anchor-width',
                                                `${anchorWidth}px`,
                                            ),
                                            contentStyle.setProperty(
                                                '--radix-popper-anchor-height',
                                                `${anchorHeight}px`,
                                            )
                                    },
                                }),
                                arrow &&
                                    (0, floating_ui_react_dom.x7)({
                                        element: arrow,
                                        padding: arrowPadding,
                                    }),
                                $cf1ac5d9fe0e8206$var$transformOrigin({
                                    arrowWidth,
                                    arrowHeight,
                                }),
                                hideWhenDetached &&
                                    (0, floating_ui_core.Cp)({
                                        strategy: 'referenceHidden',
                                        ...detectOverflowOptions,
                                    }),
                            ],
                        }),
                        [placedSide, placedAlign] =
                            $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(
                                placement,
                            ),
                        handlePlaced = (0, react_use_callback_ref_dist.W)(
                            onPlaced,
                        )
                    ;(0, react_use_layout_effect_dist.b)(() => {
                        isPositioned && (null == handlePlaced || handlePlaced())
                    }, [isPositioned, handlePlaced])
                    const arrowX =
                            null ===
                                (_middlewareData$arrow =
                                    middlewareData.arrow) ||
                            void 0 === _middlewareData$arrow
                                ? void 0
                                : _middlewareData$arrow.x,
                        arrowY =
                            null ===
                                (_middlewareData$arrow2 =
                                    middlewareData.arrow) ||
                            void 0 === _middlewareData$arrow2
                                ? void 0
                                : _middlewareData$arrow2.y,
                        cannotCenterArrow =
                            0 !==
                            (null ===
                                (_middlewareData$arrow3 =
                                    middlewareData.arrow) ||
                            void 0 === _middlewareData$arrow3
                                ? void 0
                                : _middlewareData$arrow3.centerOffset),
                        [contentZIndex, setContentZIndex] = (0,
                        react.useState)()
                    return (
                        (0, react_use_layout_effect_dist.b)(() => {
                            content &&
                                setContentZIndex(
                                    window.getComputedStyle(content).zIndex,
                                )
                        }, [content]),
                        (0, react.createElement)(
                            'div',
                            {
                                ref: refs.setFloating,
                                'data-radix-popper-content-wrapper': '',
                                style: {
                                    ...floatingStyles,
                                    transform: isPositioned
                                        ? floatingStyles.transform
                                        : 'translate(0, -200%)',
                                    minWidth: 'max-content',
                                    zIndex: contentZIndex,
                                    '--radix-popper-transform-origin': [
                                        null ===
                                            (_middlewareData$trans =
                                                middlewareData.transformOrigin) ||
                                        void 0 === _middlewareData$trans
                                            ? void 0
                                            : _middlewareData$trans.x,
                                        null ===
                                            (_middlewareData$trans2 =
                                                middlewareData.transformOrigin) ||
                                        void 0 === _middlewareData$trans2
                                            ? void 0
                                            : _middlewareData$trans2.y,
                                    ].join(' '),
                                },
                                dir: props.dir,
                            },
                            (0, react.createElement)(
                                $cf1ac5d9fe0e8206$var$PopperContentProvider,
                                {
                                    scope: __scopePopper,
                                    placedSide,
                                    onArrowChange: setArrow,
                                    arrowX,
                                    arrowY,
                                    shouldHideArrow: cannotCenterArrow,
                                },
                                (0, react.createElement)(
                                    dist.WV.div,
                                    (0, esm_extends.Z)(
                                        {
                                            'data-side': placedSide,
                                            'data-align': placedAlign,
                                        },
                                        contentProps,
                                        {
                                            ref: composedRefs,
                                            style: {
                                                ...contentProps.style,
                                                animation: isPositioned
                                                    ? void 0
                                                    : 'none',
                                                opacity:
                                                    null !==
                                                        (_middlewareData$hide =
                                                            middlewareData.hide) &&
                                                    void 0 !==
                                                        _middlewareData$hide &&
                                                    _middlewareData$hide.referenceHidden
                                                        ? 0
                                                        : void 0,
                                            },
                                        },
                                    ),
                                ),
                            ),
                        )
                    )
                }),
                $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE = {
                    top: 'bottom',
                    right: 'left',
                    bottom: 'top',
                    left: 'right',
                },
                $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0 = (0,
                react.forwardRef)(
                    function $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0(
                        props,
                        forwardedRef,
                    ) {
                        const { __scopePopper, ...arrowProps } = props,
                            contentContext =
                                $cf1ac5d9fe0e8206$var$useContentContext(
                                    'PopperArrow',
                                    __scopePopper,
                                ),
                            baseSide =
                                $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE[
                                    contentContext.placedSide
                                ]
                        return (0, react.createElement)(
                            'span',
                            {
                                ref: contentContext.onArrowChange,
                                style: {
                                    position: 'absolute',
                                    left: contentContext.arrowX,
                                    top: contentContext.arrowY,
                                    [baseSide]: 0,
                                    transformOrigin: {
                                        top: '',
                                        right: '0 0',
                                        bottom: 'center 0',
                                        left: '100% 0',
                                    }[contentContext.placedSide],
                                    transform: {
                                        top: 'translateY(100%)',
                                        right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                                        bottom: 'rotate(180deg)',
                                        left: 'translateY(50%) rotate(-90deg) translateX(50%)',
                                    }[contentContext.placedSide],
                                    visibility: contentContext.shouldHideArrow
                                        ? 'hidden'
                                        : void 0,
                                },
                            },
                            (0, react.createElement)(
                                $7e8f5cd07187803e$export$be92b6f5f03c0fe9,
                                (0, esm_extends.Z)({}, arrowProps, {
                                    ref: forwardedRef,
                                    style: {
                                        ...arrowProps.style,
                                        display: 'block',
                                    },
                                }),
                            ),
                        )
                    },
                )
            function $cf1ac5d9fe0e8206$var$isNotNull(value) {
                return null !== value
            }
            const $cf1ac5d9fe0e8206$var$transformOrigin = (options) => ({
                name: 'transformOrigin',
                options,
                fn(data) {
                    var _middlewareData$arrow4,
                        _middlewareData$arrow5,
                        _middlewareData$arrow6,
                        _middlewareData$arrow7,
                        _middlewareData$arrow8
                    const { placement, rects, middlewareData } = data,
                        isArrowHidden =
                            0 !==
                            (null ===
                                (_middlewareData$arrow4 =
                                    middlewareData.arrow) ||
                            void 0 === _middlewareData$arrow4
                                ? void 0
                                : _middlewareData$arrow4.centerOffset),
                        arrowWidth = isArrowHidden ? 0 : options.arrowWidth,
                        arrowHeight = isArrowHidden ? 0 : options.arrowHeight,
                        [placedSide, placedAlign] =
                            $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(
                                placement,
                            ),
                        noArrowAlign = {
                            start: '0%',
                            center: '50%',
                            end: '100%',
                        }[placedAlign],
                        arrowXCenter =
                            (null !==
                                (_middlewareData$arrow5 =
                                    null ===
                                        (_middlewareData$arrow6 =
                                            middlewareData.arrow) ||
                                    void 0 === _middlewareData$arrow6
                                        ? void 0
                                        : _middlewareData$arrow6.x) &&
                            void 0 !== _middlewareData$arrow5
                                ? _middlewareData$arrow5
                                : 0) +
                            arrowWidth / 2,
                        arrowYCenter =
                            (null !==
                                (_middlewareData$arrow7 =
                                    null ===
                                        (_middlewareData$arrow8 =
                                            middlewareData.arrow) ||
                                    void 0 === _middlewareData$arrow8
                                        ? void 0
                                        : _middlewareData$arrow8.y) &&
                            void 0 !== _middlewareData$arrow7
                                ? _middlewareData$arrow7
                                : 0) +
                            arrowHeight / 2
                    let x = '',
                        y = ''
                    return (
                        'bottom' === placedSide
                            ? ((x = isArrowHidden
                                  ? noArrowAlign
                                  : `${arrowXCenter}px`),
                              (y = -arrowHeight + 'px'))
                            : 'top' === placedSide
                              ? ((x = isArrowHidden
                                    ? noArrowAlign
                                    : `${arrowXCenter}px`),
                                (y = `${
                                    rects.floating.height + arrowHeight
                                }px`))
                              : 'right' === placedSide
                                ? ((x = -arrowHeight + 'px'),
                                  (y = isArrowHidden
                                      ? noArrowAlign
                                      : `${arrowYCenter}px`))
                                : 'left' === placedSide &&
                                  ((x = `${
                                      rects.floating.width + arrowHeight
                                  }px`),
                                  (y = isArrowHidden
                                      ? noArrowAlign
                                      : `${arrowYCenter}px`)),
                        { data: { x, y } }
                    )
                },
            })
            function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(
                placement,
            ) {
                const [side, align = 'center'] = placement.split('-')
                return [side, align]
            }
            const $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 =
                    $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9,
                $cf1ac5d9fe0e8206$export$b688253958b8dfe7 =
                    $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d,
                $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 =
                    $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc,
                $cf1ac5d9fe0e8206$export$21b07c8f274aebd5 =
                    $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0
        },
        './node_modules/@radix-ui/react-use-size/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                t: () => $db6c3485150b8e66$export$1ab7ae714698c4b8,
            })
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs',
                    )
            function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
                const [size, setSize] = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0)
                return (
                    (0,
                    _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)(() => {
                        if (element) {
                            setSize({
                                width: element.offsetWidth,
                                height: element.offsetHeight,
                            })
                            const resizeObserver = new ResizeObserver(
                                (entries) => {
                                    if (!Array.isArray(entries)) return
                                    if (!entries.length) return
                                    const entry = entries[0]
                                    let width, height
                                    if ('borderBoxSize' in entry) {
                                        const borderSizeEntry =
                                                entry.borderBoxSize,
                                            borderSize = Array.isArray(
                                                borderSizeEntry,
                                            )
                                                ? borderSizeEntry[0]
                                                : borderSizeEntry
                                        ;(width = borderSize.inlineSize),
                                            (height = borderSize.blockSize)
                                    } else
                                        (width = element.offsetWidth),
                                            (height = element.offsetHeight)
                                    setSize({ width, height })
                                },
                            )
                            return (
                                resizeObserver.observe(element, {
                                    box: 'border-box',
                                }),
                                () => resizeObserver.unobserve(element)
                            )
                        }
                        setSize(void 0)
                    }, [element]),
                    size
                )
            }
        },
    },
])
