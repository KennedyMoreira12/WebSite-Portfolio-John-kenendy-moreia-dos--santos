const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  basePath = `/${repo}`
}

export function assetPath(path) {
  return `${basePath}${path}`
}

export default basePath