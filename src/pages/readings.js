import React from "react";
import SEO from "../components/SEO";
import styled from "styled-components";
import Seo from "../components/SEO";

const ReadingPage = () => {
    return (
        <>
            <Seo
                title="Readings"
            />
            <ul>
                <li><a href="https://dataintensive.net">(current) Designing Data-Intensive Applications</a></li>
                <li><a href="https://itrevolution.com/the-phoenix-project/">The Phoenix Project</a></li>
            </ul>
        </>
    )
}

export default ReadingPage;