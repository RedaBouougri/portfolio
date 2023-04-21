import { Card } from 'primereact/card';
import { TabView, TabPanel } from 'primereact/tabview';

export default function Experience() {

    return (
        <div className='card'>

            <Card style={{ marginTop: 15, marginRight: 20, marginLeft: 20 }}>
                <h3 className="text-4xl py-1    font-semibold mt-1 " style={{ textAlign: "left" }}>3Gcom</h3>
                <p className="m-0" style={{ textAlign: "left" }}>
                    Developpeur JEE/JSF            </p>
                <div>
                <h5 className="text-4xl py-1    font-semibold mt-1 " style={{ textAlign: "left" }}>Realisation d'une application CRM</h5>
                    <ul>
                        <li><p className="m-0" style={{ textAlign: "left" }}>
                            Back-end (Springboot)          </p></li>
                            <li><p className="m-0" style={{ textAlign: "left" }}>
                            Front-end (Java Server Faces)          </p></li>
                            <li><p className="m-0" style={{ textAlign: "left" }}>
                            Deploiment           </p></li>
                            <li><p className="m-0" style={{ textAlign: "left" }}>
                            Maintenance           </p></li>

                    </ul>
                </div>
                <p className="m-0" style={{ textAlign: "left" }}>
                    2021 - Aujourd'hui          </p>
            </Card>

            
        </div>
    )
}