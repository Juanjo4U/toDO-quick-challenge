import './styles/index.css';
import './styles/spinner/index.css';
import { Provider } from "react-redux";
import { store } from "./redux";
import Navigation from "./navigation";

const App = () =>
  <Provider store={store} >
    <Navigation />
  </Provider>

export default App