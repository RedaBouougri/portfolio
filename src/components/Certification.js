import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Certification() {

    const devops = (
        <img alt="Card" src={require('./devops.png')} style={{height:250}} />
    );
    const react = (
        <img alt="Card" src={require('./react.png')} style={{height:250}} />
    );

    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
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
            image: devops
        },
        {
            title: 'Full-Stack Web Development with React',
            school: 'The Hong Kong University of Science and Technology',
            date: 'janv.2023',
            id: 'ND2N466XU469',
            image: react
        }
        
    ];

    const certificationTemplate = (certification) => {
        return (
            <div className='project-card'>
                <Card header={certification.image} className="card" >
                    <div className='project-title card-title h5' style={{textAlign:"left"}}>
                        {certification.title}
                    </div>
                    <br/>
                    <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>
                        {certification.school}
                    </div>
                    <div className='project-school card-subtitle h6' style={{textAlign:"left",marginTop:2}}>
                        Date de délivrance : {certification.date}
                    </div>
                    <div className='project-school card-subtitle h6' style={{textAlign:"left",marginTop:2}}>
                        Identifiant de la certification : {certification.id}
                    </div>
                </Card>
            </div>
        );
    };

    return (
        <div className='container mt-4'>
            <section className='section'>
                <Carousel value={certifications} numVisible={4} numScroll={1} responsiveOptions={responsiveOptions}
                          itemTemplate={certificationTemplate} />
            </section>
        </div>
    )
}


