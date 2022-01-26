import React from 'react';
import "./sidebar-option.css";
function SidebarOption({option,isActive}) {
    const classList=isActive ?'sidebar-option active':"sidebar-option";
    return (
        <div className={classList}>
            <div className="sidebar-icon">{option.icon}</div>
            {option.name&&<lable className="sidebar-lable">{option.name}</lable>}
        </div>
    )
}

export default SidebarOption
