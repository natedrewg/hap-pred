import { listDays } from '../graphql/queries';
import config from '../amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
Amplify.configure(config);

const client = generateClient();

const result = await client.graphql({ query: listDays });
console.log(result);

export const Home = () => {

  
  return (
    <div class= "bg-ivory">
      <body class= "padding">
        <>
          <span>{result}</span>
        </>
      </body>
    </div>
  );
}