function ProjectCard({ image, title, client, technologies, category }) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title} - Pour {client}</h5>
                <p className="card-text">
                    {technologies.map((techno, index) => (
                        <span key={index} className="badge techno-badge">{techno}</span>
                    ))}
                    <br />
                    <i className="bi bi-bookmark">{category}</i>
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>


    );
}

export default ProjectCard;