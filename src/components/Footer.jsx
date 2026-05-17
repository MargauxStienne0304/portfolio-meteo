function Footer({githubUrl= "https://github.com/MargauxStienne0304"}){
    return(
        <footer className="footer">
            <p>© 2026 Margaux Stienne</p>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                Mon Github
            </a>
        </footer>
    );
}

export default Footer;