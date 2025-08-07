import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik' ;
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
function LoginPage() {
  const navigate = useNavigate();
  
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
          navigate("/Dashboard"); // başka sayfaya yönlendirme
        }else{
          alert("Kullanıcı adı veya şifre yanlış")
        }
        console.log("Giriş Bilgileri : " ,values);
    
    }
    
    return (
   <div>
      <h2>Giriş Yap</h2>
      <p>Dashboard'a erişim için giriş yapın.</p>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div>
            <label>Kullanıcı Adı</label>
            <Field type="text" name="userName" />
            <ErrorMessage name="userName" component="div" />
          </div>

          <div>
            <label>Şifre</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit">Giriş Yap</button>

          <p>Demo giriş bilgileri:</p>
          <p>Kullanıcı Adı: hexaops</p>
          <p>Şifre: admin123</p>

          <button type='button' onClick={() => navigate("/StajyerKayıt")}>Stajyer kayıt sayfasına dön</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage