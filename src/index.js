import React from 'react';
import ReactDOM from 'react-dom';
import Layout from "./components/HOC/Layout";
import Home from "./components/Home/index";
import "./scss/main.scss"
const App = () =>{
    return (
        <Layout>
            <Home/>
        </Layout>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));