import { Card } from 'primereact/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
  <div className='project-container row'>
    <div className='project-card col-12 col-md-5 mb-4'>
      <Card header={devops} className="card" >
        <div className='project-title card-title h5' style={{textAlign:"left"}}>
        DevOps, Cloud, and AgileFoundations
        </div>
        <br/>
        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>
        IBM
        
        </div>
        <div className='project-school card-subtitle h6' style={{textAlign:"left",marginTop:2}}>
        
        Date de délivrance : mars.2023
     
        </div>
        <div className='project-school card-subtitle h6' style={{textAlign:"left",marginTop:2}}>
       
        Identifiant de la certification : SKUCJYUFZPX2
        </div>
        
      </Card>
    </div>
  
    <div className='project-card col-12 col-md-5 mb-4'>
      <Card header={react} className="card" >
        <div className='project-title card-title h5' style={{textAlign:"left"}}>
        Full-Stack Web Development with React
        </div>
        <br/>
        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>
          
        The Hong Kong University of Science and Technology

        </div>
        <div className='project-school card-subtitle h6' style={{textAlign:"left",marginTop:2}}>
          

Date de délivrance : janv.2023

        </div>
        <div className='project-school card-subtitle h6' style={{textAlign:"left",marginTop:2}}>
          

Identifiant de la certification : ND2N466XU469
        </div>
        
      </Card>
    </div>
  </div>
</section>


        </div>
    )
}

