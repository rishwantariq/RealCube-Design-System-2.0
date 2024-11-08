'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [9051],
    {
        './node_modules/@floating-ui/core/dist/floating-ui.core.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                Cp: () => hide,
                RR: () => flip,
                cv: () => offset,
                dp: () => size,
                dr: () => limitShift,
                oo: () => computePosition,
                uY: () => shift,
                x7: () => arrow,
            })
            var _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__ =
                __webpack_require__(
                    './node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs',
                )
            function computeCoordsFromPlacement(_ref, placement, rtl) {
                let { reference, floating } = _ref
                const sideAxis = (0,
                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.Qq)(
                        placement,
                    ),
                    alignmentAxis = (0,
                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.Wh)(
                        placement,
                    ),
                    alignLength = (0,
                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.I4)(
                        alignmentAxis,
                    ),
                    side = (0,
                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.k3)(
                        placement,
                    ),
                    isVertical = 'y' === sideAxis,
                    commonX =
                        reference.x + reference.width / 2 - floating.width / 2,
                    commonY =
                        reference.y +
                        reference.height / 2 -
                        floating.height / 2,
                    commonAlign =
                        reference[alignLength] / 2 - floating[alignLength] / 2
                let coords
                switch (side) {
                    case 'top':
                        coords = {
                            x: commonX,
                            y: reference.y - floating.height,
                        }
                        break
                    case 'bottom':
                        coords = {
                            x: commonX,
                            y: reference.y + reference.height,
                        }
                        break
                    case 'right':
                        coords = {
                            x: reference.x + reference.width,
                            y: commonY,
                        }
                        break
                    case 'left':
                        coords = { x: reference.x - floating.width, y: commonY }
                        break
                    default:
                        coords = { x: reference.x, y: reference.y }
                }
                switch (
                    (0, _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.hp)(
                        placement,
                    )
                ) {
                    case 'start':
                        coords[alignmentAxis] -=
                            commonAlign * (rtl && isVertical ? -1 : 1)
                        break
                    case 'end':
                        coords[alignmentAxis] +=
                            commonAlign * (rtl && isVertical ? -1 : 1)
                }
                return coords
            }
            const computePosition = async (reference, floating, config) => {
                const {
                        placement = 'bottom',
                        strategy = 'absolute',
                        middleware = [],
                        platform,
                    } = config,
                    validMiddleware = middleware.filter(Boolean),
                    rtl = await (null == platform.isRTL
                        ? void 0
                        : platform.isRTL(floating))
                let rects = await platform.getElementRects({
                        reference,
                        floating,
                        strategy,
                    }),
                    { x, y } = computeCoordsFromPlacement(
                        rects,
                        placement,
                        rtl,
                    ),
                    statefulPlacement = placement,
                    middlewareData = {},
                    resetCount = 0
                for (let i = 0; i < validMiddleware.length; i++) {
                    const { name, fn } = validMiddleware[i],
                        {
                            x: nextX,
                            y: nextY,
                            data,
                            reset,
                        } = await fn({
                            x,
                            y,
                            initialPlacement: placement,
                            placement: statefulPlacement,
                            strategy,
                            middlewareData,
                            rects,
                            platform,
                            elements: { reference, floating },
                        })
                    ;(x = null != nextX ? nextX : x),
                        (y = null != nextY ? nextY : y),
                        (middlewareData = {
                            ...middlewareData,
                            [name]: { ...middlewareData[name], ...data },
                        }),
                        reset &&
                            resetCount <= 50 &&
                            (resetCount++,
                            'object' == typeof reset &&
                                (reset.placement &&
                                    (statefulPlacement = reset.placement),
                                reset.rects &&
                                    (rects =
                                        !0 === reset.rects
                                            ? await platform.getElementRects({
                                                  reference,
                                                  floating,
                                                  strategy,
                                              })
                                            : reset.rects),
                                ({ x, y } = computeCoordsFromPlacement(
                                    rects,
                                    statefulPlacement,
                                    rtl,
                                ))),
                            (i = -1))
                }
                return {
                    x,
                    y,
                    placement: statefulPlacement,
                    strategy,
                    middlewareData,
                }
            }
            async function detectOverflow(state, options) {
                var _await$platform$isEle
                void 0 === options && (options = {})
                const { x, y, platform, rects, elements, strategy } = state,
                    {
                        boundary = 'clippingAncestors',
                        rootBoundary = 'viewport',
                        elementContext = 'floating',
                        altBoundary = !1,
                        padding = 0,
                    } = (0, _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.ku)(
                        options,
                        state,
                    ),
                    paddingObject = (0,
                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.yd)(
                        padding,
                    ),
                    element =
                        elements[
                            altBoundary
                                ? 'floating' === elementContext
                                    ? 'reference'
                                    : 'floating'
                                : elementContext
                        ],
                    clippingClientRect = (0,
                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.JB)(
                        await platform.getClippingRect({
                            element:
                                null ==
                                    (_await$platform$isEle = await (null ==
                                    platform.isElement
                                        ? void 0
                                        : platform.isElement(element))) ||
                                _await$platform$isEle
                                    ? element
                                    : element.contextElement ||
                                      (await (null ==
                                      platform.getDocumentElement
                                          ? void 0
                                          : platform.getDocumentElement(
                                                elements.floating,
                                            ))),
                            boundary,
                            rootBoundary,
                            strategy,
                        }),
                    ),
                    rect =
                        'floating' === elementContext
                            ? { ...rects.floating, x, y }
                            : rects.reference,
                    offsetParent = await (null == platform.getOffsetParent
                        ? void 0
                        : platform.getOffsetParent(elements.floating)),
                    offsetScale = ((await (null == platform.isElement
                        ? void 0
                        : platform.isElement(offsetParent))) &&
                        (await (null == platform.getScale
                            ? void 0
                            : platform.getScale(offsetParent)))) || {
                        x: 1,
                        y: 1,
                    },
                    elementClientRect = (0,
                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.JB)(
                        platform.convertOffsetParentRelativeRectToViewportRelativeRect
                            ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect(
                                  { rect, offsetParent, strategy },
                              )
                            : rect,
                    )
                return {
                    top:
                        (clippingClientRect.top -
                            elementClientRect.top +
                            paddingObject.top) /
                        offsetScale.y,
                    bottom:
                        (elementClientRect.bottom -
                            clippingClientRect.bottom +
                            paddingObject.bottom) /
                        offsetScale.y,
                    left:
                        (clippingClientRect.left -
                            elementClientRect.left +
                            paddingObject.left) /
                        offsetScale.x,
                    right:
                        (elementClientRect.right -
                            clippingClientRect.right +
                            paddingObject.right) /
                        offsetScale.x,
                }
            }
            const arrow = (options) => ({
                name: 'arrow',
                options,
                async fn(state) {
                    const {
                            x,
                            y,
                            placement,
                            rects,
                            platform,
                            elements,
                            middlewareData,
                        } = state,
                        { element, padding = 0 } =
                            (0,
                            _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.ku)(
                                options,
                                state,
                            ) || {}
                    if (null == element) return {}
                    const paddingObject = (0,
                        _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.yd)(
                            padding,
                        ),
                        coords = { x, y },
                        axis = (0,
                        _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.Wh)(
                            placement,
                        ),
                        length = (0,
                        _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.I4)(
                            axis,
                        ),
                        arrowDimensions = await platform.getDimensions(element),
                        isYAxis = 'y' === axis,
                        minProp = isYAxis ? 'top' : 'left',
                        maxProp = isYAxis ? 'bottom' : 'right',
                        clientProp = isYAxis ? 'clientHeight' : 'clientWidth',
                        endDiff =
                            rects.reference[length] +
                            rects.reference[axis] -
                            coords[axis] -
                            rects.floating[length],
                        startDiff = coords[axis] - rects.reference[axis],
                        arrowOffsetParent = await (null ==
                        platform.getOffsetParent
                            ? void 0
                            : platform.getOffsetParent(element))
                    let clientSize = arrowOffsetParent
                        ? arrowOffsetParent[clientProp]
                        : 0
                    ;(clientSize &&
                        (await (null == platform.isElement
                            ? void 0
                            : platform.isElement(arrowOffsetParent)))) ||
                        (clientSize =
                            elements.floating[clientProp] ||
                            rects.floating[length])
                    const centerToReference = endDiff / 2 - startDiff / 2,
                        largestPossiblePadding =
                            clientSize / 2 - arrowDimensions[length] / 2 - 1,
                        minPadding = (0,
                        _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.VV)(
                            paddingObject[minProp],
                            largestPossiblePadding,
                        ),
                        maxPadding = (0,
                        _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.VV)(
                            paddingObject[maxProp],
                            largestPossiblePadding,
                        ),
                        min$1 = minPadding,
                        max = clientSize - arrowDimensions[length] - maxPadding,
                        center =
                            clientSize / 2 -
                            arrowDimensions[length] / 2 +
                            centerToReference,
                        offset = (0,
                        _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.uZ)(
                            min$1,
                            center,
                            max,
                        ),
                        shouldAddOffset =
                            !middlewareData.arrow &&
                            null !=
                                (0,
                                _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.hp)(
                                    placement,
                                ) &&
                            center != offset &&
                            rects.reference[length] / 2 -
                                (center < min$1 ? minPadding : maxPadding) -
                                arrowDimensions[length] / 2 <
                                0,
                        alignmentOffset = shouldAddOffset
                            ? center < min$1
                                ? center - min$1
                                : center - max
                            : 0
                    return {
                        [axis]: coords[axis] + alignmentOffset,
                        data: {
                            [axis]: offset,
                            centerOffset: center - offset - alignmentOffset,
                            ...(shouldAddOffset && { alignmentOffset }),
                        },
                        reset: shouldAddOffset,
                    }
                },
            })
            const flip = function (options) {
                return (
                    void 0 === options && (options = {}),
                    {
                        name: 'flip',
                        options,
                        async fn(state) {
                            var _middlewareData$arrow, _middlewareData$flip
                            const {
                                    placement,
                                    middlewareData,
                                    rects,
                                    initialPlacement,
                                    platform,
                                    elements,
                                } = state,
                                {
                                    mainAxis: checkMainAxis = !0,
                                    crossAxis: checkCrossAxis = !0,
                                    fallbackPlacements:
                                        specifiedFallbackPlacements,
                                    fallbackStrategy = 'bestFit',
                                    fallbackAxisSideDirection = 'none',
                                    flipAlignment = !0,
                                    ...detectOverflowOptions
                                } = (0,
                                _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.ku)(
                                    options,
                                    state,
                                )
                            if (
                                null !=
                                    (_middlewareData$arrow =
                                        middlewareData.arrow) &&
                                _middlewareData$arrow.alignmentOffset
                            )
                                return {}
                            const side = (0,
                                _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.k3)(
                                    placement,
                                ),
                                isBasePlacement =
                                    (0,
                                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.k3)(
                                        initialPlacement,
                                    ) === initialPlacement,
                                rtl = await (null == platform.isRTL
                                    ? void 0
                                    : platform.isRTL(elements.floating)),
                                fallbackPlacements =
                                    specifiedFallbackPlacements ||
                                    (isBasePlacement || !flipAlignment
                                        ? [
                                              (0,
                                              _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.pw)(
                                                  initialPlacement,
                                              ),
                                          ]
                                        : (0,
                                          _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.gy)(
                                              initialPlacement,
                                          ))
                            specifiedFallbackPlacements ||
                                'none' === fallbackAxisSideDirection ||
                                fallbackPlacements.push(
                                    ...(0,
                                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.KX)(
                                        initialPlacement,
                                        flipAlignment,
                                        fallbackAxisSideDirection,
                                        rtl,
                                    ),
                                )
                            const placements = [
                                    initialPlacement,
                                    ...fallbackPlacements,
                                ],
                                overflow = await detectOverflow(
                                    state,
                                    detectOverflowOptions,
                                ),
                                overflows = []
                            let overflowsData =
                                (null ==
                                (_middlewareData$flip = middlewareData.flip)
                                    ? void 0
                                    : _middlewareData$flip.overflows) || []
                            if (
                                (checkMainAxis &&
                                    overflows.push(overflow[side]),
                                checkCrossAxis)
                            ) {
                                const sides = (0,
                                _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.i8)(
                                    placement,
                                    rects,
                                    rtl,
                                )
                                overflows.push(
                                    overflow[sides[0]],
                                    overflow[sides[1]],
                                )
                            }
                            if (
                                ((overflowsData = [
                                    ...overflowsData,
                                    { placement, overflows },
                                ]),
                                !overflows.every((side) => side <= 0))
                            ) {
                                var _middlewareData$flip2, _overflowsData$filter
                                const nextIndex =
                                        ((null ==
                                        (_middlewareData$flip2 =
                                            middlewareData.flip)
                                            ? void 0
                                            : _middlewareData$flip2.index) ||
                                            0) + 1,
                                    nextPlacement = placements[nextIndex]
                                if (nextPlacement)
                                    return {
                                        data: {
                                            index: nextIndex,
                                            overflows: overflowsData,
                                        },
                                        reset: { placement: nextPlacement },
                                    }
                                let resetPlacement =
                                    null ==
                                    (_overflowsData$filter = overflowsData
                                        .filter((d) => d.overflows[0] <= 0)
                                        .sort(
                                            (a, b) =>
                                                a.overflows[1] - b.overflows[1],
                                        )[0])
                                        ? void 0
                                        : _overflowsData$filter.placement
                                if (!resetPlacement)
                                    switch (fallbackStrategy) {
                                        case 'bestFit': {
                                            var _overflowsData$map$so
                                            const placement =
                                                null ==
                                                (_overflowsData$map$so =
                                                    overflowsData
                                                        .map((d) => [
                                                            d.placement,
                                                            d.overflows
                                                                .filter(
                                                                    (
                                                                        overflow,
                                                                    ) =>
                                                                        overflow >
                                                                        0,
                                                                )
                                                                .reduce(
                                                                    (
                                                                        acc,
                                                                        overflow,
                                                                    ) =>
                                                                        acc +
                                                                        overflow,
                                                                    0,
                                                                ),
                                                        ])
                                                        .sort(
                                                            (a, b) =>
                                                                a[1] - b[1],
                                                        )[0])
                                                    ? void 0
                                                    : _overflowsData$map$so[0]
                                            placement &&
                                                (resetPlacement = placement)
                                            break
                                        }
                                        case 'initialPlacement':
                                            resetPlacement = initialPlacement
                                    }
                                if (placement !== resetPlacement)
                                    return {
                                        reset: { placement: resetPlacement },
                                    }
                            }
                            return {}
                        },
                    }
                )
            }
            function getSideOffsets(overflow, rect) {
                return {
                    top: overflow.top - rect.height,
                    right: overflow.right - rect.width,
                    bottom: overflow.bottom - rect.height,
                    left: overflow.left - rect.width,
                }
            }
            function isAnySideFullyClipped(overflow) {
                return _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.mA.some(
                    (side) => overflow[side] >= 0,
                )
            }
            const hide = function (options) {
                return (
                    void 0 === options && (options = {}),
                    {
                        name: 'hide',
                        options,
                        async fn(state) {
                            const { rects } = state,
                                {
                                    strategy = 'referenceHidden',
                                    ...detectOverflowOptions
                                } = (0,
                                _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.ku)(
                                    options,
                                    state,
                                )
                            switch (strategy) {
                                case 'referenceHidden': {
                                    const offsets = getSideOffsets(
                                        await detectOverflow(state, {
                                            ...detectOverflowOptions,
                                            elementContext: 'reference',
                                        }),
                                        rects.reference,
                                    )
                                    return {
                                        data: {
                                            referenceHiddenOffsets: offsets,
                                            referenceHidden:
                                                isAnySideFullyClipped(offsets),
                                        },
                                    }
                                }
                                case 'escaped': {
                                    const offsets = getSideOffsets(
                                        await detectOverflow(state, {
                                            ...detectOverflowOptions,
                                            altBoundary: !0,
                                        }),
                                        rects.floating,
                                    )
                                    return {
                                        data: {
                                            escapedOffsets: offsets,
                                            escaped:
                                                isAnySideFullyClipped(offsets),
                                        },
                                    }
                                }
                                default:
                                    return {}
                            }
                        },
                    }
                )
            }
            const offset = function (options) {
                    return (
                        void 0 === options && (options = 0),
                        {
                            name: 'offset',
                            options,
                            async fn(state) {
                                const { x, y } = state,
                                    diffCoords =
                                        await (async function convertValueToCoords(
                                            state,
                                            options,
                                        ) {
                                            const {
                                                    placement,
                                                    platform,
                                                    elements,
                                                } = state,
                                                rtl = await (null ==
                                                platform.isRTL
                                                    ? void 0
                                                    : platform.isRTL(
                                                          elements.floating,
                                                      )),
                                                side = (0,
                                                _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.k3)(
                                                    placement,
                                                ),
                                                alignment = (0,
                                                _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.hp)(
                                                    placement,
                                                ),
                                                isVertical =
                                                    'y' ===
                                                    (0,
                                                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.Qq)(
                                                        placement,
                                                    ),
                                                mainAxisMulti = [
                                                    'left',
                                                    'top',
                                                ].includes(side)
                                                    ? -1
                                                    : 1,
                                                crossAxisMulti =
                                                    rtl && isVertical ? -1 : 1,
                                                rawValue = (0,
                                                _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.ku)(
                                                    options,
                                                    state,
                                                )
                                            let {
                                                mainAxis,
                                                crossAxis,
                                                alignmentAxis,
                                            } =
                                                'number' == typeof rawValue
                                                    ? {
                                                          mainAxis: rawValue,
                                                          crossAxis: 0,
                                                          alignmentAxis: null,
                                                      }
                                                    : {
                                                          mainAxis: 0,
                                                          crossAxis: 0,
                                                          alignmentAxis: null,
                                                          ...rawValue,
                                                      }
                                            return (
                                                alignment &&
                                                    'number' ==
                                                        typeof alignmentAxis &&
                                                    (crossAxis =
                                                        'end' === alignment
                                                            ? -1 * alignmentAxis
                                                            : alignmentAxis),
                                                isVertical
                                                    ? {
                                                          x:
                                                              crossAxis *
                                                              crossAxisMulti,
                                                          y:
                                                              mainAxis *
                                                              mainAxisMulti,
                                                      }
                                                    : {
                                                          x:
                                                              mainAxis *
                                                              mainAxisMulti,
                                                          y:
                                                              crossAxis *
                                                              crossAxisMulti,
                                                      }
                                            )
                                        })(state, options)
                                return {
                                    x: x + diffCoords.x,
                                    y: y + diffCoords.y,
                                    data: diffCoords,
                                }
                            },
                        }
                    )
                },
                shift = function (options) {
                    return (
                        void 0 === options && (options = {}),
                        {
                            name: 'shift',
                            options,
                            async fn(state) {
                                const { x, y, placement } = state,
                                    {
                                        mainAxis: checkMainAxis = !0,
                                        crossAxis: checkCrossAxis = !1,
                                        limiter = {
                                            fn: (_ref) => {
                                                let { x, y } = _ref
                                                return { x, y }
                                            },
                                        },
                                        ...detectOverflowOptions
                                    } = (0,
                                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.ku)(
                                        options,
                                        state,
                                    ),
                                    coords = { x, y },
                                    overflow = await detectOverflow(
                                        state,
                                        detectOverflowOptions,
                                    ),
                                    crossAxis = (0,
                                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.Qq)(
                                        (0,
                                        _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.k3)(
                                            placement,
                                        ),
                                    ),
                                    mainAxis = (0,
                                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.Rn)(
                                        crossAxis,
                                    )
                                let mainAxisCoord = coords[mainAxis],
                                    crossAxisCoord = coords[crossAxis]
                                if (checkMainAxis) {
                                    const maxSide =
                                            'y' === mainAxis
                                                ? 'bottom'
                                                : 'right',
                                        min =
                                            mainAxisCoord +
                                            overflow[
                                                'y' === mainAxis
                                                    ? 'top'
                                                    : 'left'
                                            ],
                                        max = mainAxisCoord - overflow[maxSide]
                                    mainAxisCoord = (0,
                                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.uZ)(
                                        min,
                                        mainAxisCoord,
                                        max,
                                    )
                                }
                                if (checkCrossAxis) {
                                    const maxSide =
                                            'y' === crossAxis
                                                ? 'bottom'
                                                : 'right',
                                        min =
                                            crossAxisCoord +
                                            overflow[
                                                'y' === crossAxis
                                                    ? 'top'
                                                    : 'left'
                                            ],
                                        max = crossAxisCoord - overflow[maxSide]
                                    crossAxisCoord = (0,
                                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.uZ)(
                                        min,
                                        crossAxisCoord,
                                        max,
                                    )
                                }
                                const limitedCoords = limiter.fn({
                                    ...state,
                                    [mainAxis]: mainAxisCoord,
                                    [crossAxis]: crossAxisCoord,
                                })
                                return {
                                    ...limitedCoords,
                                    data: {
                                        x: limitedCoords.x - x,
                                        y: limitedCoords.y - y,
                                    },
                                }
                            },
                        }
                    )
                },
                limitShift = function (options) {
                    return (
                        void 0 === options && (options = {}),
                        {
                            options,
                            fn(state) {
                                const {
                                        x,
                                        y,
                                        placement,
                                        rects,
                                        middlewareData,
                                    } = state,
                                    {
                                        offset = 0,
                                        mainAxis: checkMainAxis = !0,
                                        crossAxis: checkCrossAxis = !0,
                                    } = (0,
                                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.ku)(
                                        options,
                                        state,
                                    ),
                                    coords = { x, y },
                                    crossAxis = (0,
                                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.Qq)(
                                        placement,
                                    ),
                                    mainAxis = (0,
                                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.Rn)(
                                        crossAxis,
                                    )
                                let mainAxisCoord = coords[mainAxis],
                                    crossAxisCoord = coords[crossAxis]
                                const rawOffset = (0,
                                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.ku)(
                                        offset,
                                        state,
                                    ),
                                    computedOffset =
                                        'number' == typeof rawOffset
                                            ? {
                                                  mainAxis: rawOffset,
                                                  crossAxis: 0,
                                              }
                                            : {
                                                  mainAxis: 0,
                                                  crossAxis: 0,
                                                  ...rawOffset,
                                              }
                                if (checkMainAxis) {
                                    const len =
                                            'y' === mainAxis
                                                ? 'height'
                                                : 'width',
                                        limitMin =
                                            rects.reference[mainAxis] -
                                            rects.floating[len] +
                                            computedOffset.mainAxis,
                                        limitMax =
                                            rects.reference[mainAxis] +
                                            rects.reference[len] -
                                            computedOffset.mainAxis
                                    mainAxisCoord < limitMin
                                        ? (mainAxisCoord = limitMin)
                                        : mainAxisCoord > limitMax &&
                                          (mainAxisCoord = limitMax)
                                }
                                if (checkCrossAxis) {
                                    var _middlewareData$offse,
                                        _middlewareData$offse2
                                    const len =
                                            'y' === mainAxis
                                                ? 'width'
                                                : 'height',
                                        isOriginSide = ['top', 'left'].includes(
                                            (0,
                                            _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.k3)(
                                                placement,
                                            ),
                                        ),
                                        limitMin =
                                            rects.reference[crossAxis] -
                                            rects.floating[len] +
                                            ((isOriginSide &&
                                                (null ==
                                                (_middlewareData$offse =
                                                    middlewareData.offset)
                                                    ? void 0
                                                    : _middlewareData$offse[
                                                          crossAxis
                                                      ])) ||
                                                0) +
                                            (isOriginSide
                                                ? 0
                                                : computedOffset.crossAxis),
                                        limitMax =
                                            rects.reference[crossAxis] +
                                            rects.reference[len] +
                                            (isOriginSide
                                                ? 0
                                                : (null ==
                                                  (_middlewareData$offse2 =
                                                      middlewareData.offset)
                                                      ? void 0
                                                      : _middlewareData$offse2[
                                                            crossAxis
                                                        ]) || 0) -
                                            (isOriginSide
                                                ? computedOffset.crossAxis
                                                : 0)
                                    crossAxisCoord < limitMin
                                        ? (crossAxisCoord = limitMin)
                                        : crossAxisCoord > limitMax &&
                                          (crossAxisCoord = limitMax)
                                }
                                return {
                                    [mainAxis]: mainAxisCoord,
                                    [crossAxis]: crossAxisCoord,
                                }
                            },
                        }
                    )
                },
                size = function (options) {
                    return (
                        void 0 === options && (options = {}),
                        {
                            name: 'size',
                            options,
                            async fn(state) {
                                const { placement, rects, platform, elements } =
                                        state,
                                    {
                                        apply = () => {},
                                        ...detectOverflowOptions
                                    } = (0,
                                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.ku)(
                                        options,
                                        state,
                                    ),
                                    overflow = await detectOverflow(
                                        state,
                                        detectOverflowOptions,
                                    ),
                                    side = (0,
                                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.k3)(
                                        placement,
                                    ),
                                    alignment = (0,
                                    _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.hp)(
                                        placement,
                                    ),
                                    isYAxis =
                                        'y' ===
                                        (0,
                                        _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.Qq)(
                                            placement,
                                        ),
                                    { width, height } = rects.floating
                                let heightSide, widthSide
                                'top' === side || 'bottom' === side
                                    ? ((heightSide = side),
                                      (widthSide =
                                          alignment ===
                                          ((await (null == platform.isRTL
                                              ? void 0
                                              : platform.isRTL(
                                                    elements.floating,
                                                )))
                                              ? 'start'
                                              : 'end')
                                              ? 'left'
                                              : 'right'))
                                    : ((widthSide = side),
                                      (heightSide =
                                          'end' === alignment
                                              ? 'top'
                                              : 'bottom'))
                                const overflowAvailableHeight =
                                        height - overflow[heightSide],
                                    overflowAvailableWidth =
                                        width - overflow[widthSide],
                                    noShift = !state.middlewareData.shift
                                let availableHeight = overflowAvailableHeight,
                                    availableWidth = overflowAvailableWidth
                                if (isYAxis) {
                                    const maximumClippingWidth =
                                        width - overflow.left - overflow.right
                                    availableWidth =
                                        alignment || noShift
                                            ? (0,
                                              _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.VV)(
                                                  overflowAvailableWidth,
                                                  maximumClippingWidth,
                                              )
                                            : maximumClippingWidth
                                } else {
                                    const maximumClippingHeight =
                                        height - overflow.top - overflow.bottom
                                    availableHeight =
                                        alignment || noShift
                                            ? (0,
                                              _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.VV)(
                                                  overflowAvailableHeight,
                                                  maximumClippingHeight,
                                              )
                                            : maximumClippingHeight
                                }
                                if (noShift && !alignment) {
                                    const xMin = (0,
                                        _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.Fp)(
                                            overflow.left,
                                            0,
                                        ),
                                        xMax = (0,
                                        _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.Fp)(
                                            overflow.right,
                                            0,
                                        ),
                                        yMin = (0,
                                        _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.Fp)(
                                            overflow.top,
                                            0,
                                        ),
                                        yMax = (0,
                                        _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.Fp)(
                                            overflow.bottom,
                                            0,
                                        )
                                    isYAxis
                                        ? (availableWidth =
                                              width -
                                              2 *
                                                  (0 !== xMin || 0 !== xMax
                                                      ? xMin + xMax
                                                      : (0,
                                                        _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.Fp)(
                                                            overflow.left,
                                                            overflow.right,
                                                        )))
                                        : (availableHeight =
                                              height -
                                              2 *
                                                  (0 !== yMin || 0 !== yMax
                                                      ? yMin + yMax
                                                      : (0,
                                                        _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.Fp)(
                                                            overflow.top,
                                                            overflow.bottom,
                                                        )))
                                }
                                await apply({
                                    ...state,
                                    availableWidth,
                                    availableHeight,
                                })
                                const nextDimensions =
                                    await platform.getDimensions(
                                        elements.floating,
                                    )
                                return width !== nextDimensions.width ||
                                    height !== nextDimensions.height
                                    ? { reset: { rects: !0 } }
                                    : {}
                            },
                        }
                    )
                }
        },
        './node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                Me: () => autoUpdate,
                oo: () => computePosition,
            })
            var floating_ui_utils = __webpack_require__(
                    './node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs',
                ),
                floating_ui_core = __webpack_require__(
                    './node_modules/@floating-ui/core/dist/floating-ui.core.mjs',
                )
            function getNodeName(node) {
                return isNode(node)
                    ? (node.nodeName || '').toLowerCase()
                    : '#document'
            }
            function getWindow(node) {
                var _node$ownerDocument
                return (
                    (null == node ||
                    null == (_node$ownerDocument = node.ownerDocument)
                        ? void 0
                        : _node$ownerDocument.defaultView) || window
                )
            }
            function getDocumentElement(node) {
                var _ref
                return null ==
                    (_ref =
                        (isNode(node) ? node.ownerDocument : node.document) ||
                        window.document)
                    ? void 0
                    : _ref.documentElement
            }
            function isNode(value) {
                return (
                    value instanceof Node ||
                    value instanceof getWindow(value).Node
                )
            }
            function isElement(value) {
                return (
                    value instanceof Element ||
                    value instanceof getWindow(value).Element
                )
            }
            function isHTMLElement(value) {
                return (
                    value instanceof HTMLElement ||
                    value instanceof getWindow(value).HTMLElement
                )
            }
            function isShadowRoot(value) {
                return (
                    'undefined' != typeof ShadowRoot &&
                    (value instanceof ShadowRoot ||
                        value instanceof getWindow(value).ShadowRoot)
                )
            }
            function isOverflowElement(element) {
                const { overflow, overflowX, overflowY, display } =
                    getComputedStyle(element)
                return (
                    /auto|scroll|overlay|hidden|clip/.test(
                        overflow + overflowY + overflowX,
                    ) && !['inline', 'contents'].includes(display)
                )
            }
            function isTableElement(element) {
                return ['table', 'td', 'th'].includes(getNodeName(element))
            }
            function isContainingBlock(element) {
                const webkit = isWebKit(),
                    css = getComputedStyle(element)
                return (
                    'none' !== css.transform ||
                    'none' !== css.perspective ||
                    (!!css.containerType && 'normal' !== css.containerType) ||
                    (!webkit &&
                        !!css.backdropFilter &&
                        'none' !== css.backdropFilter) ||
                    (!webkit && !!css.filter && 'none' !== css.filter) ||
                    ['transform', 'perspective', 'filter'].some((value) =>
                        (css.willChange || '').includes(value),
                    ) ||
                    ['paint', 'layout', 'strict', 'content'].some((value) =>
                        (css.contain || '').includes(value),
                    )
                )
            }
            function isWebKit() {
                return (
                    !('undefined' == typeof CSS || !CSS.supports) &&
                    CSS.supports('-webkit-backdrop-filter', 'none')
                )
            }
            function isLastTraversableNode(node) {
                return ['html', 'body', '#document'].includes(getNodeName(node))
            }
            function getComputedStyle(element) {
                return getWindow(element).getComputedStyle(element)
            }
            function getNodeScroll(element) {
                return isElement(element)
                    ? {
                          scrollLeft: element.scrollLeft,
                          scrollTop: element.scrollTop,
                      }
                    : {
                          scrollLeft: element.pageXOffset,
                          scrollTop: element.pageYOffset,
                      }
            }
            function getParentNode(node) {
                if ('html' === getNodeName(node)) return node
                const result =
                    node.assignedSlot ||
                    node.parentNode ||
                    (isShadowRoot(node) && node.host) ||
                    getDocumentElement(node)
                return isShadowRoot(result) ? result.host : result
            }
            function getNearestOverflowAncestor(node) {
                const parentNode = getParentNode(node)
                return isLastTraversableNode(parentNode)
                    ? node.ownerDocument
                        ? node.ownerDocument.body
                        : node.body
                    : isHTMLElement(parentNode) && isOverflowElement(parentNode)
                      ? parentNode
                      : getNearestOverflowAncestor(parentNode)
            }
            function getOverflowAncestors(node, list, traverseIframes) {
                var _node$ownerDocument2
                void 0 === list && (list = []),
                    void 0 === traverseIframes && (traverseIframes = !0)
                const scrollableAncestor = getNearestOverflowAncestor(node),
                    isBody =
                        scrollableAncestor ===
                        (null == (_node$ownerDocument2 = node.ownerDocument)
                            ? void 0
                            : _node$ownerDocument2.body),
                    win = getWindow(scrollableAncestor)
                return isBody
                    ? list.concat(
                          win,
                          win.visualViewport || [],
                          isOverflowElement(scrollableAncestor)
                              ? scrollableAncestor
                              : [],
                          win.frameElement && traverseIframes
                              ? getOverflowAncestors(win.frameElement)
                              : [],
                      )
                    : list.concat(
                          scrollableAncestor,
                          getOverflowAncestors(
                              scrollableAncestor,
                              [],
                              traverseIframes,
                          ),
                      )
            }
            function getCssDimensions(element) {
                const css = getComputedStyle(element)
                let width = parseFloat(css.width) || 0,
                    height = parseFloat(css.height) || 0
                const hasOffset = isHTMLElement(element),
                    offsetWidth = hasOffset ? element.offsetWidth : width,
                    offsetHeight = hasOffset ? element.offsetHeight : height,
                    shouldFallback =
                        (0, floating_ui_utils.NM)(width) !== offsetWidth ||
                        (0, floating_ui_utils.NM)(height) !== offsetHeight
                return (
                    shouldFallback &&
                        ((width = offsetWidth), (height = offsetHeight)),
                    { width, height, $: shouldFallback }
                )
            }
            function unwrapElement(element) {
                return isElement(element) ? element : element.contextElement
            }
            function getScale(element) {
                const domElement = unwrapElement(element)
                if (!isHTMLElement(domElement))
                    return (0, floating_ui_utils.ze)(1)
                const rect = domElement.getBoundingClientRect(),
                    { width, height, $ } = getCssDimensions(domElement)
                let x =
                        ($
                            ? (0, floating_ui_utils.NM)(rect.width)
                            : rect.width) / width,
                    y =
                        ($
                            ? (0, floating_ui_utils.NM)(rect.height)
                            : rect.height) / height
                return (
                    (x && Number.isFinite(x)) || (x = 1),
                    (y && Number.isFinite(y)) || (y = 1),
                    { x, y }
                )
            }
            const noOffsets = (0, floating_ui_utils.ze)(0)
            function getVisualOffsets(element) {
                const win = getWindow(element)
                return isWebKit() && win.visualViewport
                    ? {
                          x: win.visualViewport.offsetLeft,
                          y: win.visualViewport.offsetTop,
                      }
                    : noOffsets
            }
            function getBoundingClientRect(
                element,
                includeScale,
                isFixedStrategy,
                offsetParent,
            ) {
                void 0 === includeScale && (includeScale = !1),
                    void 0 === isFixedStrategy && (isFixedStrategy = !1)
                const clientRect = element.getBoundingClientRect(),
                    domElement = unwrapElement(element)
                let scale = (0, floating_ui_utils.ze)(1)
                includeScale &&
                    (offsetParent
                        ? isElement(offsetParent) &&
                          (scale = getScale(offsetParent))
                        : (scale = getScale(element)))
                const visualOffsets = (function shouldAddVisualOffsets(
                    element,
                    isFixed,
                    floatingOffsetParent,
                ) {
                    return (
                        void 0 === isFixed && (isFixed = !1),
                        !(
                            !floatingOffsetParent ||
                            (isFixed &&
                                floatingOffsetParent !== getWindow(element))
                        ) && isFixed
                    )
                })(domElement, isFixedStrategy, offsetParent)
                    ? getVisualOffsets(domElement)
                    : (0, floating_ui_utils.ze)(0)
                let x = (clientRect.left + visualOffsets.x) / scale.x,
                    y = (clientRect.top + visualOffsets.y) / scale.y,
                    width = clientRect.width / scale.x,
                    height = clientRect.height / scale.y
                if (domElement) {
                    const win = getWindow(domElement),
                        offsetWin =
                            offsetParent && isElement(offsetParent)
                                ? getWindow(offsetParent)
                                : offsetParent
                    let currentIFrame = win.frameElement
                    for (
                        ;
                        currentIFrame && offsetParent && offsetWin !== win;

                    ) {
                        const iframeScale = getScale(currentIFrame),
                            iframeRect = currentIFrame.getBoundingClientRect(),
                            css = getComputedStyle(currentIFrame),
                            left =
                                iframeRect.left +
                                (currentIFrame.clientLeft +
                                    parseFloat(css.paddingLeft)) *
                                    iframeScale.x,
                            top =
                                iframeRect.top +
                                (currentIFrame.clientTop +
                                    parseFloat(css.paddingTop)) *
                                    iframeScale.y
                        ;(x *= iframeScale.x),
                            (y *= iframeScale.y),
                            (width *= iframeScale.x),
                            (height *= iframeScale.y),
                            (x += left),
                            (y += top),
                            (currentIFrame =
                                getWindow(currentIFrame).frameElement)
                    }
                }
                return (0, floating_ui_utils.JB)({ width, height, x, y })
            }
            function getWindowScrollBarX(element) {
                return (
                    getBoundingClientRect(getDocumentElement(element)).left +
                    getNodeScroll(element).scrollLeft
                )
            }
            function getClientRectFromClippingAncestor(
                element,
                clippingAncestor,
                strategy,
            ) {
                let rect
                if ('viewport' === clippingAncestor)
                    rect = (function getViewportRect(element, strategy) {
                        const win = getWindow(element),
                            html = getDocumentElement(element),
                            visualViewport = win.visualViewport
                        let width = html.clientWidth,
                            height = html.clientHeight,
                            x = 0,
                            y = 0
                        if (visualViewport) {
                            ;(width = visualViewport.width),
                                (height = visualViewport.height)
                            const visualViewportBased = isWebKit()
                            ;(!visualViewportBased ||
                                (visualViewportBased &&
                                    'fixed' === strategy)) &&
                                ((x = visualViewport.offsetLeft),
                                (y = visualViewport.offsetTop))
                        }
                        return { width, height, x, y }
                    })(element, strategy)
                else if ('document' === clippingAncestor)
                    rect = (function getDocumentRect(element) {
                        const html = getDocumentElement(element),
                            scroll = getNodeScroll(element),
                            body = element.ownerDocument.body,
                            width = (0, floating_ui_utils.Fp)(
                                html.scrollWidth,
                                html.clientWidth,
                                body.scrollWidth,
                                body.clientWidth,
                            ),
                            height = (0, floating_ui_utils.Fp)(
                                html.scrollHeight,
                                html.clientHeight,
                                body.scrollHeight,
                                body.clientHeight,
                            )
                        let x =
                            -scroll.scrollLeft + getWindowScrollBarX(element)
                        const y = -scroll.scrollTop
                        return (
                            'rtl' === getComputedStyle(body).direction &&
                                (x +=
                                    (0, floating_ui_utils.Fp)(
                                        html.clientWidth,
                                        body.clientWidth,
                                    ) - width),
                            { width, height, x, y }
                        )
                    })(getDocumentElement(element))
                else if (isElement(clippingAncestor))
                    rect = (function getInnerBoundingClientRect(
                        element,
                        strategy,
                    ) {
                        const clientRect = getBoundingClientRect(
                                element,
                                !0,
                                'fixed' === strategy,
                            ),
                            top = clientRect.top + element.clientTop,
                            left = clientRect.left + element.clientLeft,
                            scale = isHTMLElement(element)
                                ? getScale(element)
                                : (0, floating_ui_utils.ze)(1)
                        return {
                            width: element.clientWidth * scale.x,
                            height: element.clientHeight * scale.y,
                            x: left * scale.x,
                            y: top * scale.y,
                        }
                    })(clippingAncestor, strategy)
                else {
                    const visualOffsets = getVisualOffsets(element)
                    rect = {
                        ...clippingAncestor,
                        x: clippingAncestor.x - visualOffsets.x,
                        y: clippingAncestor.y - visualOffsets.y,
                    }
                }
                return (0, floating_ui_utils.JB)(rect)
            }
            function hasFixedPositionAncestor(element, stopNode) {
                const parentNode = getParentNode(element)
                return (
                    !(
                        parentNode === stopNode ||
                        !isElement(parentNode) ||
                        isLastTraversableNode(parentNode)
                    ) &&
                    ('fixed' === getComputedStyle(parentNode).position ||
                        hasFixedPositionAncestor(parentNode, stopNode))
                )
            }
            function getRectRelativeToOffsetParent(
                element,
                offsetParent,
                strategy,
            ) {
                const isOffsetParentAnElement = isHTMLElement(offsetParent),
                    documentElement = getDocumentElement(offsetParent),
                    isFixed = 'fixed' === strategy,
                    rect = getBoundingClientRect(
                        element,
                        !0,
                        isFixed,
                        offsetParent,
                    )
                let scroll = { scrollLeft: 0, scrollTop: 0 }
                const offsets = (0, floating_ui_utils.ze)(0)
                if (
                    isOffsetParentAnElement ||
                    (!isOffsetParentAnElement && !isFixed)
                )
                    if (
                        (('body' !== getNodeName(offsetParent) ||
                            isOverflowElement(documentElement)) &&
                            (scroll = getNodeScroll(offsetParent)),
                        isOffsetParentAnElement)
                    ) {
                        const offsetRect = getBoundingClientRect(
                            offsetParent,
                            !0,
                            isFixed,
                            offsetParent,
                        )
                        ;(offsets.x = offsetRect.x + offsetParent.clientLeft),
                            (offsets.y = offsetRect.y + offsetParent.clientTop)
                    } else
                        documentElement &&
                            (offsets.x = getWindowScrollBarX(documentElement))
                return {
                    x: rect.left + scroll.scrollLeft - offsets.x,
                    y: rect.top + scroll.scrollTop - offsets.y,
                    width: rect.width,
                    height: rect.height,
                }
            }
            function getTrueOffsetParent(element, polyfill) {
                return isHTMLElement(element) &&
                    'fixed' !== getComputedStyle(element).position
                    ? polyfill
                        ? polyfill(element)
                        : element.offsetParent
                    : null
            }
            function getOffsetParent(element, polyfill) {
                const window = getWindow(element)
                if (!isHTMLElement(element)) return window
                let offsetParent = getTrueOffsetParent(element, polyfill)
                for (
                    ;
                    offsetParent &&
                    isTableElement(offsetParent) &&
                    'static' === getComputedStyle(offsetParent).position;

                )
                    offsetParent = getTrueOffsetParent(offsetParent, polyfill)
                return offsetParent &&
                    ('html' === getNodeName(offsetParent) ||
                        ('body' === getNodeName(offsetParent) &&
                            'static' ===
                                getComputedStyle(offsetParent).position &&
                            !isContainingBlock(offsetParent)))
                    ? window
                    : offsetParent ||
                          (function getContainingBlock(element) {
                              let currentNode = getParentNode(element)
                              for (
                                  ;
                                  isHTMLElement(currentNode) &&
                                  !isLastTraversableNode(currentNode);

                              ) {
                                  if (isContainingBlock(currentNode))
                                      return currentNode
                                  currentNode = getParentNode(currentNode)
                              }
                              return null
                          })(element) ||
                          window
            }
            const platform = {
                convertOffsetParentRelativeRectToViewportRelativeRect:
                    function convertOffsetParentRelativeRectToViewportRelativeRect(
                        _ref,
                    ) {
                        let { rect, offsetParent, strategy } = _ref
                        const isOffsetParentAnElement =
                                isHTMLElement(offsetParent),
                            documentElement = getDocumentElement(offsetParent)
                        if (offsetParent === documentElement) return rect
                        let scroll = { scrollLeft: 0, scrollTop: 0 },
                            scale = (0, floating_ui_utils.ze)(1)
                        const offsets = (0, floating_ui_utils.ze)(0)
                        if (
                            (isOffsetParentAnElement ||
                                (!isOffsetParentAnElement &&
                                    'fixed' !== strategy)) &&
                            (('body' !== getNodeName(offsetParent) ||
                                isOverflowElement(documentElement)) &&
                                (scroll = getNodeScroll(offsetParent)),
                            isHTMLElement(offsetParent))
                        ) {
                            const offsetRect =
                                getBoundingClientRect(offsetParent)
                            ;(scale = getScale(offsetParent)),
                                (offsets.x =
                                    offsetRect.x + offsetParent.clientLeft),
                                (offsets.y =
                                    offsetRect.y + offsetParent.clientTop)
                        }
                        return {
                            width: rect.width * scale.x,
                            height: rect.height * scale.y,
                            x:
                                rect.x * scale.x -
                                scroll.scrollLeft * scale.x +
                                offsets.x,
                            y:
                                rect.y * scale.y -
                                scroll.scrollTop * scale.y +
                                offsets.y,
                        }
                    },
                getDocumentElement,
                getClippingRect: function getClippingRect(_ref) {
                    let { element, boundary, rootBoundary, strategy } = _ref
                    const clippingAncestors = [
                            ...('clippingAncestors' === boundary
                                ? (function getClippingElementAncestors(
                                      element,
                                      cache,
                                  ) {
                                      const cachedResult = cache.get(element)
                                      if (cachedResult) return cachedResult
                                      let result = getOverflowAncestors(
                                              element,
                                              [],
                                              !1,
                                          ).filter(
                                              (el) =>
                                                  isElement(el) &&
                                                  'body' !== getNodeName(el),
                                          ),
                                          currentContainingBlockComputedStyle =
                                              null
                                      const elementIsFixed =
                                          'fixed' ===
                                          getComputedStyle(element).position
                                      let currentNode = elementIsFixed
                                          ? getParentNode(element)
                                          : element
                                      for (
                                          ;
                                          isElement(currentNode) &&
                                          !isLastTraversableNode(currentNode);

                                      ) {
                                          const computedStyle =
                                                  getComputedStyle(currentNode),
                                              currentNodeIsContaining =
                                                  isContainingBlock(currentNode)
                                          currentNodeIsContaining ||
                                              'fixed' !==
                                                  computedStyle.position ||
                                              (currentContainingBlockComputedStyle =
                                                  null),
                                              (
                                                  elementIsFixed
                                                      ? !currentNodeIsContaining &&
                                                        !currentContainingBlockComputedStyle
                                                      : (!currentNodeIsContaining &&
                                                            'static' ===
                                                                computedStyle.position &&
                                                            currentContainingBlockComputedStyle &&
                                                            [
                                                                'absolute',
                                                                'fixed',
                                                            ].includes(
                                                                currentContainingBlockComputedStyle.position,
                                                            )) ||
                                                        (isOverflowElement(
                                                            currentNode,
                                                        ) &&
                                                            !currentNodeIsContaining &&
                                                            hasFixedPositionAncestor(
                                                                element,
                                                                currentNode,
                                                            ))
                                              )
                                                  ? (result = result.filter(
                                                        (ancestor) =>
                                                            ancestor !==
                                                            currentNode,
                                                    ))
                                                  : (currentContainingBlockComputedStyle =
                                                        computedStyle),
                                              (currentNode =
                                                  getParentNode(currentNode))
                                      }
                                      return cache.set(element, result), result
                                  })(element, this._c)
                                : [].concat(boundary)),
                            rootBoundary,
                        ],
                        firstClippingAncestor = clippingAncestors[0],
                        clippingRect = clippingAncestors.reduce(
                            (accRect, clippingAncestor) => {
                                const rect = getClientRectFromClippingAncestor(
                                    element,
                                    clippingAncestor,
                                    strategy,
                                )
                                return (
                                    (accRect.top = (0, floating_ui_utils.Fp)(
                                        rect.top,
                                        accRect.top,
                                    )),
                                    (accRect.right = (0, floating_ui_utils.VV)(
                                        rect.right,
                                        accRect.right,
                                    )),
                                    (accRect.bottom = (0, floating_ui_utils.VV)(
                                        rect.bottom,
                                        accRect.bottom,
                                    )),
                                    (accRect.left = (0, floating_ui_utils.Fp)(
                                        rect.left,
                                        accRect.left,
                                    )),
                                    accRect
                                )
                            },
                            getClientRectFromClippingAncestor(
                                element,
                                firstClippingAncestor,
                                strategy,
                            ),
                        )
                    return {
                        width: clippingRect.right - clippingRect.left,
                        height: clippingRect.bottom - clippingRect.top,
                        x: clippingRect.left,
                        y: clippingRect.top,
                    }
                },
                getOffsetParent,
                getElementRects: async function (_ref) {
                    let { reference, floating, strategy } = _ref
                    const getOffsetParentFn =
                            this.getOffsetParent || getOffsetParent,
                        getDimensionsFn = this.getDimensions
                    return {
                        reference: getRectRelativeToOffsetParent(
                            reference,
                            await getOffsetParentFn(floating),
                            strategy,
                        ),
                        floating: {
                            x: 0,
                            y: 0,
                            ...(await getDimensionsFn(floating)),
                        },
                    }
                },
                getClientRects: function getClientRects(element) {
                    return Array.from(element.getClientRects())
                },
                getDimensions: function getDimensions(element) {
                    return getCssDimensions(element)
                },
                getScale,
                isElement,
                isRTL: function isRTL(element) {
                    return 'rtl' === getComputedStyle(element).direction
                },
            }
            function autoUpdate(reference, floating, update, options) {
                void 0 === options && (options = {})
                const {
                        ancestorScroll = !0,
                        ancestorResize = !0,
                        elementResize = 'function' == typeof ResizeObserver,
                        layoutShift = 'function' == typeof IntersectionObserver,
                        animationFrame = !1,
                    } = options,
                    referenceEl = unwrapElement(reference),
                    ancestors =
                        ancestorScroll || ancestorResize
                            ? [
                                  ...(referenceEl
                                      ? getOverflowAncestors(referenceEl)
                                      : []),
                                  ...getOverflowAncestors(floating),
                              ]
                            : []
                ancestors.forEach((ancestor) => {
                    ancestorScroll &&
                        ancestor.addEventListener('scroll', update, {
                            passive: !0,
                        }),
                        ancestorResize &&
                            ancestor.addEventListener('resize', update)
                })
                const cleanupIo =
                    referenceEl && layoutShift
                        ? (function observeMove(element, onMove) {
                              let timeoutId,
                                  io = null
                              const root = getDocumentElement(element)
                              function cleanup() {
                                  clearTimeout(timeoutId),
                                      io && io.disconnect(),
                                      (io = null)
                              }
                              return (
                                  (function refresh(skip, threshold) {
                                      void 0 === skip && (skip = !1),
                                          void 0 === threshold &&
                                              (threshold = 1),
                                          cleanup()
                                      const { left, top, width, height } =
                                          element.getBoundingClientRect()
                                      if ((skip || onMove(), !width || !height))
                                          return
                                      const options = {
                                          rootMargin:
                                              -(0, floating_ui_utils.GW)(top) +
                                              'px ' +
                                              -(0, floating_ui_utils.GW)(
                                                  root.clientWidth -
                                                      (left + width),
                                              ) +
                                              'px ' +
                                              -(0, floating_ui_utils.GW)(
                                                  root.clientHeight -
                                                      (top + height),
                                              ) +
                                              'px ' +
                                              -(0, floating_ui_utils.GW)(left) +
                                              'px',
                                          threshold:
                                              (0, floating_ui_utils.Fp)(
                                                  0,
                                                  (0, floating_ui_utils.VV)(
                                                      1,
                                                      threshold,
                                                  ),
                                              ) || 1,
                                      }
                                      let isFirstUpdate = !0
                                      function handleObserve(entries) {
                                          const ratio =
                                              entries[0].intersectionRatio
                                          if (ratio !== threshold) {
                                              if (!isFirstUpdate)
                                                  return refresh()
                                              ratio
                                                  ? refresh(!1, ratio)
                                                  : (timeoutId = setTimeout(
                                                        () => {
                                                            refresh(!1, 1e-7)
                                                        },
                                                        100,
                                                    ))
                                          }
                                          isFirstUpdate = !1
                                      }
                                      try {
                                          io = new IntersectionObserver(
                                              handleObserve,
                                              {
                                                  ...options,
                                                  root: root.ownerDocument,
                                              },
                                          )
                                      } catch (e) {
                                          io = new IntersectionObserver(
                                              handleObserve,
                                              options,
                                          )
                                      }
                                      io.observe(element)
                                  })(!0),
                                  cleanup
                              )
                          })(referenceEl, update)
                        : null
                let frameId,
                    reobserveFrame = -1,
                    resizeObserver = null
                elementResize &&
                    ((resizeObserver = new ResizeObserver((_ref) => {
                        let [firstEntry] = _ref
                        firstEntry &&
                            firstEntry.target === referenceEl &&
                            resizeObserver &&
                            (resizeObserver.unobserve(floating),
                            cancelAnimationFrame(reobserveFrame),
                            (reobserveFrame = requestAnimationFrame(() => {
                                resizeObserver &&
                                    resizeObserver.observe(floating)
                            }))),
                            update()
                    })),
                    referenceEl &&
                        !animationFrame &&
                        resizeObserver.observe(referenceEl),
                    resizeObserver.observe(floating))
                let prevRefRect = animationFrame
                    ? getBoundingClientRect(reference)
                    : null
                return (
                    animationFrame &&
                        (function frameLoop() {
                            const nextRefRect = getBoundingClientRect(reference)
                            !prevRefRect ||
                                (nextRefRect.x === prevRefRect.x &&
                                    nextRefRect.y === prevRefRect.y &&
                                    nextRefRect.width === prevRefRect.width &&
                                    nextRefRect.height ===
                                        prevRefRect.height) ||
                                update()
                            ;(prevRefRect = nextRefRect),
                                (frameId = requestAnimationFrame(frameLoop))
                        })(),
                    update(),
                    () => {
                        ancestors.forEach((ancestor) => {
                            ancestorScroll &&
                                ancestor.removeEventListener('scroll', update),
                                ancestorResize &&
                                    ancestor.removeEventListener(
                                        'resize',
                                        update,
                                    )
                        }),
                            cleanupIo && cleanupIo(),
                            resizeObserver && resizeObserver.disconnect(),
                            (resizeObserver = null),
                            animationFrame && cancelAnimationFrame(frameId)
                    }
                )
            }
            const computePosition = (reference, floating, options) => {
                const cache = new Map(),
                    mergedOptions = { platform, ...options },
                    platformWithCache = { ...mergedOptions.platform, _c: cache }
                return (0, floating_ui_core.oo)(reference, floating, {
                    ...mergedOptions,
                    platform: platformWithCache,
                })
            }
        },
        './node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs':
            (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.d(__webpack_exports__, {
                    YF: () => useFloating,
                    x7: () => arrow,
                })
                var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__ =
                        __webpack_require__(
                            './node_modules/@floating-ui/core/dist/floating-ui.core.mjs',
                        ),
                    _floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__ =
                        __webpack_require__(
                            './node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs',
                        ),
                    react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        './node_modules/next/dist/compiled/react/index.js',
                    ),
                    react_dom__WEBPACK_IMPORTED_MODULE_1__ =
                        __webpack_require__(
                            './node_modules/next/dist/compiled/react-dom/index.js',
                        )
                const arrow = (options) => ({
                    name: 'arrow',
                    options,
                    fn(state) {
                        const { element, padding } =
                            'function' == typeof options
                                ? options(state)
                                : options
                        return element &&
                            (function isRef(value) {
                                return {}.hasOwnProperty.call(value, 'current')
                            })(element)
                            ? null != element.current
                                ? (0,
                                  _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)(
                                      { element: element.current, padding },
                                  ).fn(state)
                                : {}
                            : element
                              ? (0,
                                _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)(
                                    { element, padding },
                                ).fn(state)
                              : {}
                    },
                })
                var index =
                    'undefined' != typeof document
                        ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect
                        : react__WEBPACK_IMPORTED_MODULE_0__.useEffect
                function deepEqual(a, b) {
                    if (a === b) return !0
                    if (typeof a != typeof b) return !1
                    if ('function' == typeof a && a.toString() === b.toString())
                        return !0
                    let length, i, keys
                    if (a && b && 'object' == typeof a) {
                        if (Array.isArray(a)) {
                            if (((length = a.length), length != b.length))
                                return !1
                            for (i = length; 0 != i--; )
                                if (!deepEqual(a[i], b[i])) return !1
                            return !0
                        }
                        if (
                            ((keys = Object.keys(a)),
                            (length = keys.length),
                            length !== Object.keys(b).length)
                        )
                            return !1
                        for (i = length; 0 != i--; )
                            if (!{}.hasOwnProperty.call(b, keys[i])) return !1
                        for (i = length; 0 != i--; ) {
                            const key = keys[i]
                            if (
                                ('_owner' !== key || !a.$$typeof) &&
                                !deepEqual(a[key], b[key])
                            )
                                return !1
                        }
                        return !0
                    }
                    return a != a && b != b
                }
                function getDPR(element) {
                    if ('undefined' == typeof window) return 1
                    return (
                        (element.ownerDocument.defaultView || window)
                            .devicePixelRatio || 1
                    )
                }
                function roundByDPR(element, value) {
                    const dpr = getDPR(element)
                    return Math.round(value * dpr) / dpr
                }
                function useLatestRef(value) {
                    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(value)
                    return (
                        index(() => {
                            ref.current = value
                        }),
                        ref
                    )
                }
                function useFloating(options) {
                    void 0 === options && (options = {})
                    const {
                            placement = 'bottom',
                            strategy = 'absolute',
                            middleware = [],
                            platform,
                            elements: {
                                reference: externalReference,
                                floating: externalFloating,
                            } = {},
                            transform = !0,
                            whileElementsMounted,
                            open,
                        } = options,
                        [data, setData] =
                            react__WEBPACK_IMPORTED_MODULE_0__.useState({
                                x: 0,
                                y: 0,
                                strategy,
                                placement,
                                middlewareData: {},
                                isPositioned: !1,
                            }),
                        [latestMiddleware, setLatestMiddleware] =
                            react__WEBPACK_IMPORTED_MODULE_0__.useState(
                                middleware,
                            )
                    deepEqual(latestMiddleware, middleware) ||
                        setLatestMiddleware(middleware)
                    const [_reference, _setReference] =
                            react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
                        [_floating, _setFloating] =
                            react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
                        setReference =
                            react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
                                (node) => {
                                    node != referenceRef.current &&
                                        ((referenceRef.current = node),
                                        _setReference(node))
                                },
                                [_setReference],
                            ),
                        setFloating =
                            react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
                                (node) => {
                                    node !== floatingRef.current &&
                                        ((floatingRef.current = node),
                                        _setFloating(node))
                                },
                                [_setFloating],
                            ),
                        referenceEl = externalReference || _reference,
                        floatingEl = externalFloating || _floating,
                        referenceRef =
                            react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
                        floatingRef =
                            react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
                        dataRef =
                            react__WEBPACK_IMPORTED_MODULE_0__.useRef(data),
                        whileElementsMountedRef =
                            useLatestRef(whileElementsMounted),
                        platformRef = useLatestRef(platform),
                        update =
                            react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
                                if (
                                    !referenceRef.current ||
                                    !floatingRef.current
                                )
                                    return
                                const config = {
                                    placement,
                                    strategy,
                                    middleware: latestMiddleware,
                                }
                                platformRef.current &&
                                    (config.platform = platformRef.current),
                                    (0,
                                    _floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__.oo)(
                                        referenceRef.current,
                                        floatingRef.current,
                                        config,
                                    ).then((data) => {
                                        const fullData = {
                                            ...data,
                                            isPositioned: !0,
                                        }
                                        isMountedRef.current &&
                                            !deepEqual(
                                                dataRef.current,
                                                fullData,
                                            ) &&
                                            ((dataRef.current = fullData),
                                            react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(
                                                () => {
                                                    setData(fullData)
                                                },
                                            ))
                                    })
                            }, [
                                latestMiddleware,
                                placement,
                                strategy,
                                platformRef,
                            ])
                    index(() => {
                        !1 === open &&
                            dataRef.current.isPositioned &&
                            ((dataRef.current.isPositioned = !1),
                            setData((data) => ({ ...data, isPositioned: !1 })))
                    }, [open])
                    const isMountedRef =
                        react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1)
                    index(
                        () => (
                            (isMountedRef.current = !0),
                            () => {
                                isMountedRef.current = !1
                            }
                        ),
                        [],
                    ),
                        index(() => {
                            if (
                                (referenceEl &&
                                    (referenceRef.current = referenceEl),
                                floatingEl &&
                                    (floatingRef.current = floatingEl),
                                referenceEl && floatingEl)
                            ) {
                                if (whileElementsMountedRef.current)
                                    return whileElementsMountedRef.current(
                                        referenceEl,
                                        floatingEl,
                                        update,
                                    )
                                update()
                            }
                        }, [
                            referenceEl,
                            floatingEl,
                            update,
                            whileElementsMountedRef,
                        ])
                    const refs = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
                            () => ({
                                reference: referenceRef,
                                floating: floatingRef,
                                setReference,
                                setFloating,
                            }),
                            [setReference, setFloating],
                        ),
                        elements = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
                            () => ({
                                reference: referenceEl,
                                floating: floatingEl,
                            }),
                            [referenceEl, floatingEl],
                        ),
                        floatingStyles =
                            react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
                                const initialStyles = {
                                    position: strategy,
                                    left: 0,
                                    top: 0,
                                }
                                if (!elements.floating) return initialStyles
                                const x = roundByDPR(elements.floating, data.x),
                                    y = roundByDPR(elements.floating, data.y)
                                return transform
                                    ? {
                                          ...initialStyles,
                                          transform:
                                              'translate(' +
                                              x +
                                              'px, ' +
                                              y +
                                              'px)',
                                          ...(getDPR(elements.floating) >=
                                              1.5 && {
                                              willChange: 'transform',
                                          }),
                                      }
                                    : { position: strategy, left: x, top: y }
                            }, [
                                strategy,
                                transform,
                                elements.floating,
                                data.x,
                                data.y,
                            ])
                    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
                        () => ({
                            ...data,
                            update,
                            refs,
                            elements,
                            floatingStyles,
                        }),
                        [data, update, refs, elements, floatingStyles],
                    )
                }
            },
        './node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                Fp: () => max,
                GW: () => floor,
                I4: () => getAxisLength,
                JB: () => rectToClientRect,
                KX: () => getOppositeAxisPlacements,
                NM: () => round,
                Qq: () => getSideAxis,
                Rn: () => getOppositeAxis,
                VV: () => min,
                Wh: () => getAlignmentAxis,
                gy: () => getExpandedPlacements,
                hp: () => getAlignment,
                i8: () => getAlignmentSides,
                k3: () => getSide,
                ku: () => evaluate,
                mA: () => sides,
                pw: () => getOppositePlacement,
                uZ: () => clamp,
                yd: () => getPaddingObject,
                ze: () => createCoords,
            })
            const sides = ['top', 'right', 'bottom', 'left'],
                min = Math.min,
                max = Math.max,
                round = Math.round,
                floor = Math.floor,
                createCoords = (v) => ({ x: v, y: v }),
                oppositeSideMap = {
                    left: 'right',
                    right: 'left',
                    bottom: 'top',
                    top: 'bottom',
                },
                oppositeAlignmentMap = { start: 'end', end: 'start' }
            function clamp(start, value, end) {
                return max(start, min(value, end))
            }
            function evaluate(value, param) {
                return 'function' == typeof value ? value(param) : value
            }
            function getSide(placement) {
                return placement.split('-')[0]
            }
            function getAlignment(placement) {
                return placement.split('-')[1]
            }
            function getOppositeAxis(axis) {
                return 'x' === axis ? 'y' : 'x'
            }
            function getAxisLength(axis) {
                return 'y' === axis ? 'height' : 'width'
            }
            function getSideAxis(placement) {
                return ['top', 'bottom'].includes(getSide(placement))
                    ? 'y'
                    : 'x'
            }
            function getAlignmentAxis(placement) {
                return getOppositeAxis(getSideAxis(placement))
            }
            function getAlignmentSides(placement, rects, rtl) {
                void 0 === rtl && (rtl = !1)
                const alignment = getAlignment(placement),
                    alignmentAxis = getAlignmentAxis(placement),
                    length = getAxisLength(alignmentAxis)
                let mainAlignmentSide =
                    'x' === alignmentAxis
                        ? alignment === (rtl ? 'end' : 'start')
                            ? 'right'
                            : 'left'
                        : 'start' === alignment
                          ? 'bottom'
                          : 'top'
                return (
                    rects.reference[length] > rects.floating[length] &&
                        (mainAlignmentSide =
                            getOppositePlacement(mainAlignmentSide)),
                    [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)]
                )
            }
            function getExpandedPlacements(placement) {
                const oppositePlacement = getOppositePlacement(placement)
                return [
                    getOppositeAlignmentPlacement(placement),
                    oppositePlacement,
                    getOppositeAlignmentPlacement(oppositePlacement),
                ]
            }
            function getOppositeAlignmentPlacement(placement) {
                return placement.replace(
                    /start|end/g,
                    (alignment) => oppositeAlignmentMap[alignment],
                )
            }
            function getOppositeAxisPlacements(
                placement,
                flipAlignment,
                direction,
                rtl,
            ) {
                const alignment = getAlignment(placement)
                let list = (function getSideList(side, isStart, rtl) {
                    const lr = ['left', 'right'],
                        rl = ['right', 'left'],
                        tb = ['top', 'bottom'],
                        bt = ['bottom', 'top']
                    switch (side) {
                        case 'top':
                        case 'bottom':
                            return rtl ? (isStart ? rl : lr) : isStart ? lr : rl
                        case 'left':
                        case 'right':
                            return isStart ? tb : bt
                        default:
                            return []
                    }
                })(getSide(placement), 'start' === direction, rtl)
                return (
                    alignment &&
                        ((list = list.map((side) => side + '-' + alignment)),
                        flipAlignment &&
                            (list = list.concat(
                                list.map(getOppositeAlignmentPlacement),
                            ))),
                    list
                )
            }
            function getOppositePlacement(placement) {
                return placement.replace(
                    /left|right|bottom|top/g,
                    (side) => oppositeSideMap[side],
                )
            }
            function getPaddingObject(padding) {
                return 'number' != typeof padding
                    ? (function expandPaddingObject(padding) {
                          return {
                              top: 0,
                              right: 0,
                              bottom: 0,
                              left: 0,
                              ...padding,
                          }
                      })(padding)
                    : {
                          top: padding,
                          right: padding,
                          bottom: padding,
                          left: padding,
                      }
            }
            function rectToClientRect(rect) {
                return {
                    ...rect,
                    top: rect.y,
                    left: rect.x,
                    right: rect.x + rect.width,
                    bottom: rect.y + rect.height,
                }
            }
        },
    },
])
