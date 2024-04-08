import { Octokit } from "@octokit/rest";

import dotenv from "dotenv";
import type { GitRepo } from "../models/GitRepo";
import { gitrepoToEntity } from "../mapper/gitrepoToEntity";
import { Repository } from '../entities/Repository';

    dotenv.config();

    const auth = process.env.AUTH_TOKEN;

const octokit = new Octokit({
  auth: auth,
});

const resp = await octokit.request("GET /users/cesart18/repos", {
    headers: { "X-GitHub-Api-Version": "2022-11-28" }
});

const repositories:Repository[] = await resp.data.map( (repo:GitRepo) => {
    return gitrepoToEntity(repo);
})

export { repositories }; 