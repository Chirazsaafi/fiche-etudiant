import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";

// 1. Importation mta3 les images mta3 les étudiants mel dossier assets
import salimImage from "./assets/salim.jpg";
import sarraImage from "./assets/sarra.jpg";
import mariemImage from "./assets/mariem.jpg";

const etudiants = [
  {
    prenom: "Slim",
    nom: "Boubaker",
    email: "slimboubaker@gmail.com",
    telephone: "+216 99 999 999",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    image: salimImage, // Rabt taswira Slim
  },
  {
    prenom: "Sarra",
    nom: "Trabelsi",
    email: "sarra.trabelsi@gmail.com",
    telephone: "+216 22 345 678",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 1",
    ville: "Sousse",
    image: sarraImage, // Rabt taswira Sarra
  },
  {
    prenom: "Mariem",
    nom: "Khalfallah",
    email: "mariem.khalfallah@gmail.com",
    telephone: "+216 27 567 890",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Monastir",
    image: mariemImage, // Rabt taswira Mariem
  },
];

function App() {
  return (
    <div className="app-container" id="accueil">
      <Header />
      <Navbar />
      <main className="students-list" id="etudiants">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
          />
        ))}
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;