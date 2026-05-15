function Footer({githubUrl}){
    return(
        <footer className="footer">
            <p>© 2026 Margaux Stienne</p>
            <a href={githubUrl} target="_blank">
                Mon Github
            </a>
        </footer>
    );
}

export default Footer;