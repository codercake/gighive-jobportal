import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiBriefcase, FiCalendar, FiClock, FiMapPin, FiDollarSign } from 'react-icons/fi';

const DashboardContainer = styled.div`
  max-width: 1400px;
  margin: 80px auto 0;
  padding: 2rem;
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #1F2937;
  font-weight: 700;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatValue = styled.h2`
  font-size: 2rem;
  color: #7C3AED;
  margin: 0;
`;

const StatLabel = styled.p`
  color: #6B7280;
  margin: 0.5rem 0 0;
`;

const ApplicationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ApplicationCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const StatusBadge = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${props => {
    switch (props.status.toLowerCase()) {
      case 'pending': return 'rgba(245, 158, 11, 0.1)';
      case 'accepted': return 'rgba(16, 185, 129, 0.1)';
      case 'rejected': return 'rgba(239, 68, 68, 0.1)';
      default: return 'rgba(107, 114, 128, 0.1)';
    }
  }};
  color: ${props => {
    switch (props.status.toLowerCase()) {
      case 'pending': return '#F59E0B';
      case 'accepted': return '#10B981';
      case 'rejected': return '#EF4444';
      default: return '#6B7280';
    }
  }};
`;

const JobTitle = styled.h3`
  font-size: 1.25rem;
  color: #1F2937;
  margin: 1rem 0;
`;

const JobDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6B7280;
  margin: 0.5rem 0;
  font-size: 0.875rem;
`;

const ViewButton = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #7C3AED, #3B82F6);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    accepted: 0,
    rejected: 0
  });

  useEffect(() => {
    // Fetch applications data
    const fetchApplications = async () => {
      try {
        const response = await fetch('/api/applications');
        const data = await response.json();
        setApplications(data);
        
        // Calculate stats
        const stats = data.reduce((acc, app) => {
          acc.total++;
          acc[app.status.toLowerCase()]++;
          return acc;
        }, { total: 0, pending: 0, accepted: 0, rejected: 0 });
        
        setStats(stats);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <DashboardContainer>

      <StatsContainer>
        <StatCard>
          <StatValue>{stats.total}</StatValue>
          <StatLabel>Total Applications</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.pending}</StatValue>
          <StatLabel>Pending Review</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.accepted}</StatValue>
          <StatLabel>Accepted</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.rejected}</StatValue>
          <StatLabel>Rejected</StatLabel>
        </StatCard>
      </StatsContainer>

      {applications.length === 0 ? (
        <EmptyState>
          <h2>No Applications Yet</h2>
          <p>Start applying for jobs to see your applications here.</p>
          <ViewButton to="/jobs">Browse Jobs</ViewButton>
        </EmptyState>
      ) : (
        <ApplicationsGrid>
          {applications.map((application) => (
            <ApplicationCard key={application._id}>
              <StatusBadge status={application.status}>
                {application.status}
              </StatusBadge>
              <JobTitle>{application.job.title}</JobTitle>
              <JobDetail>
                <FiBriefcase />
                {application.job.company}
              </JobDetail>
              <JobDetail>
                <FiMapPin />
                {application.job.location}
              </JobDetail>
              <JobDetail>
                <FiDollarSign />
                {application.job.salary}
              </JobDetail>
              <JobDetail>
                <FiCalendar />
                Applied: {new Date(application.appliedAt).toLocaleDateString()}
              </JobDetail>
              <JobDetail>
                <FiClock />
                {application.job.type}
              </JobDetail>
              <ViewButton to={`/applications/${application._id}`}>
                View Details
              </ViewButton>
            </ApplicationCard>
          ))}
        </ApplicationsGrid>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
