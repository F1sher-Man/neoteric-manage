import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const navigation = [
  {
    link: "/",
    desc: "Strona główna",
    Icon: DashboardIcon
  },

  {
    link: "/users",
    desc: "Uczestnicy",
    Icon: PersonIcon
  },

  {
    link: "/addUser",
    desc: "Nowy uczestnik",
    Icon: PersonAddIcon
  }
];

export default navigation;
