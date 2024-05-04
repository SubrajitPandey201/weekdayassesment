// src/components/JobList.js
import InfiniteScroll from 'react-infinite-scroll-component';

const JobList = ({ jobs, loadMore }) => {
  return (
    <InfiniteScroll
      dataLength={jobs.length}
      next={loadMore}
      hasMore={true} // Set this based on your API response
    >
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </InfiniteScroll>
  );
};
