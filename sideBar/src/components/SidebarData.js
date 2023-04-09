import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import WalletIcon from "@mui/icons-material/Wallet";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SettingsIcon from "@mui/icons-material/Settings";

export const SidebarData = [
  {
    title: "ホーム",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "メール",
    icon: <EmailIcon />,
    link: "/mail",
  },
  {
    title: "アナリティクス",
    icon: <AssessmentIcon />,
    link: "/analitics",
  },
  {
    title: "友達追加",
    icon: <GroupAddIcon />,
    link: "/addFrieds",
  },
  {
    title: "お支払い設定",
    icon: <WalletIcon />,
    link: "/pay",
  },
  {
    title: "アップロード",
    icon: <CloudUploadIcon />,
    link: "/uppLoad",
  },
  {
    title: "詳細設定",
    icon: <SettingsIcon />,
    link: "/setting",
  },
];

export default SidebarData;
