import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik' ;
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './style.css';
function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
    const initialValues = {
        userName: "",
        password: ""
    }
    const validationSchema = Yup.object({
        userName : Yup.string().required("Bu alanı doldurmak zorunlu."),
        password : Yup.string().min(6, "Şifre en az 6 karakter olmalı").required("Bu alanı doldurmak zorunlu")
    })
    
   
    const onSubmit = (values) =>{
        // Demo bilgileri
        if (values.userName === "hexaops" && values.password === "admin123") {
          navigate("/dashboard"); // başka sayfaya yönlendirme
        }else{
          alert("Kullanıcı adı veya şifre yanlış")
        }
        console.log("Giriş Bilgileri : " ,values);
    
    }
    
    return (
      <div>
       <div className="header">
        <h1>Hexaops</h1>
        <h6>Stajyer Bilgi Giriş Sistemi</h6>
      </div>
   <div className='login-container'>
    <div className='login-card'>
      <h2 className='form-title'>Giriş Yap</h2>
      <p className='form-subtitle'>Dashboard'a erişim için giriş yapın.</p>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className='form-field-group'>
            <label htmlFor="userName" className="form-label">Kullanıcı Adı</label>
              <div className="input-container">
                <i className="fas fa-user left-icon"></i>
                <Field type="text" name="userName" className="form-input" placeholder="Kullanıcı adınızı girin" />
              </div>
            <ErrorMessage name="userName" component="div" className="error-message" />
          </div>

          <div className="form-field-group">
            <label htmlFor="password" className="form-label">Şifre</label>
          <div className="input-container">
                <i className="fas fa-lock left-icon"></i>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-input"
                  placeholder="Şifrenizi girin"
                />
                <i
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} right-icon`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
            <ErrorMessage name="password" component="div" className="error-message"/>
          </div>

          <button type="submit" className="submit-button">Giriş Yap</button>

          <div className="demo-info">
          <p>Demo giriş bilgileri:</p>
          <p>Kullanıcı Adı: hexaops</p>
          <p>Şifre: admin123</p>
          </div>

          <a href="/" class="back-link">← Stajyer Kayıt Formuna Dön</a>
    
        </Form>
      </Formik>
    </div>
    </div>
    </div>
  );
};

export default LoginPage