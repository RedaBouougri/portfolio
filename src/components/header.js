import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import {useNavigate} from "react-router-dom";    
//core
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";



export default function BasicDemo() {

    const navigate = useNavigate();
    const items = [
        {label: 'Accueil', icon: 'pi pi-fw pi-home' , command: () => {navigate('/')}},
        {label: 'Formations', icon: 'pi pi-fw pi-book' , command: () => {navigate('/Formation ')}},
        {label: 'Experiences', icon: 'pi pi-fw pi-list' , command: () => {navigate('/Experience ')}},
        {label: 'Projets', icon: 'pi pi-fw pi-box' , command: () => {navigate('/Projet ')}},
        {label: 'Certifications', icon: 'pi pi-fw pi-verified', command: () => {navigate('/Certification ')}},
        
        
    ];

    const style = {
        backgroundColor: 'rgba(245,243,246,0.88)',
        color: '#230202',
        borderRadius:"20px",
        justifyContent: 'left'
    };

    return (
        <div className="card">
            <TabMenu model={items} style={style} />
        </div>
    )
}