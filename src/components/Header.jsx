function Header({title="Mon Portfolio Dev", subtitle = "Margaux Stienne"}) {
    return (
        <header className="header">
            <h1>{title}</h1>
            <p> 👩‍💻 {subtitle}</p>
        </header>
    );
}

export default Header;