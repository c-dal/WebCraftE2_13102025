const API_PROJECTS_URL = "https://webcraft-api.vercel.app/data/projects.json";
const API_COURSES_URL = "https://webcraft-api.vercel.app/data/courses.json";

// projects[] , technologies[] , categories[]
// Récupérer les technos des projets
export async function getProjectTechnos() {
  try {
    const response = await fetch(
      API_PROJECTS_URL
    );
    const data = await response.json();
    return data.technologies;
  } catch (error) {
    console.error('Erreur lors de la récupération des technos de projet:', error);
    return [];
  }
}

// Récupérer les catégories des projets
export async function getProjectCategories() {
  try {
    const response = await fetch(
      API_PROJECTS_URL
    );
    const data = await response.json();
    return data.categories;
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories de projet:', error);
    return [];
  }
}


// courses[] , categories[] , levels[] , technologies[
// Récupérer les technos des formations
export async function getCourseTechnos() {
  try {
    const response = await fetch(
      API_COURSES_URL
    );
    const data = await response.json();
    return data.technologies;
  } catch (error) {
    console.error('Erreur lors de la récupération des technos de formation:', error);
    return [];
  }
}

// Récupérer les catégories des formations
export async function getCourseCategories() {
  try {
    const response = await fetch(
      API_COURSES_URL
    );
    const data = await response.json();
    return data.categories;
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories de formation:', error);
    return [];
  }
}

// Récupérer les niveaux des formations
export async function getCourseLevels() {
  try {
    const response = await fetch(
      API_COURSES_URL
    );
    const data = await response.json();
    return data.levels;
  } catch (error) {
    console.error('Erreur lors de la récupération des niveaux de formation:', error);
    return [];
  }
}
