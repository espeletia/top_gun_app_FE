import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Key, useEffect, useState } from 'react';
import { Tournament, TournamentProps, getAllTournamentsDto } from '../(types)/tournament';
import RootLayout from '../layout';

// export async function getAllTournaments() {
//     const client = new ApolloClient({
//         uri: 'localhost:8080/query',
//         cache: new InMemoryCache()
//     })
//     const { data } = await client.query({
//         query: gql`
//         query{
//           getAllTournaments{
//             Id
//             Events{
//               Athletes{
//                 User{
//                   FirstName
//                   BornIn
//                   Id
//                 }
//                 PooleSeeding
//                 TableauSeeding
//                 FinalRanking
//               }
//             }
//           }

//         }
//       `
//     });
//     JSON.parse(data)
//     console.log(data)

//     return (

//         data?.map((item: Tournament, i: number) => {
//             return <Tournament key={item.Id} tournament={item} />
//         })

//     )

// }


async function getAllTournaments() {
    const client = new ApolloClient({
        uri: 'http://localhost:8080/query', // added http:// to URI
        cache: new InMemoryCache()
    });
    const { data } = await client.query({
        query: gql`
        query {
          getAllTournaments {
            Id
            Events {
              Athletes {
                User {
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
    // console.log({data});
    // data.getAllTournaments.map((item: Tournament) => {
    //     console.log({item});
    // })

    return data.getAllTournaments.map((item: Tournament) => {
        return <Tournament key={item.Id} tournament={item} />;
    });
}


export default async function Page() {
    const data = await getAllTournaments();
    return <main>
        {data}
    </main>
}


function Tournament({ tournament }: TournamentProps) {
    const { Id } = tournament || {};
    // console.log({tournament})
    return (
        <div>
            <h2>{Id}</h2>
        </div>
    )
} 
