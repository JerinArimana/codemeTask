import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const Delivery = () => {
  return (
    <>
      <div className="delivery p-4">
        <div className="vehicle_info grid grid-cols-3 gap-4">
          <div className="opening_card flex items-center justify-center bg-[#f6f6f6] border-solid">
            <ul className="pb-0">
              <li className="flex gap-3">
                <p>Opening balance:</p>
                <span>300.0 Db</span>
              </li>
              <li className="flex gap-3">
                <p>Opening balance:</p>
                <span>300.0 Db</span>
              </li>
            </ul>
          </div>
          <div className="vehicleNo">
            <div className="flex gap-3 justify-between">
              <p>Vehicle No </p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicInput">
                  <Form.Control
                    type="email"
                    placeholder=""
                    value="KL 87 M <<<<"
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="flex gap-3 justify-between">
              <p>Driver </p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicInput">
                  <Form.Control type="email" placeholder="" value="Name" />
                </Form.Group>
              </Form>
            </div>
          </div>
          <div className="address_card bg-[#3d0068]  text-[#ffffff]">
            <h5 className="p-3 text-[14px] order-b-3 border-[#ffffff]">
              Address
            </h5>
            <p className=" text-[14px] px-3 py-4">
              RK shope Nedumunda, Kottayam Anaprara. Kerala 625 898
            </p>
          </div>
        </div>

        <div className="sale_table mt-2">
          <Tabs
            defaultActiveKey="sale"
            id="uncontrolled-tab-example"
            className="mb-1 gap-1 "
          >
            <Tab eventKey="sale" title="Sale">
              <>
                <Table  hover>
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Quty</th>
                      <th>Unit</th>
                      <th>Rate</th>
                      <th>Disc%</th>
                      <th>Disc</th>
                      <th>value</th>
                      <th>Tax</th>
                      <th>Description</th>
                      <th>CGST/IGST</th>
                      <th>SGST</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Item Number 1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Item Number 1</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td> <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Item Number 1</td>
                      <td>Larry the Bird</td>
                      <td>@twitter</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </Table>
              </>
            </Tab>
            <Tab eventKey="s-return" title="s.Return">
              Tab content for Profile
            </Tab>
            <Tab eventKey="other" title="Other">
              <></>
            </Tab>
            <Tab eventKey="edit" title="Edit">
              Tab content for Contact
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Delivery;
