function NavBar({links}){    
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {links.map((link,index)=>(
                    <li key={index}>
                        <a href={link.url}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default NavBar;