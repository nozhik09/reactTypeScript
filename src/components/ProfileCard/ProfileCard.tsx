import "./styles.css";
import {User} from "./types";



function ProfileCard() {
const userData:User = {
avatar:"https://www.interfax.ru/ftproot/photos/photostory/2021/06/11/week4_1100.jpg",
userName: "Владислав Ноженко",
occupation: "Программист",
hobbies:["Путешествия", " Дайвинг"]
}
  // const image =
  //   "https://www.interfax.ru/ftproot/photos/photostory/2021/06/11/week4_1100.jpg";

  // const name = "Владислав Ноженко";
  // const occupation = "Программист";
  // const hobbies = ["Путешествия", " Дайвинг"];

  return (
    <div className="profile_card_wrapper">
      <h2 className="nameClass">{userData.userName}</h2>
      <img className="imgClass" src={userData.avatar} alt='' />
      <p className="occypation">Род деятельности: {userData.occupation}</p>
      <p className="hobbies"> Хобби: {userData.hobbies[1]}</p>
    </div>
  );
}
export default ProfileCard;
