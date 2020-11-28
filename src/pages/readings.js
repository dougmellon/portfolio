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
                <li><a href="https://algs4.cs.princeton.edu/home/">(current) Algorithms</a></li>
                <li><a href="https://github.com/getify/You-Dont-Know-JS">You Don't Know JS Yet</a></li>
                <li><a href="https://itrevolution.com/the-phoenix-project/">The Phoenix Project</a></li>
                <li><a href="https://horstmann.com/corejava/">Core Java: Volume 1</a></li>
            </ul>
        </>
    )
}

export default ReadingPage;