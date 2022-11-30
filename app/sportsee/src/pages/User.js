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
import ActivityChart from '../components/charts/ActivityChart';
import SessionsChart from '../components/charts/SessionsChart';
import PerformanceChart from '../components/charts/PerformanceChart';
import ScoreChart from '../components/charts/ScoreChart';
import KeyData from '../components/KeyData';
import keyDataRef from '../data/keyDataRef.json';

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
    if (userDetailsData) {
      setFirstName(userDetailsData.data.userInfos.firstName);
      setTodayScore(userDetailsData.data.score);
      setKeyData(userDetailsData.data.keyData);
    }
    if (userActivityData) {
      setDailyActivity(userActivityData.data.sessions);
    }
    if (userSessionsData) {
      setSessions(userSessionsData.data.sessions);
    }
    if (userPerformanceData) {
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

  //  activity chart settings
  const activityChartData = dailyActivity
    ? dailyActivity.map((activity, i) => {
        return {
          date: new Date(activity.day).getDate().toString(),
          'Poids (kg)': activity.kilogram,
          'Calories brulées (kCal)': activity.calories,
        };
      })
    : null;
  const activityChartWeightDomainMin = dailyActivity
    ? Math.min(
        ...dailyActivity.map((activity, i) => {
          return activity.kilogram;
        })
      ) - 1
    : null;
  const activityChartWeightDomainMax = dailyActivity
    ? Math.max(
        ...dailyActivity.map((activity, i) => {
          return activity.kilogram;
        })
      ) + 1
    : null;
  const activityChartCaloryDomainMin = dailyActivity
    ? Math.min(
        ...dailyActivity.map((activity, i) => {
          return activity.calories;
        })
      ) * 0.6
    : null;
  const activityChartCaloryDomainMax = dailyActivity
    ? Math.max(
        ...dailyActivity.map((activity, i) => {
          return activity.calories;
        })
      ) * 1.1
    : null;

  // session chart settings
  const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const sessionsChartData = sessions
    ? sessions.map((session, i) => {
        return {
          day: weekDays[session.day - 1],
          time: session.sessionLength,
        };
      })
    : null;
  const sessionsChartSessionDomainMin = sessions
    ? Math.min(
        ...sessions.map((session, i) => {
          return session.sessionLength;
        })
      ) * 0.6
    : null;
  const sessionsChartSessionDomainMax = sessions
    ? Math.max(
        ...sessions.map((session, i) => {
          return session.sessionLength;
        })
      ) * 1.1
    : null;

  // performance chart settings
  const performanceNameTraduction = {
    cardio: 'Cardio',
    energy: 'Energie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
  };
  const performanceChartData = performanceData
    ? performanceData.map((performance, i) => {
        return {
          activity:
            performanceNameTraduction[performanceName[performance.kind]],
          score: performance.value,
        };
      })
    : null;

  // score chart settings
  const startAngle = 180;
  const scoreValue = todayScore;

  // key data settings
  const keyDataIconsMapping = {
    calorieCount: calorieCount,
    proteinCount: proteinCount,
    carbohydrateCount: carbohydrateCount,
    lipidCount: lipidCount,
  };
  const keyDataList = keyData
    ? Object.keys(keyData).map((key) => {
        return {
          key: key,
          value: keyData[key],
          name: keyDataRef[key].name,
          unit: keyDataRef[key].unit,
          icon: keyDataIconsMapping[key],
        };
      })
    : [];

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
          <div className="dashboard-title">
            <h1>
              Bonjour <span className="firstname">{firstName}</span>
            </h1>

            <div className="congratulations-message">
              {category ? (
                <h3 className="congratulations-category">{category}</h3>
              ) : null}
              <span className="congratulations-text">
                Félicitation ! Vous avez explosé vos objectifs hier &#128079;
              </span>
            </div>
          </div>
          <div className="dashboard-content">
            <article id="charts" className="dashboard-charts">
              {/* activity charts */}
              <section
                id="activity-chart-container"
                className="activity-chart-container"
                style={{ position: 'relative', width: '100%' }}
              >
                {userActivity.loading && <SimpleLoader />}
                {!userActivity.loading && (
                  <ActivityChart
                    title="Activité quotidienne"
                    settings={{
                      weightDomain: [
                        activityChartWeightDomainMin,
                        activityChartWeightDomainMax,
                      ],
                      caloryDomain: [
                        activityChartCaloryDomainMin,
                        activityChartCaloryDomainMax,
                      ],
                      width: document.getElementById('activity-chart-container')
                        ? document.getElementById('activity-chart-container')
                            .offsetWidth
                        : null,
                      height: document.getElementById(
                        'activity-chart-container'
                      )
                        ? document.getElementById('activity-chart-container')
                            .offsetHeight
                        : null,
                    }}
                    data={activityChartData}
                  />
                )}
              </section>
              {/* sessions charts */}
              <section
                id="sessions-chart-container"
                className="sessions-chart-container"
              >
                {userSessions.loading && <SimpleLoader />}
                {!userSessions.loading && (
                  <SessionsChart
                    title={'Durée moyanne des sessions'}
                    settings={{
                      sessionDomain: [
                        sessionsChartSessionDomainMin,
                        sessionsChartSessionDomainMax,
                      ],
                      width: document.getElementById('sessions-chart-container')
                        ? document.getElementById('sessions-chart-container')
                            .offsetWidth
                        : null,
                      height: document.getElementById(
                        'sessions-chart-container'
                      )
                        ? document.getElementById('sessions-chart-container')
                            .offsetHeight
                        : null,
                    }}
                    data={sessionsChartData}
                  />
                )}
              </section>
              {/* performane charts */}
              <section
                id="performance-chart-container"
                className="performance-chart-container"
              >
                {userPerformance.loading && <SimpleLoader />}
                {!userPerformance.loading && (
                  <PerformanceChart
                    title={'Performances'}
                    settings={{
                      performanceDomain: [0, 250],
                      width: document.getElementById(
                        'performance-chart-container'
                      )
                        ? document.getElementById('performance-chart-container')
                            .offsetWidth
                        : null,
                      height: document.getElementById(
                        'performance-chart-container'
                      )
                        ? document.getElementById('performance-chart-container')
                            .offsetHeight
                        : null,
                    }}
                    data={performanceChartData}
                  />
                )}
              </section>
              {/* score charts */}
              <section
                id="score-chart-container"
                className="score-chart-container"
              >
                {userDetails.loading && <SimpleLoader />}
                {!userDetails.loading && (
                  <ScoreChart
                    title={'Score'}
                    settings={{
                      startAngle: startAngle,
                      endAngle: startAngle - 360 * scoreValue,
                      width: document.getElementById('score-chart-container')
                        ? document.getElementById('score-chart-container')
                            .offsetWidth
                        : null,
                      height: document.getElementById('score-chart-container')
                        ? document.getElementById('score-chart-container')
                            .offsetHeight
                        : null,
                    }}
                    data={[{ name: 'Score', value: scoreValue }]}
                  />
                )}
              </section>
            </article>
            <aside id="keydata" className="dashboard-keydata">
              {userDetails.loading && <SimpleLoader />}
              {!userDetails.loading && (
                <>
                  <KeyData title={'Chiffres clés'} data={keyDataList} />
                </>
              )}
            </aside>
          </div>
        </>
      )}
    </main>
  );
};

export default User;
