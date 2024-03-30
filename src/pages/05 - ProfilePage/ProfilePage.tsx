import { AppHeader } from "../../components/AppHeader/AppHeader";
import { AppHeading } from "../../ui/AppHeading/AppHeading";
import { UserDataDisplay } from "../../components/UserDataDisplay/UserDataDisplay";
import { AppFooter } from "../../components/AppFooter/AppFooter";
import { PropertiesFilter } from "../../components/PropertiesFilter/PropertiesFilter";
import "./ProfilePage.scss";

export const ProfilePage = () => {
  return (
    <div className="profile-page">
      <AppHeader />
      <div className="profile-page-container">
        <AppHeading headingLevel="1" headingText="Profile" />
        <UserDataDisplay />
        <PropertiesFilter/>
      </div>
      <AppFooter />
    </div>
  );
};
