import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Certification() {

  const devopsfull = (
    <img alt="Card" src={require('./devopsfull.png')} style={{ height: 250 }} />
  );
  const reactfull = (
    <img alt="Card" src={require('./reactfull.png')} style={{ height: 250 }} />
  );
  const bootstrap = (
    <img alt="Card" src={require('./bootstrap.png')} style={{ height: 250 }} />
  );
  const react = (
    <img alt="Card" src={require('./react.png')} style={{ height: 250 }} />
  );
  const nodejs = (
    <img alt="Card" src={require('./nodejs.png')} style={{ height: 250 }} />
  );
  const devops = (
    <img alt="Card" src={require('./devops.png')} style={{ height: 250 }} />
  );
  const cloud = (
    <img alt="Card" src={require('./cloud.png')} style={{ height: 250 }} />
  );
  const agile = (
    <img alt="Card" src={require('./agile.png')} style={{ height: 250 }} />
  );

  const responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  

  const certifications = [
    {
      title: 'DevOps, Cloud, and Agile Foundations',
      school: 'IBM',
      date: 'mars.2023',
      id: 'SKUCJYUFZPX2',
      image: devopsfull,
      link : 'https://www.coursera.org/account/accomplishments/specialization/SKUCJYUFZPX2'
    },
    {
      title: 'Full-Stack Web Development with React',
      school: 'The Hong Kong University of Science and Technology',
      date: 'janv.2023',
      id: 'ND2N466XU469',
      image: reactfull,
      link : 'https://www.coursera.org/account/accomplishments/specialization/ND2N466XU469'
    },
    {
      title: 'Front-End Web UI Frameworks and Tools:Bootstrap 4',
      school: 'The Hong Kong University of Science and Technology',
      date: 'dec.2022',
      id: '53CMSPMSB2B6',
      image: bootstrap,
      link : 'https://www.coursera.org/account/accomplishments/verify/53CMSPMSB2B6'
    },
    {
      title: 'Front-End Web Development with React',
      school: 'The Hong Kong University of Science and Technology',
      date: 'dec.2022',
      id: 'V7JF4DZRPYPV',
      image: react,
      link : 'https://www.coursera.org/account/accomplishments/verify/V7JF4DZRPYPV'
    },
    {
      title: 'NodeJS, Express and MongoDB',
      school: 'The Hong Kong University of Science and Technology',
      date: 'janv.2023',
      id: 'VVA3Q3DRRWT5',
      image: nodejs,
      link : 'https://www.coursera.org/account/accomplishments/verify/VVA3Q3DRRWT5'
    },
    {
      title: 'Introduction to DevOps',
      school: 'IBM',
      date: 'mars.2023',
      id: 'BUEDQ8RW2USC',
      image: devops,
      link : 'https://www.coursera.org/account/accomplishments/verify/BUEDQ8RW2USC'
    },

    {
      title: 'Introduction to Cloud Computing',
      school: 'IBM',
      date: 'mars.2023',
      id: 'UPN88GBKBCQ5',
      image: cloud,
      link : 'https://www.coursera.org/account/accomplishments/verify/UPN88GBKBCQ5'
    },
    {
      title: 'Introduction to Agile Development and Scrum',
      school: 'IBM',
      date: 'mars.2023',
      id: 'DPCH3DT4WQ9E',
      image: agile,
      link : 'https://www.coursera.org/account/accomplishments/verify/DPCH3DT4WQ9E'
    }
    




  ];

  const certificationTemplate = (certification) => {
    return (
      <div className='project-card'>
        
        <Card  header={certification.image}  className="card" >
          <div className='project-title card-title h5' style={{ textAlign: "left" }}>
            {certification.title}
          </div>
          <br />
          <div className='project-school card-subtitle h6' style={{ textAlign: "left" }}>
            {certification.school}
          </div>
          <div className='project-school card-subtitle h6' style={{ textAlign: "left", marginTop: 2 }}>
            Date de délivrance : {certification.date}
          </div>
          <div className='project-school card-subtitle h6' style={{ textAlign: "left", marginTop: 2 }}>
            Identifiant de la certification : {certification.id}
          </div>
          <div className='project-school card-subtitle h6' style={{ textAlign: "left", marginTop: 2 }}>
            Certification Link :  <a href={certification.link} >Link </a>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <div className='container mt-4'>
      <section className='section'>
        <Carousel value={certifications} numVisible={2} numScroll={1} responsiveOptions={responsiveOptions}
          itemTemplate={certificationTemplate} autoplayInterval={3000} />
      </section>
    </div>
  )
}


