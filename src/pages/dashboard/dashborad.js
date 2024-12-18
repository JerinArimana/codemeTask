const { default: TopNav } = require("../../../components/topNav");
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Delivery from "./delivery";
const Dashboard = () => {
  return (
    <>
      <div className="dash-board_wrapper">
        <TopNav />
        <div className="dashboard_main ">
          <Tabs
            defaultActiveKey="delivery"
            id="uncontrolled-tab-example"
            className="mb-3 gap-2 justify-end bg-[#f6f6f6] p-4"
          >
            <Tab eventKey="printing" title="Printing Details">
              Tab content for Home
            </Tab>
            <Tab eventKey="e-payment" title="E-Payment">
              Tab content for Profile
            </Tab>
            <Tab eventKey="delivery" title="Delivery Details">
             <>
             <Delivery/>
             </>
            </Tab>
            <Tab eventKey="customer" title="customer Details">
              Tab content for Contact
            </Tab>
            <Tab eventKey="invoice" title="Invoice Details">
              Tab content for Contact
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
