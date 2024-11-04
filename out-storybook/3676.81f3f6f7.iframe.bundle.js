'use strict'
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [3676],
    {
        './node_modules/@radix-ui/react-focus-guards/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                EW: () => $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c,
            })
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                './node_modules/next/dist/compiled/react/index.js',
            )
            let $3db38b7d1fb3fe6a$var$count = 0
            function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
                ;(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                    var _edgeGuards$, _edgeGuards$2
                    const edgeGuards = document.querySelectorAll(
                        '[data-radix-focus-guard]',
                    )
                    return (
                        document.body.insertAdjacentElement(
                            'afterbegin',
                            null !== (_edgeGuards$ = edgeGuards[0]) &&
                                void 0 !== _edgeGuards$
                                ? _edgeGuards$
                                : $3db38b7d1fb3fe6a$var$createFocusGuard(),
                        ),
                        document.body.insertAdjacentElement(
                            'beforeend',
                            null !== (_edgeGuards$2 = edgeGuards[1]) &&
                                void 0 !== _edgeGuards$2
                                ? _edgeGuards$2
                                : $3db38b7d1fb3fe6a$var$createFocusGuard(),
                        ),
                        $3db38b7d1fb3fe6a$var$count++,
                        () => {
                            1 === $3db38b7d1fb3fe6a$var$count &&
                                document
                                    .querySelectorAll(
                                        '[data-radix-focus-guard]',
                                    )
                                    .forEach((node) => node.remove()),
                                $3db38b7d1fb3fe6a$var$count--
                        }
                    )
                }, [])
            }
            function $3db38b7d1fb3fe6a$var$createFocusGuard() {
                const element = document.createElement('span')
                return (
                    element.setAttribute('data-radix-focus-guard', ''),
                    (element.tabIndex = 0),
                    (element.style.cssText =
                        'outline: none; opacity: 0; position: fixed; pointer-events: none'),
                    element
                )
            }
        },
        './node_modules/@radix-ui/react-focus-scope/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, {
                M: () => $d3863c46a17e8a28$export$20e40289641fbbb6,
            })
            var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/extends.js',
                    ),
                react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-compose-refs/dist/index.mjs',
                    ),
                _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-primitive/dist/index.mjs',
                    ),
                _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs',
                    )
            const $d3863c46a17e8a28$var$EVENT_OPTIONS = {
                    bubbles: !1,
                    cancelable: !0,
                },
                $d3863c46a17e8a28$export$20e40289641fbbb6 = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
                    (props, forwardedRef) => {
                        const {
                                loop = !1,
                                trapped = !1,
                                onMountAutoFocus: onMountAutoFocusProp,
                                onUnmountAutoFocus: onUnmountAutoFocusProp,
                                ...scopeProps
                            } = props,
                            [container1, setContainer] = (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
                            onMountAutoFocus = (0,
                            _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(
                                onMountAutoFocusProp,
                            ),
                            onUnmountAutoFocus = (0,
                            _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(
                                onUnmountAutoFocusProp,
                            ),
                            lastFocusedElementRef = (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),
                            composedRefs = (0,
                            _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.e)(
                                forwardedRef,
                                (node) => setContainer(node),
                            ),
                            focusScope = (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
                                paused: !1,
                                pause() {
                                    this.paused = !0
                                },
                                resume() {
                                    this.paused = !1
                                },
                            }).current
                        ;(0,
                        react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                            if (trapped) {
                                function handleFocusIn(event) {
                                    if (focusScope.paused || !container1) return
                                    const target = event.target
                                    container1.contains(target)
                                        ? (lastFocusedElementRef.current =
                                              target)
                                        : $d3863c46a17e8a28$var$focus(
                                              lastFocusedElementRef.current,
                                              { select: !0 },
                                          )
                                }
                                function handleFocusOut(event) {
                                    if (focusScope.paused || !container1) return
                                    const relatedTarget = event.relatedTarget
                                    null !== relatedTarget &&
                                        (container1.contains(relatedTarget) ||
                                            $d3863c46a17e8a28$var$focus(
                                                lastFocusedElementRef.current,
                                                { select: !0 },
                                            ))
                                }
                                function handleMutations(mutations) {
                                    if (
                                        document.activeElement === document.body
                                    )
                                        for (const mutation of mutations)
                                            mutation.removedNodes.length > 0 &&
                                                $d3863c46a17e8a28$var$focus(
                                                    container1,
                                                )
                                }
                                document.addEventListener(
                                    'focusin',
                                    handleFocusIn,
                                ),
                                    document.addEventListener(
                                        'focusout',
                                        handleFocusOut,
                                    )
                                const mutationObserver = new MutationObserver(
                                    handleMutations,
                                )
                                return (
                                    container1 &&
                                        mutationObserver.observe(container1, {
                                            childList: !0,
                                            subtree: !0,
                                        }),
                                    () => {
                                        document.removeEventListener(
                                            'focusin',
                                            handleFocusIn,
                                        ),
                                            document.removeEventListener(
                                                'focusout',
                                                handleFocusOut,
                                            ),
                                            mutationObserver.disconnect()
                                    }
                                )
                            }
                        }, [trapped, container1, focusScope.paused]),
                            (0,
                            react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                                if (container1) {
                                    $d3863c46a17e8a28$var$focusScopesStack.add(
                                        focusScope,
                                    )
                                    const previouslyFocusedElement =
                                        document.activeElement
                                    if (
                                        !container1.contains(
                                            previouslyFocusedElement,
                                        )
                                    ) {
                                        const mountEvent = new CustomEvent(
                                            'focusScope.autoFocusOnMount',
                                            $d3863c46a17e8a28$var$EVENT_OPTIONS,
                                        )
                                        container1.addEventListener(
                                            'focusScope.autoFocusOnMount',
                                            onMountAutoFocus,
                                        ),
                                            container1.dispatchEvent(
                                                mountEvent,
                                            ),
                                            mountEvent.defaultPrevented ||
                                                (!(function $d3863c46a17e8a28$var$focusFirst(
                                                    candidates,
                                                    { select = !1 } = {},
                                                ) {
                                                    const previouslyFocusedElement =
                                                        document.activeElement
                                                    for (const candidate of candidates)
                                                        if (
                                                            ($d3863c46a17e8a28$var$focus(
                                                                candidate,
                                                                { select },
                                                            ),
                                                            document.activeElement !==
                                                                previouslyFocusedElement)
                                                        )
                                                            return
                                                })(
                                                    (function $d3863c46a17e8a28$var$removeLinks(
                                                        items,
                                                    ) {
                                                        return items.filter(
                                                            (item) =>
                                                                'A' !==
                                                                item.tagName,
                                                        )
                                                    })(
                                                        $d3863c46a17e8a28$var$getTabbableCandidates(
                                                            container1,
                                                        ),
                                                    ),
                                                    { select: !0 },
                                                ),
                                                document.activeElement ===
                                                    previouslyFocusedElement &&
                                                    $d3863c46a17e8a28$var$focus(
                                                        container1,
                                                    ))
                                    }
                                    return () => {
                                        container1.removeEventListener(
                                            'focusScope.autoFocusOnMount',
                                            onMountAutoFocus,
                                        ),
                                            setTimeout(() => {
                                                const unmountEvent =
                                                    new CustomEvent(
                                                        'focusScope.autoFocusOnUnmount',
                                                        $d3863c46a17e8a28$var$EVENT_OPTIONS,
                                                    )
                                                container1.addEventListener(
                                                    'focusScope.autoFocusOnUnmount',
                                                    onUnmountAutoFocus,
                                                ),
                                                    container1.dispatchEvent(
                                                        unmountEvent,
                                                    ),
                                                    unmountEvent.defaultPrevented ||
                                                        $d3863c46a17e8a28$var$focus(
                                                            null !=
                                                                previouslyFocusedElement
                                                                ? previouslyFocusedElement
                                                                : document.body,
                                                            { select: !0 },
                                                        ),
                                                    container1.removeEventListener(
                                                        'focusScope.autoFocusOnUnmount',
                                                        onUnmountAutoFocus,
                                                    ),
                                                    $d3863c46a17e8a28$var$focusScopesStack.remove(
                                                        focusScope,
                                                    )
                                            }, 0)
                                    }
                                }
                            }, [
                                container1,
                                onMountAutoFocus,
                                onUnmountAutoFocus,
                                focusScope,
                            ])
                        const handleKeyDown = (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
                            (event) => {
                                if (!loop && !trapped) return
                                if (focusScope.paused) return
                                const isTabKey =
                                        'Tab' === event.key &&
                                        !event.altKey &&
                                        !event.ctrlKey &&
                                        !event.metaKey,
                                    focusedElement = document.activeElement
                                if (isTabKey && focusedElement) {
                                    const container = event.currentTarget,
                                        [first, last] =
                                            (function $d3863c46a17e8a28$var$getTabbableEdges(
                                                container,
                                            ) {
                                                const candidates =
                                                        $d3863c46a17e8a28$var$getTabbableCandidates(
                                                            container,
                                                        ),
                                                    first =
                                                        $d3863c46a17e8a28$var$findVisible(
                                                            candidates,
                                                            container,
                                                        ),
                                                    last =
                                                        $d3863c46a17e8a28$var$findVisible(
                                                            candidates.reverse(),
                                                            container,
                                                        )
                                                return [first, last]
                                            })(container)
                                    first && last
                                        ? event.shiftKey ||
                                          focusedElement !== last
                                            ? event.shiftKey &&
                                              focusedElement === first &&
                                              (event.preventDefault(),
                                              loop &&
                                                  $d3863c46a17e8a28$var$focus(
                                                      last,
                                                      { select: !0 },
                                                  ))
                                            : (event.preventDefault(),
                                              loop &&
                                                  $d3863c46a17e8a28$var$focus(
                                                      first,
                                                      { select: !0 },
                                                  ))
                                        : focusedElement === container &&
                                          event.preventDefault()
                                }
                            },
                            [loop, trapped, focusScope.paused],
                        )
                        return (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                            _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__
                                .WV.div,
                            (0,
                            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)(
                                { tabIndex: -1 },
                                scopeProps,
                                { ref: composedRefs, onKeyDown: handleKeyDown },
                            ),
                        )
                    },
                )
            function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
                const nodes = [],
                    walker = document.createTreeWalker(
                        container,
                        NodeFilter.SHOW_ELEMENT,
                        {
                            acceptNode: (node) => {
                                const isHiddenInput =
                                    'INPUT' === node.tagName &&
                                    'hidden' === node.type
                                return node.disabled ||
                                    node.hidden ||
                                    isHiddenInput
                                    ? NodeFilter.FILTER_SKIP
                                    : node.tabIndex >= 0
                                      ? NodeFilter.FILTER_ACCEPT
                                      : NodeFilter.FILTER_SKIP
                            },
                        },
                    )
                for (; walker.nextNode(); ) nodes.push(walker.currentNode)
                return nodes
            }
            function $d3863c46a17e8a28$var$findVisible(elements, container) {
                for (const element of elements)
                    if (
                        !$d3863c46a17e8a28$var$isHidden(element, {
                            upTo: container,
                        })
                    )
                        return element
            }
            function $d3863c46a17e8a28$var$isHidden(node, { upTo }) {
                if ('hidden' === getComputedStyle(node).visibility) return !0
                for (; node; ) {
                    if (void 0 !== upTo && node === upTo) return !1
                    if ('none' === getComputedStyle(node).display) return !0
                    node = node.parentElement
                }
                return !1
            }
            function $d3863c46a17e8a28$var$focus(
                element,
                { select = !1 } = {},
            ) {
                if (element && element.focus) {
                    const previouslyFocusedElement = document.activeElement
                    element.focus({ preventScroll: !0 }),
                        element !== previouslyFocusedElement &&
                            (function $d3863c46a17e8a28$var$isSelectableInput(
                                element,
                            ) {
                                return (
                                    element instanceof HTMLInputElement &&
                                    'select' in element
                                )
                            })(element) &&
                            select &&
                            element.select()
                }
            }
            const $d3863c46a17e8a28$var$focusScopesStack =
                (function $d3863c46a17e8a28$var$createFocusScopesStack() {
                    let stack = []
                    return {
                        add(focusScope) {
                            const activeFocusScope = stack[0]
                            focusScope !== activeFocusScope &&
                                (null == activeFocusScope ||
                                    activeFocusScope.pause()),
                                (stack = $d3863c46a17e8a28$var$arrayRemove(
                                    stack,
                                    focusScope,
                                )),
                                stack.unshift(focusScope)
                        },
                        remove(focusScope) {
                            var _stack$
                            ;(stack = $d3863c46a17e8a28$var$arrayRemove(
                                stack,
                                focusScope,
                            )),
                                null === (_stack$ = stack[0]) ||
                                    void 0 === _stack$ ||
                                    _stack$.resume()
                        },
                    }
                })()
            function $d3863c46a17e8a28$var$arrayRemove(array, item) {
                const updatedArray = [...array],
                    index = updatedArray.indexOf(item)
                return (
                    -1 !== index && updatedArray.splice(index, 1), updatedArray
                )
            }
        },
        './node_modules/@radix-ui/react-id/dist/index.mjs': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache
            __webpack_require__.d(__webpack_exports__, {
                M: () => $1746a345f3d73bb7$export$f680877a34711e37,
            })
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs',
                    )
            const $1746a345f3d73bb7$var$useReactId =
                (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache ||
                    (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache =
                        __webpack_require__.t(
                            react__WEBPACK_IMPORTED_MODULE_0__,
                            2,
                        )))['useId'.toString()] || (() => {})
            let $1746a345f3d73bb7$var$count = 0
            function $1746a345f3d73bb7$export$f680877a34711e37(
                deterministicId,
            ) {
                const [id, setId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(
                    $1746a345f3d73bb7$var$useReactId(),
                )
                return (
                    (0,
                    _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)(() => {
                        deterministicId ||
                            setId((reactId) =>
                                null != reactId
                                    ? reactId
                                    : String($1746a345f3d73bb7$var$count++),
                            )
                    }, [deterministicId]),
                    deterministicId || (id ? `radix-${id}` : '')
                )
            }
        },
        './node_modules/react-remove-scroll/dist/es2015/Combination.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => Combination })
            var tslib_es6 = __webpack_require__(
                    './node_modules/tslib/tslib.es6.mjs',
                ),
                react = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                constants = __webpack_require__(
                    './node_modules/react-remove-scroll-bar/dist/es2015/constants.js',
                ),
                useMergeRef = __webpack_require__(
                    './node_modules/use-callback-ref/dist/es2015/useMergeRef.js',
                ),
                effectCar = (0,
                __webpack_require__(
                    './node_modules/use-sidecar/dist/es2015/medium.js',
                )._)(),
                nothing = function () {},
                RemoveScroll = react.forwardRef(function (props, parentRef) {
                    var ref = react.useRef(null),
                        _a = react.useState({
                            onScrollCapture: nothing,
                            onWheelCapture: nothing,
                            onTouchMoveCapture: nothing,
                        }),
                        callbacks = _a[0],
                        setCallbacks = _a[1],
                        forwardProps = props.forwardProps,
                        children = props.children,
                        className = props.className,
                        removeScrollBar = props.removeScrollBar,
                        enabled = props.enabled,
                        shards = props.shards,
                        sideCar = props.sideCar,
                        noIsolation = props.noIsolation,
                        inert = props.inert,
                        allowPinchZoom = props.allowPinchZoom,
                        _b = props.as,
                        Container = void 0 === _b ? 'div' : _b,
                        rest = (0, tslib_es6._T)(props, [
                            'forwardProps',
                            'children',
                            'className',
                            'removeScrollBar',
                            'enabled',
                            'shards',
                            'sideCar',
                            'noIsolation',
                            'inert',
                            'allowPinchZoom',
                            'as',
                        ]),
                        SideCar = sideCar,
                        containerRef = (0, useMergeRef.q)([ref, parentRef]),
                        containerProps = (0, tslib_es6.pi)(
                            (0, tslib_es6.pi)({}, rest),
                            callbacks,
                        )
                    return react.createElement(
                        react.Fragment,
                        null,
                        enabled &&
                            react.createElement(SideCar, {
                                sideCar: effectCar,
                                removeScrollBar,
                                shards,
                                noIsolation,
                                inert,
                                setCallbacks,
                                allowPinchZoom: !!allowPinchZoom,
                                lockRef: ref,
                            }),
                        forwardProps
                            ? react.cloneElement(
                                  react.Children.only(children),
                                  (0, tslib_es6.pi)(
                                      (0, tslib_es6.pi)({}, containerProps),
                                      { ref: containerRef },
                                  ),
                              )
                            : react.createElement(
                                  Container,
                                  (0, tslib_es6.pi)({}, containerProps, {
                                      className,
                                      ref: containerRef,
                                  }),
                                  children,
                              ),
                    )
                })
            ;(RemoveScroll.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1,
            }),
                (RemoveScroll.classNames = {
                    fullWidth: constants.zi,
                    zeroRight: constants.pF,
                })
            var es2015_exports = __webpack_require__(
                    './node_modules/use-sidecar/dist/es2015/exports.js',
                ),
                es2015 = __webpack_require__(
                    './node_modules/react-remove-scroll-bar/dist/es2015/index.js',
                ),
                dist_es2015 = __webpack_require__(
                    './node_modules/react-style-singleton/dist/es2015/index.js',
                ),
                passiveSupported = !1
            if ('undefined' != typeof window)
                try {
                    var options = Object.defineProperty({}, 'passive', {
                        get: function () {
                            return (passiveSupported = !0), !0
                        },
                    })
                    window.addEventListener('test', options, options),
                        window.removeEventListener('test', options, options)
                } catch (err) {
                    passiveSupported = !1
                }
            var nonPassive = !!passiveSupported && { passive: !1 },
                elementCanBeScrolled = function (node, overflow) {
                    var styles = window.getComputedStyle(node)
                    return (
                        'hidden' !== styles[overflow] &&
                        !(
                            styles.overflowY === styles.overflowX &&
                            !(function (node) {
                                return 'TEXTAREA' === node.tagName
                            })(node) &&
                            'visible' === styles[overflow]
                        )
                    )
                },
                locationCouldBeScrolled = function (axis, node) {
                    var current = node
                    do {
                        if (
                            ('undefined' != typeof ShadowRoot &&
                                current instanceof ShadowRoot &&
                                (current = current.host),
                            elementCouldBeScrolled(axis, current))
                        ) {
                            var _a = getScrollVariables(axis, current)
                            if (_a[1] > _a[2]) return !0
                        }
                        current = current.parentNode
                    } while (current && current !== document.body)
                    return !1
                },
                elementCouldBeScrolled = function (axis, node) {
                    return 'v' === axis
                        ? (function (node) {
                              return elementCanBeScrolled(node, 'overflowY')
                          })(node)
                        : (function (node) {
                              return elementCanBeScrolled(node, 'overflowX')
                          })(node)
                },
                getScrollVariables = function (axis, node) {
                    return 'v' === axis
                        ? [
                              (_a = node).scrollTop,
                              _a.scrollHeight,
                              _a.clientHeight,
                          ]
                        : (function (_a) {
                              return [
                                  _a.scrollLeft,
                                  _a.scrollWidth,
                                  _a.clientWidth,
                              ]
                          })(node)
                    var _a
                },
                getTouchXY = function (event) {
                    return 'changedTouches' in event
                        ? [
                              event.changedTouches[0].clientX,
                              event.changedTouches[0].clientY,
                          ]
                        : [0, 0]
                },
                getDeltaXY = function (event) {
                    return [event.deltaX, event.deltaY]
                },
                extractRef = function (ref) {
                    return ref && 'current' in ref ? ref.current : ref
                },
                generateStyle = function (id) {
                    return '\n  .block-interactivity-'
                        .concat(
                            id,
                            ' {pointer-events: none;}\n  .allow-interactivity-',
                        )
                        .concat(id, ' {pointer-events: all;}\n')
                },
                idCounter = 0,
                lockStack = []
            const sidecar = (0, es2015_exports.L)(
                effectCar,
                function RemoveScrollSideCar(props) {
                    var shouldPreventQueue = react.useRef([]),
                        touchStartRef = react.useRef([0, 0]),
                        activeAxis = react.useRef(),
                        id = react.useState(idCounter++)[0],
                        Style = react.useState(function () {
                            return (0, dist_es2015.Ws)()
                        })[0],
                        lastProps = react.useRef(props)
                    react.useEffect(
                        function () {
                            lastProps.current = props
                        },
                        [props],
                    ),
                        react.useEffect(
                            function () {
                                if (props.inert) {
                                    document.body.classList.add(
                                        'block-interactivity-'.concat(id),
                                    )
                                    var allow_1 = (0, tslib_es6.ev)(
                                        [props.lockRef.current],
                                        (props.shards || []).map(extractRef),
                                        !0,
                                    ).filter(Boolean)
                                    return (
                                        allow_1.forEach(function (el) {
                                            return el.classList.add(
                                                'allow-interactivity-'.concat(
                                                    id,
                                                ),
                                            )
                                        }),
                                        function () {
                                            document.body.classList.remove(
                                                'block-interactivity-'.concat(
                                                    id,
                                                ),
                                            ),
                                                allow_1.forEach(function (el) {
                                                    return el.classList.remove(
                                                        'allow-interactivity-'.concat(
                                                            id,
                                                        ),
                                                    )
                                                })
                                        }
                                    )
                                }
                            },
                            [props.inert, props.lockRef.current, props.shards],
                        )
                    var shouldCancelEvent = react.useCallback(function (
                            event,
                            parent,
                        ) {
                            if (
                                'touches' in event &&
                                2 === event.touches.length
                            )
                                return !lastProps.current.allowPinchZoom
                            var currentAxis,
                                touch = getTouchXY(event),
                                touchStart = touchStartRef.current,
                                deltaX =
                                    'deltaX' in event
                                        ? event.deltaX
                                        : touchStart[0] - touch[0],
                                deltaY =
                                    'deltaY' in event
                                        ? event.deltaY
                                        : touchStart[1] - touch[1],
                                target = event.target,
                                moveDirection =
                                    Math.abs(deltaX) > Math.abs(deltaY)
                                        ? 'h'
                                        : 'v'
                            if (
                                'touches' in event &&
                                'h' === moveDirection &&
                                'range' === target.type
                            )
                                return !1
                            var canBeScrolledInMainDirection =
                                locationCouldBeScrolled(moveDirection, target)
                            if (!canBeScrolledInMainDirection) return !0
                            if (
                                (canBeScrolledInMainDirection
                                    ? (currentAxis = moveDirection)
                                    : ((currentAxis =
                                          'v' === moveDirection ? 'h' : 'v'),
                                      (canBeScrolledInMainDirection =
                                          locationCouldBeScrolled(
                                              moveDirection,
                                              target,
                                          ))),
                                !canBeScrolledInMainDirection)
                            )
                                return !1
                            if (
                                (!activeAxis.current &&
                                    'changedTouches' in event &&
                                    (deltaX || deltaY) &&
                                    (activeAxis.current = currentAxis),
                                !currentAxis)
                            )
                                return !0
                            var cancelingAxis =
                                activeAxis.current || currentAxis
                            return (function (
                                axis,
                                endTarget,
                                event,
                                sourceDelta,
                                noOverscroll,
                            ) {
                                var directionFactor = (function (
                                        axis,
                                        direction,
                                    ) {
                                        return 'h' === axis &&
                                            'rtl' === direction
                                            ? -1
                                            : 1
                                    })(
                                        axis,
                                        window.getComputedStyle(endTarget)
                                            .direction,
                                    ),
                                    delta = directionFactor * sourceDelta,
                                    target = event.target,
                                    targetInLock = endTarget.contains(target),
                                    shouldCancelScroll = !1,
                                    isDeltaPositive = delta > 0,
                                    availableScroll = 0,
                                    availableScrollTop = 0
                                do {
                                    var _a = getScrollVariables(axis, target),
                                        position = _a[0],
                                        elementScroll =
                                            _a[1] -
                                            _a[2] -
                                            directionFactor * position
                                    ;(position || elementScroll) &&
                                        elementCouldBeScrolled(axis, target) &&
                                        ((availableScroll += elementScroll),
                                        (availableScrollTop += position)),
                                        (target = target.parentNode)
                                } while (
                                    (!targetInLock &&
                                        target !== document.body) ||
                                    (targetInLock &&
                                        (endTarget.contains(target) ||
                                            endTarget === target))
                                )
                                return (
                                    ((isDeltaPositive &&
                                        ((noOverscroll &&
                                            0 === availableScroll) ||
                                            (!noOverscroll &&
                                                delta > availableScroll))) ||
                                        (!isDeltaPositive &&
                                            ((noOverscroll &&
                                                0 === availableScrollTop) ||
                                                (!noOverscroll &&
                                                    -delta >
                                                        availableScrollTop)))) &&
                                        (shouldCancelScroll = !0),
                                    shouldCancelScroll
                                )
                            })(
                                cancelingAxis,
                                parent,
                                event,
                                'h' === cancelingAxis ? deltaX : deltaY,
                                !0,
                            )
                        }, []),
                        shouldPrevent = react.useCallback(function (_event) {
                            var event = _event
                            if (
                                lockStack.length &&
                                lockStack[lockStack.length - 1] === Style
                            ) {
                                var delta =
                                        'deltaY' in event
                                            ? getDeltaXY(event)
                                            : getTouchXY(event),
                                    sourceEvent =
                                        shouldPreventQueue.current.filter(
                                            function (e) {
                                                return (
                                                    e.name === event.type &&
                                                    e.target === event.target &&
                                                    ((x = e.delta),
                                                    (y = delta),
                                                    x[0] === y[0] &&
                                                        x[1] === y[1])
                                                )
                                                var x, y
                                            },
                                        )[0]
                                if (sourceEvent && sourceEvent.should)
                                    event.cancelable && event.preventDefault()
                                else if (!sourceEvent) {
                                    var shardNodes = (
                                        lastProps.current.shards || []
                                    )
                                        .map(extractRef)
                                        .filter(Boolean)
                                        .filter(function (node) {
                                            return node.contains(event.target)
                                        })
                                    ;(shardNodes.length > 0
                                        ? shouldCancelEvent(
                                              event,
                                              shardNodes[0],
                                          )
                                        : !lastProps.current.noIsolation) &&
                                        event.cancelable &&
                                        event.preventDefault()
                                }
                            }
                        }, []),
                        shouldCancel = react.useCallback(function (
                            name,
                            delta,
                            target,
                            should,
                        ) {
                            var event = { name, delta, target, should }
                            shouldPreventQueue.current.push(event),
                                setTimeout(function () {
                                    shouldPreventQueue.current =
                                        shouldPreventQueue.current.filter(
                                            function (e) {
                                                return e !== event
                                            },
                                        )
                                }, 1)
                        }, []),
                        scrollTouchStart = react.useCallback(function (event) {
                            ;(touchStartRef.current = getTouchXY(event)),
                                (activeAxis.current = void 0)
                        }, []),
                        scrollWheel = react.useCallback(function (event) {
                            shouldCancel(
                                event.type,
                                getDeltaXY(event),
                                event.target,
                                shouldCancelEvent(event, props.lockRef.current),
                            )
                        }, []),
                        scrollTouchMove = react.useCallback(function (event) {
                            shouldCancel(
                                event.type,
                                getTouchXY(event),
                                event.target,
                                shouldCancelEvent(event, props.lockRef.current),
                            )
                        }, [])
                    react.useEffect(function () {
                        return (
                            lockStack.push(Style),
                            props.setCallbacks({
                                onScrollCapture: scrollWheel,
                                onWheelCapture: scrollWheel,
                                onTouchMoveCapture: scrollTouchMove,
                            }),
                            document.addEventListener(
                                'wheel',
                                shouldPrevent,
                                nonPassive,
                            ),
                            document.addEventListener(
                                'touchmove',
                                shouldPrevent,
                                nonPassive,
                            ),
                            document.addEventListener(
                                'touchstart',
                                scrollTouchStart,
                                nonPassive,
                            ),
                            function () {
                                ;(lockStack = lockStack.filter(function (inst) {
                                    return inst !== Style
                                })),
                                    document.removeEventListener(
                                        'wheel',
                                        shouldPrevent,
                                        nonPassive,
                                    ),
                                    document.removeEventListener(
                                        'touchmove',
                                        shouldPrevent,
                                        nonPassive,
                                    ),
                                    document.removeEventListener(
                                        'touchstart',
                                        scrollTouchStart,
                                        nonPassive,
                                    )
                            }
                        )
                    }, [])
                    var removeScrollBar = props.removeScrollBar,
                        inert = props.inert
                    return react.createElement(
                        react.Fragment,
                        null,
                        inert
                            ? react.createElement(Style, {
                                  styles: generateStyle(id),
                              })
                            : null,
                        removeScrollBar
                            ? react.createElement(es2015.jp, {
                                  gapMode: 'margin',
                              })
                            : null,
                    )
                },
            )
            var ReactRemoveScroll = react.forwardRef(function (props, ref) {
                return react.createElement(
                    RemoveScroll,
                    (0, tslib_es6.pi)({}, props, { ref, sideCar: sidecar }),
                )
            })
            ReactRemoveScroll.classNames = RemoveScroll.classNames
            const Combination = ReactRemoveScroll
        },
    },
])
