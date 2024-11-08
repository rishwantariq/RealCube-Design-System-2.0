type LoadingState = {
    text: string
}
export declare const MultiStepLoader: ({
    loadingStates,
    loading,
    duration,
    loop,
}: {
    loadingStates: LoadingState[]
    loading?: boolean | undefined
    duration?: number | undefined
    loop?: boolean | undefined
}) => import('react/jsx-runtime').JSX.Element
export {}
