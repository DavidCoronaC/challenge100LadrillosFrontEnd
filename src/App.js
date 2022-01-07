import { Navigations } from "./routes/Navigations";
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
      <Provider store={store}>
        <Navigations/>
      </Provider>
  );
}

export default App;
