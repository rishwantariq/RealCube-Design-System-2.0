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
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import {
    TypographyH1,
    TypographyH2,
    TypographyH3,
    TypographyH4,
    TypographyP,
    TypographyLarge,
    TypographySmall,
    TypographyLead,
    TypographyBlockquote,
    TypographyInlineCode,
    TypographyList,
    TypographyMuted,
    TypographyTable,
    TypographyListItem,
} from '../typography'
var meta = {
    title: 'Typography/Typography',
    component: TypographyH1,
    parameters: {
        layout: 'centered',
    },
}
export default meta
export var H1 = {
    args: {
        children: 'Taxing Laughter: The Joke Tax Chronicles',
    },
}
export var H2 = {
    args: __assign(__assign({}, H1.args), {
        children: 'The People of the Kingdom',
    }),
    render: function (args) {
        return _jsx(TypographyH2, { children: args.children })
    },
}
export var H3 = {
    args: __assign(__assign({}, H1.args), { children: 'The Joke Tax' }),
    render: function (args) {
        return _jsx(TypographyH3, { children: args.children })
    },
}
export var H4 = {
    args: __assign(__assign({}, H1.args), {
        children: 'People stopped telling jokes',
    }),
    render: function (args) {
        return _jsx(TypographyH4, { children: args.children })
    },
}
export var P = {
    args: __assign(__assign({}, H1.args), {
        children:
            'The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.',
    }),
    render: function (args) {
        return _jsx(TypographyP, { children: args.children })
    },
}
export var Blockquote = {
    args: __assign(__assign({}, H1.args), {
        children:
            '"After all," he said, "everyone enjoys a good joke, so it`s only fair that they should pay for the privilege."',
    }),
    render: function (args) {
        return _jsx(TypographyBlockquote, { children: args.children })
    },
}
export var Table = {
    render: function (args) {
        return _jsx(TypographyTable, {})
    },
}
export var List = {
    render: function (args) {
        return _jsxs(TypographyList, {
            children: [
                _jsx(TypographyListItem, {
                    children: '1st level of puns: 5 gold coins',
                }),
                _jsx(TypographyListItem, {
                    children: '2nd level of jokes: 10 gold coins',
                }),
                _jsx(TypographyListItem, {
                    children: '3rd level of one-liners : 20 gold coins',
                }),
            ],
        })
    },
}
export var InlineCode = {
    args: __assign(__assign({}, H1.args), {
        children: '@radix-ui/react-alert-dialog',
    }),
    render: function (args) {
        return _jsx(TypographyInlineCode, { children: args.children })
    },
}
export var Lead = {
    args: __assign(__assign({}, H1.args), {
        children:
            ' A modal dialog that interrupts the user with important content and expects a response.',
    }),
    render: function (args) {
        return _jsx(TypographyLead, { children: args.children })
    },
}
export var Large = {
    args: __assign(__assign({}, H1.args), {
        children: 'Are you sure absolutely sure?',
    }),
    render: function (args) {
        return _jsx(TypographyLarge, { children: args.children })
    },
}
export var Small = {
    args: __assign(__assign({}, H1.args), { children: 'Email address' }),
    render: function (args) {
        return _jsx(TypographySmall, { children: args.children })
    },
}
export var Muted = {
    args: __assign(__assign({}, H1.args), {
        children: 'Enter your email address.',
    }),
    render: function (args) {
        return _jsx(TypographyMuted, { children: args.children })
    },
}
export var History = {
    render: function (args) {
        return _jsxs('div', {
            children: [
                _jsx(TypographyH1, { children: 'The Joke Tax Chronicles' }),
                _jsx(TypographyP, {
                    children:
                        'Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money.',
                }),
                _jsx(TypographyH2, {
                    className:
                        'mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
                    children: 'The Kings Plan',
                }),
                _jsxs(TypographyP, {
                    children: [
                        'The king thought long and hard, and finally came up with',
                        _jsx('a', {
                            href: '#',
                            className:
                                'font-medium text-primary underline underline-offset-4',
                            children: 'a brilliant plan',
                        }),
                        ': he would tax the jokes in the kingdom.',
                    ],
                }),
                _jsx(TypographyBlockquote, {
                    children:
                        'After all, he said, everyone enjoys a good joke, so its only fair that they should pay for the privilege.',
                }),
                _jsx(TypographyH3, { children: 'The Joke Tax' }),
                _jsx(TypographyP, {
                    children:
                        'The kings subjects were not amused. They grumbled and complained, but the king was firm:',
                }),
                _jsxs(TypographyList, {
                    children: [
                        _jsx(TypographyListItem, {
                            children: '1st level of puns: 5 gold coins',
                        }),
                        _jsx(TypographyListItem, {
                            children: '2nd level of jokes: 10 gold coins',
                        }),
                        _jsx(TypographyListItem, {
                            children: '3rd level of one-liners : 20 gold coins',
                        }),
                    ],
                }),
                _jsx(TypographyP, {
                    children:
                        'As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the kings foolishness get him down: a court jester named Jokester.',
                }),
                _jsx(TypographyH3, {
                    className:
                        'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
                    children: 'Jokesters Revolt',
                }),
                _jsx(TypographyP, {
                    children:
                        'Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the kings pillow, in his soup, even in the royal toilet. The king was furious, but he couldnt seem to stop Jokester.',
                }),
                _jsx(TypographyP, {
                    children:
                        'And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldnt help but laugh. And once they started laughing, they couldnt stop.',
                }),
                _jsx(TypographyH3, {
                    className:
                        'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
                    children: 'The Peoples Rebellion',
                }),
                _jsx(TypographyP, {
                    children:
                        'The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and soon the entire kingdom was in on the joke.',
                }),
                _jsx(TypographyTable, {}),
                _jsx(TypographyP, {
                    children:
                        'The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. Jokester was declared a hero, and the kingdom lived happily ever after.',
                }),
                _jsx(TypographyP, {
                    children:
                        'The moral of the story is: never underestimate the power of a good laugh and always be careful of bad ideas.',
                }),
            ],
        })
    },
}
