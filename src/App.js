import logo from './logo.svg';
import './App.css';
import { DaysCreateForm } from './ui-components';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import awsExports from './aws-exports';
Amplify.configure(awsconfig);
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <DaysCreateForm />
    </div>
  );
}

export default App;
