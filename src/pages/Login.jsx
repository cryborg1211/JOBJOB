import React from 'react';
import './Login.css'; 
import LogoJ from './pages_assets/Logo.png';


function Login() {
  return (
    <>  
        <div className='login-container'>      
            <div className="logo-wrapper">
                <img src={LogoJ} alt="Logo J" className="logo-j" />
                <h1 className="logo-text">obJob</h1>
            </div>

            <p className="slogan">Hello Cưng!</p>

            <form className="login-form">                        {/* Login input field */}
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Mật khẩu" />
                <button type="submit">Đăng nhập</button>
            </form>

            <p className="to-signup">Chưa có tài khoản? <a href="/">Đăng ký</a></p>
        </div>
    </>
  );
}

export default Login;
