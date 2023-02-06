import { useState, useEffect, useContext } from 'react';
import Auth from '../contexts/AuthContext';
import UserData from '../contexts/UserDataContext';

import axios from '../api/axios';

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
  const API_URL = 'user/' + userId + '/average-sessions';

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.data) {
          const datas = response.data;
          setUserSessionsData(datas);
          setFetchError(null);
        }
      } catch (err) {
        setFetchError(err.response);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, []);

  return { data: userSessionsData, error: fetchError, loading: isLoading };
}

export default useUserSessions;
