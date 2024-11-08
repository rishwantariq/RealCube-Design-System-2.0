import { Playlist } from '../data/playlists'
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    playlists: Playlist[]
}
export declare function Sidebar({
    className,
    playlists,
}: SidebarProps): import('react/jsx-runtime').JSX.Element
export {}
