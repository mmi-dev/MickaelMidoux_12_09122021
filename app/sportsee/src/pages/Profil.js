import React, { useContext, useEffect, useState} from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import Auth from '../contexts/AuthContext';
import UserData from '../contexts/UserDataContext';
import useUserDetails from '../api/useUserDetails';
import SimpleLoader from '../components/loader/SimpleLoader';
import logout from '../assets/icons/logout.svg';
import profil from '../assets/icons/profil-picture.svg';

const Profil = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const { setUserId } = useContext(Auth);
  const {
    userDetailsData,
    setUserDetailsData,
    setUserActivityData,
    setUserPerformanceData,
    setUserSessionsData,
  } = useContext(UserData);

  const userDetails = useUserDetails(2000);

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (userDetailsData) {
      setLastName(userDetailsData.data.userInfos.lastName);
      setFirstName(userDetailsData.data.userInfos.firstName);
      setAge(userDetailsData.data.userInfos.age);
    }
  }, [userDetailsData]);

  // redirection if not authentificated or unknow user id
  const urlUserId = useParams()
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated ) {
      navigate('/');
    } else if (urlUserId.userId !== sessionStorage.getItem('userId')) {
      navigate('/404');
    } 
  }, [isAuthenticated, navigate,urlUserId]);

  return (
    <main>
      {userDetails.loading && <SimpleLoader />}
      {!userDetails.loading && (
        <>
          <h1>Profil</h1>
          <form className="profil-data">
            <div className="profil-picture">
              <img src={profil} alt="ajouter une photo de profil" />
            </div>
            <div className="profil-lastname">
              <label htmlFor="name">Nom :</label>
              <input
                type="text"
                id="name"
                name="user_name"
                readOnly
                value={lastName}
              />
            </div>
            <div className="profil-fistname">
              <label htmlFor="firstname">Prénom :</label>
              <input
                type="text"
                id="firstname"
                name="user_firstname"
                readOnly
                value={firstName}
              />
            </div>
            <div className="profil-age">
              <label htmlFor="age">Age :</label>
              <input
                type="text"
                id="age"
                name="user_age"
                readOnly
                value={age + ' ans'}
              />
            </div>
            <div className="logout">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsAuthenticated(false);
                  setUserId('');
                  sessionStorage.removeItem('isAuthenticated');
                  sessionStorage.removeItem('userId');
                  // reset state
                  setUserDetailsData();
                  setUserActivityData();
                  setUserPerformanceData();
                  setUserSessionsData();
                  // redirect to home
                  navigate('/');
                }}
              >
                <img src={logout} alt="deconnexion" />
                <span>Deconnexion</span>
              </button>
            </div>
          </form>
        </>
      )}
    </main>
  );
};

export default Profil;
