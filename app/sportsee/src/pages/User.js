import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Auth from '../contexts/AuthContext';
import UserData from '../contexts/UserDataContext';
import useUserDetails from '../api/useUserDetails';
import useUserActivity from '../api/useUserActivity';
import useUserSessions from '../api/useUserSessions';
import useUserPerformance from '../api/useUserPerformance';
import SimpleLoader from '../components/loader/SimpleLoader';
import calorieCount from '../assets/icons/calories-icon.png';
import proteinCount from '../assets/icons/protein-icon.png';
import carbohydrateCount from '../assets/icons/carbs-icon.png';
import lipidCount from '../assets/icons/fat-icon.png';

const User = () => {
  const { isAuthenticated } = useContext(Auth);

  const {
    userDetailsData,
    userActivityData,
    userPerformanceData,
    userSessionsData,
  } = useContext(UserData);

  //user details
  const userDetails = useUserDetails(2000);
  const [firstName, setFirstName] = useState('');
  const [todayScore, setTodayScore] = useState('');
  const [keyData, setKeyData] = useState('');
  const [keyDataKeys, setKeyDataKeys] = useState('');

  //user activity
  const userActivity = useUserActivity(3000);
  const [dailyActivity, setDailyActivity] = useState('');

  // user average sessions
  const userSessions = useUserSessions(5000);
  const [sessions, setSessions] = useState('');

  // user performance
  const userPerformance = useUserPerformance(4000);
  const [performanceData, setPerformanceData] = useState('');
  const [performanceName, setPerformanceName] = useState('');

  useEffect(() => {
    if (userDetailsData.data) {
      setFirstName(userDetailsData.data.userInfos.firstName);
      setTodayScore(userDetailsData.data.score);
      setKeyDataKeys(Object.keys(userDetailsData.data.keyData));
      setKeyData(userDetailsData.data.keyData);
    }
    if (userActivityData.data) {
      setDailyActivity(userActivityData.data.sessions);
    }
    if (userSessionsData.data) {
      setSessions(userSessionsData.data.sessions);
    }
    if (userPerformanceData.data) {
      setPerformanceData(userPerformanceData.data.data);
      setPerformanceName(userPerformanceData.data.kind);
    }
  }, [
    userDetailsData,
    userActivityData,
    userPerformanceData,
    userSessionsData,
  ]);

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
          <section>
            <h2>sessions</h2>
            {userSessions.loading && <SimpleLoader />}
            {!userSessions.loading && (
              <div>
                {sessions
                  ? sessions.map((session, i) => {
                      return (
                        <li key={i}>
                          {session.day}_{session.sessionLength}'min'
                        </li>
                      );
                    })
                  : 'no data'}
              </div>
            )}
          </section>
          <section>
            <h2>performance</h2>
            {userPerformance.loading && <SimpleLoader />}
            {!userPerformance.loading && (
              <div>
                {performanceData
                  ? performanceData.map((performance, i) => {
                      return (
                        <li key={i}>
                          {performanceName[performance.kind]}_
                          {performance.value}
                        </li>
                      );
                    })
                  : 'no data'}
              </div>
            )}
          </section>
          <section>
            <h2>score</h2>
            {userDetails.loading && <SimpleLoader />}
            {!userDetails.loading && <div>{todayScore}</div>}
          </section>
          <section>
            <h2>keydata</h2>
            {userDetails.loading && <SimpleLoader />}
            {!userDetails.loading && (
              <>
                {keyDataKeys
                  ? keyDataKeys.map((keys, i) => {
                      return (
                        <div key={i}>
                          <div>{keys}</div>
                          <div>{keyData[keys]}</div>
                        </div>
                      );
                    })
                  : ''}
              </>
            )}
          </section>
        </>
      )}
    </main>
  );
};

export default User;
