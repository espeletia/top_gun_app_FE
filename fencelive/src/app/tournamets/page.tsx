import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Key, useEffect, useState } from 'react';
import { Tournament, getAllTournamentsDto } from '../(types)/tournament';
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


export async function getAllTournaments() {
    const client = new ApolloClient({
        uri: 'localhost:8080/query', // added http:// to URI
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
    console.log(data);

    return data.getAllTournaments.map((item: Tournament) => {
        return <Tournament key={item.Id} tournament={item} />;
    });
}


// export default function Tournaments() {
//     const [tournaments, setTournaments] = useState<Array<Tournament> | Promise<any>>()
//     useEffect(() => {
//         const getTournaments = async () => {
//             return getAllTournaments
//         }
//         setTournaments(getTournaments)
//     }, [])

//     return (
//         <div>
//             <h1>TOURNAEMNTS</h1>
//             <div>
//                 {typeof (tournaments) != Promise ? tournaments?.map((tournament: { id: Key | null | undefined; }) => {
//                     return <Tournament key={tournament.id} tournament={tournament} />
//                 }) : null}
//             </div>
//         </div>
//     )
// }

export default function Tournaments() {
    const [tournaments, setTournaments] = useState<Array<Tournament>>();
    useEffect(() => {
        const getTournaments = async () => {
            const result = await getAllTournaments();
            setTournaments(result);
        };
        getTournaments();
    }, []);

    useEffect(() => {
        console.log(tournaments)
    }, [tournaments])

    return (
        <RootLayout>
            <div>
                <h1>TOURNAMENTS</h1>
                <div>
                    {tournaments?.map((tournament: Tournament) => {
                        return <Tournament key={tournament.Id} tournament={tournament} />;
                    })}
                </div>
            </div>
        </RootLayout>
    );
}

function Tournament({ tournament }: any) {
    const { id } = tournament || {};
    return (
        <div>
            <h2>{id}</h2>
        </div>
    )
} 