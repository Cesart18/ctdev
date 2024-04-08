import { Octokit } from "@octokit/rest";

import dotenv from 'dotenv';

dotenv.config();

const auth = process.env.AUTH_TOKEN;

const octokit = new Octokit({
    auth: auth,
})

const repos = await octokit.request('GET /users/cesart18/repos',{
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
})
console.log(repos)
export { repos };
