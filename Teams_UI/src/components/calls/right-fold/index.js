import React from 'react'
import { CallsContact } from '../../../data/calls';
import ContactCard from './contact-card';
import "./right-fold.css";
function Rightfold() {
    const contacts=CallsContact;
    return (
        <div className="rightfold">
            <div className="rightfold-heading">
                <label className="heading-label">Contacts</label>
            </div>
            <div className="rightfold-options">
                <div className="contact-search">
                    <input placeholder="Find Contact..." />
                    <div className="contact-search-icon">
                        <i class="fi-rr-search"></i>
                    </div>
                </div>
                <div className="add-button">
                    <div className="add-icon">
                        <i class="fi-rr-user-add"></i>
                    </div>
                    <label className="add-label">Add Contact</label>
                </div>
            </div>
            <div className="contact-list">
                {contacts.map((item)=>{
                    return <ContactCard item={item}></ContactCard>
                })}
            </div>
        </div>
    )
}

export default Rightfold
