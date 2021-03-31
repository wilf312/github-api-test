// create pr
// https://docs.github.com/en/rest/reference/pulls#create-a-pull-request

const { Octokit } = require('@octokit/core');
// personal token https://github.com/settings/tokens
const octokit = new Octokit({ auth: process.env.TOKEN });

const createPR = async (target, branch, text) => {
  try {

    const result = await octokit.request(`POST /repos/${target.owner}/${target.repo}/pulls`, {
      owner: target.owner,
      repo: target.repo,
      head: branch.head,
      base: branch.base,
      title: text.title,
      body: text.body
    })

    console.log(result)
    return result
  } catch (error) {
    console.log(error)

  }
}

createPR({
  owner: 'wilf312',
  repo: 'github-api-test',
},
{
  head: 'createapi',
  base: 'main',
},
{
  title: 'タイトル',
  body: 'ボディ',
})