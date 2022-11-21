import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Auth, AuthUser } from '../contexts/AuthContext';

const User = () => {
  const { isAuthenticated } = useContext(Auth);
  const { userId } = useContext(AuthUser);

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
    </main>
  );
};

export default User;
