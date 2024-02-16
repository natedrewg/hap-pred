import { generateClient } from 'aws-amplify/api';
import * as queries from '../graphql/queries';

const client = generateClient();

const allDays = await client.graphql({ query: queries.listDays });

export const Diary = () => {
  return (
    <div class= "bg-ivory">

    </div>
  );
}