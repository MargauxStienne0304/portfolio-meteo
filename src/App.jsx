import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import './App.css';

function App(){
  return(
    <div className="app">
      <Header />
         <main>
        <Section title="À propos de moi">
          <p>J'ai découvert le développement web grâce à l'application Mimo avant de me former à l'Ecole O'Clock et je suis maintenant développeuse FullStack et passionnée ! </p>
        </Section>
        <Section title="Mes projets">
          <p>Projets à venir...</p>
        </Section>
      </main>
      <Footer githubUrl="https://github.com/MargauxStienne0304" />
    </div>
  );
}

export default App;