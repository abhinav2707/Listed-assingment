import React, { useState } from "react";
import "./dashboard.css";
import { FaListUl } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { AiFillCamera } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        label: ["Week1"],
      },
    },
    series: [
      {
        name: "Guest",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "Users",
        data: [20, 30, 50, 40, 39, 55, 90, 70],
      },
    ],
  });
  return (
    <>
      <div className="main_dashboard">
        <div className="left">
          <h1 className="heading">Board.</h1>
          <div className="divcontent">
            <FaListUl />
            <h6 className="divcontent1">Dashboard</h6>
          </div>
          <div className="divcontent">
            <FaTags />
            <h6 className="divcontent1">Transaction</h6>
          </div>
          <div className="divcontent">
            <FaCalendarAlt />
            <h6 className="divcontent1">Schduele</h6>
          </div>
          <div className="divcontent">
            <FaUserAlt />
            <h6 className="divcontent1">Users</h6>
          </div>
          <div className="divcontent">
            <FaCog />
            <h6 className="divcontent1">Settings</h6>
          </div>
        </div>
        <div className="top1">
          <div className="top">
            <div className="right">
              <h1 className="heading1">DashBoard</h1>
            </div>
            <div className="dashboard_rightcorner">
              <div>
                <input className="search" placeholder="search..."></input>
              </div>
              <div>
                <FaBell className="fabell" />
              </div>
              <div>
                <FaUserAlt className="fauseralt" />
              </div>
            </div>
          </div>
          <div className="stats">
            <div className="stats1">
              <AiFillCamera className="statslogo" />
              <p className="statsheading">Total Revenue</p>
              <p className="statsdata">$456,553,563</p>
            </div>
            <div className="stats2">
              <FaTags className="statslogo" />
              <p className="statsheading">Total Transaction</p>
              <p className="statsdata">1,450</p>
            </div>
            <div className="stats3">
              <AiOutlineLike className="statslogo" />
              <p className="statsheading">Total Likes</p>
              <p className="statsdata">1,234</p>
            </div>
            <div className="stats4">
              <FiUsers className="statslogo" />
              <p className="statsheading">Total User</p>
              <p className="statsdata">856</p>
            </div>
          </div>
          <div className="chart1">
            <div>
              <h3 className="activities">Activities</h3>
              <p className="date">May-June 2021</p>
            </div>
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="750px"
              height="300px"
            />
          </div>
          <div className="bottom">
            <div className="piechart">
              <Chart
                type="pie"
                width={400}
                height={400}
                series={[50, 36, 14]}
                options={{
                  labels: ["Basic Tees", "Custom Short Pant", "Super Hoodies"],
                }}
              ></Chart>
            </div>
            <div className="bottomright">
                <div className="topbottomright">
                     <h3 className="todayschduele">Today's Schduele</h3>
                     <p className="seeall">See all</p>
                </div>
                <div className="middlebottomright">
                    <div className="stick1">

                    </div>
                    <div>
                        <p className="content1">Meetings from suppliers from Kutta bali</p>
                        <p className="content2">14.00-15.00</p>
                        <p className="content3">at sunset road kutta bali</p>
                    </div>

                </div>
                <div className="downbottomright">
                    <div className="stick2">

                    </div>
                    <div>
                        <p className="content1">Meetings from suppliers from Kutta bali</p>
                        <p className="content2">14.00-15.00</p>
                        <p className="content3">at sunset road kutta bali</p>
                    </div>

                </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
