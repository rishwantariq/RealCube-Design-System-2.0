import { PopoverProps } from '@radix-ui/react-popover'
import { Preset } from '../data/presets'
interface PresetSelectorProps extends PopoverProps {
    presets: Preset[]
}
export declare function PresetSelector({
    presets,
    ...props
}: PresetSelectorProps): import('react/jsx-runtime').JSX.Element
export {}
