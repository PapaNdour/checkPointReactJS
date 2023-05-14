export default function Menu(){
    return(
        <div className="menu">
            <ul>
                {/*
                <li>Home</li>
                <li>Add Techno</li>
                <li>All Techno</li>
                */}

                <li><a href="index.html">Accueil</a></li>
                <li><a href="add_techno.html">Choix des compétences</a></li>
                <li><a href="techno_list.html">Liste de choix</a></li>
                
            </ul>
        </div>
    )
}