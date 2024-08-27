import './Signin.css';
import './Login.css';
const Signin = (props) => {
  return (
    <div className="login-container">
      <div className="content-form col-5 mx-auto">
        <form action="">
          <div className="container-form">
            <h1>Form Đăng Ký</h1>
            <p>Xin hãy nhập biểu mẫu bên dưới để đăng ký.</p>
            <hr />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              className="input-login"
              type={'email'}
              placeholder="Nhập Email"
              name="email"
              required=""
            />
            <label htmlFor="psw">
              <b>Mật Khẩu</b>
            </label>
            <input
              className="input-login"
              type={'password'}
              placeholder="Nhập Mật Khẩu"
              name="psw"
              required=""
            />
            <label htmlFor="psw-repeat">
              <b>Nhập Lại Mật Khẩu</b>
            </label>
            <input
              className="input-login"
              type="password"
              placeholder="Nhập Lại Mật Khẩu"
              name="psw-repeat"
              required=""
            />

            <div className="clearfix">
              <button type="submit" className="signupbtn">
                Đăng ký
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
