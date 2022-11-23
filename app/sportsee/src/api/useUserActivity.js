import { useState, useEffect, useContext } from 'react';
import Auth from '../contexts/AuthContext';
import UserData from '../contexts/UserDataContext';

function useUserActivity(timeout = 0) {
  const { userActivityData, setUserActivityData } = useContext(UserData);
  const { userId } = useContext(Auth);
  const [fetchError, setFetchError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = 'http://localhost:3001/user/' + userId + '/activity';

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const datas = await response.json();
        setUserActivityData(datas);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    // simulate awaiting server response
    if (!userActivityData) {
      setTimeout(() => {
        (async () => await fetchApi())();
      }, timeout);
    } else {
      setIsLoading(false);
    }
  }, []);

  return { data: userActivityData, error: fetchError, loading: isLoading };
}

export default useUserActivity;
