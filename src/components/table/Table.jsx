import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./table.scss";

const ProductList = () => {
  const rows = [
    {
      id: 2467817,
      product: "Nintendo 2",
      img: "https://picsum.photos/id/237/200/300",
      customer: "Jon Doe",
      date: "4 May",
      amount: 546,
      method: "Cash On Delivery",
      status: "Approved",
    },
    {
      id: 6041387,
      product: "Heilix 20",
      img: "https://picsum.photos/id/237/200/300",
      customer: "Kugo",
      date: "14 March",
      amount: 946,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 5201643,
      product: "Laze Road 54",
      img: "https://picsum.photos/id/237/200/300",
      customer: "Gigi",
      date: "22 June",
      amount: 909,
      method: "Cash On Delivery",
      status: "Approved",
    },
    {
      id: 9042351,
      product: "Shein 49",
      img: "https://picsum.photos/id/237/200/300",
      customer: "Harry",
      date: "10 January",
      amount: 516,
      method: "Online Payment",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Tracking ID</TableCell>
            <TableCell className="tablecell">Product</TableCell>
            <TableCell className="tablecell">Customer</TableCell>
            <TableCell className="tablecell">Date</TableCell>
            <TableCell className="tablecell">Amount</TableCell>
            <TableCell className="tablecell">Payment Method</TableCell>
            <TableCell className="tablecell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tablecell">{row.id}</TableCell>
              <TableCell className="tablecell">
                <div className="cellWrapper">
                  <img src={row.img} alt="Product" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tablecell">{row.customer}</TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
              <TableCell className="tablecell">{row.amount}</TableCell>
              <TableCell className="tablecell">{row.method}</TableCell>
              <TableCell className="tablecell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductList;
