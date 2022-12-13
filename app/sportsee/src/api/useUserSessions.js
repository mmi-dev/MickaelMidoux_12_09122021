import { useState, useEffect, useContext } from 'react';
import Auth from '../contexts/AuthContext';
import UserData from '../contexts/UserDataContext';

/**
 * @category Api
 * @description Import API data from the end point {api url}/user/:id/average-sessions
 * @param {number} timeout Timeout to simulate server response delay (to be deleted or set to 0 for production)
 * @return {object} user sessions details
 * @return {array} error
 * @return {boolean} loading statut
 */
function useUserSessions(timeout = 0) {
  const { userSessionsData, setUserSessionsData } = useContext(UserData);
  const { userId } = useContext(Auth);
  const [fetchError, setFetchError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /** 
   * end point URL 
  */
  const API_URL = 'http://localhost:3001/user/' + userId + '/average-sessions';

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const datas = await response.json();
        setUserSessionsData(datas);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (!userSessionsData) {
      setTimeout(() => {
        (async () => await fetchApi())();
      }, timeout);
    } else {
      setIsLoading(false);
    }
  }, []);

  return { data: userSessionsData, error: fetchError, loading: isLoading };
}

export default useUserSessions;
