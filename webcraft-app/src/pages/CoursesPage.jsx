import { useState, useEffect } from 'react';
import { getCourses } from '../hooks/useFetch';
import CourseCard from '../components/CourseCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import { createPath } from 'react-router-dom';
import { getCourseCategories, getCourseLevels, getCourseTechnos } from '../hooks/useSearch';

function CoursesPage() {
    const [courses, setCourses] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);
    const [levels, setLevels] = useState([]);
    const [categories, setCategories] = useState([]);
    const [technologies, setTechnologies] = useState([]);
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

    useEffect(() => {
        // fonction asynchrone pour charger les filtres
        async function loadFilters() {
            try {
                setLoading(true);
                const technologies = await getCourseTechnos();
                setTechnologies(technologies);
                const categories = await getCourseCategories();
                setCategories(categories);
                const levels = await getCourseLevels();
                setLevels(levels);
                setError(null);
            } catch (err) {
                setError('Impossible de charger les filtres');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

    })

    const filteredCourses = courses.filter(
        (course) =>
            course.title.toLowerCase().includes(search.toLowerCase()) ||
            course.description?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {loading && <p>Chargement...</p>}
            {error && <p>{error}</p>}

            <h1>Nos formations</h1>
            <h2>Nous offrons tout un panel de formations professionalisantes auxquelles vous pouvez vous inscrire</h2>

            <SearchBar
                query={search}
                onChange={setSearch}
            />
            <FilterBar technologies={technologies} selectedTechnologies={[]} />

            <div className='grid appear'>
                <div className='row'>
                    {filteredCourses.map((course) => (
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