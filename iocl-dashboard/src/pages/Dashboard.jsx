import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/projects', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setProjects(res.data);
      } catch (err) {
        console.error('Error fetching projects:', err.response?.data || err.message);
      }
    };
    fetchProjects();
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">IOCL Project Dashboard</h1>
      <Link to="/add-project" className="bg-green-600 text-white px-4 py-2 rounded mb-4 inline-block">Add New Project</Link>
      <div>
        {projects.map(proj => (
          <div key={proj._id} className="border p-3 mb-2 rounded">
            <h2 className="text-lg font-semibold">{proj.title} ({proj.status})</h2>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
