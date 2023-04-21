import { Fragment } from "react";
import ProfileAvatar from "../profile-avatar/profile-avatar";

export default function Navbar() {
  return (
    <Fragment>
      <div className="flex flex-wrap flex-column h-12">
        <div className="flex flex-wrap flex-column basis-11/12">
          <div className="flex flex-wrap uppercase basis-1/12"><ProfileAvatar url="https://i.imgur.com/UvbOO1F_d.webp?maxwidth=520&shape=thumb&fidelity=high" /></div>
          <div className="flex flex-wrap flex-column basis-11/12">
            {/* <span>Home</span>
            <span>Home</span>
            <span>Home</span> */}
          </div>
        </div>
        {/* <div className="flex flex-wrap uppercase basis-1/12">AVATAR</div> */}
      </div>
    </Fragment>
  )
}