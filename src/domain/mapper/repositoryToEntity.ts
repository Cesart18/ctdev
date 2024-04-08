
import { Project } from "../entities/Project";
import type { Repository } from "../models/Repository";



    export const repositoryToEntity = (repository:Repository) => {
        const {id,name ,description, html_url, created_at, languages_url, homepage} = repository;


        return new Project({
            id,
            name,
            description,
            htmlUrl:html_url,
            createdAt: created_at,
            homepage,
            languagesUrl: languages_url
        });
    }