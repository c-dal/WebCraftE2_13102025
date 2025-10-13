const API_PROJECTS_URL = "https://webcraft-api.vercel.app/data/projects.json";
const API_COURSES_URL = "https://webcraft-api.vercel.app/data/courses.json";

// Récupérer les projets
export async function getProjects() {
  try {
    const response = await fetch(
      API_PROJECTS_URL
    );
    const data = await response.json();

    // Transformer les données pour notre format
    return data.projects.map(project => ({
      id: project.id,
      image: project.image,
      title: project.title,
      client: project.client,
      technologies: project.technologies,
      category: project.category,
      description: project.description,
    }));

  } catch (error) {
    console.error('Erreur lors de la récupération des projets:', error);
    return [];
  }
}


// Récupérer les formations
export async function getCourses() {
  try {
    const response = await fetch(
      API_COURSES_URL
    );
    const data = await response.json();

    // Transformer les données pour notre format
    return data.courses.map(course => ({
      id: course.id,
      image: course.image,
      title: course.title,
      category: course.category,
      level: course.level,
      duration: course.duration,
      price: course.price,
      rating: course.rating,
      students: course.students,
      technologies: course.technologies,
      available: course.available,
      description: course.description,
    }));

  } catch (error) {
    console.error('Erreur lors de la récupération des formations:', error);
    return [];
  }
}