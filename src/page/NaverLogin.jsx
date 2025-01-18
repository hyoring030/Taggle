import React, { useState, useEffect } from 'react';

const NaverLogin = () => {
  const [user, setUser] = useState(null); 

  const initializeNaverLogin = () => {
    if (!window.naver) {
      console.error("Naver SDK is not loaded");
      return;
    }

    const naverLogin = new window.naver.LoginWithNaverId({
      callbackUrl: "http://localhost:3000/naverLogin", 
      isPopup: false,
      loginButton: { color: "green", type: 3, height: "48" }, 
    });

    naverLogin.init();
    getUser(naverLogin);
  };

  const getUser = (naverLogin) => {
    naverLogin.getLoginStatus((status) => {
      console.log(`로그인 상태: ${status}`);
      if (status) {
        const userInfo = {
          id: naverLogin.user.id,
          email: naverLogin.user.email,
          name: naverLogin.user.name,
        };
        setUser(userInfo);
        console.log("User Info:", userInfo);
      } else {
        console.log("로그인 실패 ❌");
      }
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js";
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.async = true;

    script.onload = () => {
      console.log("Naver SDK loaded");
      initializeNaverLogin();
    };

    script.onerror = () => {
      console.error("Failed to load Naver SDK");
    };

    document.body.appendChild(script);
    
  }, []);

  return (
    <div>
      <div id="naverIdLogin" />
      {user ? (
        <div>
          <h3>환영합니다 {user.name}님! 😻</h3>
          <p>이메일: {user.email}</p>
        </div>
      ) : (
        <h3>로그인 버튼을 눌러주세요. </h3>
      )}
    </div>
  );
};

export default NaverLogin;
