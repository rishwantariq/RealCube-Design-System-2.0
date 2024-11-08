// LoginPage.stories.tsx

import { Meta, StoryObj } from '@storybook/react'
import LoginPage from '../components/login-page'
import { z } from 'zod'
import { MultiStepForm, StepConfig } from '../../../ui/multi-step-form'
import {
    TypographyH1,
    TypographyP,
    TypographyH2,
} from '../../../typography/typography'
import { Info, CheckCircle, XCircle, AlertCircle, Star } from 'lucide-react'

// Define the schema for validation using Zod
const schema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    rememberMe: z.boolean(),
})

// Define the steps for the multi-step form
const steps: StepConfig[] = [
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
const onSubmit = (data: any) => {
    console.log('Form submitted:', data)
}

const meta: Meta<typeof LoginPage> = {
    title: 'Examples/login-page',
    component: LoginPage,
    args: {
        steps,
        schema,
        onSubmit,
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

type Story = StoryObj<typeof meta>

// Define the main story with configurable args
export const Default: Story = {
    args: {
        // You can override default props here for specific story variations if needed
    },
}

export const Docs: Story = {
    render: (args) => {
        return (
            <div>
                <div className="p-8 space-y-4 bg-background">
                    <TypographyH1>
                        LoginPage Component Documentation
                    </TypographyH1>
                    <TypographyP>
                        The <code>LoginPage</code> component provides a
                        multi-step form for user authentication. It’s designed
                        with customization in mind, allowing different
                        configurations, steps, and schema for validation.
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
                                for the background image to be used in the login
                                form layout.
                            </TypographyP>
                        </li>
                        <li>
                            <TypographyP>
                                <strong>flipWords</strong> (array) - Array of
                                words to be displayed in the flip animation on
                                the left panel of the layout.
                            </TypographyP>
                        </li>
                        <li>
                            <TypographyP>
                                <strong>metaData</strong> (object) - Metadata
                                for the page, including <code>title</code> and{' '}
                                <code>description</code> for SEO purposes.
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
                            {`import LoginPage from '@/components/authentication-page';

                    function App() {
                      const steps = [
                        { title: 'Step 1', fields: [{ name: 'email', label: 'Email', type: 'text' }] },
                        { title: 'Step 2', fields: [{ name: 'password', label: 'Password', type: 'password' }] },
                      ];

                      const schema = z.object({
                        email: z.string().email(),
                        password: z.string().min(6),
                      });

                      const handleSubmit = (data) => console.log(data);

                      return (
                        <LoginPage
                          steps={steps}
                          schema={schema}
                          onSubmit={handleSubmit}
                          siteConfig={{ logo: '/logo.png', name: 'RealCube', title: 'Login' }}
                          backgroundImage="/path/to/bg.jpg"
                          flipWords={['Automation', 'Efficiency', 'Simplicity']}
                          termsLink="/terms"
                          privacyLink="/privacy"
                        />
                      );
                    }`}
                        </code>
                    </pre>
                    <TypographyH2>Variants</TypographyH2>
                    <TypographyP>
                        The component can be styled with different background
                        images or icon configurations based on specific use
                        cases (e.g., success, error, custom).
                    </TypographyP>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>
                            <TypographyP>
                                <Info className="inline w-5 h-5 text-primary mr-2" />
                                <strong>Standard</strong>: Default configuration
                                with a standard background.
                            </TypographyP>
                        </li>
                        <li>
                            <TypographyP>
                                <CheckCircle className="inline w-5 h-5 text-success mr-2" />
                                <strong>Success</strong>: Indicates a successful
                                operation.
                            </TypographyP>
                        </li>
                        <li>
                            <TypographyP>
                                <XCircle className="inline w-5 h-5 text-danger mr-2" />
                                <strong>Error</strong>: Shows an error
                                background, typically for failed login attempts.
                            </TypographyP>
                        </li>
                        <li>
                            <TypographyP>
                                <AlertCircle className="inline w-5 h-5 text-warning mr-2" />
                                <strong>Warning</strong>: Indicates a warning
                                state.
                            </TypographyP>
                        </li>
                        <li>
                            <TypographyP>
                                <Star className="inline w-5 h-5 text-custom mr-2" />
                                <strong>Custom</strong>: Allows further
                                customization for specific contexts.
                            </TypographyP>
                        </li>
                    </ul>
                </div>
            </div>
        )
    },
}
