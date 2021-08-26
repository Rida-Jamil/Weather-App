import React, { useState, useEffect } from "react";
import "./css/style.css";

const Temp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Karachi");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=62e14aa3dda9264d389331be96db9312`;
            const response = await fetch(url);
            // console.log(response);
            const respJson = await response.json();
            // console.log(respJson);
            setCity(respJson.main);
        }
        fetchApi();
    }, [search])

    return (
        <>

            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField"
                    placeholder="Search City"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                </div>

                {!city ? (
                    <p className="errorMsg"> No Data Found </p>
                ) : (

                    <div>

                        <div className="info">
                            <h3 className="location">
                                <i className="fas fa-map-marker-alt"> </i> {search}
                                <i className="fas fa-cloud-rain wave -two"> </i>
                                <i className="fas fa-snowflake wave -three"> </i>
                                <i className="fas fa-sun wave -four"> </i>
                            </h3>

                            <h1 className="temp">
                                {city.temp}&deg;C
                            </h1>

                            <h3 className="tempmin_max"> Min: {city.temp_min}&deg;C | Max: {city.temp_max}&deg;C </h3>

                        </div>

                        <div className="wave"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                        <div className="wave"></div>

                    </div>
                )}

            </div>


        </>
    )
}

export default Temp;