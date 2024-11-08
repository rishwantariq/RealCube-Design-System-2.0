// SignupPage.stories.tsx

import { Meta, StoryObj } from '@storybook/react'
import SignupPage from '../components/signup-page'
import { z } from 'zod'
import {
    TypographyH1,
    TypographyP,
    TypographyH2,
} from '../../../typography/typography'
import { Info, CheckCircle, XCircle, AlertCircle, Star } from 'lucide-react'
import { StepConfig } from '../../../ui/multi-step-form'

// Define the schema for validation using Zod
const signupSchema = z.object({
    firstName: z.string().nonempty('First name is required'),
    lastName: z.string().nonempty('Last name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    companyName: z.string().nonempty('Company name is required'),
    role: z.enum(['Agent', 'Manager', 'Admin']).optional(),
    termsAccepted: z
        .boolean()
        .refine(
            (val) => val === true,
            'You must accept the terms and conditions',
        ),
})

// Define the steps for the multi-step form
const signupSteps: StepConfig[] = [
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
const onSubmit = (data: any) => {
    console.log('Form submitted:', data)
}

const meta: Meta<typeof SignupPage> = {
    title: 'Examples/signup-page',
    component: SignupPage,
    args: {
        steps: signupSteps,
        schema: signupSchema,
        onSubmit,
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

type Story = StoryObj<typeof meta>

// Define the main story with configurable args
export const Default: Story = {
    args: {},
}

export const Docs: Story = {
    render: (args) => {
        return (
            <div>
                <div className="p-8 space-y-4 bg-background">
                    <TypographyH1>
                        SignupPage Component Documentation
                    </TypographyH1>
                    <TypographyP>
                        The <code>SignupPage</code> component provides a
                        multi-step form for new user registration. This form
                        supports customization for different configuration
                        options, steps, and validation schemas.
                    </TypographyP>

                    <TypographyH2>Props</TypographyH2>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>
                            <TypographyP>
                                <strong>steps</strong> (array) - Array of form
                                steps, each containing fields and descriptions
                                for the multi-step form.
                            </TypographyP>
                        </li>
                        <li>
                            <TypographyP>
                                <strong>schema</strong> (ZodSchema) - Validation
                                schema for each step’s fields, created with Zod.
                            </TypographyP>
                        </li>
                        <li>
                            <TypographyP>
                                <strong>onSubmit</strong> (function) - Callback
                                function that handles form submission, typically
                                receives form data as an argument.
                            </TypographyP>
                        </li>
                        <li>
                            <TypographyP>
                                <strong>siteConfig</strong> (object) -
                                Configuration object for site branding,
                                containing <code>logo</code>, <code>name</code>,{' '}
                                <code>title</code>, and <code>description</code>
                                .
                            </TypographyP>
                        </li>
                        <li>
                            <TypographyP>
                                <strong>backgroundImage</strong> (string) - URL
                                for the background image used in the signup form
                                layout.
                            </TypographyP>
                        </li>
                        <li>
                            <TypographyP>
                                <strong>flipWords</strong> (array) - Array of
                                words for the rotating flip animation on the
                                left panel.
                            </TypographyP>
                        </li>
                        <li>
                            <TypographyP>
                                <strong>metaData</strong> (object) - Metadata
                                for SEO, including <code>title</code> and{' '}
                                <code>description</code>.
                            </TypographyP>
                        </li>
                        <li>
                            <TypographyP>
                                <strong>termsLink</strong> (string) - URL for
                                the terms of service link.
                            </TypographyP>
                        </li>
                        <li>
                            <TypographyP>
                                <strong>privacyLink</strong> (string) - URL for
                                the privacy policy link.
                            </TypographyP>
                        </li>
                    </ul>

                    <TypographyH2>Example Usage</TypographyH2>
                    <pre className="bg-card p-4 rounded-md text-sm">
                        <code>
                            {`import SignupPage from '@/components/signup-page';

                    function App() {
                    const steps = [
                        { title: 'Step 1', fields: [{ name: 'firstName', label: 'First Name', type: 'text' }] },
                        { title: 'Step 2', fields: [{ name: 'lastName', label: 'Last Name', type: 'text' }] },
                        { title: 'Step 3', fields: [{ name: 'email', label: 'Email', type: 'text' }] },
                    ];

                    const schema = z.object({
                        firstName: z.string().nonempty(),
                        lastName: z.string().nonempty(),
                        email: z.string().email(),
                    });

                    const handleSubmit = (data) => console.log(data);

                    return (
                        <SignupPage
                        steps={steps}
                        schema={schema}
                        onSubmit={handleSubmit}
                        siteConfig={{ logo: '/logo.png', name: 'RealCube', title: 'Signup' }}
                        backgroundImage="/path/to/bg.jpg"
                        flipWords={['Innovation', 'Growth', 'Collaboration']}
                        termsLink="/terms"
                        privacyLink="/privacy"
                        />
                    );
                    }`}
                        </code>
                    </pre>

                    <TypographyH2>Variants</TypographyH2>
                    <TypographyP>
                        This component supports different configurations based
                        on specific scenarios such as successful signups or
                        error handling.
                    </TypographyP>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>
                            <TypographyP>
                                <Info className="inline w-5 h-5 text-primary mr-2" />
                                <strong>Standard</strong>: Default signup
                                layout.
                            </TypographyP>
                        </li>
                        <li>
                            <TypographyP>
                                <CheckCircle className="inline w-5 h-5 text-success mr-2" />
                                <strong>Success</strong>: Shows a confirmation
                                on successful signup.
                            </TypographyP>
                        </li>
                        <li>
                            <TypographyP>
                                <XCircle className="inline w-5 h-5 text-danger mr-2" />
                                <strong>Error</strong>: Indicates an error if
                                signup fails.
                            </TypographyP>
                        </li>
                        <li>
                            <TypographyP>
                                <AlertCircle className="inline w-5 h-5 text-warning mr-2" />
                                <strong>Warning</strong>: Warns the user for
                                invalid inputs.
                            </TypographyP>
                        </li>
                        <li>
                            <TypographyP>
                                <Star className="inline w-5 h-5 text-custom mr-2" />
                                <strong>Custom</strong>: Allows further
                                customization for specific use cases.
                            </TypographyP>
                        </li>
                    </ul>
                </div>
            </div>
        )
    },
}
