import { useState, useEffect, useContext } from 'react';
import Auth from '../contexts/AuthContext';
import UserData from '../contexts/UserDataContext';

import axios from '../api/axios';

/**
 * @category Api
 * @description Import API data from the end point {api url}/user/:id/performance
 * @return {object} user performance details
 * @return {array} error
 * @return {boolean} loading statut
 */
function useUserPerformance() {
  const { userPerformanceData, setUserPerformanceData } = useContext(UserData);
  const { userId } = useContext(Auth);
  const [fetchError, setFetchError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * end point URL
   */
  const API_URL = 'user/' + userId + '/performance';

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.data) {
          const datas = response.data;
          setUserPerformanceData(datas);
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

  return { data: userPerformanceData, error: fetchError, loading: isLoading };
}

export default useUserPerformance;
