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
          <p className="skills">Compétences acquises</p>
          <Skill name="HTML5" icon="📜" />
          <Skill name="CSS" icon="🎨" />
          <Skill name="EJS" icon="🏷️" />
          <Skill name="JavaScript" icon="⚡" />
          <Skill name="POO" icon="🧱"/>
          <Skill name="Svelte" icon="🔺" />
          <Skill name="Node.js" icon="🟢" />
          <Skill name="Express" icon="🚂" />
          <Skill name="Sequelize" icon="🐟" />
          <Skill name="PostgreSQL" icon="🐘" />
          <p className="skills">Compétences en cours d'acquisition</p>
          <Skill name="React" icon="⚛️"/>
          <Skill name="Java" icon="☕"/>
          <Skill name="PHP" icon="🔹"/>
          <Skill name="Symphony" icon="🎼"/>

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
            url="https://www.linkedin.com/in/margaux-stienne"
            username="Margaux Stienne" 
            />            
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;