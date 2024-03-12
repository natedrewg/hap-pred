import { DaysCreateForm } from '../ui-components';

export const Daily = () => {
  return (
    <div className="App">
      <body class = "padding showHide">
        <div class = "flow-root invisible sm:invisible md:visible lg:visible xl:visible">
          <div class = "bg-sage float-center text-3xl bg-orange-50 p-4">
            <h1>Welcome to my daily form!</h1>
          </div>
          <div class = "bg-sage justify-center pl-4 pr-4 flex">
            <DaysCreateForm />
          </div>
        </div>
      </body>

      <body class = "noPadding">
        <div class = "flow-root visible sm:visible md:invisible lg:invisible xl:invisible">
          <div class = "bg-sage float-center text-3xl bg-orange-50 p-4">
            <h1>Welcome to my daily form!</h1>
          </div>
          <div class = "bg-sage justify-center pl-4 pr-4 flex">
            <DaysCreateForm />
          </div>
        </div>
      </body>
    </div>
  );
}