import { Box, NavLink, ScrollArea } from "@mantine/core";
import "./sidebar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
    {
        label: "Student", subItems:
            [
                { name: "Add Student", path: "/addstudent" },
                { name: "View Students", path: "/allstudent" }]
    },
    {
        label: "Courses", subItems: [
            { name: "Add Course", path: "/add-course" },
            { name: "View Courses", path: "/view-courses" }]
    },
    {
        label: "Subjects", subItems:
            [{ name: "Add Subject", path: "/add-subject" },
            { name: "View Subjects", path: "/view-subjects" }]
    },
    {
        label: "Batches", subItems:
            [{ name: "Add Batch", path: "/add-batch" },
            { name: "View Batches", path: "/view-batches" }]
    },
    {
        label: "Marksheet", subItems:
            [
                { name: "Generate Marksheet", path: "/generate-marksheet" },
                { name: "View Marksheets", path: "/view-marksheet" }]
    },
    {
        label: "Certificate", subItems: [
            { name: "Generate Certificate", path: "/generate-certificate" },
            { name: "View Certificates", path: "/certificate" }]
    },
];
export const Sidebar = () => {

    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (label) => {
        setOpenMenu(openMenu === label ? null : label);
    };

    return (
        <>
            <div className="sidebar">
                <div className="sidebar-header">
                    <img src="https://i.postimg.cc/SxW40T7w/Vidhyabhim-logo.jpg" alt="logo" className="logo" />
                    <span>Vidhya Bhim Institute</span>
                </div>

                <nav className="menu">
                    {menuItems.map((item) => (
                        <div key={item.label} className="menu-item">
                            <button className="menu-button" onClick={() => toggleMenu(item.label)}>
                                <span>{item.label}</span>
                                <span className={`arrow ${openMenu === item.label ? "rotate" : ""}`}>&#9662;</span>
                            </button>
                            {openMenu === item.label && (
                                <div className="submenu">
                                    {item.subItems.map((subItem) => (
                                        // <button key={subItem} className="submenu-button">
                                            <Link  key={subItem.name} to={subItem.path} className="submenu-button">
                                        {subItem.name}
                                      </Link>
                                    //   </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </>
    )
}