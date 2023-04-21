import { Card } from 'primereact/card';

export default function Formation() {

    return (
        <div className='card'>

            <Card  style={{ marginTop: 15, marginRight: 20, marginLeft: 20 }}>
            <h3 className="text-4xl py-1    font-semibold mt-1 " style={{textAlign:"left"}}>Bac+5</h3>
                <p className="m-0" style={{textAlign:"left"}}>
                Eléve Ingénieur en informatique et Réseaux option : Miage           </p>
                <p className="m-0" style={{textAlign:"left"}}>
                Emsi Marrakech           </p>
                <p className="m-0" style={{textAlign:"left"}}>
                2022 - 2024          </p>
            </Card>

            <Card style={{ marginTop: 15, marginRight: 20, marginLeft: 20 }}>
            <h3 className="text-4xl py-1    font-semibold mt-1" style={{textAlign:"left"}}>Licence</h3>
            <p className="m-0" style={{textAlign:"left"}}>
                License  Science et technique Systèmes informatiques repartis : Sir           </p>
                <p className="m-0" style={{textAlign:"left"}}>
                Fst Marrakech           </p>
                <p className="m-0" style={{textAlign:"left"}}>
                2020 - 2021          </p>
            </Card>

            <Card  style={{ marginTop: 15, marginRight: 20, marginLeft: 20  }}>
            <h3 className="text-4xl py-1    font-semibold mt-1 " style={{textAlign:"left"}}>Deust</h3>
            <p className="m-0" style={{textAlign:"left"}}>
                Diplôme d'études universitaires scientifiques et techniques Deust en Mathematique Informatique Physique          </p>
                <p className="m-0" style={{textAlign:"left"}}>
                Fst Marrakech           </p>
                <p className="m-0" style={{textAlign:"left"}}>
                2018 - 2020          </p>
            </Card>
            <Card  style={{ marginTop: 15, marginRight: 20, marginLeft: 20  }}>
            <h3 className="text-4xl py-1    font-semibold mt-1 " style={{textAlign:"left"}}>Bac</h3>
            <p className="m-0" style={{textAlign:"left"}}>
                Bac en Sciences Physiques       </p>
                <p className="m-0" style={{textAlign:"left"}}>
                Lycée Al Khawarizmi,Guelmim           </p>
                <p className="m-0" style={{textAlign:"left"}}>
                2015 - 2018          </p>
            </Card>


        </div>
    )
}

