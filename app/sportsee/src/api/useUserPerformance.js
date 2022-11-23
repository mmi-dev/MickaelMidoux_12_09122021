import { useState, useEffect, useContext } from 'react';
import Auth from '../contexts/AuthContext';
import UserData from '../contexts/UserDataContext';

function useUserPerformance(timeout = 0) {
  const { userPerformanceData, setUserPerformanceData } = useContext(UserData);
  const { userId } = useContext(Auth);
  const [fetchError, setFetchError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = 'http://localhost:3001/user/' + userId + '/performance';

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const datas = await response.json();
        setUserPerformanceData(datas);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    // simulate awaiting server response
    if (!userPerformanceData) {
      setTimeout(() => {
        (async () => await fetchApi())();
      }, timeout);
    } else {
      setIsLoading(false);
    }
  }, []);

  return { data: userPerformanceData, error: fetchError, loading: isLoading };
}

export default useUserPerformance;
