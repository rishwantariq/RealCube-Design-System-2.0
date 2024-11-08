import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { cn } from '../../../../lib/utils'
import { Button } from '../../../ui/button'
import { ScrollArea } from '../../../ui/scroll-area'
export function Sidebar(_a) {
    var className = _a.className,
        playlists = _a.playlists
    return _jsx('div', {
        className: cn('pb-12', className),
        children: _jsxs('div', {
            className: 'space-y-4 py-4',
            children: [
                _jsxs('div', {
                    className: 'px-3 py-2',
                    children: [
                        _jsx('h2', {
                            className:
                                'mb-2 px-4 text-lg font-semibold tracking-tight',
                            children: 'Discover',
                        }),
                        _jsxs('div', {
                            className: 'space-y-1',
                            children: [
                                _jsxs(Button, {
                                    variant: 'secondary',
                                    className: 'w-full justify-start',
                                    children: [
                                        _jsxs('svg', {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '2',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            className: 'mr-2 h-4 w-4',
                                            children: [
                                                _jsx('circle', {
                                                    cx: '12',
                                                    cy: '12',
                                                    r: '10',
                                                }),
                                                _jsx('polygon', {
                                                    points: '10 8 16 12 10 16 10 8',
                                                }),
                                            ],
                                        }),
                                        'Listen Now',
                                    ],
                                }),
                                _jsxs(Button, {
                                    variant: 'ghost',
                                    className: 'w-full justify-start',
                                    children: [
                                        _jsxs('svg', {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '2',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            className: 'mr-2 h-4 w-4',
                                            children: [
                                                _jsx('rect', {
                                                    width: '7',
                                                    height: '7',
                                                    x: '3',
                                                    y: '3',
                                                    rx: '1',
                                                }),
                                                _jsx('rect', {
                                                    width: '7',
                                                    height: '7',
                                                    x: '14',
                                                    y: '3',
                                                    rx: '1',
                                                }),
                                                _jsx('rect', {
                                                    width: '7',
                                                    height: '7',
                                                    x: '14',
                                                    y: '14',
                                                    rx: '1',
                                                }),
                                                _jsx('rect', {
                                                    width: '7',
                                                    height: '7',
                                                    x: '3',
                                                    y: '14',
                                                    rx: '1',
                                                }),
                                            ],
                                        }),
                                        'Browse',
                                    ],
                                }),
                                _jsxs(Button, {
                                    variant: 'ghost',
                                    className: 'w-full justify-start',
                                    children: [
                                        _jsxs('svg', {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '2',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            className: 'mr-2 h-4 w-4',
                                            children: [
                                                _jsx('path', {
                                                    d: 'M4.9 19.1C1 15.2 1 8.8 4.9 4.9',
                                                }),
                                                _jsx('path', {
                                                    d: 'M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5',
                                                }),
                                                _jsx('circle', {
                                                    cx: '12',
                                                    cy: '12',
                                                    r: '2',
                                                }),
                                                _jsx('path', {
                                                    d: 'M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5',
                                                }),
                                                _jsx('path', {
                                                    d: 'M19.1 4.9C23 8.8 23 15.1 19.1 19',
                                                }),
                                            ],
                                        }),
                                        'Radio',
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                _jsxs('div', {
                    className: 'px-3 py-2',
                    children: [
                        _jsx('h2', {
                            className:
                                'mb-2 px-4 text-lg font-semibold tracking-tight',
                            children: 'Library',
                        }),
                        _jsxs('div', {
                            className: 'space-y-1',
                            children: [
                                _jsxs(Button, {
                                    variant: 'ghost',
                                    className: 'w-full justify-start',
                                    children: [
                                        _jsxs('svg', {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '2',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            className: 'mr-2 h-4 w-4',
                                            children: [
                                                _jsx('path', { d: 'M21 15V6' }),
                                                _jsx('path', {
                                                    d: 'M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
                                                }),
                                                _jsx('path', { d: 'M12 12H3' }),
                                                _jsx('path', { d: 'M16 6H3' }),
                                                _jsx('path', { d: 'M12 18H3' }),
                                            ],
                                        }),
                                        'Playlists',
                                    ],
                                }),
                                _jsxs(Button, {
                                    variant: 'ghost',
                                    className: 'w-full justify-start',
                                    children: [
                                        _jsxs('svg', {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '2',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            className: 'mr-2 h-4 w-4',
                                            children: [
                                                _jsx('circle', {
                                                    cx: '8',
                                                    cy: '18',
                                                    r: '4',
                                                }),
                                                _jsx('path', {
                                                    d: 'M12 18V2l7 4',
                                                }),
                                            ],
                                        }),
                                        'Songs',
                                    ],
                                }),
                                _jsxs(Button, {
                                    variant: 'ghost',
                                    className: 'w-full justify-start',
                                    children: [
                                        _jsxs('svg', {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '2',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            className: 'mr-2 h-4 w-4',
                                            children: [
                                                _jsx('path', {
                                                    d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2',
                                                }),
                                                _jsx('circle', {
                                                    cx: '12',
                                                    cy: '7',
                                                    r: '4',
                                                }),
                                            ],
                                        }),
                                        'Made for You',
                                    ],
                                }),
                                _jsxs(Button, {
                                    variant: 'ghost',
                                    className: 'w-full justify-start',
                                    children: [
                                        _jsxs('svg', {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '2',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            className: 'mr-2 h-4 w-4',
                                            children: [
                                                _jsx('path', {
                                                    d: 'm12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12',
                                                }),
                                                _jsx('circle', {
                                                    cx: '17',
                                                    cy: '7',
                                                    r: '5',
                                                }),
                                            ],
                                        }),
                                        'Artists',
                                    ],
                                }),
                                _jsxs(Button, {
                                    variant: 'ghost',
                                    className: 'w-full justify-start',
                                    children: [
                                        _jsxs('svg', {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '2',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            className: 'mr-2 h-4 w-4',
                                            children: [
                                                _jsx('path', {
                                                    d: 'm16 6 4 14',
                                                }),
                                                _jsx('path', { d: 'M12 6v14' }),
                                                _jsx('path', { d: 'M8 8v12' }),
                                                _jsx('path', { d: 'M4 4v16' }),
                                            ],
                                        }),
                                        'Albums',
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                _jsxs('div', {
                    className: 'py-2',
                    children: [
                        _jsx('h2', {
                            className:
                                'relative px-7 text-lg font-semibold tracking-tight',
                            children: 'Playlists',
                        }),
                        _jsx(ScrollArea, {
                            className: 'h-[300px] px-1',
                            children: _jsx('div', {
                                className: 'space-y-1 p-2',
                                children:
                                    playlists === null || playlists === void 0
                                        ? void 0
                                        : playlists.map(function (playlist, i) {
                                              return _jsxs(
                                                  Button,
                                                  {
                                                      variant: 'ghost',
                                                      className:
                                                          'w-full justify-start font-normal',
                                                      children: [
                                                          _jsxs('svg', {
                                                              xmlns: 'http://www.w3.org/2000/svg',
                                                              viewBox:
                                                                  '0 0 24 24',
                                                              fill: 'none',
                                                              stroke: 'currentColor',
                                                              strokeWidth: '2',
                                                              strokeLinecap:
                                                                  'round',
                                                              strokeLinejoin:
                                                                  'round',
                                                              className:
                                                                  'mr-2 h-4 w-4',
                                                              children: [
                                                                  _jsx('path', {
                                                                      d: 'M21 15V6',
                                                                  }),
                                                                  _jsx('path', {
                                                                      d: 'M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
                                                                  }),
                                                                  _jsx('path', {
                                                                      d: 'M12 12H3',
                                                                  }),
                                                                  _jsx('path', {
                                                                      d: 'M16 6H3',
                                                                  }),
                                                                  _jsx('path', {
                                                                      d: 'M12 18H3',
                                                                  }),
                                                              ],
                                                          }),
                                                          playlist,
                                                      ],
                                                  },
                                                  ''
                                                      .concat(playlist, '-')
                                                      .concat(i),
                                              )
                                          }),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    })
}
