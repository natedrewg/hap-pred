import { listDays, getDays } from '../graphql/queries';
import config from '../amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
Amplify.configure(config);

const client = generateClient();

const result = await client.graphql({ query: listDays });
const allDays = result.data.listDays.items
const oneDay = await client.graphql({
  query: getDays ,
  variables: { id: 3 }
});



export const Home = () => {
  return (
    <div class= "bg-ivory">
      <body>
        <div>
          {JSON.stringify(allDays)}
        </div>
      </body>
    </div>
  );
}