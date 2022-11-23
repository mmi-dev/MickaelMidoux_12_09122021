import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Auth from '../contexts/AuthContext';
import UserData from '../contexts/UserDataContext';
import useUserDetails from '../api/useUserDetails';
import useUserActivity from '../api/useUserActivity';
import SimpleLoader from '../components/loader/SimpleLoader';

const User = () => {
  const { isAuthenticated } = useContext(Auth);

  const {
    userDetailsData,
    userActivityData,
    userProfilData,
    userSessionsData,
  } = useContext(UserData);

  //user details
  const userDetails = useUserDetails(2000);
  const [firstName, setFirstName] = useState('');
  useEffect(() => {
    if (userDetailsData.data) {
      setFirstName(userDetailsData.data.userInfos.firstName);
    }
  }, [userDetailsData]);

  //user activity
  const userActivity = useUserActivity();
  const [dailyActivity, setDailyActivity] = useState('');
  useEffect(() => {
    if (userActivityData.data) {
      setDailyActivity(userActivityData.data.sessions);
      console.log(dailyActivity);
      console.log(
        dailyActivity ? dailyActivity.map((e) => e.kilogram) : 'nothing'
      );
    }
  }, [userActivityData]);

  // user average sessions

  // user performance

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
          <section>
            <h2>activity</h2>
            {userActivity.loading && <SimpleLoader />}
            {!userActivity.loading && (
              <div>
                {dailyActivity
                  ? dailyActivity.map((activity, i) => {
                      return (
                        <li key={i}>
                          {activity.day}_{activity.kilogram}'Kgs'-
                          {activity.calories}'calories'
                        </li>
                      );
                    })
                  : 'no data'}
              </div>
            )}
          </section>
        </>
      )}
    </main>
  );
};

export default User;
