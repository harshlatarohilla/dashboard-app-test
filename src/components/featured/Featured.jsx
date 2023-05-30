import { KeyboardArrowDown, KeyboardArrowUpOutlined, MoreVertOutlined } from "@mui/icons-material";
import "./featured.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h2 className="title">Total Revenue</h2>
        <MoreVertOutlined fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$343</p>
        <p className="desc">
          orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          auctor quis dolor nec porta.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
            <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">$65.9k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
            <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">$65.9k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
            <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">$65.9k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
