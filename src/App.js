import React, {Component} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {Provider} from "react-redux";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import NotFound from "./components/NotFound";

import Dashboard from "./page/Dashboard";

import {toast} from 'react-toastify';
import store from "./store";


class App extends Component {


    componentDidMount() {
        // toast.success("Hello");
        // toast.warning("Warning");
        // toast.error("Error");
        const position = window.innerWidth < 580?"bottom-center":"top-center"
        toast.info("Platforma test rejimida!", {position: position});

    }


    render() {

        // console.log(window.innerWidth)
        // console.log(window.innerHeight)

        return (
            <Provider store={store}>
                <div className="layout">
                    <Sidebar width={window.innerWidth}/>
                    <div className="layout-right">
                        <Navbar/>
                        <div className="layout-content">

                            <Switch>
                                <Route exact path='/dashboard' component={Dashboard}/>
                                <Route path='/settings' component={Settings}/>
                                <Route path='/404' render={(props) => <NotFound props={props}/>}/>
                                <Redirect exact from='/' to="/dashboard"/>
                                <Redirect from='**' to={'/404'}/>
                            </Switch>

                        </div>
                    </div>

                </div>
            </Provider>
        );
    }
}


function Settings() {

    return (
        <div className="container mx-sm-0 mx-2">
            <div className="row mb-2">
                <div className="col">
                    <h1 className="page-title"> Sozlamalar </h1>
                </div>
            </div>

        </div>
    )
}


export default App;
