import React from 'react';
import { Link } from 'react-router-dom'; 
import './UploadCV.css'; 
import LogoJ from '../assets/Logo.png'; 
import { HelmetProvider } from 'react-helmet-async';

function UploadCV() {
    return (
        <>
            <HelmetProvider>   
                    <title>JOBJOB - Tải CV</title>
            </HelmetProvider>

            <div className = "upload-container">
                <div className = "upload-container-logo"> 
                    <img src={LogoJ} alt="Logo JobJob" />
                </div>
            </div>
        </>
    )

}

export default UploadCV;