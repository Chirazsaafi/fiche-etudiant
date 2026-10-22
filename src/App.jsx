import photo from './assets/1.jpg'; import './App.css';

function App() { return ( <div className="student-card"> <h1>Fiche étudiant</h1>


  <img
    className="student-photo"
    src={photo}
    alt="Photo étudiant"
  />

  <div className="student-info">
    <p><strong>Nom :</strong> Saafi</p>
    <p><strong>Prénom :</strong> chiraz</p>
    <p><strong>Email :</strong> chirazsaafi143@gmail.com</p>
    <p><strong>Téléphone :</strong> 93060349</p>
    <p><strong>Filière :</strong> Informatique</p>
    <p><strong>Année d'étude :</strong> 2ème année</p>
    <p><strong>Groupe :</strong> GLSI D</p>
    <p><strong>Ville :</strong> Monastir</p>
  </div>

  <a
    className="contact-btn"
    href="mailto:chirazzsafi143@gmail.com"
  >
    Contacter
  </a>
</div>
); }

export default App;