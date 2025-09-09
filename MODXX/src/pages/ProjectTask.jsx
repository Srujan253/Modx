import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectTasks from '../components/ProjectTasks';
import axiosInstance from '../api/axiosInstance';

const ProjectTask = () => {
  const { projectId } = useParams();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axiosInstance.get(`/project/${projectId}/members`);
        setMembers(res.data.members || []);
      } catch (err) {
        setMembers([]);
      }
      setLoading(false);
    };
    fetchMembers();
  }, [projectId]);

  if (loading) return <div className="text-center p-8">Loading members...</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Project Tasks</h2>
      <ProjectTasks projectId={projectId} members={members} />
    </div>
  );
};

export default ProjectTask;
