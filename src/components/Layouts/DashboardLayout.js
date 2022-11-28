import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../Pages/Dashboard/Dashboard/DashboardSidebar/DashboardSidebar';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <DashboardSidebar></DashboardSidebar>
        </div>
    );
};

export default DashboardLayout;