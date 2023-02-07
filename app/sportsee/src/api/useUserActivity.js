import { useState, useEffect, useContext } from 'react';
import Auth from '../contexts/AuthContext';
import UserData from '../contexts/UserDataContext';

import axios from '../api/axios';

/**
 * @category Api
 * @description Import API data from the end point {api url}/user/:id/activity
 * @return {object} user activity details
 * @return {array} error
 * @return {boolean} loading statut
 */
function useUserActivity() {
  const { userActivityData, setUserActivityData } = useContext(UserData);
  const { userId } = useContext(Auth);
  const [fetchError, setFetchError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * end point URL
   */
  const API_URL = 'user/' + userId + '/activity';

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.data) {
          const datas = response.data;
          setUserActivityData(datas);
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

  return { data: userActivityData, error: fetchError, loading: isLoading };
}

export default useUserActivity;
