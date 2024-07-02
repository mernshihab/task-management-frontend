import React, { Fragment } from "react";
import MasterLayout from "../components/masterLayout/MasterLayout";
import Profile from "../components/Profile/Profile";

const ProfilePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Profile />
      </MasterLayout>
    </Fragment>
  );
};

export default ProfilePage;
