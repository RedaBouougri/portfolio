import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



  export default function Projet2() {

    const responsiveOptions = [
        {
          breakpoint: '1199px',
          numVisible: 2,
          numScroll: 2
        },
        {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 2
        },
        {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
        }
      ];

    const items = [
        {
          header: <img alt="Card" src={require('./crm.png')} style={{height:145}} />,
          title: 'Plateforme de gestion des marchés et service apres ventes Crm',
          school: '3Gcom telecommunications & IT industry',
          githubLink: 'https://github.com/azdadanass/crm'
        },
        {
          header: <img alt="Card" src={require('./pokemon.png')} style={{height:230,width:200}} />,
          title: 'Application android Pokedex',
          school: 'Projet scolaire',
          githubLink: 'https://github.com/reda108/pockemon'
        },
        {
          header: <img alt="Card" src={require('./smart.jpg')} style={{height:150}} />,
          title: 'Smart home',
          school: 'Projet scolaire',
          githubLink: 'https://github.com/reda108/domitiqueProject'
        },
        {
          header: <img alt="Card" src={require('./scolaire.jpeg')} style={{height:150}} />,
          title: 'Gestion scolaire',
          school: 'Projet scolaire'
        }
      ];
    
      const itemTemplate = (item) => {
        return (
          <div className='project-card'>
            <Card header={item.header} className="card" style={{height:400}}>
              <div className='project-title card-title h5'>
                {item.title}
              </div>
              <br/>
              <div className='project-school card-subtitle h6'>
                {item.school}
              </div>
              {item.githubLink && (
                <a className='project-link card-link' href={item.githubLink}>
                  Link Github
                </a>
              )}
            </Card>
          </div>
        );
      };
    return (
      <div className='container mt-4'>
        <section className='section'>
          <div className='project-container row'>
            <Carousel value={items} itemTemplate={itemTemplate} responsiveOptions={responsiveOptions} numVisible={3} numScroll={1} />
          </div>
        </section>
      </div>
    );
  }
  
  