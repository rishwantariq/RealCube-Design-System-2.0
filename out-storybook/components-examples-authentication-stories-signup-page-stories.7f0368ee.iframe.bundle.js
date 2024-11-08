/*! For license information please see components-examples-authentication-stories-signup-page-stories.7f0368ee.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunkstorybook_realcube =
    self.webpackChunkstorybook_realcube || []).push([
    [7545],
    {
        './src/components/examples/authentication/stories/signup-page.stories.tsx':
            (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                'use strict'
                __webpack_require__.r(__webpack_exports__),
                    __webpack_require__.d(__webpack_exports__, {
                        Default: () => Default,
                        Docs: () => Docs,
                        __namedExportsOrder: () => __namedExportsOrder,
                        default: () => signup_page_stories,
                    })
                var defineProperty = __webpack_require__(
                        './node_modules/@babel/runtime/helpers/esm/defineProperty.js',
                    ),
                    react = __webpack_require__(
                        './node_modules/next/dist/compiled/react/index.js',
                    ),
                    next_link = __webpack_require__(
                        './node_modules/next/link.js',
                    ),
                    link_default = __webpack_require__.n(next_link),
                    next_image = __webpack_require__(
                        './node_modules/@storybook/nextjs/dist/images/next-image.mjs',
                    ),
                    multi_step_form = __webpack_require__(
                        './src/components/ui/multi-step-form.tsx',
                    ),
                    utils = __webpack_require__('./src/lib/utils.ts'),
                    ui_button = __webpack_require__(
                        './src/components/ui/button.tsx',
                    ),
                    typography = __webpack_require__(
                        './src/components/typography/typography.tsx',
                    ),
                    flip_words = __webpack_require__(
                        './src/components/ui/flip-words.tsx',
                    ),
                    head = __webpack_require__('./node_modules/next/head.js'),
                    head_default = __webpack_require__.n(head),
                    __jsx = react.createElement
                function SignupPage(_ref) {
                    var steps = _ref.steps,
                        schema = _ref.schema,
                        onSubmit = _ref.onSubmit,
                        _ref$siteConfig = _ref.siteConfig,
                        siteConfig =
                            void 0 === _ref$siteConfig
                                ? {
                                      logo: '/images/default-logo.png',
                                      name: 'Default Site',
                                      title: '',
                                      description: '',
                                  }
                                : _ref$siteConfig,
                        _ref$flipWords = (_ref.backgroundImage, _ref.flipWords),
                        flipWords =
                            void 0 === _ref$flipWords
                                ? [
                                      'Efficiency',
                                      'Compliance',
                                      'Streamlined Workflows',
                                  ]
                                : _ref$flipWords,
                        metaData = _ref.metaData,
                        _ref$termsLink = _ref.termsLink,
                        termsLink =
                            void 0 === _ref$termsLink
                                ? '/terms'
                                : _ref$termsLink,
                        _ref$privacyLink = _ref.privacyLink,
                        privacyLink =
                            void 0 === _ref$privacyLink
                                ? '/privacy'
                                : _ref$privacyLink
                    return __jsx(
                        'div',
                        {
                            className:
                                'w-full min-h-screen overflow-hidden flex flex-col lg:flex-row',
                        },
                        metaData &&
                            __jsx(
                                head_default(),
                                null,
                                __jsx('title', null, metaData.title),
                                __jsx('meta', {
                                    name: 'description',
                                    content: metaData.description,
                                }),
                            ),
                        __jsx(
                            'div',
                            {
                                className:
                                    'flex w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen flex-col p-8 lg:p-16 text-white dark:border-r  bg-gradient-to-b from-[#FFFDE7] to-white dark:bg-gradient-to-b dark:from-[#2a2a1f] dark:to-[#1a1a0f]',
                            },
                            __jsx(
                                ui_button.z,
                                {
                                    variant: 'outline',
                                    className: (0, utils.cn)(
                                        (0, ui_button.d)({ variant: 'ghost' }),
                                        'absolute top-4 right-4 md:top-8 md:right-8 text-sm lg:hidden',
                                    ),
                                },
                                'Log in',
                            ),
                            __jsx(
                                'div',
                                { className: 'relative z-20 mb-8' },
                                __jsx(next_image.Z, {
                                    width: 120,
                                    height: 120,
                                    src: siteConfig.logo,
                                    alt: siteConfig.name,
                                    className:
                                        'dark:brightness-0 dark:invert brightness-0 saturate-0',
                                }),
                            ),
                            __jsx(
                                'div',
                                {
                                    className:
                                        'flex flex-col justify-center h-full',
                                },
                                __jsx(
                                    'blockquote',
                                    {
                                        className:
                                            'space-y-2 max-w-[90%] lg:max-w-full',
                                    },
                                    __jsx(
                                        typography.S5,
                                        {
                                            className:
                                                'text-3xl text-secondary-foreground lg:text-4xl font-bold leading-tight tracking-tight text-left',
                                        },
                                        'Join Our Platform with',
                                    ),
                                    __jsx(
                                        typography.S5,
                                        {
                                            className:
                                                'text-3xl ml-[-7px] text-secondary-foreground lg:text-4xl font-bold leading-tight tracking-tight text-left',
                                        },
                                        __jsx(flip_words.y, {
                                            words: flipWords,
                                        }),
                                    ),
                                    __jsx(
                                        typography.d,
                                        {
                                            className:
                                                'text-sm font-light text-secondary-foreground/40 lg:text-base leading-relaxed pt-4 text-left',
                                        },
                                        'Set up your account to start using advanced workflow tools.',
                                    ),
                                ),
                            ),
                        ),
                        __jsx(
                            'div',
                            {
                                className:
                                    'flex w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen bg-background flex-col justify-center lg:p-12 xl:p-16',
                            },
                            __jsx(
                                'div',
                                { className: 'flex lg:hidden justify-end p-4' },
                                __jsx(
                                    ui_button.z,
                                    {
                                        variant: 'outline',
                                        className: (0, utils.cn)(
                                            (0, ui_button.d)({
                                                variant: 'ghost',
                                            }),
                                            'absolute top-4 right-4 md:top-8 md:right-8 text-sm',
                                        ),
                                    },
                                    'Log in',
                                ),
                            ),
                            __jsx(
                                'div',
                                {
                                    className:
                                        'mx-auto  w-full max-w-lg p-10 sm:w-[90%] md:w-[500px] lg:p-0 space-y-6',
                                },
                                __jsx(
                                    'div',
                                    {
                                        className:
                                            'flex flex-col ml-5 space-y-4 text-center md:text-left',
                                    },
                                    __jsx(
                                        typography.S5,
                                        {
                                            className:
                                                'text-2xl lg:text-3xl font-semibold tracking-tight text-foreground/90',
                                        },
                                        'Create Your Account',
                                    ),
                                    __jsx(
                                        typography.C0,
                                        {
                                            className:
                                                'text-sm lg:text-base text-muted-foreground/80',
                                        },
                                        'Fill in your details to get started with our platform.',
                                    ),
                                    __jsx('div', {
                                        className:
                                            'h-[2px] w-8 bg-primary/60 mt-2 mx-auto md:mx-0',
                                    }),
                                ),
                                __jsx(
                                    'div',
                                    { className: 'w-full' },
                                    __jsx(multi_step_form.h, {
                                        schema,
                                        steps,
                                        onSubmit,
                                    }),
                                ),
                                __jsx(
                                    typography.C0,
                                    {
                                        className:
                                            'px-4 md:px-8 text-center text-xs lg:text-sm text-muted-foreground/70',
                                    },
                                    'By signing up, you agree to our',
                                    ' ',
                                    __jsx(
                                        link_default(),
                                        {
                                            href: termsLink,
                                            className:
                                                'underline underline-offset-4 hover:text-primary transition-colors',
                                        },
                                        'Terms',
                                    ),
                                    ' ',
                                    'and',
                                    ' ',
                                    __jsx(
                                        link_default(),
                                        {
                                            href: privacyLink,
                                            className:
                                                'underline underline-offset-4 hover:text-primary transition-colors',
                                        },
                                        'Privacy Policy',
                                    ),
                                ),
                            ),
                        ),
                    )
                }
                SignupPage.displayName = 'SignupPage'
                try {
                    ;(signuppage.displayName = 'signuppage'),
                        (signuppage.__docgenInfo = {
                            description: '',
                            displayName: 'signuppage',
                            props: {
                                steps: {
                                    defaultValue: null,
                                    description: '',
                                    name: 'steps',
                                    required: !0,
                                    type: { name: 'StepConfig[]' },
                                },
                                schema: {
                                    defaultValue: null,
                                    description: '',
                                    name: 'schema',
                                    required: !0,
                                    type: {
                                        name: 'ZodType<any, ZodTypeDef, any>',
                                    },
                                },
                                onSubmit: {
                                    defaultValue: null,
                                    description: '',
                                    name: 'onSubmit',
                                    required: !0,
                                    type: { name: 'SubmitHandler<any>' },
                                },
                                siteConfig: {
                                    defaultValue: {
                                        value: "{\n        logo: '/images/default-logo.png',\n        name: 'Default Site',\n        title: '',\n        description: '',\n    }",
                                    },
                                    description: '',
                                    name: 'siteConfig',
                                    required: !1,
                                    type: {
                                        name: '{ logo: string; name: string; title: string; description: string; }',
                                    },
                                },
                                backgroundImage: {
                                    defaultValue: { value: '' },
                                    description: '',
                                    name: 'backgroundImage',
                                    required: !1,
                                    type: { name: 'string' },
                                },
                                flipWords: {
                                    defaultValue: {
                                        value: "['Efficiency', 'Compliance', 'Streamlined Workflows']",
                                    },
                                    description: '',
                                    name: 'flipWords',
                                    required: !1,
                                    type: { name: 'string[]' },
                                },
                                metaData: {
                                    defaultValue: null,
                                    description: '',
                                    name: 'metaData',
                                    required: !1,
                                    type: { name: 'Metadata' },
                                },
                                termsLink: {
                                    defaultValue: { value: '/terms' },
                                    description: '',
                                    name: 'termsLink',
                                    required: !1,
                                    type: { name: 'string' },
                                },
                                privacyLink: {
                                    defaultValue: { value: '/privacy' },
                                    description: '',
                                    name: 'privacyLink',
                                    required: !1,
                                    type: { name: 'string' },
                                },
                            },
                        }),
                        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                            (STORYBOOK_REACT_CLASSES[
                                'src/components/examples/authentication/components/signup-page.tsx#signuppage'
                            ] = {
                                docgenInfo: signuppage.__docgenInfo,
                                name: 'signuppage',
                                path: 'src/components/examples/authentication/components/signup-page.tsx#signuppage',
                            })
                } catch (__react_docgen_typescript_loader_error) {}
                var _Default$parameters,
                    _Default$parameters2,
                    _Docs$parameters,
                    _Docs$parameters2,
                    lib = __webpack_require__(
                        './node_modules/zod/lib/index.mjs',
                    ),
                    info = __webpack_require__(
                        './node_modules/lucide-react/dist/esm/icons/info.js',
                    ),
                    check_circle = __webpack_require__(
                        './node_modules/lucide-react/dist/esm/icons/check-circle.js',
                    ),
                    x_circle = __webpack_require__(
                        './node_modules/lucide-react/dist/esm/icons/x-circle.js',
                    ),
                    alert_circle = __webpack_require__(
                        './node_modules/lucide-react/dist/esm/icons/alert-circle.js',
                    ),
                    star = __webpack_require__(
                        './node_modules/lucide-react/dist/esm/icons/star.js',
                    ),
                    console = __webpack_require__(
                        './node_modules/console-browserify/index.js',
                    ),
                    signup_page_stories_jsx = react.createElement
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
                const signup_page_stories = {
                    title: 'Examples/signup-page',
                    component: SignupPage,
                    args: {
                        steps: [
                            {
                                title: 'Personal Information',
                                description: 'Enter your personal details.',
                                fields: [
                                    {
                                        name: 'firstName',
                                        label: 'First Name',
                                        placeholder: 'Enter your first name',
                                        type: 'text',
                                    },
                                    {
                                        name: 'lastName',
                                        label: 'Last Name',
                                        placeholder: 'Enter your last name',
                                        type: 'text',
                                    },
                                    {
                                        name: 'email',
                                        label: 'Email',
                                        placeholder: 'Enter your email',
                                        type: 'text',
                                    },
                                    {
                                        name: 'password',
                                        label: 'Password',
                                        placeholder: 'Create a password',
                                        type: 'password',
                                    },
                                ],
                            },
                            {
                                title: 'Company Details',
                                description:
                                    'Provide your company information.',
                                fields: [
                                    {
                                        name: 'companyName',
                                        label: 'Company Name',
                                        placeholder: 'Enter your company name',
                                        type: 'text',
                                    },
                                    {
                                        name: 'role',
                                        label: 'Role',
                                        placeholder: 'Select your role',
                                        type: 'select',
                                        options: ['Agent', 'Manager', 'Admin'],
                                    },
                                ],
                            },
                            {
                                title: 'Account Settings',
                                description:
                                    'Accept terms to complete registration.',
                                fields: [
                                    {
                                        name: 'termsAccepted',
                                        label: 'I accept the terms and conditions',
                                        type: 'checkbox',
                                        placeholder: '',
                                    },
                                ],
                            },
                        ],
                        schema: lib.z.object({
                            firstName: lib.z
                                .string()
                                .nonempty('First name is required'),
                            lastName: lib.z
                                .string()
                                .nonempty('Last name is required'),
                            email: lib.z
                                .string()
                                .email('Invalid email address'),
                            password: lib.z
                                .string()
                                .min(
                                    6,
                                    'Password must be at least 6 characters',
                                ),
                            companyName: lib.z
                                .string()
                                .nonempty('Company name is required'),
                            role: lib.z
                                .enum(['Agent', 'Manager', 'Admin'])
                                .optional(),
                            termsAccepted: lib.z.boolean().refine(function (
                                val,
                            ) {
                                return !0 === val
                            }, 'You must accept the terms and conditions'),
                        }),
                        onSubmit: function onSubmit(data) {
                            console.log('Form submitted:', data)
                        },
                        siteConfig: {
                            logo: 'https://www.realcube.estate/assets/web/img/home-page-img/menu-logo.svg',
                            name: 'Real Estate Workflow',
                            title: 'Signup',
                            description:
                                'Create your account to start using our platform',
                        },
                        backgroundImage: '/images/signup-background.jpg',
                        flipWords: [
                            'Efficiency',
                            'Compliance',
                            'Streamlined Workflows',
                        ],
                        metaData: {
                            title: 'Signup Page',
                            description:
                                'A multi-step form for user account creation',
                        },
                        termsLink: '/terms',
                        privacyLink: '/privacy',
                    },
                    parameters: { layout: 'fullscreen' },
                }
                var Default = { args: {} },
                    Docs = {
                        render: function render(args) {
                            return signup_page_stories_jsx(
                                'div',
                                null,
                                signup_page_stories_jsx(
                                    'div',
                                    {
                                        className:
                                            'p-8 space-y-4 bg-background',
                                    },
                                    signup_page_stories_jsx(
                                        typography.S5,
                                        null,
                                        'SignupPage Component Documentation',
                                    ),
                                    signup_page_stories_jsx(
                                        typography.C0,
                                        null,
                                        'The ',
                                        signup_page_stories_jsx(
                                            'code',
                                            null,
                                            'SignupPage',
                                        ),
                                        ' component provides a multi-step form for new user registration. This form supports customization for different configuration options, steps, and validation schemas.',
                                    ),
                                    signup_page_stories_jsx(
                                        typography.d,
                                        null,
                                        'Props',
                                    ),
                                    signup_page_stories_jsx(
                                        'ul',
                                        {
                                            className:
                                                'list-disc ml-6 space-y-2',
                                        },
                                        signup_page_stories_jsx(
                                            'li',
                                            null,
                                            signup_page_stories_jsx(
                                                typography.C0,
                                                null,
                                                signup_page_stories_jsx(
                                                    'strong',
                                                    null,
                                                    'steps',
                                                ),
                                                ' (array) - Array of form steps, each containing fields and descriptions for the multi-step form.',
                                            ),
                                        ),
                                        signup_page_stories_jsx(
                                            'li',
                                            null,
                                            signup_page_stories_jsx(
                                                typography.C0,
                                                null,
                                                signup_page_stories_jsx(
                                                    'strong',
                                                    null,
                                                    'schema',
                                                ),
                                                ' (ZodSchema) - Validation schema for each step’s fields, created with Zod.',
                                            ),
                                        ),
                                        signup_page_stories_jsx(
                                            'li',
                                            null,
                                            signup_page_stories_jsx(
                                                typography.C0,
                                                null,
                                                signup_page_stories_jsx(
                                                    'strong',
                                                    null,
                                                    'onSubmit',
                                                ),
                                                ' (function) - Callback function that handles form submission, typically receives form data as an argument.',
                                            ),
                                        ),
                                        signup_page_stories_jsx(
                                            'li',
                                            null,
                                            signup_page_stories_jsx(
                                                typography.C0,
                                                null,
                                                signup_page_stories_jsx(
                                                    'strong',
                                                    null,
                                                    'siteConfig',
                                                ),
                                                ' (object) - Configuration object for site branding, containing ',
                                                signup_page_stories_jsx(
                                                    'code',
                                                    null,
                                                    'logo',
                                                ),
                                                ', ',
                                                signup_page_stories_jsx(
                                                    'code',
                                                    null,
                                                    'name',
                                                ),
                                                ',',
                                                ' ',
                                                signup_page_stories_jsx(
                                                    'code',
                                                    null,
                                                    'title',
                                                ),
                                                ', and ',
                                                signup_page_stories_jsx(
                                                    'code',
                                                    null,
                                                    'description',
                                                ),
                                                '.',
                                            ),
                                        ),
                                        signup_page_stories_jsx(
                                            'li',
                                            null,
                                            signup_page_stories_jsx(
                                                typography.C0,
                                                null,
                                                signup_page_stories_jsx(
                                                    'strong',
                                                    null,
                                                    'backgroundImage',
                                                ),
                                                ' (string) - URL for the background image used in the signup form layout.',
                                            ),
                                        ),
                                        signup_page_stories_jsx(
                                            'li',
                                            null,
                                            signup_page_stories_jsx(
                                                typography.C0,
                                                null,
                                                signup_page_stories_jsx(
                                                    'strong',
                                                    null,
                                                    'flipWords',
                                                ),
                                                ' (array) - Array of words for the rotating flip animation on the left panel.',
                                            ),
                                        ),
                                        signup_page_stories_jsx(
                                            'li',
                                            null,
                                            signup_page_stories_jsx(
                                                typography.C0,
                                                null,
                                                signup_page_stories_jsx(
                                                    'strong',
                                                    null,
                                                    'metaData',
                                                ),
                                                ' (object) - Metadata for SEO, including ',
                                                signup_page_stories_jsx(
                                                    'code',
                                                    null,
                                                    'title',
                                                ),
                                                ' and',
                                                ' ',
                                                signup_page_stories_jsx(
                                                    'code',
                                                    null,
                                                    'description',
                                                ),
                                                '.',
                                            ),
                                        ),
                                        signup_page_stories_jsx(
                                            'li',
                                            null,
                                            signup_page_stories_jsx(
                                                typography.C0,
                                                null,
                                                signup_page_stories_jsx(
                                                    'strong',
                                                    null,
                                                    'termsLink',
                                                ),
                                                ' (string) - URL for the terms of service link.',
                                            ),
                                        ),
                                        signup_page_stories_jsx(
                                            'li',
                                            null,
                                            signup_page_stories_jsx(
                                                typography.C0,
                                                null,
                                                signup_page_stories_jsx(
                                                    'strong',
                                                    null,
                                                    'privacyLink',
                                                ),
                                                ' (string) - URL for the privacy policy link.',
                                            ),
                                        ),
                                    ),
                                    signup_page_stories_jsx(
                                        typography.d,
                                        null,
                                        'Example Usage',
                                    ),
                                    signup_page_stories_jsx(
                                        'pre',
                                        {
                                            className:
                                                'bg-card p-4 rounded-md text-sm',
                                        },
                                        signup_page_stories_jsx(
                                            'code',
                                            null,
                                            "import SignupPage from '@/components/signup-page';\n\n                    function App() {\n                    const steps = [\n                        { title: 'Step 1', fields: [{ name: 'firstName', label: 'First Name', type: 'text' }] },\n                        { title: 'Step 2', fields: [{ name: 'lastName', label: 'Last Name', type: 'text' }] },\n                        { title: 'Step 3', fields: [{ name: 'email', label: 'Email', type: 'text' }] },\n                    ];\n\n                    const schema = z.object({\n                        firstName: z.string().nonempty(),\n                        lastName: z.string().nonempty(),\n                        email: z.string().email(),\n                    });\n\n                    const handleSubmit = (data) => console.log(data);\n\n                    return (\n                        <SignupPage\n                        steps={steps}\n                        schema={schema}\n                        onSubmit={handleSubmit}\n                        siteConfig={{ logo: '/logo.png', name: 'RealCube', title: 'Signup' }}\n                        backgroundImage=\"/path/to/bg.jpg\"\n                        flipWords={['Innovation', 'Growth', 'Collaboration']}\n                        termsLink=\"/terms\"\n                        privacyLink=\"/privacy\"\n                        />\n                    );\n                    }",
                                        ),
                                    ),
                                    signup_page_stories_jsx(
                                        typography.d,
                                        null,
                                        'Variants',
                                    ),
                                    signup_page_stories_jsx(
                                        typography.C0,
                                        null,
                                        'This component supports different configurations based on specific scenarios such as successful signups or error handling.',
                                    ),
                                    signup_page_stories_jsx(
                                        'ul',
                                        {
                                            className:
                                                'list-disc ml-6 space-y-2',
                                        },
                                        signup_page_stories_jsx(
                                            'li',
                                            null,
                                            signup_page_stories_jsx(
                                                typography.C0,
                                                null,
                                                signup_page_stories_jsx(
                                                    info.Z,
                                                    {
                                                        className:
                                                            'inline w-5 h-5 text-primary mr-2',
                                                    },
                                                ),
                                                signup_page_stories_jsx(
                                                    'strong',
                                                    null,
                                                    'Standard',
                                                ),
                                                ': Default signup layout.',
                                            ),
                                        ),
                                        signup_page_stories_jsx(
                                            'li',
                                            null,
                                            signup_page_stories_jsx(
                                                typography.C0,
                                                null,
                                                signup_page_stories_jsx(
                                                    check_circle.Z,
                                                    {
                                                        className:
                                                            'inline w-5 h-5 text-success mr-2',
                                                    },
                                                ),
                                                signup_page_stories_jsx(
                                                    'strong',
                                                    null,
                                                    'Success',
                                                ),
                                                ': Shows a confirmation on successful signup.',
                                            ),
                                        ),
                                        signup_page_stories_jsx(
                                            'li',
                                            null,
                                            signup_page_stories_jsx(
                                                typography.C0,
                                                null,
                                                signup_page_stories_jsx(
                                                    x_circle.Z,
                                                    {
                                                        className:
                                                            'inline w-5 h-5 text-danger mr-2',
                                                    },
                                                ),
                                                signup_page_stories_jsx(
                                                    'strong',
                                                    null,
                                                    'Error',
                                                ),
                                                ': Indicates an error if signup fails.',
                                            ),
                                        ),
                                        signup_page_stories_jsx(
                                            'li',
                                            null,
                                            signup_page_stories_jsx(
                                                typography.C0,
                                                null,
                                                signup_page_stories_jsx(
                                                    alert_circle.Z,
                                                    {
                                                        className:
                                                            'inline w-5 h-5 text-warning mr-2',
                                                    },
                                                ),
                                                signup_page_stories_jsx(
                                                    'strong',
                                                    null,
                                                    'Warning',
                                                ),
                                                ': Warns the user for invalid inputs.',
                                            ),
                                        ),
                                        signup_page_stories_jsx(
                                            'li',
                                            null,
                                            signup_page_stories_jsx(
                                                typography.C0,
                                                null,
                                                signup_page_stories_jsx(
                                                    star.Z,
                                                    {
                                                        className:
                                                            'inline w-5 h-5 text-custom mr-2',
                                                    },
                                                ),
                                                signup_page_stories_jsx(
                                                    'strong',
                                                    null,
                                                    'Custom',
                                                ),
                                                ': Allows further customization for specific use cases.',
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        },
                    }
                ;(Default.parameters = _objectSpread(
                    _objectSpread({}, Default.parameters),
                    {},
                    {
                        docs: _objectSpread(
                            _objectSpread(
                                {},
                                null ===
                                    (_Default$parameters =
                                        Default.parameters) ||
                                    void 0 === _Default$parameters
                                    ? void 0
                                    : _Default$parameters.docs,
                            ),
                            {},
                            {
                                source: _objectSpread(
                                    { originalSource: '{\n  args: {}\n}' },
                                    null ===
                                        (_Default$parameters2 =
                                            Default.parameters) ||
                                        void 0 === _Default$parameters2 ||
                                        null ===
                                            (_Default$parameters2 =
                                                _Default$parameters2.docs) ||
                                        void 0 === _Default$parameters2
                                        ? void 0
                                        : _Default$parameters2.source,
                                ),
                            },
                        ),
                    },
                )),
                    (Docs.parameters = _objectSpread(
                        _objectSpread({}, Docs.parameters),
                        {},
                        {
                            docs: _objectSpread(
                                _objectSpread(
                                    {},
                                    null ===
                                        (_Docs$parameters = Docs.parameters) ||
                                        void 0 === _Docs$parameters
                                        ? void 0
                                        : _Docs$parameters.docs,
                                ),
                                {},
                                {
                                    source: _objectSpread(
                                        {
                                            originalSource:
                                                "{\n  render: args => {\n    return <div>\n                <div className=\"p-8 space-y-4 bg-background\">\n                    <TypographyH1>\n                        SignupPage Component Documentation\n                    </TypographyH1>\n                    <TypographyP>\n                        The <code>SignupPage</code> component provides a\n                        multi-step form for new user registration. This form\n                        supports customization for different configuration\n                        options, steps, and validation schemas.\n                    </TypographyP>\n\n                    <TypographyH2>Props</TypographyH2>\n                    <ul className=\"list-disc ml-6 space-y-2\">\n                        <li>\n                            <TypographyP>\n                                <strong>steps</strong> (array) - Array of form\n                                steps, each containing fields and descriptions\n                                for the multi-step form.\n                            </TypographyP>\n                        </li>\n                        <li>\n                            <TypographyP>\n                                <strong>schema</strong> (ZodSchema) - Validation\n                                schema for each step’s fields, created with Zod.\n                            </TypographyP>\n                        </li>\n                        <li>\n                            <TypographyP>\n                                <strong>onSubmit</strong> (function) - Callback\n                                function that handles form submission, typically\n                                receives form data as an argument.\n                            </TypographyP>\n                        </li>\n                        <li>\n                            <TypographyP>\n                                <strong>siteConfig</strong> (object) -\n                                Configuration object for site branding,\n                                containing <code>logo</code>, <code>name</code>,{' '}\n                                <code>title</code>, and <code>description</code>\n                                .\n                            </TypographyP>\n                        </li>\n                        <li>\n                            <TypographyP>\n                                <strong>backgroundImage</strong> (string) - URL\n                                for the background image used in the signup form\n                                layout.\n                            </TypographyP>\n                        </li>\n                        <li>\n                            <TypographyP>\n                                <strong>flipWords</strong> (array) - Array of\n                                words for the rotating flip animation on the\n                                left panel.\n                            </TypographyP>\n                        </li>\n                        <li>\n                            <TypographyP>\n                                <strong>metaData</strong> (object) - Metadata\n                                for SEO, including <code>title</code> and{' '}\n                                <code>description</code>.\n                            </TypographyP>\n                        </li>\n                        <li>\n                            <TypographyP>\n                                <strong>termsLink</strong> (string) - URL for\n                                the terms of service link.\n                            </TypographyP>\n                        </li>\n                        <li>\n                            <TypographyP>\n                                <strong>privacyLink</strong> (string) - URL for\n                                the privacy policy link.\n                            </TypographyP>\n                        </li>\n                    </ul>\n\n                    <TypographyH2>Example Usage</TypographyH2>\n                    <pre className=\"bg-card p-4 rounded-md text-sm\">\n                        <code>\n                            {`import SignupPage from '@/components/signup-page';\n\n                    function App() {\n                    const steps = [\n                        { title: 'Step 1', fields: [{ name: 'firstName', label: 'First Name', type: 'text' }] },\n                        { title: 'Step 2', fields: [{ name: 'lastName', label: 'Last Name', type: 'text' }] },\n                        { title: 'Step 3', fields: [{ name: 'email', label: 'Email', type: 'text' }] },\n                    ];\n\n                    const schema = z.object({\n                        firstName: z.string().nonempty(),\n                        lastName: z.string().nonempty(),\n                        email: z.string().email(),\n                    });\n\n                    const handleSubmit = (data) => console.log(data);\n\n                    return (\n                        <SignupPage\n                        steps={steps}\n                        schema={schema}\n                        onSubmit={handleSubmit}\n                        siteConfig={{ logo: '/logo.png', name: 'RealCube', title: 'Signup' }}\n                        backgroundImage=\"/path/to/bg.jpg\"\n                        flipWords={['Innovation', 'Growth', 'Collaboration']}\n                        termsLink=\"/terms\"\n                        privacyLink=\"/privacy\"\n                        />\n                    );\n                    }`}\n                        </code>\n                    </pre>\n\n                    <TypographyH2>Variants</TypographyH2>\n                    <TypographyP>\n                        This component supports different configurations based\n                        on specific scenarios such as successful signups or\n                        error handling.\n                    </TypographyP>\n                    <ul className=\"list-disc ml-6 space-y-2\">\n                        <li>\n                            <TypographyP>\n                                <Info className=\"inline w-5 h-5 text-primary mr-2\" />\n                                <strong>Standard</strong>: Default signup\n                                layout.\n                            </TypographyP>\n                        </li>\n                        <li>\n                            <TypographyP>\n                                <CheckCircle className=\"inline w-5 h-5 text-success mr-2\" />\n                                <strong>Success</strong>: Shows a confirmation\n                                on successful signup.\n                            </TypographyP>\n                        </li>\n                        <li>\n                            <TypographyP>\n                                <XCircle className=\"inline w-5 h-5 text-danger mr-2\" />\n                                <strong>Error</strong>: Indicates an error if\n                                signup fails.\n                            </TypographyP>\n                        </li>\n                        <li>\n                            <TypographyP>\n                                <AlertCircle className=\"inline w-5 h-5 text-warning mr-2\" />\n                                <strong>Warning</strong>: Warns the user for\n                                invalid inputs.\n                            </TypographyP>\n                        </li>\n                        <li>\n                            <TypographyP>\n                                <Star className=\"inline w-5 h-5 text-custom mr-2\" />\n                                <strong>Custom</strong>: Allows further\n                                customization for specific use cases.\n                            </TypographyP>\n                        </li>\n                    </ul>\n                </div>\n            </div>;\n  }\n}",
                                        },
                                        null ===
                                            (_Docs$parameters2 =
                                                Docs.parameters) ||
                                            void 0 === _Docs$parameters2 ||
                                            null ===
                                                (_Docs$parameters2 =
                                                    _Docs$parameters2.docs) ||
                                            void 0 === _Docs$parameters2
                                            ? void 0
                                            : _Docs$parameters2.source,
                                    ),
                                },
                            ),
                        },
                    ))
                const __namedExportsOrder = ['Default', 'Docs']
            },
        './src/components/ui/flip-words.tsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            'use strict'
            __webpack_require__.d(__webpack_exports__, { y: () => FlipWords })
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/next/dist/compiled/react/index.js',
                ),
                framer_motion__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        './node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs',
                    ),
                framer_motion__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs',
                    ),
                _lib_utils__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__('./src/lib/utils.ts'),
                __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
                FlipWords = function FlipWords(_ref) {
                    var words = _ref.words,
                        _ref$duration = _ref.duration,
                        duration =
                            void 0 === _ref$duration ? 3e3 : _ref$duration,
                        className = _ref.className,
                        _useState = (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.useState)(words[0]),
                        currentWord = _useState[0],
                        setCurrentWord = _useState[1],
                        _useState2 = (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
                        isAnimating = _useState2[0],
                        setIsAnimating = _useState2[1],
                        startAnimation = (0,
                        react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
                            function () {
                                var word =
                                    words[words.indexOf(currentWord) + 1] ||
                                    words[0]
                                setCurrentWord(word), setIsAnimating(!0)
                            },
                            [currentWord, words],
                        )
                    return (
                        (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
                            function () {
                                isAnimating ||
                                    setTimeout(function () {
                                        startAnimation()
                                    }, duration)
                            },
                            [isAnimating, duration, startAnimation],
                        ),
                        __jsx(
                            framer_motion__WEBPACK_IMPORTED_MODULE_1__.M,
                            {
                                onExitComplete: function onExitComplete() {
                                    setIsAnimating(!1)
                                },
                            },
                            __jsx(
                                framer_motion__WEBPACK_IMPORTED_MODULE_2__.E
                                    .div,
                                {
                                    initial: { opacity: 0, y: 10 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: {
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 10,
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -40,
                                        x: 40,
                                        filter: 'blur(8px)',
                                        scale: 2,
                                        position: 'absolute',
                                    },
                                    className: (0,
                                    _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                                        'z-10 inline-block relative text-left text-primary dark:text-primary px-2',
                                        className,
                                    ),
                                    key: currentWord,
                                },
                                currentWord
                                    .split(' ')
                                    .map(function (word, wordIndex) {
                                        return __jsx(
                                            framer_motion__WEBPACK_IMPORTED_MODULE_2__
                                                .E.span,
                                            {
                                                key: word + wordIndex,
                                                initial: {
                                                    opacity: 0,
                                                    y: 10,
                                                    filter: 'blur(8px)',
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0,
                                                    filter: 'blur(0px)',
                                                },
                                                transition: {
                                                    delay: 0.3 * wordIndex,
                                                    duration: 0.3,
                                                },
                                                className:
                                                    'inline-block whitespace-nowrap',
                                            },
                                            word
                                                .split('')
                                                .map(
                                                    function (
                                                        letter,
                                                        letterIndex,
                                                    ) {
                                                        return __jsx(
                                                            framer_motion__WEBPACK_IMPORTED_MODULE_2__
                                                                .E.span,
                                                            {
                                                                key:
                                                                    word +
                                                                    letterIndex,
                                                                initial: {
                                                                    opacity: 0,
                                                                    y: 10,
                                                                    filter: 'blur(8px)',
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    y: 0,
                                                                    filter: 'blur(0px)',
                                                                },
                                                                transition: {
                                                                    delay:
                                                                        0.3 *
                                                                            wordIndex +
                                                                        0.05 *
                                                                            letterIndex,
                                                                    duration: 0.2,
                                                                },
                                                                className:
                                                                    'inline-block',
                                                            },
                                                            letter,
                                                        )
                                                    },
                                                ),
                                            __jsx(
                                                'span',
                                                { className: 'inline-block' },
                                                ' ',
                                            ),
                                        )
                                    }),
                            ),
                        )
                    )
                }
            FlipWords.displayName = 'FlipWords'
            try {
                ;(FlipWords.displayName = 'FlipWords'),
                    (FlipWords.__docgenInfo = {
                        description: '',
                        displayName: 'FlipWords',
                        props: {
                            words: {
                                defaultValue: null,
                                description: '',
                                name: 'words',
                                required: !0,
                                type: { name: 'string[]' },
                            },
                            duration: {
                                defaultValue: { value: '3000' },
                                description: '',
                                name: 'duration',
                                required: !1,
                                type: { name: 'number' },
                            },
                            className: {
                                defaultValue: null,
                                description: '',
                                name: 'className',
                                required: !1,
                                type: { name: 'string' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES[
                            'src/components/ui/flip-words.tsx#FlipWords'
                        ] = {
                            docgenInfo: FlipWords.__docgenInfo,
                            name: 'FlipWords',
                            path: 'src/components/ui/flip-words.tsx#FlipWords',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './node_modules/lucide-react/dist/esm/icons/check-circle.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            'use strict'
            __webpack_require__.d(__webpack_exports__, { Z: () => CheckCircle })
            const CheckCircle = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('CheckCircle', [
                [
                    'path',
                    { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14', key: 'g774vq' },
                ],
                ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/info.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            'use strict'
            __webpack_require__.d(__webpack_exports__, { Z: () => Info })
            const Info = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Info', [
                ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
                ['path', { d: 'M12 16v-4', key: '1dtifu' }],
                ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/star.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            'use strict'
            __webpack_require__.d(__webpack_exports__, { Z: () => Star })
            const Star = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('Star', [
                [
                    'polygon',
                    {
                        points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2',
                        key: '8f66p6',
                    },
                ],
            ])
        },
        './node_modules/lucide-react/dist/esm/icons/x-circle.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__,
        ) => {
            'use strict'
            __webpack_require__.d(__webpack_exports__, { Z: () => XCircle })
            const XCircle = (0,
            __webpack_require__(
                './node_modules/lucide-react/dist/esm/createLucideIcon.js',
            ).Z)('XCircle', [
                ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
                ['path', { d: 'm15 9-6 6', key: '1uzhvr' }],
                ['path', { d: 'm9 9 6 6', key: 'z0biqf' }],
            ])
        },
        './node_modules/next/head.js': (
            module,
            __unused_webpack_exports,
            __webpack_require__,
        ) => {
            module.exports = __webpack_require__(
                './node_modules/next/dist/shared/lib/head.js',
            )
        },
    },
])
