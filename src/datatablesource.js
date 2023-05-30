export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 130,
  },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 130,
  },
  {
    field:"status",
    headerName:"Status",
    width: 170,
    renderCell:(params)=>{
      return(
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      )
    }
  }
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://picsum.photos/200",
    status: "active",
    email: "jsnow@hoop.com",
    age: 40,
  },
  {
    id: 2,
    username: "Cersei",
    img: "https://picsum.photos/300",
    status: "passive",
    email: "sister@lannister.com",
    age: 50,
  },
  {
    id: 3,
    username: "Hodor",
    img: "https://picsum.photos/250",
    status: "pending",
    email: "doorservice@porte.in",
    age: 65,
  },
  {
    id: 4,
    username: "Daenerys",
    img: "https://picsum.photos/240",
    status: "active",
    email: "flying@drogo.in",
    age: 40,
  },
  {
    id: 5,
    username: "Arya",
    img: "https://picsum.photos/280",
    status: "pending",
    email: "nohome@dome.com",
    age: 19,
  },
  {
    id: 6,
    username: "Missandei",
    img: "https://picsum.photos/400",
    status: "passive",
    email: "3row@genie.com",
    age: 25,
  },
  {
    id: 7,
    username: "Sansa",
    img: "https://picsum.photos/150",
    status: "pending",
    email: "nohome@dome.com",
    age: 19,
  },
  {
    id: 8,
    username: "Melisandre",
    img: "https://picsum.photos/200",
    status: "active",
    email: "flying@drogo.in",
    age: 40,
  },
];
