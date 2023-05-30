import {
  AccountBalanceOutlined,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import "./widget.scss";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "View all users",
        icon: (
          <PersonOutline
            className="icon"
            sx={{
              color: "darkred",
            }}
          />
        ),
        value: 967,
        percentDiff:290,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlined
            className="icon"
            sx={{
              color: "darkgoldenrod",
            }}
          />
        ),
        value: 394,
        percentDiff:36,
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlined className="icon" style={{ color: "green" }} />
        ),
        value: 781,
        percentDiff: 72,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceOutlined
            className="icon"
            style={{ color: "purple" }}
          />
        ),
        value: 707,
        percentDiff: 40,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {data.value} </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {data.percentDiff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
