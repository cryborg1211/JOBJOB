import React from 'react';
import './Login.css'; 
import LogoJ from './pages_assets/Logo.png';
import { Link } from 'react-router-dom'; 
import { HelmetProvider } from 'react-helmet-async';


function Login() {
  return (
    <>  
      <HelmetProvider>
        <title>JOBJOB - Đăng nhập</title>
      </HelmetProvider>
      <div className='login-container'>      
          <div className="logo-wrapper">
              <img src={LogoJ} alt="Logo J" className="logo-j" />
              <h1 className="logo-text">obJob</h1>
          </div>

          <p className="slogan">Hello Cưng!</p>

          <form className="login-form">                        {/* Login input field */}
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Mật khẩu" />
              <Link to="/select-user-type" className="login-submit-link"> 
                <button type="button">Đăng nhập</button> 
              </Link>
          </form>

          <p className="to-signup">Chưa có tài khoản? <a href="/">Đăng ký</a></p>  {/*Return to signup page*/}
      </div>
    </>
  );
}

export default Login;
