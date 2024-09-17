import React from 'react';
import { Link } from 'react-router-dom';

const JobListItem = ({ job, onDelete, onEdit }) => (
  <div>
    <h2>{job.title}</h2>
    <p>{job.company}</p>
    <Link to={`/jobs/${job.id}`}>View Details</Link>
    <button onClick={onEdit}>Edit</button>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default JobListItem;
