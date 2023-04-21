import { LinksFunction } from "@remix-run/node";
import styles from "./profile-avatar.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: styles }];
};

export type ProfileAvatarProps = {
    size?: string;
    url: string;
};

export default function ProfileAvatar(props: ProfileAvatarProps) {
    return (
        <div className="profile-avatar-container" style={{ width: props.size ? props.size : '40px', height: props.size ? props.size : '40px' }}>
            <img className="object-cover profile-avatar border rounded-full" style={{ width: props.size ? props.size : '40px', height: props.size ? props.size : '40px' }} src={props.url} />
        </div>
    )
}