"use client";

import { useState } from "react";
import styles from "./Table.module.scss";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function Table() {

  const [jobs, setJobs] = useState([
    {
      id: 1,
      jobTitle: "Appointment Setter Needed",
      budget: "Fixed / $1000",
      published: "just now",
      rating: 5,
    },
    {
      id: 2,
      jobTitle: "Appointment Setter Needed",
      budget: "Fixed / $1000",
      published: "just now",
      rating: 5,
    },
    {
      id: 3,
      jobTitle: "Appointment Setter Needed",
      budget: "Fixed / $1000",
      published: "just now",
      rating: 5,
    },
    {
      id: 4,
      jobTitle: "Appointment Setter Needed",
      budget: "Fixed / $1000",
      published: "just now",
      rating: 4,
    },
    {
      id: 5,
      jobTitle: "Appointment Setter Needed",
      budget: "Fixed / $1000",
      published: "just now",
      rating: 4,
    },
    {
      id: 6,
      jobTitle: "Appointment Setter Needed",
      budget: "Fixed / $1000",
      published: "just now",
      rating: 3,
    },
    {
      id: 7,
      jobTitle: "Appointment Setter Needed",
      budget: "Fixed / $1000",
      published: "just now",
      rating: 3,
    },
  ]);

  // Event handlers
  const handleMoveToActive = (jobId) => {
    console.log(`Move job ${jobId} to active`);
  };

  const handleEdit = (jobId) => {
    console.log(`Edit job ${jobId}`);
  };

  const handleDislike = (jobId) => {
    console.log(`Dislike job ${jobId}`);
  };

  const handleDiscard = (jobId) => {
    console.log(`Discard job ${jobId}`);
  };

  const handleViewDetail = (jobId) => {
    console.log(`View details of job ${jobId}`);
  };

  const handleOpenJob = (jobId) => {
    console.log(`Open job ${jobId} on Upwork`);
  };

  return (
    <div className={`${styles.jobTable} card flexCol`}>
      <TableHeader />
      
      <div className={`${styles.tableContainer} flexCol`}>
        {jobs.map((job) => (
          <TableRow
            key={job.id}
            jobTitle={job.jobTitle}
            budget={job.budget}
            published={job.published}
            rating={job.rating}
            onMoveToActive={() => handleMoveToActive(job.id)}
            onEdit={() => handleEdit(job.id)}
            onDislike={() => handleDislike(job.id)}
            onDiscard={() => handleDiscard(job.id)}
            onViewDetail={() => handleViewDetail(job.id)}
            onOpenJob={() => handleOpenJob(job.id)}
          />
        ))}
      </div>
    </div>
  );
}