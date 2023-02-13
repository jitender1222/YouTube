import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import {Provider} from "react-redux"

function App() {
  return (

    <Provider store={store}>
    <div>
      <Header />
      <Body />

      {/*   
        Header
        Body
        Sidebar
          MenuItems
        MainContainer
          ButtonList
          VideoContainer
            VideoCard
      */}
    </div>
    </Provider>
  );
}

export default App;
