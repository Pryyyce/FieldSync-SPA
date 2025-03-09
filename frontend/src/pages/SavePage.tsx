import React from "react";
import SaveUserDisplay from "../views/SaveUserDisplay";
import './SavePage.css';
const SavePage: React.FC = () => {
   
    return (
        <div className="save-page">
        
            <h1 className="page-title">SavePage</h1>
            <SaveUserDisplay />
        </div>
    );
};
export default SavePage;