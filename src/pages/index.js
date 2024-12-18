import Image from "next/image";

import SideNavebar from "../../components/sideNavbar";
import Dashboard from "./dashboard/dashborad";

export default function Home() {
  return (
    <>
      <main className="dash-board h-screen">
        <div className="flex flex-row h-screen ">
          <SideNavebar />
          <Dashboard/>
        </div>
      </main>
    </>
  );
}
