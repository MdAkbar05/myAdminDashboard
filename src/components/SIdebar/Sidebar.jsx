import React from 'react'
import './sidebar.css';
import {
    LineStyle, 
    Timeline, 
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report
} from "@material-ui/icons"
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h4 className="sidebarTitle">Dashboard</h4>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyle className='sidebarIcon' />
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon' />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon' />
                        Sales
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h4 className="sidebarTitle">Quick Menu</h4>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <PermIdentity className='sidebarIcon' />
                        Users
                    </li>
                    <li className="sidebarListItem">
                        <Storefront className='sidebarIcon' />
                        Products
                    </li>
                    <li className="sidebarListItem">
                        <AttachMoney className='sidebarIcon' />
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <BarChart className='sidebarIcon' />
                        Reports
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h4 className="sidebarTitle">Notifications</h4>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <MailOutline className='sidebarIcon' />
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeed className='sidebarIcon' />
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className='sidebarIcon' />
                        Massages
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h4 className="sidebarTitle">Staff</h4>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutline className='sidebarIcon' />
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon' />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <Report className='sidebarIcon' />
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar