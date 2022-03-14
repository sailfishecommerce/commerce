import React from "react";
import SignupForm from "../Form/SignupForm";
import SigninForm from "../Form/SigninForm";

import Tabpanel from "./Tabpanel";

export default function TabBody({ tab }) {
  return (
    <div className="tab-content" id="tabs-tabContentFill">
      {tab === 0 && (
        <Tabpanel id="signin">
          <SigninForm />
        </Tabpanel>
      )}
      {tab === 1 && (
        <Tabpanel id="signup">
          <SignupForm />
        </Tabpanel>
      )}
    </div>
  );
}
