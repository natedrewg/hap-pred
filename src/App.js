import './App.css';
import { DaysCreateForm } from './ui-components';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import awsExports from './aws-exports';
Amplify.configure(awsconfig);
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <body>
        <div class = "flow-root">
          <div class = "float-center text-3xl bg-orange-50">
            <h1><b>Welcome to my daily form!</b></h1>
          </div>
          <div class = "bg-orange-50 px-4 py-4 justify-center">
            <DaysCreateForm />
          </div>
        </div>
      </body>
      

      
    </div>
  );
}

export default App;
