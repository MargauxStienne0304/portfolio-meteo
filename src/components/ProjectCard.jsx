function ProjectCard({title, imageUrl, description}){
return (
<div className="project_card">
    <title>{title}</title>
    {imageUrl ? (<img src={imageUrl} alt={title} className="project_image"/>) 
    : ( <div className="project_image"></div> )
    }
    <p>{description}</p>
</div>
)
};

export default ProjectCard;