import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import SignupPage from '../components/signup-page'
import { z } from 'zod'
import {
    TypographyH1,
    TypographyP,
    TypographyH2,
} from '../../../typography/typography'
import { Info, CheckCircle, XCircle, AlertCircle, Star } from 'lucide-react'
// Define the schema for validation using Zod
var signupSchema = z.object({
    firstName: z.string().nonempty('First name is required'),
    lastName: z.string().nonempty('Last name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    companyName: z.string().nonempty('Company name is required'),
    role: z.enum(['Agent', 'Manager', 'Admin']).optional(),
    termsAccepted: z.boolean().refine(function (val) {
        return val === true
    }, 'You must accept the terms and conditions'),
})
// Define the steps for the multi-step form
var signupSteps = [
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
        description: 'Provide your company information.',
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
        description: 'Accept terms to complete registration.',
        fields: [
            {
                name: 'termsAccepted',
                label: 'I accept the terms and conditions',
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
    title: 'Examples/signup-page',
    component: SignupPage,
    args: {
        steps: signupSteps,
        schema: signupSchema,
        onSubmit: onSubmit,
        siteConfig: {
            logo: 'https://www.realcube.estate/assets/web/img/home-page-img/menu-logo.svg',
            name: 'Real Estate Workflow',
            title: 'Signup',
            description: 'Create your account to start using our platform',
        },
        backgroundImage: '/images/signup-background.jpg',
        flipWords: ['Efficiency', 'Compliance', 'Streamlined Workflows'],
        metaData: {
            title: 'Signup Page',
            description: 'A multi-step form for user account creation',
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
    args: {},
}
export var Docs = {
    render: function (args) {
        return _jsx('div', {
            children: _jsxs('div', {
                className: 'p-8 space-y-4 bg-background',
                children: [
                    _jsx(TypographyH1, {
                        children: 'SignupPage Component Documentation',
                    }),
                    _jsxs(TypographyP, {
                        children: [
                            'The ',
                            _jsx('code', { children: 'SignupPage' }),
                            ' component provides a multi-step form for new user registration. This form supports customization for different configuration options, steps, and validation schemas.',
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
                                        ' (string) - URL for the background image used in the signup form layout.',
                                    ],
                                }),
                            }),
                            _jsx('li', {
                                children: _jsxs(TypographyP, {
                                    children: [
                                        _jsx('strong', {
                                            children: 'flipWords',
                                        }),
                                        ' (array) - Array of words for the rotating flip animation on the left panel.',
                                    ],
                                }),
                            }),
                            _jsx('li', {
                                children: _jsxs(TypographyP, {
                                    children: [
                                        _jsx('strong', {
                                            children: 'metaData',
                                        }),
                                        ' (object) - Metadata for SEO, including ',
                                        _jsx('code', { children: 'title' }),
                                        ' and',
                                        ' ',
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
                                "import SignupPage from '@/components/signup-page';\n\n                    function App() {\n                    const steps = [\n                        { title: 'Step 1', fields: [{ name: 'firstName', label: 'First Name', type: 'text' }] },\n                        { title: 'Step 2', fields: [{ name: 'lastName', label: 'Last Name', type: 'text' }] },\n                        { title: 'Step 3', fields: [{ name: 'email', label: 'Email', type: 'text' }] },\n                    ];\n\n                    const schema = z.object({\n                        firstName: z.string().nonempty(),\n                        lastName: z.string().nonempty(),\n                        email: z.string().email(),\n                    });\n\n                    const handleSubmit = (data) => console.log(data);\n\n                    return (\n                        <SignupPage\n                        steps={steps}\n                        schema={schema}\n                        onSubmit={handleSubmit}\n                        siteConfig={{ logo: '/logo.png', name: 'RealCube', title: 'Signup' }}\n                        backgroundImage=\"/path/to/bg.jpg\"\n                        flipWords={['Innovation', 'Growth', 'Collaboration']}\n                        termsLink=\"/terms\"\n                        privacyLink=\"/privacy\"\n                        />\n                    );\n                    }",
                        }),
                    }),
                    _jsx(TypographyH2, { children: 'Variants' }),
                    _jsx(TypographyP, {
                        children:
                            'This component supports different configurations based on specific scenarios such as successful signups or error handling.',
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
                                        ': Default signup layout.',
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
                                        ': Shows a confirmation on successful signup.',
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
                                        ': Indicates an error if signup fails.',
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
                                        ': Warns the user for invalid inputs.',
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
                                        ': Allows further customization for specific use cases.',
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
