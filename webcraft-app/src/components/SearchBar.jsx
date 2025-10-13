import { useState } from "react";

function SearchBar({query, onChange}) {
    return (
        <>
            <input
                type="text"
                placeholder="Rechercher"
                value={query}
                onChange={onChange}
                style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
            />

        </>
    );
}

export default SearchBar;

