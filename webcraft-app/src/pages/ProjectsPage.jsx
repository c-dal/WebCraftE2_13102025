import { useState, useEffect, use } from 'react';
import { getProjects } from '../hooks/useFetch';
import ProjectCard from '../components/ProjectCard';

function ProjectsPage() {

  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fonction asynchrone pour charger les projets
    async function loadProjects() {
      try {
        setLoading(true);
        const projects = await getProjects();
        setProjects(projects);
        setError(null);
      } catch (err) {
        setError('Impossible de charger les projets');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Nos projets</h1>
      <h2>Sur cette page, consultez les projets réalisés pour nos clients qui nous ont fait confiance</h2>
      <div className='grid appear'>
        <div className='row'>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              client={project.client}
              technologies={project.technologies}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;