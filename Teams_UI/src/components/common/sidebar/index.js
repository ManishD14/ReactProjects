import React from 'react'
import { SidebarData, SidebarMore, SidebsarBottom } from '../../../data/sidebar';
import SidebarOption from './sidebar-options';
import './sidebar.css';

function Sidebar() {
    const topOptions=SidebarData;
    const more=SidebarMore;
    const bottom=SidebsarBottom;
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <div>
                    {topOptions.map((option)=>{
                        return <SidebarOption 
                        option={option} 
                        isActive={option.name==='Calls'?true:false}>
                        </SidebarOption>
                    })}
                </div>
                <div>
                    <SidebarOption option={more}></SidebarOption>
                </div>
            </div>
            <div className="sidebar-bottom">
                {bottom.map((option)=>{
                     return <SidebarOption option={option}/>     
                })}            
            </div>
        </div>
    )
}

export default Sidebar
