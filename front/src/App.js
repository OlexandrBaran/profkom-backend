import Topbar from "./components/Topbar/Topbar";
import { Context } from "./index";
import { useContext } from 'react';
import { observer } from "mobx-react-lite";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navigation from './components/Navigation'


const App = observer(() => {
  const {appTheme} = useContext(Context);

  return (
    <BrowserRouter>
      <div className="App" style={{backgroundColor:appTheme.secondaryColor, color:appTheme.mainColor}}>
        <Topbar/>
        <Navigation/>
        <AppRouter/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
})

export default App;
