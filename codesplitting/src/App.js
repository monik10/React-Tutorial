import { lazy,Suspense, useState } from 'react';
import './App.css';
const Login=lazy(()=>delayForDemo(import ("./Login.jsx")));
const Profile=lazy(()=>delayForDemo(import ("./Profile.jsx")));
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
console.log(Login)

function App() {

  let [isAuth,isSetAuth]=useState(true);

  let test=()=>
  {
    alert("hello")
    return <Login/>
  }
  return (
    <div className="App">
      <header className="App-header">
      {
        !isAuth?<Suspense fallback={<h1>Loading...</h1>}>
          <Login/>
        </Suspense>:<Suspense fallback={<h1>Loading..
        </h1>}>
          <Profile/>
        </Suspense>
      }
        {/* <button onClick={test}>Load login Component</button> */}
        {/* <Suspense fallback={<h1>Loading...</h1>}>
          <Login/>
        </Suspense> */}
       
      </header>
    </div>
  );
}

export default App;
