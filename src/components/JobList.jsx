const JobList = ({ jobs }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs found. Add your first job!</p>
      ) : (
        jobs.map((job) => (
          <div key={job.id} className="bg-white p-4 rounded-lg shadow border">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
            {job.url && (
              <a 
                href={job.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Job
              </a>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default JobList;