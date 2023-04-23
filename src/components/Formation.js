import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';

export default function Formation() {

    return (
        <div className='card'>
            <Panel header="Bac+5" toggleable style={{ marginTop: 15, marginRight: 20, marginLeft: 20 }}>
                
                <p className="m-0" style={{ textAlign: "left" }}>
                    Eléve Ingénieur en informatique et Réseaux option : Miage           </p>
                <p className="m-0" style={{ textAlign: "left" }}>
                    Emsi Marrakech           </p>
                <p className="m-0" style={{ textAlign: "left" }}>
                    2022 - 2024          </p>
            </Panel>
            <Panel header="Licence" toggleable style={{ marginTop: 15, marginRight: 20, marginLeft: 20 }}>
                
                <p className="m-0" style={{ textAlign: "left" }}>
                    License  Science et technique Systèmes informatiques repartis : Sir           </p>
                <p className="m-0" style={{ textAlign: "left" }}>
                    Fst Marrakech           </p>
                <p className="m-0" style={{ textAlign: "left" }}>
                    2020 - 2021          </p>
            </Panel>
            <Panel header="Deust" toggleable style={{ marginTop: 15, marginRight: 20, marginLeft: 20 }}>
                
                <p className="m-0" style={{ textAlign: "left" }}>
                    Diplôme d'études universitaires scientifiques et techniques Deust en Mathematique Informatique Physique          </p>
                <p className="m-0" style={{ textAlign: "left" }}>
                    Fst Marrakech           </p>
                <p className="m-0" style={{ textAlign: "left" }}>
                    2018 - 2020          </p>
            </Panel>
            <Panel header="Bac" toggleable style={{ marginTop: 15, marginRight: 20, marginLeft: 20 }}>
             
                <p className="m-0" style={{ textAlign: "left" }}>
                    Bac en Sciences Physiques       </p>
                <p className="m-0" style={{ textAlign: "left" }}>
                    Lycée Al Khawarizmi,Guelmim           </p>
                <p className="m-0" style={{ textAlign: "left" }}>
                    2015 - 2018          </p>
            </Panel>



                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    



        </div>
    )
}

