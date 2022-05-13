import React from 'react'
import Navbar from './components/navbar';
import Globalstyles from './globalstyles';
import 'antd/dist/antd.css';
import {Switch,Route} from 'react-router-dom'
import Footer from './components/footer';
import Secondnavbar from './components/secondnavbar';
import Drawerdiv from './components/drawer';
import Landingpage from './pages/Landingpage';
import Items from './components/items';
import Cart from './pages/Cart';

function App() {

  const [visible,setvisible] = React.useState(false)


  return (
    <div className="App">
      <Globalstyles />
      <Navbar />
      <Secondnavbar setvisible={setvisible}/>
      <Drawerdiv visible={visible} setvisible={setvisible}/>
      <Switch>
      <Route exact path="/" component={Landingpage}></Route>
      <Route path="/category/:slug" component={Items}></Route>
      <Route exact path="/user/cart" component={Cart}></Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
