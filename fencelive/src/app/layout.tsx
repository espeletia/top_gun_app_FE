import React from "react"
import Tournaments from "./tournamets/page"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}

// export async function getAllTournaments() {
//   const client = new ApolloClient({
//       uri: 'localhost:8080/query', // added http:// to URI
//       cache: new InMemoryCache()
//   });
//   const { data } = await client.query({
//       query: gql`
//       query {
//         getAllTournaments {
//           Id
//           Events {
//             Athletes {
//               User {
//                 FirstName
//                 BornIn
//                 Id
//               }
//               PooleSeeding
//               TableauSeeding
//               FinalRanking
//             }
//           }
//         }
//       }
//     `
//   });
//   console.log(data);

//   return data.getAllTournaments.map((item: Tournament) => {
//       return <Tournament key={item.Id} tournament={item} />;
//   });
// }
