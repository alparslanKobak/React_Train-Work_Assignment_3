import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ForecastsHome() {

    const [horoscopes, setHoroscopes] = useState([]);

    useEffect(() => {

        const fetchHoroscopes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/horoscopes');
                setHoroscopes(response.data);
            } catch (error) {
                console.error("Burç verileri çekilirken bir hata oluştu!", error);
            }
        };

        fetchHoroscopes();
    }, []);



    return (<>

        <section id="forecasts"
            className="ds section-forecast s-overlay s-pt-90 s-pb-30 s-pt-xl-150 s-pb-xl-90 c-gutter-60 c-mb-60"
        >
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-0">
                        <h3 className="text-center mt-0 mb-2 special-heading fs-60 color-main">
                            <span>Choose Your Zodiac Sign</span>
                        </h3>
                        <div className="line" />
                        <p className="text-center fs-20 mt-4">
                            <span>
                                What’s Your Sign? Read Your Daily <br />
                                Horoscope Today
                            </span>
                        </p>
                        <div className="divider-40 divider-xl-60" />
                    </div>

                    {horoscopes.map((item) => (

                        <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                            <div className="vertical-item text-center  content-padding corner-box">
                                <div className="item-content">
                                    <div className="icon-styled fs-50">
                                        <a
                                            href="forecast-page.html"
                                            className={"color-darkgrey " + item.ico}
                                        />
                                    </div>
                                    <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                        <a href="forecast-page.html">{item.name}</a>
                                    </h5>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>

    </>);
}

export default ForecastsHome;