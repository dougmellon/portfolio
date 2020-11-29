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
                <li><a href="https://www.joelonsoftware.com">Joel on Software</a></li>
                <li><a href="https://engineering.linkedin.com/blog">LinkedIn Engineering Blog</a></li>
                <li><a href="https://netflixtechblog.com/?source=rss----2615bd06b42e---4&gi=5adff2ac9118">The Netflix Tech Blog</a></li>
                <li><a href="https://medium.com/airbnb-engineering">AirBnB Engineering and Data Science</a></li>
                <li><a href="http://www.paulgraham.com/articles.html">Paul Graham</a></li>
                <li><a href="https://stripe.com/blog/engineering">Stripe Engineering Blog</a></li>
                <li><a href="https://engineering.atspotify.com">Spotify Engineering Blog</a></li>
                <li><a href="https://paulstamatiou.com">Paul Stamatiou</a></li>
                <li><a href="https://engineering.squarespace.com">SquareSpace Engineering</a></li>
                <li><a href="https://blog.twitter.com/engineering/en_us.html">Twitter Engineering Blog</a></li>
                <li><a href="http://blog.cleancoder.com">The Clean Code Blog</a></li>
                <li><a href="https://stackoverflow.blog">Stack Overflow Blog</a></li>
                <li><a href="https://feedly.com/i/subscription/feed%2Fhttp%3A%2F%2Fblog.cloudflare.com%2Frss.xml">The Cloudfare Blog</a></li>
            </ul>
        </>
    )
}

export default ReadingPage;