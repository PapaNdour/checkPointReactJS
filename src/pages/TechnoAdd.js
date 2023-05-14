export default function TechnoAdd(){
    return(
        <div className="techno-Add">
            <h1>Choix des technologies</h1>
            <div>
                <form>
                    <label htmlFor="techno-name">Name</label>
                    <br />
                    <input type="text" lassName="form-input" id="techno-name"/>
                    <br />
                    <label htmlFor="email" className="form-label">Adresse e-mail</label>
                    <input type="email" className="form-control" id="email" />
                    <br />
                    <label htmlFor="techno-category">Catégories</label>
                    <br />
                    <select name="techno-category" id="techno-category">
                        <option value="">Selectionner une catégorie</option>
                        <option value="front">Front</option>
                        <option value="back">Back</option>
                        <option value="fullstack">Fullstack</option>
                        <option value="autre"> Autre</option>
                        <br />
                    </select>
                    <br />
                    <label htmlFor="techno-description">Description</label>
                    <br />
                    <textarea name="techno-description" id="techno-description" cols="30" rows="10"></textarea>
                    <br />
                    {/*
                    <input type="submit" value="Add techno" className="btn" />
                    A utiliser ulterieurement
                    */}

                    <button className="btn btn-primary ajouter"