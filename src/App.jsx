import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Skill from "./components/Skill";
import SocialLink from "./components/SocialLink";
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Section title="À propos de moi">
          <p>J'ai découvert le développement web grâce à l'application Mimo avant de me former à l'Ecole O'Clock et je suis maintenant développeuse FullStack et passionnée ! </p>
        </Section>
        <Section title="Mes Compétences">
          <p className="skills">Compétences acquises</p>
          <Skill         
          skills={[
          {icon:"📜", name:"HTML5"},
          {icon:"🎨", name:"CSS"},
          {icon:"🏷️", name:"EJS"},
          {icon:"⚡", name:"JavaScript"},
          {icon:"🧱", name:"POO"},
          {icon:"🔺", name:"Svelte"},
          {icon:"🟢", name:"Node.js"},
          {icon:"🚂", name:"Express"},
          {icon:"🐟", name:"Sequelize"},
          {icon:"🐘", name:"PostgreSQL"},
        ]}/>
          <p className="skills">Compétences en cours d'acquisition</p>
         <Skill skills={[
          {icon:"⚛️", name:"React"},
          {icon:"☕", name:"Java"},
          {icon:"🔹", name:"PHP"},
          {icon:"🎼", name:"Symphony"}
         ]} />
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