import React from "react";
import SearchBox from "./SearchBox";
import "bootstrap/dist/css/bootstrap.css";

const ErrorPage = (props) => {
    const {error, updateError, updateCity, fetchWeather} = props;
    return (
        <>
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong className="h5">Error!</strong> <p className="h6">{error}</p>
            </div>
            <SearchBox onSubmit={fetchWeather}>
                <input className="form-control"  placeholder="City" onChange={(e)=>updateCity(e.target.value)}></input>
                <button type="submit" className="btn btn-primary">Search</button>
            </SearchBox>
        </>
    )

};
export default ErrorPage;