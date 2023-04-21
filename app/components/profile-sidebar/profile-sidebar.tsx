import React from "react";
import styles from "~/styles/ProfileSideBar.css";
import ProfileAvatar from "../profile-avatar/profile-avatar";
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export const ProfileSideBar: React.FC = () => {
  return (
    <div
      className={`profile-side-bar flex flex-1 flex-col flex-wrap ${"sticky top-0"}`}
    >
      <div className="profile-avatar-container flex pt-2 px-2">
        <ProfileAvatar url="/buffin.jpg" size={'100px'} />
      </div>
      <div className="personal-info font-mono px-2 justify-center">
        <div>
          <b>Name: </b> Do Tran
        </div>
        <div>
          <b>Email: </b>quackablequackquack@gmail.com
        </div>
        <div>
          <b>Year of birth: </b> 1998
        </div>
        <div>
          <b>Gender: </b> Male
        </div>
        <div>
          <b>Location: </b> Ho Chi Minh, Viet Nam
        </div>
        <div>
          <b>Position: </b>Developer
        </div>
        <div className="break-words">
          <b>Introduction: </b> I can code Back-End, Front-End and help you to debug your code. If you want to hire me, drop me an email.
        </div>
        <hr className='py-1' />
        {/* <div >
          <Tooltip title="https://github.com/oldtune" className='mr-1 cursor-pointer inline-block font-serif' placement='top'>
            <GitHub sx={{ height: '40px', width: '40px' }} />
          </Tooltip>
          <Tooltip title="https://dev.to/quackquack" className='mx-1 cursor-pointer inline-block font-serif' placement='top'>
            <img src="/dev.png" className='w-10' alt='dev.to icon' />
          </Tooltip>
          <Tooltip title="https://medium.com/quackablequackquack" className='mx-1 cursor-pointer inline-block font-serif' placement='top'>
            <img src="/medium.png" className='w-10' alt="medium.com" />
          </Tooltip>
        </div> */}
      </div>
    </div>
  );
};
