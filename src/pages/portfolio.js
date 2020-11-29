import React from "react"
import Seo from "../components/SEO";
import { DiGithubBadge } from "react-icons/di"

const AboutPage = () => (
  <>
    <Seo
        title="Portfolio"
    />

      <h6>
          FidoLease (current project) <span><a href="https://github.com/dougmellon/fidolease-api"><DiGithubBadge /></a></span>
      </h6>
      <p>
          In 2017, my partner and I moved from California to beautiful Colorado to embark on our college journeys. Upon
          arrival in the Centennial State, we found apartment hunting to be a challenging task. Not for lack of
          availability, but due to our large Siberian Husky named Juneau.
      </p>
      <p>
          Huskies have found themselves on the older of two commonly used breed restriction lists. Sites such as Zillow
          allow the user to select options like "Allows large dogs" and "Allows small dogs" but don't present them with
          one to filter by breed restriction lists — ultimately requiring an inquire into the specifics.
      </p>
      <p>
          I spent some time digging around and quickly realized just how common the issue is. As a result, I set out and
          build a site - beginning in my home city - that allows individuals to locate apartments by specific breed
          restrictions.
      </p>
      <p>For this project, I have decided upon the following technology:</p>
      <ul id="ul-no-margin">
          <li>
              Java and Spring Boot to build a truly RESTful API according to the standards presented
              by <a href="https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm">Roy Fielding</a>.
          </li>
          <li>
              PostgreSQL relational database using a data model presented
              by <a href="https://vertabelo.com/blog/a-data-model-for-listing-apartments-and-other-rental-units/">
              Shantanu Kher</a> at Vertabelo.
          </li>
          <li>
              React for frontend implementation due to its simplicity and outstanding documentation.
          </li>
          <li>
              DigitalOcean droplet using Ubuntu and Nginx reverse proxy. API and frontend deployed in Docker containers
              using CircleCI for deployment.
          </li>
      </ul>
      <h6>Buderflys (internship)</h6>
      <p>
          I spent the summer of 2020 completing a software engineering internship with Buderfly headphones based out of
          Denver, Colorado. During my summer, I was tasked with creating an in-house tool allowing employees to add
          podcast and audiobook recommendations to the Shopify storefront.
      </p>
      <p>
          Based on the limiting scope of Shopify and a small timeframe to complete the project, I decided to develop a
          dashboard allowing employees to log in and fill out a form that sent their recommendation to our database.
      </p>
      <p>
          The PostgreSQL database featured an API layer that I built in Javascript using the Node runtime environment.
      </p>
      <ul></ul>
      <h6>Open Source Contributions</h6>
      <ul id="ul-no-margin">
          <li>(Mozilla) Removed links to Firefox lockwise on firefox.com <span><a href="https://github.com/mozilla/blurts-server/issues/1954"><DiGithubBadge /></a></span></li>
          <li>(Mozilla) Converted NodeList to array for compatibility <span><a href="https://github.com/mozilla/bedrock/pull/9648"><DiGithubBadge /></a></span></li>
          <li>(WikiMedia) Add Design blog link to homepage <span><a href="https://github.com/wikimedia/WikimediaUI-Style-Guide/pull/415"><DiGithubBadge /></a></span></li>
      </ul>
  </>
)

export default AboutPage
