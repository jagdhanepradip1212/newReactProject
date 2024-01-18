import React from 'react';
import { useQueryClient, useQuery } from 'react-query';

const getVisitorCount = async () => {
  // Assuming you have an API endpoint to fetch the visitor count
  const response = await fetch('/api/visitor-count');
  const data = await response.json();
  return data.count; // Adjust this based on your API response structure
};

const VisitorCounter = () => {
  const queryClient = useQueryClient();

  const { data: visitorCount } = useQuery('visitorCount', getVisitorCount);

  return (
    <div>
      <p>Visitor Count: {visitorCount}</p>
      <button
        onClick={() => {
          // Increment the count and refetch
          queryClient.invalidateQueries('visitorCount');
        }}
      >
        Increment Count
      </button>
    </div>
  );
};

export default VisitorCounter;
