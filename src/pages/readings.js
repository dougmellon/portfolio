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
            <h6>Books</h6>
            <ul id="ul-no-margin">
                <li>(current) <a href="https://dataintensive.net">Designing Data-Intensive Applications</a></li>
                <li>(current) <a href="https://algs4.cs.princeton.edu/home/">Algorithms</a></li>
                <li><a href="https://github.com/getify/You-Dont-Know-JS">You Don't Know JS Yet</a></li>
                <li><a href="https://itrevolution.com/the-phoenix-project/">The Phoenix Project</a></li>
                <li><a href="https://horstmann.com/corejava/">Core Java: Volume 1</a></li>
            </ul>
            <h6>Blogs</h6>
            <ul id="ul-no-margin">
                <li><a href="https://alistapart.com">A List Apart</a></li>
                <li><a href="https://jvns.ca">Julia Evans</a></li>
                <li><a href="https://engineering.linkedin.com/blog">LinkedIn Engineering Blog</a></li>
                <li><a href="https://netflixtechblog.com/?source=rss----2615bd06b42e---4&gi=5adff2ac9118">The Netflix Tech Blog</a></li>
            </ul>
        </>
    )
}

export default ReadingPage;