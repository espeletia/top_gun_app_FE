import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Some content about fencing</p>
    </div>
  )
}

export async function getGraphqlShit() {
  const client = new ApolloClient({
    uri: 'https://localhost:8080/query',
    cache: new InMemoryCache()
  })
  const { data } = await client.query({
    query: gql`
      query{
        getAllTournaments{
          Id
          Events{
            Athletes{
              User{
                FirstName
                BornIn
                Id
              }
              PooleSeeding
              TableauSeeding
              FinalRanking
            }
          }
        }

      }
    `
  });
  return {
    data
  }
}