function CourseCard({ image, title, category, level, duration, price, rating, students, technologies, available }) {

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title} - Pour {students} étudiants</h5>
                <p className="card-text">
                    {technologies.map((techno, index) => (
                        <span key={index} className="badge techno-badge">{techno}</span>
                    ))}
                    <br />
                    <i className="bi bi-bookmark">{category}</i> <br />
                    Niveau : {level} <br />
                    <span><i className="bi bi-clock">{duration}</i></span>
                    <span><i className="bi bi-coin">{price}</i></span>
                    <span>⭐<i>{rating}</i></span>
                    <br />
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>


    );
}

export default CourseCard;