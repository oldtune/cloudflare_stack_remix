import { Outlet } from "@remix-run/react";
import styles from "~/styles/shared.css";

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
    ];
}

export default function Index() {
    return (
        <div className="page-container flex grow flex-col h-full bg-stone-200">
            <div className="navbar-container">
                {/* <Navbar /> */}
            </div>
            <div className="page-content flex grow">
                <Outlet />
            </div>
        </div>
    );
}
