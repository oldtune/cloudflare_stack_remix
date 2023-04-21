import { LinksFunction } from "@remix-run/server-runtime";
import { PropsWithChildren } from "react";
import styles from "./tooltip.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: styles }];
};

export type TooltipProps = {
    title: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
};
export default function Tooltip(props: PropsWithChildren<TooltipProps>) {
    return <div className="tooltip">{props.children}
        <span className="tooltiptext">{props.title}</span>
    </div>
}