import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export const menuItems = [
  {
    label: "Productos",
    icon: <InboxIcon />,
    subItems: [{ label: "Carnes" }, { label: "Subitem 2" }],
  },
  {
    label: "Starred",
    icon: <InboxIcon />,
    subItems: [],
  },
  {
    label: "Send email",
    icon: <MailIcon />,
    subItems: [],
  },
  {
    label: "Drafts",
    icon: <MailIcon />,
    subItems: [],
  },
  {
    label: "Other",
    icon: <MailIcon />,
    subItems: [],
  },
];
