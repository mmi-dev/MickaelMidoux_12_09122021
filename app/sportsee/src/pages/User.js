import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import UserData from '../components/UserData';
import FetchApi from '../api/ApiDatas';
import { Auth } from '../contexts/Context';

const User = () => {
  const { isAuthenticated } = useContext(Auth);
  const { userId } = useContext(Auth);

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
      <h1>User: {userId}</h1>
      <p>{category}</p>
      <FetchApi />
    </main>
  );
};

export default User;
