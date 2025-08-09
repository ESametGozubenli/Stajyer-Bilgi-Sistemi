import { useContext } from "react";
import DataContext from "../../context/dataContext";
import {
  format,
  formatDistance,
  isBefore,
  isAfter,
  isWithinInterval,
  addDays,
} from "date-fns";
import { tr } from "date-fns/locale"; // Türkçe locale

function InternList() {
  const { formList } = useContext(DataContext);

  const today = new Date();

  const InterStatus = (item, today) => {
    const start = new Date(item.startDate);
    const finish = new Date(item.finishDate);

    if (isWithinInterval(today, { start, end: finish })) return " Aktif";
    if (isAfter(start, today) && isBefore(start, addDays(today, 7)))
      return "Yaklaşan Staj";
    if (isBefore(finish, today)) return " Tamamlandı";
    return " Pasif";
  };

  return (
    <div>
      <div className="listContainer">
        <div className="listHeader">
          <h5>Stajyer Listesi</h5>
          <p>Tüm kayıtlı stajyerlerin detaylı bilgileri</p>
        </div>
        {formList.length === 0 ? (
          ""
        ) : (
          <div className="list">
            <div className="row topBar">
              <div className="col-2">
                {" "}
                <p>Ad Soyad</p>
              </div>
              <div className="col-2">
                {" "}
                <p>Başlangıç Tarihi</p>
              </div>
              <div className="col-2">
                {" "}
                <p>Bitiş Tarihi</p>
              </div>
              <div className="col-2">
                {" "}
                <p>Dosya</p>
              </div>
              <div className="col-2">
                {" "}
                <p>Durum</p>
              </div>
              <div className="col-2">
                {" "}
                <p>Kayıt Tarihi</p>
              </div>
            </div>
            <ul>
              <div className="row">
                {formList.map((item) => (
                  <li key={item.id} className="listItem">
                    <div className="col-2">
                      <p>
                        <strong>
                          {item.name} {item.surname}
                        </strong>
                      </p>
                    </div>
                    <div className="col-2">
                      <p>
                        {item.startDate
                          ? format(new Date(item.startDate), "d MMM yyyy", { locale: tr })
                          : ""}
                      </p>
                    </div>
                    <div className="col-2">
                      <p>
                        {item.finishDate
                          ? format(new Date(item.finishDate), "d MMM yyyy", { locale: tr })
                          : ""}
                      </p>
                    </div>
                    <div className="col-2">
                      <p>{item.fileName}</p>
                    </div>
                    <div className="col-2">
                      <p>{InterStatus(item, today)}</p>
                    </div>
                    <div className="col-2">
                      <p>
                        {item.createdAt
                          ? format(new Date(item.createdAt), "d MMM yyyy", { locale: tr })
                          : ""}
                      </p>
                    </div>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default InternList;
