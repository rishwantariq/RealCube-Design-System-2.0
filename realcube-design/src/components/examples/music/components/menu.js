import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarLabel,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from '../../../ui/menubar'
export function Menu() {
    return _jsxs(Menubar, {
        className: 'rounded-none border-b border-none px-2 lg:px-4',
        children: [
            _jsxs(MenubarMenu, {
                children: [
                    _jsx(MenubarTrigger, {
                        className: 'font-bold',
                        children: 'Music',
                    }),
                    _jsxs(MenubarContent, {
                        children: [
                            _jsx(MenubarItem, { children: 'About Music' }),
                            _jsx(MenubarSeparator, {}),
                            _jsxs(MenubarItem, {
                                children: [
                                    'Preferences... ',
                                    _jsx(MenubarShortcut, {
                                        children: '\u2318,',
                                    }),
                                ],
                            }),
                            _jsx(MenubarSeparator, {}),
                            _jsxs(MenubarItem, {
                                children: [
                                    'Hide Music... ',
                                    _jsx(MenubarShortcut, {
                                        children: '\u2318H',
                                    }),
                                ],
                            }),
                            _jsxs(MenubarItem, {
                                children: [
                                    'Hide Others... ',
                                    _jsx(MenubarShortcut, {
                                        children: '\u21E7\u2318H',
                                    }),
                                ],
                            }),
                            _jsx(MenubarShortcut, {}),
                            _jsxs(MenubarItem, {
                                children: [
                                    'Quit Music ',
                                    _jsx(MenubarShortcut, {
                                        children: '\u2318Q',
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            _jsxs(MenubarMenu, {
                children: [
                    _jsx(MenubarTrigger, {
                        className: 'relative',
                        children: 'File',
                    }),
                    _jsxs(MenubarContent, {
                        children: [
                            _jsxs(MenubarSub, {
                                children: [
                                    _jsx(MenubarSubTrigger, {
                                        children: 'New',
                                    }),
                                    _jsxs(MenubarSubContent, {
                                        className: 'w-[230px]',
                                        children: [
                                            _jsxs(MenubarItem, {
                                                children: [
                                                    'Playlist ',
                                                    _jsx(MenubarShortcut, {
                                                        children: '\u2318N',
                                                    }),
                                                ],
                                            }),
                                            _jsxs(MenubarItem, {
                                                disabled: true,
                                                children: [
                                                    'Playlist from Selection',
                                                    ' ',
                                                    _jsx(MenubarShortcut, {
                                                        children:
                                                            '\u21E7\u2318N',
                                                    }),
                                                ],
                                            }),
                                            _jsxs(MenubarItem, {
                                                children: [
                                                    'Smart Playlist...',
                                                    ' ',
                                                    _jsx(MenubarShortcut, {
                                                        children:
                                                            '\u2325\u2318N',
                                                    }),
                                                ],
                                            }),
                                            _jsx(MenubarItem, {
                                                children: 'Playlist Folder',
                                            }),
                                            _jsx(MenubarItem, {
                                                disabled: true,
                                                children: 'Genius Playlist',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs(MenubarItem, {
                                children: [
                                    'Open Stream URL... ',
                                    _jsx(MenubarShortcut, {
                                        children: '\u2318U',
                                    }),
                                ],
                            }),
                            _jsxs(MenubarItem, {
                                children: [
                                    'Close Window ',
                                    _jsx(MenubarShortcut, {
                                        children: '\u2318W',
                                    }),
                                ],
                            }),
                            _jsx(MenubarSeparator, {}),
                            _jsxs(MenubarSub, {
                                children: [
                                    _jsx(MenubarSubTrigger, {
                                        children: 'Library',
                                    }),
                                    _jsxs(MenubarSubContent, {
                                        children: [
                                            _jsx(MenubarItem, {
                                                children:
                                                    'Update Cloud Library',
                                            }),
                                            _jsx(MenubarItem, {
                                                children: 'Update Genius',
                                            }),
                                            _jsx(MenubarSeparator, {}),
                                            _jsx(MenubarItem, {
                                                children: 'Organize Library...',
                                            }),
                                            _jsx(MenubarItem, {
                                                children: 'Export Library...',
                                            }),
                                            _jsx(MenubarSeparator, {}),
                                            _jsx(MenubarItem, {
                                                children: 'Import Playlist...',
                                            }),
                                            _jsx(MenubarItem, {
                                                disabled: true,
                                                children: 'Export Playlist...',
                                            }),
                                            _jsx(MenubarItem, {
                                                children:
                                                    'Show Duplicate Items',
                                            }),
                                            _jsx(MenubarSeparator, {}),
                                            _jsx(MenubarItem, {
                                                children: 'Get Album Artwork',
                                            }),
                                            _jsx(MenubarItem, {
                                                disabled: true,
                                                children: 'Get Track Names',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs(MenubarItem, {
                                children: [
                                    'Import... ',
                                    _jsx(MenubarShortcut, {
                                        children: '\u2318O',
                                    }),
                                ],
                            }),
                            _jsx(MenubarItem, {
                                disabled: true,
                                children: 'Burn Playlist to Disc...',
                            }),
                            _jsx(MenubarSeparator, {}),
                            _jsxs(MenubarItem, {
                                children: [
                                    'Show in Finder ',
                                    _jsx(MenubarShortcut, {
                                        children: '\u21E7\u2318R',
                                    }),
                                    ' ',
                                ],
                            }),
                            _jsx(MenubarItem, { children: 'Convert' }),
                            _jsx(MenubarSeparator, {}),
                            _jsx(MenubarItem, { children: 'Page Setup...' }),
                            _jsxs(MenubarItem, {
                                disabled: true,
                                children: [
                                    'Print... ',
                                    _jsx(MenubarShortcut, {
                                        children: '\u2318P',
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            _jsxs(MenubarMenu, {
                children: [
                    _jsx(MenubarTrigger, { children: 'Edit' }),
                    _jsxs(MenubarContent, {
                        children: [
                            _jsxs(MenubarItem, {
                                disabled: true,
                                children: [
                                    'Undo ',
                                    _jsx(MenubarShortcut, {
                                        children: '\u2318Z',
                                    }),
                                ],
                            }),
                            _jsxs(MenubarItem, {
                                disabled: true,
                                children: [
                                    'Redo ',
                                    _jsx(MenubarShortcut, {
                                        children: '\u21E7\u2318Z',
                                    }),
                                ],
                            }),
                            _jsx(MenubarSeparator, {}),
                            _jsxs(MenubarItem, {
                                disabled: true,
                                children: [
                                    'Cut ',
                                    _jsx(MenubarShortcut, {
                                        children: '\u2318X',
                                    }),
                                ],
                            }),
                            _jsxs(MenubarItem, {
                                disabled: true,
                                children: [
                                    'Copy ',
                                    _jsx(MenubarShortcut, {
                                        children: '\u2318C',
                                    }),
                                ],
                            }),
                            _jsxs(MenubarItem, {
                                disabled: true,
                                children: [
                                    'Paste ',
                                    _jsx(MenubarShortcut, {
                                        children: '\u2318V',
                                    }),
                                ],
                            }),
                            _jsx(MenubarSeparator, {}),
                            _jsxs(MenubarItem, {
                                children: [
                                    'Select All ',
                                    _jsx(MenubarShortcut, {
                                        children: '\u2318A',
                                    }),
                                ],
                            }),
                            _jsxs(MenubarItem, {
                                disabled: true,
                                children: [
                                    'Deselect All ',
                                    _jsx(MenubarShortcut, {
                                        children: '\u21E7\u2318A',
                                    }),
                                ],
                            }),
                            _jsx(MenubarSeparator, {}),
                            _jsxs(MenubarItem, {
                                children: [
                                    'Smart Dictation...',
                                    ' ',
                                    _jsx(MenubarShortcut, {
                                        children: _jsxs('svg', {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            strokeWidth: '2',
                                            className: 'h-4 w-4',
                                            viewBox: '0 0 24 24',
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
                                    }),
                                ],
                            }),
                            _jsxs(MenubarItem, {
                                children: [
                                    'Emoji & Symbols',
                                    ' ',
                                    _jsx(MenubarShortcut, {
                                        children: _jsxs('svg', {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            strokeWidth: '2',
                                            className: 'h-4 w-4',
                                            viewBox: '0 0 24 24',
                                            children: [
                                                _jsx('circle', {
                                                    cx: '12',
                                                    cy: '12',
                                                    r: '10',
                                                }),
                                                _jsx('path', {
                                                    d: 'M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            _jsxs(MenubarMenu, {
                children: [
                    _jsx(MenubarTrigger, { children: 'View' }),
                    _jsxs(MenubarContent, {
                        children: [
                            _jsx(MenubarCheckboxItem, {
                                children: 'Show Playing Next',
                            }),
                            _jsx(MenubarCheckboxItem, {
                                checked: true,
                                children: 'Show Lyrics',
                            }),
                            _jsx(MenubarSeparator, {}),
                            _jsx(MenubarItem, {
                                inset: true,
                                disabled: true,
                                children: 'Show Status Bar',
                            }),
                            _jsx(MenubarSeparator, {}),
                            _jsx(MenubarItem, {
                                inset: true,
                                children: 'Hide Sidebar',
                            }),
                            _jsx(MenubarItem, {
                                disabled: true,
                                inset: true,
                                children: 'Enter Full Screen',
                            }),
                        ],
                    }),
                ],
            }),
            _jsxs(MenubarMenu, {
                children: [
                    _jsx(MenubarTrigger, {
                        className: 'hidden md:block',
                        children: 'Account',
                    }),
                    _jsxs(MenubarContent, {
                        forceMount: true,
                        children: [
                            _jsx(MenubarLabel, {
                                inset: true,
                                children: 'Switch Account',
                            }),
                            _jsx(MenubarSeparator, {}),
                            _jsxs(MenubarRadioGroup, {
                                value: 'benoit',
                                children: [
                                    _jsx(MenubarRadioItem, {
                                        value: 'andy',
                                        children: 'Andy',
                                    }),
                                    _jsx(MenubarRadioItem, {
                                        value: 'benoit',
                                        children: 'Benoit',
                                    }),
                                    _jsx(MenubarRadioItem, {
                                        value: 'Luis',
                                        children: 'Luis',
                                    }),
                                ],
                            }),
                            _jsx(MenubarSeparator, {}),
                            _jsx(MenubarItem, {
                                inset: true,
                                children: 'Manage Family...',
                            }),
                            _jsx(MenubarSeparator, {}),
                            _jsx(MenubarItem, {
                                inset: true,
                                children: 'Add Account...',
                            }),
                        ],
                    }),
                ],
            }),
        ],
    })
}
