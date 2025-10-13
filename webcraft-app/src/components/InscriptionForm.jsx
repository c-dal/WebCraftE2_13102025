function InscriptionForm() {

    // Champs obligatoires (validation JS 
    // Prénom, Nom (min 2 car.)📋 Sujet E1 G3  Conception d'interfaces front-end sans framework3
    // Email (regex : /^[^\s@]+@[^\s@]+\.[^\s@]+$/ )
    // Téléphone (format international)
    // Formation (select dynamique depuis API 2
    // Niveau (select  Débutant/Intermédiaire/Avancé)
    // Motivation (textarea, min 50 car.)
    // Champs optionnels :
    // Entreprise, Expérience (années)
    return (
        <>
            <form>
                <div class="mb-3">
                    <label for="prenom" class="form-label">Prénom</label>
                    <input type="text" class="form-control" id="prenom" required minLength={2} />
                </div>
                <div class="mb-3">
                    <label for="nom" class="form-label">Nom</label>
                    <input type="text" class="form-control" id="nom" required minLength={2} />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required/>
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label">Telephone</label>
                    <input type="phone" class="form-control" id="phone" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default InscriptionForm;

