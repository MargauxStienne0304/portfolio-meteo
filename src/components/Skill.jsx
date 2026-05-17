function Skill({name, icon = "🛠"}){
    return (
        <div className="skill">
            <span>{icon} {name}</span>
        </div>
    );
}

export default Skill;