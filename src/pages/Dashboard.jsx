import { useState, useEffect } from 'react';
import JobList from '../components/JobList';
import JobForm from '../components/JobForm';
import { getJobs, createJob } from '../api';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const jobsData = await getJobs();
      setJobs(jobsData);
    } catch (err) {
      setError('Failed to fetch jobs');
      console.error('Error fetching jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddJob = async (jobData) => {
    try {
      const newJob = await createJob(jobData);
      setJobs([...jobs, newJob]);
    } catch (err) {
      setError('Failed to add job');
      console.error('Error adding job:', err);
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">HireRadar Dashboard</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <JobForm onSubmit={handleAddJob} />
        </div>
        <div>
          <JobList jobs={jobs} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;