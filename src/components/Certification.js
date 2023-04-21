import { Card } from 'primereact/card';

export default function Certification() {

    const devops = (
        <img alt="Card" src={require('./devops.png')} style={{height:250}} />
    );
    const react = (
        <img alt="Card" src={require('./react.png')} style={{height:250}} />
    );
    return (
        <div className='container mt-4'>

            <section className='section'>

                <div className='project-container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className='project-card card'  >
                    <Card  header={devops} className="md:w-25rem" style={{height:450}}>
                        <div className='project-title card-title h5' style={{textAlign:"left"}}>

                        DevOps, Cloud, and AgileFoundations
                        </div>
                        <br/>
                        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>

                           IBM
                        </div>
                        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>

                           date de délivrance : mars.2023
                        </div>
                        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>

                           identifiant de la certification : SKUCJYUFZPX2
                        </div>
                        
                        </Card>
                    </div>
                    <div className='project-card card'>
                    <Card  header={react} className="md:w-25rem" style={{height:450}}>
                        <div className='project-title card-title h5' style={{textAlign:"left"}}>

                        Full-Stack Web Development with React

                        </div>
                        <br/>
                        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>

                           IBM
                        </div>
                        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>

                           date de délivrance : janv.2023
                        </div>
                        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>

                           identifiant de la certification : ND2N466XU469
                        </div>
                        
                        </Card>
                    </div>
                   

                </div>

            </section>

        </div>
    )
}

