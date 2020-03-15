import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const navigation = [
  {
    link: "/",
    desc: "Strona główna",
    icon: DashboardIcon
  },

  {
    link: "/users",
    desc: "Uczestnicy",
    icon: PersonIcon
  },

  {
    link: "/addUser",
    desc: "Nowy uczestnik",
    icon: PersonAddIcon
  }
];

export default navigation;
