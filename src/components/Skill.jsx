function Skill({skills}) {    
    return (
        <div >
            <ul className="skill">
                {skills.map((skill)=>(
                    <li key={skill}>
                        {skill.icon} {skill.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Skill;

