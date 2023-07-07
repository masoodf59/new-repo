import { UilEstate, UilClipboardAlt, UilUsersAlt, UilPackage, UilChart, UilSignOutAlt,UilMoneyWithdrawal,UilUsdSquare } from "@iconscout/react-unicons";


//////////////Sidebar Data/////////////

 const SidebarData = [
    {
        icon: UilEstate,
        title: "Dashboard",
        route: "/",

    },
    {
        icon: UilClipboardAlt,
        title: "Orders",
        route: "/order",

    },
    {
        icon: UilUsersAlt,
        title: "Cutomers",
        route: "/cutomer",

    },
    {
        icon: UilPackage,
        title: "Product",
        route: "/products",

    },
    {
        icon: UilChart,
        title: "Analytics",
        route: "/analytics",

    },
    {
        icon: UilSignOutAlt,
        title: "Logout",
        route: "/logout",

    },
];

export default SidebarData;




