import React from "react";
import { Box, Container, Typography } from "@mui/material";
import "./styles.css";

const MyMap = () => {
    return (
        <div className="map_container">
            <div className="map_left">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1916.9187207105188!2d108.14751029839476!3d16.073923200000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218d68dff9545%3A0x714561e9f3a7292c!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBLaG9hIC0gxJDhuqFpIGjhu41jIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1691249869451!5m2!1svi!2s" width="100%" height="450" style={{ border: 0 }} allowFullScreen></iframe>
            </div>
            <div className="map_right">
                <b>
                    <p>Focus Multimedia Ltd</p>
                </b>
                <p>The Studios</p>
                <p>Lea Hall Enterprise Park</p>
                <p>Wheelhouse Road</p>
                <p>Brereton</p>
                <p>Rugeley</p>
                <p>Staffordshire</p>
                <p>WS15 1LH</p>
                <p>England, UK</p>
                <p>Registered Company No. 2408658</p>
                <p>VAT Registration No. GB 661 4081 52</p>
            </div>
        </div>
    );
};

export default MyMap;
