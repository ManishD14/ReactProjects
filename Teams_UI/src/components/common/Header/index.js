import React from 'react'
import "./header.css";
function Header() {
    return (
        <div className="header">
            <div className="header-menu">
                 <i class="fi-rr-layers"></i>
            </div>
            <div className="header-leftfold">
                <label className="header-lable">Microsoft Team</label>
            </div>
            <div className="header-rightfold">
                <div className="header-search">
                    <i class="fi-rr-search"></i>
                    <input placeholder="Search....."/>
                </div>
                <div className="header-profile">
                    <div className="header-options">
                        <i class="fi-rr-menu-burger"></i>
                    </div>
                    <img className="header-avatar" 
                    src="https://image.flaticon.com/icons/png/128/1177/1177568.png" 
                    alt="People Id"/>
                </div>
            </div>
        </div>
    )
}

export default Header
