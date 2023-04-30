import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Dashboard = () => {
    return (
        <>
            <div>Dashboard</div>
            <ul>
                <li>
                    <NavLink exact to="/dashboard/settings" activeClassName="active">Settings</NavLink>
                </li>
                <li>
                    <Link to="/dashboard/account">Account</Link>
                </li>
            </ul>
        </>
    )
}

export default Dashboard