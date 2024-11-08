import { type VariantProps } from 'class-variance-authority'
import * as React from 'react'
export declare const alertVariants: (
    props?:
        | ({
              variant?:
                  | 'default'
                  | 'status'
                  | 'result'
                  | 'action'
                  | 'success'
                  | 'failure'
                  | 'warning'
                  | 'info'
                  | 'tertiary'
                  | null
                  | undefined
          } & import('class-variance-authority/types').ClassProp)
        | undefined,
) => string
declare const Alert: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLDivElement> &
        VariantProps<
            (
                props?:
                    | ({
                          variant?:
                              | 'default'
                              | 'status'
                              | 'result'
                              | 'action'
                              | 'success'
                              | 'failure'
                              | 'warning'
                              | 'info'
                              | 'tertiary'
                              | null
                              | undefined
                      } & import('class-variance-authority/types').ClassProp)
                    | undefined,
            ) => string
        > &
        React.RefAttributes<HTMLDivElement>
>
declare const AlertTitle: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLHeadingElement> &
        React.RefAttributes<HTMLParagraphElement>
>
declare const AlertDescription: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLParagraphElement> &
        React.RefAttributes<HTMLParagraphElement>
>
export { Alert, AlertDescription, AlertTitle }
