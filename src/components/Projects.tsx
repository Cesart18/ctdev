import type { CollectionEntry } from "astro:content"
import { useEffect, useMemo, useState } from "react";

interface Project {
    data: { 
        tags: string[];
        title: string;
        description: string;
        date: Date; 
        image?: { url: string; alt: string; } | undefined;  
        webUrl?: string | undefined; 
        repository?: string | undefined; 
      };
}

interface Props  {
    tags: string[],
    data: CollectionEntry<'projects'>[];
}

export const Projects = ({ data, tags }:Props) => {
    const [filter, setFilter] = useState<Set<string>>(new Set());
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

    useEffect(() => {
        const newFilteredProjects = data.filter((entry) => 
        Array.from(filter).every((tag) => 
        entry.data.tags.some((projectTag)=> 
        projectTag.toLocaleLowerCase() === tag.toLocaleLowerCase())));
        setFilteredProjects(newFilteredProjects);

    },[data, filter]);

    const toggleTag = (tag:string) => {
        setFilter( prevFilter => {
            const newFilter = new Set(prevFilter);
            if( newFilter.has(tag)){
                newFilter.delete(tag);
            }else{
                newFilter.add(tag);
            }
            return newFilter;
        });
    }

    


    const memorizedTags = useMemo(() => (
        <ul className="tag-container">
            {tags.map((tag)=> {
                return (
                    <li key={tag}>
                        <div className={`tag-chip ${filter.has(tag)? 'select': 'un-select'}`} onClick={() => toggleTag(tag)}>
                            {/* <svg width={20} height={20} className="tag-icon">
                                <use href={`/icons/icons.svg#${tag.toLocaleLowerCase()}`} ></use>
                            </svg> */}
                            <img src="/icons/dart.svg" alt="" width={20} height={20}/>
                            <p>{tag}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    ), [filter, tags])
  return (
    <>
    <div className="tags-container">
        {memorizedTags}
        
    </div>
    <div className="projects-container">
        {
            filteredProjects.map( project =>  (
                <p key={project.data.date.getTime()}>{project.data.title}</p>
            ))
        }
    </div>
    </>
  )
  }
