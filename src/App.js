import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './redux/action/jobActions';
import JobList from './components/JobList';

const App = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const loadMore = () => {
    // Implement logic to load more jobs
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <h1>Job Search Dashboard</h1>
      <JobList jobs={jobs} loadMore={loadMore} />
    </div>
  );
};

export default App;
