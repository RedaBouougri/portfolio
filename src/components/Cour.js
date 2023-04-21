import { Card } from 'primereact/card';
import { TabView, TabPanel } from 'primereact/tabview';

export default function Cour() {

    return (
        <div className='card'>

            <TabView>
                <TabPanel header="Springboot/JEE">
                <Card  style={{ marginTop: 15, marginRight: 20, marginLeft: 20 }}>
                    <p className="m-0">
                        Spring Boot est un framework Java qui permet aux développeurs de créer rapidement des applications web. 
                        Il facilite le développement en offrant des fonctionnalités telles que la configuration automatique,
                         la gestion des dépendances et la création de serveurs web embarqués. Spring Boot est apprécié pour sa facilité d'utilisation et sa flexibilité,
                          ce qui en fait un choix populaire pour les projets de toutes tailles.
                    </p>
                    </Card>
                </TabPanel>
                <TabPanel header="React">
                <Card  style={{ marginTop: 15, marginRight: 20, marginLeft: 20 }}>
                    <p className="m-0">
                    React est une bibliothèque JavaScript qui permet de créer des interfaces utilisateur interactives pour les applications web.
                     Il utilise une approche basée sur les composants pour la création d'interface, ce qui permet aux développeurs de diviser une application en parties plus petites et plus gérables.
                      React est populaire pour sa facilité d'utilisation et son efficacité, car il permet de créer des interfaces utilisateur complexes de manière simple et rapide.
                    </p>
                    </Card>
                </TabPanel>
                <TabPanel header="Python/Django">
                <Card  style={{ marginTop: 15, marginRight: 20, marginLeft: 20 }}>
                    <p className="m-0">
                    Django est un framework web Python qui permet de créer rapidement des applications web complexes. 
                    Il inclut des fonctionnalités telles que la sécurité, la gestion de base de données et l'authentification utilisateur, 
                    ce qui en fait un choix populaire pour les projets de grande envergure. 
                    Django utilise le principe du modèle-vue-contrôleur (MVC) pour organiser le code et faciliter la maintenance et la mise à jour de l'application.
                    </p>
                    </Card>
                </TabPanel>
                <TabPanel header="Android">
                <Card  style={{ marginTop: 15, marginRight: 20, marginLeft: 20 }}>
                    <p className="m-0">
                    Android est un système d'exploitation mobile développé par Google qui est utilisé pour les smartphones, 
                    les tablettes et d'autres appareils mobiles. Il utilise le langage de programmation Java ou Kotlin pour le développement d'applications. 
                    Android est apprécié pour sa grande flexibilité et sa grande communauté de développeurs, ce qui en fait un choix populaire pour le développement d'applications mobiles. 
                    Les développeurs peuvent utiliser Android Studio, 
                    l'environnement de développement intégré (IDE) officiel pour développer des applications Android.
                    </p>
                    </Card>
                </TabPanel>
            </TabView>
            <br />
            <br />
            <br />

        </div>
    )
}