import React from 'react'
import LeftFold from './left-fold'
import Rightfold from './right-fold'
import Header from '../common/Header'
import Sidebar from '../common/sidebar'
import "./calls.css";
function Calls() {
    return (
        <div className="calls-container">
            <Header></Header>
            <div className="calls-body">
                <div className="calls-sidebar">
                    <Sidebar>

                    </Sidebar>
                </div>
                <div className="calls-leftfold">
                    <LeftFold></LeftFold>
                </div>
                <div className="calls-rightfold">
                    <Rightfold>
                    </Rightfold>
                </div>
            </div>
        </div>
    )
}

export default Calls
