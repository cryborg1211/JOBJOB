import Header from './Header.jsx';
import LogoJ from './assets/Logo.png';
import './Regist.css'; 
import { HelmetProvider } from 'react-helmet-async';

function Regist() {
  return (
    <>
      <HelmetProvider>
        <title>JOBJOB - Đăng ký</title>
      </HelmetProvider>
      
      <Header />                                                          
      
      <div className="hero">                                           
        <div className="logo-wrapper">
          <img src={LogoJ} alt="Logo J" className="logo-j" />
          <h1 className="logo-text">obJob</h1>
        </div>

        <p className="slogan">Lướt để tìm việc, Match để thành công!</p>

        <form className="signup-form">                                    
          <input type="email" placeholder="Nhập tài khoản email" />  {/*Signup input field */}
          <input type="password" placeholder="Nhập mật khẩu" />
          <input type="password" placeholder="Nhập lại mật khẩu" />
          <button type="submit">Sign Up</button>                     {/*Sign up button*/}
        </form>
      </div>
    </>
  );
}

export default Regist;
