function FilterBar({ technologies = [], selectedTechnologies = [], categories = [], selectedCategories = [], levels = [], selectedLevels = [] }) {
  return (
    <>
      {technologies.length > 0 &&
        <div>
          <h3 class="text-center">Filter</h3>
          <div class="filtres-tech grid d-flex justify-content-center">

            {technologies.map((techno, index) => {
              const isActive = selectedTechnologies.includes(techno);
              return (
                <button
                  key={index}
                  className={`btn ${isActive ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => onToggle(techno)}
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
          <h3 class="text-center">Filter</h3>
          <div class="filtres-tech grid d-flex justify-content-center"></div>
        </div>
      }

      {levels.length > 0 &&
        <div>
          <h3 class="text-center">Filter</h3>
          <div class="filtres-tech grid d-flex justify-content-center"></div>
        </div>
      }

    </>
  );
}

export default FilterBar;