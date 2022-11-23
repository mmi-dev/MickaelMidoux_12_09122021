import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Auth from '../contexts/AuthContext';
import UserData from '../contexts/UserDataContext';
import useUserDetails from '../api/useUserDetails';
import SimpleLoader from '../components/loader/SimpleLoader';

const User = () => {
  const { isAuthenticated } = useContext(Auth);

  const userDetails = useUserDetails(3000);

  const {
    userDetailsData,
    userActivityData,
    userProfilData,
    userSessionsData,
  } = useContext(UserData);

  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    if (userDetailsData.data) {
      setFirstName(userDetailsData.data.userInfos.firstName);
    }
  }, [userDetailsData]);

  // category
  const [searchParams] = useSearchParams();
  let category = searchParams.get('category');

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
          <h1>
            Bonjour <span className="firstname">{firstName}</span>{' '}
          </h1>
          <p>{category}</p>
        </>
      )}
    </main>
  );
};

export default User;
