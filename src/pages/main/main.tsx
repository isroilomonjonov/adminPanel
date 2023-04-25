import MyAppBar from "../../components/appbar";
import TableMUI from "../../components/table";
import DrawerMUI from "../../components/drawer";

const Main = () => {
  return (
    <MyAppBar>
      <div>
        <DrawerMUI />
        <TableMUI />
      </div>
    </MyAppBar>
  );
};

export default Main;
