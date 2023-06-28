import React, { useState, useEffect } from 'react';
import '../../styles/chat.css';
import { getDocs, userCollection } from '../../db/firebase';

function Chat() {
  const [userInfo, setUserInfo] = useState([]);

  async function GetInfosUser() {
    try {
      const querySnapshot = await getDocs(userCollection);
      const userData = querySnapshot.docs.map((doc) => doc.data());
      setUserInfo(userData);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des documents :", error);
    }
  }

  useEffect(() => {
    GetInfosUser();
  }, []);

  return (
    <div className="blocks-comms">
      <h2>Notre communauté</h2>
      <div className="content-card-el">
        {userInfo.map((userInfo, index) => (
          <div className="display-docs" key={index}>
            <img
              className="card__img mx-auto"
              src={userInfo.photo}
            />
            <div className="infos-comm">
              <p className="card__name">{userInfo.nom} {userInfo.prenom} </p>
              <p className="card__position">{userInfo.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
