import React,{useState,useEffect,useRef} from 'react';
import lottie from 'lottie-web';
import './App.css';
import {BrowserRouter as Router,Switch , Route} from "react-router-dom";
import Navbar from './Navbar/nav';
import Ad from './ad/ad';
import ver from './authentication/verify';
import reg from './authentication/authentication';
import Home from './Home/home';
import Categories from './categories/categories';
import {ThemeProvider} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './loading';
import Login from './authentication/login';
import auth2 from './authentication/authentation2';

function App() {


  const [data] = useState('');
  const [loading, setLoading] = useState(undefined);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(undefined);
    setDone(undefined);

    setTimeout(() => {
      // fetch('')
      // .then(res => res.json())
      // .then(data => {
        // setCat(data.file);
        setLoading(true);
        setTimeout(() => {
          setDone(true);
        }, 1200)
      // })
      // .catch(err => console.log(err));
    }, 1200);
  }

  return (

    <div className="App">
      {!done?(
        <Loading loading={loading}/>
      ):(
          <Switch>
          <Route path="/" exact component={Home}/>
          {/* <Route path="/auth" exact component={Auth}/> */}
          <Route path="/reg" exact component={reg}/>
          <Route path="/login" exact component={auth2}/>
          <Route path="/ver" exact component={ver}/>
        </Switch>
        
      )}
    </div>


  );
}

export default App;
