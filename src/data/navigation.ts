import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Users from "../components/userTable";
import AddUser from "../components/addUser";
import Annoucemenets from "../components/announcement";

const navigation = [
  {
    link: "/",
    desc: "Strona główna",
    Icon: DashboardIcon,
    Content: Annoucemenets
  },

  {
    link: "/users",
    desc: "Uczestnicy",
    Icon: PersonIcon,
    Content: Users
  },

  {
    link: "/addUser",
    desc: "Nowy uczestnik",
    Icon: PersonAddIcon,
    Content: AddUser
  }
];

export default navigation;
