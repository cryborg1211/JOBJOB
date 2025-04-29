import React from 'react';
import { Link } from 'react-router-dom'; 
import './UserSelection.css'; 
import LogoJ from '../assets/Logo.png'; 
import EmployerIcon from '../assets/Employer_Icon.png';
import EmplyoyeeIcon from '../assets/Employee_Icon.png';
import { HelmetProvider } from 'react-helmet-async';

function UserSelection() {

  return (
    <>
      <HelmetProvider> 
        <title>JOBJOB - Chọn loại tài khoản</title>
      </HelmetProvider>
      
      <div className="selection-container">
        <div className="selection-logo">
          <img src={LogoJ} alt="Logo JobJob" />
      </div>


      <h2 className="selection-title">Bạn là</h2>
        <div className="selection-options">
          <div className="selection-block">
            <img src={EmployerIcon} alt="Nhà tuyển dụng" className="selection-icon" />  {/*Employer selection*/}
            <Link to="/nha-tuyen-dung" className="selection-button employer">
              Nhà tuyển dụng
            </Link>
          </div>

          <div className="selection-block">
            <img src={EmplyoyeeIcon} alt="Ứng viên" className="selection-icon" />  {/*Employee selection*/}
            <Link to="/CV-ung-vien" className="selection-button candidate">
              Ứng viên
            </Link>
          </div>
        </div>
      </div>
    </>

    
  );
}

export default UserSelection;