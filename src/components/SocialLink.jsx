function SocialLink({ platform, url, username }) {
    const icons = {
        GitHub: "🐙",
        LinkedIn: "💼",
    };

    return(
        <a href={url} target="_blank" className="social-link">
            {icons[platform] || "🔗"} {platform} : @{username}
        </a>
    )
}
export default SocialLink;