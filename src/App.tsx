import './App.css';
import Users from './Users';
import { GlobalStyle } from './globalStyle';
import { store } from './reduxStore/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Users />
      </Provider>
    </>
  );
}

export default App;
