import { useState, useEffect } from 'react';
import { getCourses } from '../hooks/useFetch';
import CourseCard from '../components/CourseCard';

function CoursesPage() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // fonction asynchrone pour charger les formations
        async function loadCourses() {
            try {
                setLoading(true);
                const courses = await getCourses();
                setCourses(courses);
                setError(null);
            } catch (err) {
                setError('Impossible de charger les formations');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        loadCourses();
    }, []);

  return (
    <>
      <h1>Nos formations</h1>
      <h2>Nous offrons tout un panel de formations professionalisantes auxquelles vous pouvez vous inscrire</h2>
      <div className='grid appear'>
        <div className='row'>
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              image={course.image}
              title={course.title}
              category={course.category}
              level={course.level}
              duration={course.duration}
              price={course.price}
              rating={course.rating}
              students={course.students}
              technologies={course.technologies}
              available={course.available}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CoursesPage;