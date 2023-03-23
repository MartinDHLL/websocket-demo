import { Table, TableHead } from "@mui/material";

const List = ({ list }) => (
  <Table>
    <TableHead>{list.title}</TableHead>
  </Table>
);

export default List;
