function FilterBar({ technologies = [], selectedTechnologies = [], onToggleTechnology = () => {}, categories = [], selectedCategories = [], onToggleCategory = () => {}, levels = [], selectedLevels = [], onToggleLevels = () => {} }) {
  return (
    <>
      {technologies.length > 0 &&
        <div>
          <h3 class="text-center">Filtrer par technologie</h3>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {technologies.map((techno) => {
              const isActive = selectedTechnologies.includes(techno);
              return (
                <button
                  key={techno}
                  className={`btn ${isActive ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => onToggleTechnology(techno)}
                >
                  {techno}
                </button>
              );
            })}
          </div>
        </div>
      }

      {categories.length > 0 &&
        <div>
          <h3 class="text-center">Filtrer par catégorie</h3>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategories.includes(cat);
              return (
                <button
                  key={cat}
                  className={`btn ${isActive ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => onToggleCategory(cat)}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      }

      {levels.length > 0 &&
        <div>
          <h3 class="text-center">Filtrer par niveau</h3>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {levels.map((level) => {
              const isActive = selectedLevels.includes(level);
              return (
                <button
                  key={level}
                  className={`btn ${isActive ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => onToggleLevels(level)}
                >
                  {level}
                </button>
              );
            })}
          </div>
        </div>
      }

    </>
  );
}

export default FilterBar;