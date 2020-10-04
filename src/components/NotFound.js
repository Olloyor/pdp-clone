import React from "react";
import {Link} from "react-router-dom";
import notFoundImg from '../assets/img/404.svg'
import Button from "./Button";

export default function (props) {

    // console.log(props)

    return (

        <div className="container">
            <div className="row pt-5">
                <div className="col-12 pt-5">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <img className="w-75" src={notFoundImg} alt="NOT FOUND"/>
                        <Link className="mt-5" to={"/"}>
                            <Button label={'HOME'}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
