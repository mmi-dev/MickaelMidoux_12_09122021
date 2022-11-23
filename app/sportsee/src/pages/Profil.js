import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../contexts/AuthContext';
import UserData from '../contexts/UserDataContext';
import useUserDetails from '../api/useUserDetails';
import SimpleLoader from '../components/loader/SimpleLoader';

const Profil = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const { setUserId } = useContext(Auth);

  const userDetails = useUserDetails(2000);

  const { userDetailsData } = useContext(UserData);

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (userDetailsData.data) {
      setLastName(userDetailsData.data.userInfos.lastName);
      setFirstName(userDetailsData.data.userInfos.firstName);
      setAge(userDetailsData.data.userInfos.age);
    }
  }, [userDetailsData]);

  // redirection if not authentificated
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <main>
      {userDetails.loading && <SimpleLoader />}
      {!userDetails.loading && (
        <>
          <h1>Profil</h1>
          <form>
            <div className="lastname">
              <label htmlFor="name">Nom :</label>
              <input
                type="text"
                id="name"
                name="user_name"
                readOnly
                value={lastName}
              />
            </div>
            <div className="fistename">
              <label htmlFor="firstname">Prénom :</label>
              <input
                type="text"
                id="firstname"
                name="user_firstname"
                readOnly
                value={firstName}
              />
            </div>
            <div className="age">
              <label htmlFor="age">Age :</label>
              <input
                type="text"
                id="age"
                name="user_age"
                readOnly
                value={age}
              />
            </div>
            <div className="logout">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsAuthenticated(false);
                  setUserId('');

                  navigate('/');
                }}
              >
                {' '}
                Deconnexion
              </button>
            </div>
          </form>
        </>
      )}
    </main>
  );
};

export default Profil;
