import { useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DataContext from "../../context/dataContext";
import { nanoid } from "nanoid";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
//takvim kütüphanesi
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
//icon
import { CiCalendarDate } from "react-icons/ci";
import { LuChartColumnIncreasing } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";

const validationSchema = Yup.object({
  name: Yup.string().required("Ad gerekli"),
  surname: Yup.string().required("Soyad gerekli"),
  startDate: Yup.date().required("Başlangıç tarihi gerekli"),
  finishDate: Yup.date().required("Bitiş tarihi gerekli"),
});

function SavePage() {
  const { formList, setFormList } = useContext(DataContext);

  const initialValues = {
    name: "",
    surname: "",
    startDate: "",
    finishDate: "",
    file: null,
  };

  const handleSubmit = (values, { resetForm }) => {
    const newForm = {
      ...values,
      id: nanoid(),
      fileName: values.file?.name || "",
    };
    setFormList([...formList, newForm]);
    resetForm();
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Hexaops</h1>
        <h6>Stajyer Bilgi Giriş Sistemi</h6>
      </div>

      <div className="row " style={{display:"flex",paddingLeft:10}}>
        <div className="col-8 ">
          <div className="saveContainer">
            <h3>Yeni Stajyer Kaydı</h3>
            <p>Stajyer bilgilerini aşağıdaki forma girin</p>

            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ setFieldValue, values }) => (
                <Form>
                  <div className="row ">
                    <div className="col-5 formDiv">
                      <div className="form-group">
                        <label htmlFor="name">Ad</label>
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Adınızı girin"
                        />
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="form-group">
                        <label htmlFor="surname">Soyad</label>
                        <Field
                          type="text"
                          id="surname"
                          name="surname"
                          placeholder="Soyadınızı girin"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-5 formDiv">
                      <div className="form-group">
                        <label>Staj Başlangıç Tarihi</label>
                        <div className="date-group">
                          <CiCalendarDate size={20} />
                          <DatePicker
                            selected={values.startDate}
                            className="datePicker-custom"
                            onChange={(date) =>
                              setFieldValue("startDate", date)
                            }
                            dateFormat="dd.MM.yyyy"
                            placeholderText=" Tarih seçin"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="form-group">
                        <label htmlFor="finishDate">Staj Bitiş Tarihi</label>
                        <div className="date-group">
                          <CiCalendarDate size={20} />
                          <DatePicker
                            selected={values.finishDate}
                            onChange={(date) =>
                              setFieldValue("finishDate", date)
                            }
                            dateFormat="dd.MM.yyyy"
                            placeholderText="Tarih seçin"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-10 formDiv">
                      <div className="file-group">
                        <label htmlFor="file">Dosya Yükle</label>
                        <input
                          type="file"
                          id="file"
                          name="file"
                          onChange={(e) => {
                            setFieldValue("file", e.currentTarget.files[0]);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-10">
                      <button type="submit" className="saveButton">
                        Staj Kaydını Tamamla
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <div className="col-4 " >
          <div className="row infoContainer">
            <h5>
              {" "}
              <LuUsers size={25} style={{ color: "#764ba2" }} /> Sistem
              Özellikleri
            </h5>
            <ul>
              <li>Kolay Kayıt</li>
              <p>Stajyer bilgilerini hızlıca kaydet</p>
              <li>Dosya Yükleme</li>
              <p>CV ve belgenizi güvenle yükleyin</p>
              <li>Tarih Takibi</li>
              <p>Staj dönemlerini otomatik takip edin</p>
            </ul>
          </div>
          <div className="row linkButton">
            <Link to="/dashboard">
              <button>
                <LuChartColumnIncreasing style={{ marginRight: 8 }} />{" "}
                Dashboard'a Git
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavePage;
