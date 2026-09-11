import React, { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { Container, Content, Ul, Li, TitleProject, Description, Topics, Topic, Created_at, Links, RepoLink, Loading, Error } from '../../../styles/projectsStyle'

export default function Projects() {
  const [itemsApi, setItemsApi] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let abortController = new AbortController();

    function getGitHubAPI() {
      fetch('https://api.github.com/users/KennedyMoreira12/repos?sort=updated&per_page=30', {
        signal: abortController.signal
      })
      .then(async res => {
        if (!res.ok) {
          throw new Error(`Erro ${res.status}`)
        }
        const data = await res.json()
        setItemsApi(data)
        setLoading(false)
      })
      .catch(e => {
        if (e.name !== 'AbortError') {
          setError(e.message)
          setLoading(false)
        }
      })
    }

    getGitHubAPI()

    return () => abortController.abort();
  }, [])

  if (loading) {
    return (
      <Loading>
        <FaGithub size={24} /> Carregando projetos...
      </Loading>
    )
  }

  if (error) {
    return (
      <Error>
        <span>Erro ao carregar projetos: {error}</span>
      </Error>
    )
  }

  return (
    <Container>
     <Content>
       <Ul>
        {itemsApi.map(item => (
          <Li key={item.id}>
            <TitleProject>{item.name}</TitleProject>
            {item.description && <Description>{item.description}</Description>}
            {item.topics && item.topics.length > 0 && (
              <Topics>
                {item.topics.map(topic => (
                  <Topic key={topic}>{topic}</Topic>
                ))}
              </Topics>
            )}
            <Created_at>
              Criado em: {Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}
            </Created_at>
            <Links>
              <RepoLink href={item.html_url} target="_blank" rel="noopener noreferrer">
                <FaGithub /> Repositório
              </RepoLink>
              {item.homepage && (
                <RepoLink href={item.homepage} target="_blank" rel="noopener noreferrer">
                  Demo
                </RepoLink>
              )}
            </Links>
          </Li>
        ))}
       </Ul>
     </Content>
   </Container>
  )
}
