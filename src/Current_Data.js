export const userColumns = [
  { field: "date", headerName: "ID", width: 70 },
  {
    field: "date",
    headerName: "ID",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          
          {params.row.date}
        </div>
      );
    },
  },
  {
    field: "Value",
    headerName: "Value Obtained",
    width: 230,
  },
  {
    field: "Unit",
    headerName: "Units",
    width: 230,
  },
];

//temporary data
export const userRows = [
  {
    date: "15/05/2022",
    ID: 1,
    Value: 5.5,
    Unit: "A",
  },
  
   {
    date: "15/05/2022",
    ID: 1,
    Value: 5.5,
    Unit: "A",
  },

   {
    date: "15/05/2022",
    ID: 1,
    Value: 5.5,
    Unit: "A",
  },
  
];
