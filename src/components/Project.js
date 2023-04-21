import { Card } from 'primereact/card';

export default function Projet() {

    const crm = (
        <img alt="Card" src={require('./crm.png')} style={{height:145}} />
    );
    const pokemon = (
        <img alt="Card" src={require('./pokemon.png')} style={{height:230,width:200}} />
    );
    const smarthome = (
        <img alt="Card" src={require('./smart.jpg')} style={{height:150}} />
    );
    const scolaire = (
        <img alt="Card" src={require('./scolaire.jpeg')} style={{height:150}} />
    );
    return (
        <div className='container mt-4'>

            <section className='section'>

                <div className='project-container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className='project-card card'  >
                    <Card  header={crm} className="md:w-25rem" style={{height:400}}>
                        <div className='project-title card-title h5'>

                            Plateforme de gestion des marchés et service apres ventes Crm
                        </div>
                        <br/>
                        <div className='project-school card-subtitle h6'>

                           3Gcom telecommunications & IT industry
                        </div>
                        <a className='project-link card-link'   href=" https://github.com/azdadanass/crm">

                         Link Github
                        </a>
                        </Card>
                    </div>
                    <div className='project-card card'>
                    <Card  header={pokemon} className="md:w-25rem" style={{height:400}}>
                        <div className='project-title card-title h5'>

                            Application android Pokedex
                        </div>
                        <br/>
                        <div className='project-school card-subtitle h6'>

                            Projet scolaire
                        </div>
                        <a className='project-link card-link'   href="https://github.com/reda108/pockemon">

                         Link Github
                        </a>
                        </Card>
                    </div>
                    <div className='project-card card'>
                    <Card  header={smarthome} className="md:w-25rem" style={{height:400}}>
                        <div className='project-title card-title h5'>

                            Smart home
                        </div>
                        <br/>
                        <div className='project-school card-subtitle h6'>

                            Projet scolaire
                        </div>
                        <a className='project-link card-link'   href="https://github.com/reda108/domitiqueProject">

                         Link Github
                        </a>
                        </Card>
                    </div>
                    <div className='project-card card'>
                    <Card  header={scolaire} className="md:w-25rem" style={{height:400}}>
                        <div className='project-title card-title h5'>

                            Gestion scolaire
                        </div>
                        <br/>
                        <div className='project-school card-subtitle h6'>

                            Projet scolaire
                        </div>
                        
                       </Card>
                    </div>

                </div>

            </section>

        </div>
    )
}

