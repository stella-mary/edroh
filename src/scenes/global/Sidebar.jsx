import { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import "react-pro-sidebar/dist/css/styles.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatIcon from '@mui/icons-material/Chat';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TableChartIcon from '@mui/icons-material/TableChart';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem active={selected === title} style={{ color: colors.grey[100] }} onClick={() => setSelected(title)} icon={icon}>
            <Typography>{title}</Typography>
            <Link to={to} />

        </MenuItem >
    )
}

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard")

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },

                "&. pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "&. pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >

            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    UKO
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>


                    {/* USER */}
                    {/* {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/user.png`}
                                    style={{ cursor: "pointer", borderRadius: "50% " }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography variant='h2' color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>Ed roh</Typography>
                                <Typography variant='h5' color={colors.greenAccent[500]}>VP Fancy Admin</Typography>
                            </Box>
                        </Box>
                    )} */}

                    {/* MENU ITEMS */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"

                            selected={selected}
                            setSelected={setSelected}
                        />
                        {/* <Typography
                            variant='h6'
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >Data</Typography> */}
                        <Item
                            title="LMS"
                            // to="/team"
                            icon={<CheckBoxOutlineBlankOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Sales 1"
                            // to="/contacts"
                            icon={<MonetizationOnOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />


                        <Item
                            title="Sales 2"
                            // to="/invoices"
                            icon={<AttachMoneyOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />


                        <Item
                            title="Hiring"
                            // to="/invoices"
                            icon={<AccessibilityNewOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />


                        <Item
                            title="Project 1"
                            // to="/invoices"
                            icon={<InventoryOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />


                        <Item
                            title="Project 2"
                            // to="/invoices"
                            icon={<InventoryOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />


                        <Item
                            title="CRM"
                            // to="/invoices"
                            icon={<QuestionMarkOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />


                        <Item
                            title="SaaS"
                            // to="/invoices"
                            icon={<LayersOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant='h6'
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >MANAGEMENT</Typography>

                        <SubMenu
                            title="Profiles"
                            // to="/form"
                            icon={<Person2OutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Profile 1</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Profile 2</MenuItem>

                        </SubMenu>

                        <SubMenu
                            title="Accounts"
                            // to="/calendar"
                            icon={<PersonAddAltOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Account 1</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Account 2</MenuItem>

                        </SubMenu>

                        <SubMenu
                            title="User & Contact"
                            // to="/faq"
                            icon={<PeopleOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Add User</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >User List 1</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >User List 2</MenuItem>


                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >User Grid 1</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >User Grid 2</MenuItem>


                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Contact List</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Contact Grid</MenuItem>
                        </SubMenu>


                        <SubMenu
                            title="Invoice"
                            // to="/faq"
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Invoice List 1</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Invoice List 2</MenuItem>


                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Invoice Details 1</MenuItem>


                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Invoice Details 2</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Create Invoice 1</MenuItem>


                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Create Invoice 2</MenuItem>

                        </SubMenu>

                        <SubMenu
                            title="Ecommerce"
                            // to="/faq"
                            icon={<ShoppingBasketOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                to="/cart"
                                icon={<FiberManualRecordIcon />}
                            >Cart</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                to="/payment"
                                icon={<FiberManualRecordIcon />}
                            >Payment</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Billing Address</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Product Details</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Shop 1</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Shop 2</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Checkout 1</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Checkout 2</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Payment Complete 1</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}>Payment Complete 2</MenuItem>
                        </SubMenu>

                        <SubMenu
                            title="Admin Ecommerce"
                            // to="/faq"
                            icon={<LocalGroceryStoreOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >


                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Product List</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Product Grid</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Create Product</MenuItem>


                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Order Management</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Product Management</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Customer Management</MenuItem>

                        </SubMenu>

                        <SubMenu
                            title="Projects"
                            // to="/faq"
                            icon={<DataUsageIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Project List 1</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Project List 2</MenuItem>


                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Project List 3</MenuItem>


                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Team Member</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Prject Details</MenuItem>

                        </SubMenu>

                        <Item
                            title="Data Table"
                            // to="/faq"
                            icon={<TableChartIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />


                        <Typography
                            variant='h6'
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >APPS</Typography>


                        <Typography
                            variant='h6'
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        ></Typography>

                        <Item
                            title="Todo List"
                            // to="/bar"
                            icon={<ListAltIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Calendar"
                            // to="/pie"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <SubMenu
                            title="Chats"
                            // to="/line"
                            icon={<ChatIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Chat 1</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Chat 2</MenuItem>


                        </SubMenu>

                        <SubMenu
                            title="Sessions"
                            // to="/geography"
                            icon={<LogoutIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >


                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Sign In</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Register</MenuItem>


                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Forget Password</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Two Step Vertification</MenuItem>

                        </SubMenu>


                        <SubMenu
                            title="Pages"
                            // to="/geography"
                            icon={<MenuBookIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Pricing</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >About</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Contact</MenuItem>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon />}
                            >Privacy</MenuItem>

                        </SubMenu>


                        <Item
                            title="Documentation"
                            // to="/geography"
                            icon={<FileCopyOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box >
    );
}

export default Sidebar 