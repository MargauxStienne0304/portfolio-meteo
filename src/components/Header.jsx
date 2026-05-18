import NavBar from './NavBar';

function Header({title="Mon Portfolio Dev", subtitle = "Margaux Stienne"}) {
    return (<div >
        <header className='header'>
            <h1>{title}</h1>
            <p> 👩‍💻 {subtitle}</p>
        </header>
              <NavBar
      links={[
        { text:"Accueil", url:"/"},
        { text:"Projects", url:"/projects"},
        { text:"Contact", url:"/contact"},
        ]}
        /></div>
    );
}

export default Header;