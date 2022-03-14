import { useState } from "react";
import TabBody from "./TabBody";
import TabHeader from "./TabHeader";

export default function Tabtemp() {
  const [tab, setTab] = useState(0);

  function onTabChange(tabIndex: number) {
    setTab(tabIndex);
  }

  return (
    <div className="w-100">
      <TabHeader tab={tab} onClickHandler={onTabChange} />
      <TabBody tab={tab} />
    </div>
  );
}
