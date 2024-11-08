/// <reference types="react" />
type Card = {
    id: number
    name: string
    designation: string
    content: React.ReactNode
}
export declare const CardStack: ({
    items,
    offset,
    scaleFactor,
}: {
    items: Card[]
    offset?: number | undefined
    scaleFactor?: number | undefined
}) => import('react/jsx-runtime').JSX.Element
export {}
