import React from 'react';
import { Link } from 'react-router-dom'; 
import './UploadCV.css'; 
import LogoJ from '../assets/Logo.png'; 
import { Helmet } from 'react-helmet';


function UploadCV() {
    return (
        <div className = "upload-container">
            <div className = "upload-container-logo"> 
                <img src={LogoJ} alt="Logo JobJob" />
            </div>
        </div>
    )

}

export default UploadCV;