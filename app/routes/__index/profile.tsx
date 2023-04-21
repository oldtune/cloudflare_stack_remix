import ProfileSkillSet from "~/components/ProfileSkillSet/ProfileSkillSet";
import EmploymentHistory from "~/components/profile-employment-history/profile-employment-history";
import ProfileIntroduction from "~/components/profile-introduction/profile-introduction";
import { ProfileSideBar } from "~/components/profile-sidebar/profile-sidebar";
import ProfileShowCase from "~/components/showcase/profile-showcase";
import { links as tooltipStyles } from "~/components/tooltip/tooltip";
import styles from "~/styles/profile.css";

export function links() {
  return [{
    rel: "stylesheet",
    href: styles
  }, ...tooltipStyles()];
}

export default function Profile() {
  return (
    <div className="container mx-auto">
      <div className="flex grow h-full">
        <div className="flex flex-col basis-4/12 lift-effect bg-amber-100 px-2 pt-8">
          <ProfileSideBar />
        </div>
        <div className="profile-content flex flex-col basis-8/12 lift-effect bg-green-200 px-2 pt-8">
          <div >
            <ProfileIntroduction />
          </div>
          <div >
            <ProfileSkillSet />
          </div>
          <div >
            <EmploymentHistory />
          </div>
          <div >
            <ProfileShowCase />
          </div>
        </div>
      </div>
    </div>
  );
}