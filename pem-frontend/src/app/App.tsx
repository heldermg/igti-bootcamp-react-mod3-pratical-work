import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { padStartWithZero } from "./util/util";

function App() {
  const today = new Date();
  const yearMonth = `${today.getFullYear()}-${padStartWithZero((today.getMonth()+1), 2)}`

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/expenses/:yearMonth">
          <MainPage />
        </Route>
        <Redirect to={{ pathname: "/expenses/" + yearMonth }} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
