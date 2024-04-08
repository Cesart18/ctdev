
import { Repository } from "../entities/Repository";
import type { GitRepo } from "../models/GitRepo";



    export const gitrepoToEntity = (repository:GitRepo) => {
        const {id,name ,description, html_url, created_at, languages_url, homepage} = repository;



        return new Repository({
            id,
            name,
            description,
            htmlUrl:html_url,
            createdAt: created_at,
            homepage,
            languagesUrl: languages_url
        });
    }