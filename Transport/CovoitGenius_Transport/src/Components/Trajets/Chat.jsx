import React, { useState, useEffect } from 'react';
import '../../styles/chat.css';
import { onSnapshot, userCollection } from '../../db/firebase';

function Chat() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(userCollection, (querySnapshot) => {
      const userData = querySnapshot.docs.map((doc) => doc.data());
      setUserInfo(userData);
    });

    return () => {
      unsubscribe();
    };
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
              alt="Photo de profil"
            />
            <div className="infos-comm">
              <p className="card__name">{userInfo.nom} {userInfo.prenom}</p>
              <p className="card__position">{userInfo.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
