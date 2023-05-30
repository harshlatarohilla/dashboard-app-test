import React from "react";
import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://picsum.photos/id/237/200/300"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jon Snow</h1>
                <div className="itemDetail">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">snow@targaryen.com </span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">7854326782 </span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Address : </span>
                  <span className="itemValue">43 Long Street, Connecticut</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">Australia </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending(Last 6mo) " />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title"> Last Transactions</h1>
          
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
