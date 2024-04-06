import { useMemo } from "react";
import { useProjects } from "../hooks/useProjects"
import { ArrowCard } from "./ArrowCard";
import '../style/projects.css'



export const Projects = () => {
    const {tags, toggleTag, filter, filteredProjects} = useProjects();
    
    const filteredTags = tags.filter((tag) => {
        const frameTags: string[] = ['Astro', 'Flutter', 'React' ];
        return frameTags.includes(tag);
    })
    
    const memorizedTags = useMemo(() => (
        <ul className="tag-container">
            {filteredTags.map((tag)=> {
                return (
                    <li key={tag}>
                        <div className={`tag-chip ${filter.has(tag)? 'select': 'un-select'}`} onClick={() => toggleTag(tag)}>
                            <img src={`/icons/${tag.toLocaleLowerCase()}.svg`} alt="" width={20} height={20}/>
                            <p>{tag}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    ), [filter, tags])
  return (
    <section id="projects">
        <div className="hero-projects">
            <h2>Proyectos</h2>
            <div className="tags-container">
                {memorizedTags}
            </div>
        </div>

        <div className="projects-container">
            {
                filteredProjects.map( (project) => (
                    <ArrowCard key={project.id} project={project}/>
                ))
            }
        </div>

    </section>
  )
}
