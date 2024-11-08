import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from 'react/jsx-runtime'
import { ScrollArea } from '../ui/scroll-area'
import { SiteFooter } from '../ui/site-footer'
export default function PageContainer(_a) {
    var children = _a.children,
        _b = _a.scrollable,
        scrollable = _b === void 0 ? false : _b,
        _c = _a.footerSections,
        footerSections = _c === void 0 ? [] : _c,
        _d = _a.logoSrc,
        logoSrc = _d === void 0 ? '' : _d,
        _e = _a.companyName,
        companyName = _e === void 0 ? '' : _e,
        _f = _a.hideInfo,
        hideInfo = _f === void 0 ? false : _f
    return _jsx(_Fragment, {
        children: scrollable
            ? _jsxs(ScrollArea, {
                  className: 'h-[calc(100dvh-52px)]',
                  children: [
                      _jsx('div', {
                          className: 'h-full px-[20px] py-4 mx-auto',
                          children: children,
                      }),
                      _jsx('div', {
                          className: 'mt-[80px]',
                          children: _jsx(SiteFooter, {
                              sections: footerSections,
                              logoSrc: logoSrc,
                              companyName: companyName,
                              hideInfo: hideInfo,
                          }),
                      }),
                  ],
              })
            : _jsx('div', {
                  className: 'h-full p-4 px-[20px]',
                  children: children,
              }),
    })
}
