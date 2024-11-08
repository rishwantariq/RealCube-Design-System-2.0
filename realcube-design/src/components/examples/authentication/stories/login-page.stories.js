import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import LoginPage from '../components/login-page'
import { z } from 'zod'
import {
    TypographyH1,
    TypographyP,
    TypographyH2,
} from '../../../typography/typography'
import { Info, CheckCircle, XCircle, AlertCircle, Star } from 'lucide-react'
// Define the schema for validation using Zod
var schema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    rememberMe: z.boolean(),
})
// Define the steps for the multi-step form
var steps = [
    {
        title: 'Step 1: Email',
        description: 'Enter your email address',
        fields: [
            {
                name: 'email',
                label: 'Email',
                placeholder: 'Enter your email',
                type: 'text',
            },
        ],
    },
    {
        title: 'Step 2: Password',
        description: 'Enter your password',
        fields: [
            {
                name: 'password',
                label: 'Password',
                placeholder: 'Enter your password',
                type: 'password',
            },
            {
                name: 'rememberMe',
                label: 'Remember Me',
                type: 'checkbox',
                placeholder: '',
            },
        ],
    },
]
// Define a mock onSubmit function for demonstration purposes
var onSubmit = function (data) {
    console.log('Form submitted:', data)
}
var meta = {
    title: 'Examples/login-page',
    component: LoginPage,
    args: {
        steps: steps,
        schema: schema,
        onSubmit: onSubmit,
        siteConfig: {
            logo: 'https://www.realcube.estate/assets/web/img/home-page-img/menu-logo.svg',
            name: 'My Authentication App',
            title: 'Standard Login',
            description: 'A multi-step form for user authentication',
        },
        backgroundImage: '/images/login-background.jpg',
        flipWords: ['AI Automation', 'Seamless Workflows', 'Data Intelligence'],
        metaData: {
            title: 'Authentication Page',
            description: 'A multi-step form for user authentication',
        },
        termsLink: '/terms',
        privacyLink: '/privacy',
    },
    parameters: {
        layout: 'fullscreen',
    },
}
export default meta
// Define the main story with configurable args
export var Default = {
    args: {
        // You can override default props here for specific story variations if needed
    },
}
export var Docs = {
    render: function (args) {
        return _jsx('div', {
            children: _jsxs('div', {
                className: 'p-8 space-y-4 bg-background',
                children: [
                    _jsx(TypographyH1, {
                        children: 'LoginPage Component Documentation',
                    }),
                    _jsxs(TypographyP, {
                        children: [
                            'The ',
                            _jsx('code', { children: 'LoginPage' }),
                            ' component provides a multi-step form for user authentication. It\u2019s designed with customization in mind, allowing different configurations, steps, and schema for validation.',
                        ],
                    }),
                    _jsx(TypographyH2, { children: 'Props' }),
                    _jsxs('ul', {
                        className: 'list-disc ml-6 space-y-2',
                        children: [
                            _jsx('li', {
                                children: _jsxs(TypographyP, {
                                    children: [
                                        _jsx('strong', { children: 'steps' }),
                                        ' (array) - Array of form steps, each containing fields and descriptions for the multi-step form.',
                                    ],
                                }),
                            }),
                            _jsx('li', {
                                children: _jsxs(TypographyP, {
                                    children: [
                                        _jsx('strong', { children: 'schema' }),
                                        ' (ZodSchema) - Validation schema for each step\u2019s fields, created with Zod.',
                                    ],
                                }),
                            }),
                            _jsx('li', {
                                children: _jsxs(TypographyP, {
                                    children: [
                                        _jsx('strong', {
                                            children: 'onSubmit',
                                        }),
                                        ' (function) - Callback function that handles form submission, typically receives form data as an argument.',
                                    ],
                                }),
                            }),
                            _jsx('li', {
                                children: _jsxs(TypographyP, {
                                    children: [
                                        _jsx('strong', {
                                            children: 'siteConfig',
                                        }),
                                        ' (object) - Configuration object for site branding, containing ',
                                        _jsx('code', { children: 'logo' }),
                                        ', ',
                                        _jsx('code', { children: 'name' }),
                                        ',',
                                        ' ',
                                        _jsx('code', { children: 'title' }),
                                        ', and ',
                                        _jsx('code', {
                                            children: 'description',
                                        }),
                                        '.',
                                    ],
                                }),
                            }),
                            _jsx('li', {
                                children: _jsxs(TypographyP, {
                                    children: [
                                        _jsx('strong', {
                                            children: 'backgroundImage',
                                        }),
                                        ' (string) - URL for the background image to be used in the login form layout.',
                                    ],
                                }),
                            }),
                            _jsx('li', {
                                children: _jsxs(TypographyP, {
                                    children: [
                                        _jsx('strong', {
                                            children: 'flipWords',
                                        }),
                                        ' (array) - Array of words to be displayed in the flip animation on the left panel of the layout.',
                                    ],
                                }),
                            }),
                            _jsx('li', {
                                children: _jsxs(TypographyP, {
                                    children: [
                                        _jsx('strong', {
                                            children: 'metaData',
                                        }),
                                        ' (object) - Metadata for the page, including ',
                                        _jsx('code', { children: 'title' }),
                                        ' and',
                                        ' ',
                                        _jsx('code', {
                                            children: 'description',
                                        }),
                                        ' for SEO purposes.',
                                    ],
                                }),
                            }),
                            _jsx('li', {
                                children: _jsxs(TypographyP, {
                                    children: [
                                        _jsx('strong', {
                                            children: 'termsLink',
                                        }),
                                        ' (string) - URL for the terms of service link.',
                                    ],
                                }),
                            }),
                            _jsx('li', {
                                children: _jsxs(TypographyP, {
                                    children: [
                                        _jsx('strong', {
                                            children: 'privacyLink',
                                        }),
                                        ' (string) - URL for the privacy policy link.',
                                    ],
                                }),
                            }),
                        ],
                    }),
                    _jsx(TypographyH2, { children: 'Example Usage' }),
                    _jsx('pre', {
                        className: 'bg-card p-4 rounded-md text-sm',
                        children: _jsx('code', {
                            children:
                                "import LoginPage from '@/components/authentication-page';\n\n                    function App() {\n                      const steps = [\n                        { title: 'Step 1', fields: [{ name: 'email', label: 'Email', type: 'text' }] },\n                        { title: 'Step 2', fields: [{ name: 'password', label: 'Password', type: 'password' }] },\n                      ];\n\n                      const schema = z.object({\n                        email: z.string().email(),\n                        password: z.string().min(6),\n                      });\n\n                      const handleSubmit = (data) => console.log(data);\n\n                      return (\n                        <LoginPage\n                          steps={steps}\n                          schema={schema}\n                          onSubmit={handleSubmit}\n                          siteConfig={{ logo: '/logo.png', name: 'RealCube', title: 'Login' }}\n                          backgroundImage=\"/path/to/bg.jpg\"\n                          flipWords={['Automation', 'Efficiency', 'Simplicity']}\n                          termsLink=\"/terms\"\n                          privacyLink=\"/privacy\"\n                        />\n                      );\n                    }",
                        }),
                    }),
                    _jsx(TypographyH2, { children: 'Variants' }),
                    _jsx(TypographyP, {
                        children:
                            'The component can be styled with different background images or icon configurations based on specific use cases (e.g., success, error, custom).',
                    }),
                    _jsxs('ul', {
                        className: 'list-disc ml-6 space-y-2',
                        children: [
                            _jsx('li', {
                                children: _jsxs(TypographyP, {
                                    children: [
                                        _jsx(Info, {
                                            className:
                                                'inline w-5 h-5 text-primary mr-2',
                                        }),
                                        _jsx('strong', {
                                            children: 'Standard',
                                        }),
                                        ': Default configuration with a standard background.',
                                    ],
                                }),
                            }),
                            _jsx('li', {
                                children: _jsxs(TypographyP, {
                                    children: [
                                        _jsx(CheckCircle, {
                                            className:
                                                'inline w-5 h-5 text-success mr-2',
                                        }),
                                        _jsx('strong', { children: 'Success' }),
                                        ': Indicates a successful operation.',
                                    ],
                                }),
                            }),
                            _jsx('li', {
                                children: _jsxs(TypographyP, {
                                    children: [
                                        _jsx(XCircle, {
                                            className:
                                                'inline w-5 h-5 text-danger mr-2',
                                        }),
                                        _jsx('strong', { children: 'Error' }),
                                        ': Shows an error background, typically for failed login attempts.',
                                    ],
                                }),
                            }),
                            _jsx('li', {
                                children: _jsxs(TypographyP, {
                                    children: [
                                        _jsx(AlertCircle, {
                                            className:
                                                'inline w-5 h-5 text-warning mr-2',
                                        }),
                                        _jsx('strong', { children: 'Warning' }),
                                        ': Indicates a warning state.',
                                    ],
                                }),
                            }),
                            _jsx('li', {
                                children: _jsxs(TypographyP, {
                                    children: [
                                        _jsx(Star, {
                                            className:
                                                'inline w-5 h-5 text-custom mr-2',
                                        }),
                                        _jsx('strong', { children: 'Custom' }),
                                        ': Allows further customization for specific contexts.',
                                    ],
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        })
    },
}
