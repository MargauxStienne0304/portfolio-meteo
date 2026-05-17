import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Skill from "./components/Skill";
import SocialLink from "./components/SocialLink";
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar
      links={[
        { text:"Accueil", url:"/"},
        { text:"Projects", url:"/projects"},
        { text:"Contact", url:"/contact"},
        ]}
        />
      <main>
        <Section title="À propos de moi">
          <p>J'ai découvert le développement web grâce à l'application Mimo avant de me former à l'Ecole O'Clock et je suis maintenant développeuse FullStack et passionnée ! </p>
        </Section>
        <Section title="Mes Compétences">
          <Skill name="JavaScript" icon="🐢" />
        </Section>
        <Section title="Mes projets">
          <p>Projets à venir...</p>
        </Section>
        <Section title="Mes Réseaux">
          <SocialLink
            platform="GitHub"
            url="https://github.com/MargauxStienne0304"
            username="MargauxStienne0304" 
            />
          <SocialLink
            platform="LinkedIn"
            url="www.linkedin.com/in/margaux-stienne"
            username="Margaux Stienne" 
            />            
        </Section>
      </main>
      <Footer githubUrl="https://github.com/MargauxStienne0304" />
    </div>
  );
}

export default App;