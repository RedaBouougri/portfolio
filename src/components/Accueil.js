import { Card } from 'primereact/card';

export default function Accueil() {

    return (
        <div className='card'>
            <header className='header'>
            <div className='text-center mb-4'>
            <img alt="Card" src={require('./reda.jpg')} className='rounded-circle profile-img' style={{ marginTop: 1}}/>
            </div>
            <h1>BOUOUGRI Reda</h1>
            <h2>Elève Ingenieur</h2>
            </header>
            <Card title="Bouougri Reda" style={{ marginTop: 35, marginRight: 20, marginLeft: 20 }}>
                <p className="m-0">
                    Ingénieur en informatique et réseaux option miage (méthodes informatiques appliquées à la gestion des entreprises).
                     Passionné par les nouvelles technologies de programmation. 
                     Mon expertise en informatique me permet de résoudre des problèmes complexes et de proposer des solutions innovantes pour répondre aux besoins de mes clients ou employeurs.
                     j'ai également développé des compétences en gestion de projet, ce qui me permet de gérer efficacement des équipes et de planifier les différentes étapes du développement de logiciels ou de projets informatiques.
                      J'ai également acquis une compréhension des différents aspects de la gestion des entreprises, tels que la finance, le marketing, la gestion des ressources humaines et la stratégie d'entreprise. 
                      Grâce à ces compétences en informatique et en gestion d'entreprise, je suis bien équipé pour réussir dans une variété de rôles professionnels, y compris en tant que développeur de logiciels, 
                     analyste de données, gestionnaire de projet ou consultant en technologie de l'information.
                     
                     
                                  </p>
           <br/>
           <br/>
           
            </Card>


        </div>
    )
}

