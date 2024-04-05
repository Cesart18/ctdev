// import type { CollectionEntry } from "astro:content"
import { useEffect, useState } from "react";
import { getCollection } from "astro:content";



const projects = ( await getCollection('projects'))
.sort((a,b) => a.data.date.getTime() - a.data.date.getTime());

const tags = [...new Set(projects.flatMap( project => project.data.tags ))]
.sort((a,b) => a.localeCompare(b));

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



export const useProjects = () => {
    const [filter, setFilter] = useState<Set<string>>(new Set());
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

    useEffect(() => {
        const newFilteredProjects = projects.filter((entry) => 
        Array.from(filter).every((tag) => 
        entry.data.tags.some((projectTag)=> 
        projectTag.toLocaleLowerCase() === tag.toLocaleLowerCase())));
        setFilteredProjects(newFilteredProjects);

    },[projects, filter]);

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
    return {
        tags, filteredProjects, toggleTag, filter
    }
}