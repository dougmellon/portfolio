import React from "react"
import Seo from "../components/SEO";
import { DiGithubBadge } from "react-icons/di"

const AboutPage = () => (
  <>
    <Seo title="Portfolio" />
    <div id="resume">
        <h4 class="name-h1">Doug Mellon</h4>
        <h2>Fort Collins, CO, USA · Senior</h2>
        <h2>Projected Graduation: Dec, 2021</h2>
      <h2>Seeking an <span>internship</span> to begin in May, 2021</h2>
      <h2>Interested in <span>backend</span> roles.</h2>

        <h1>Skills</h1>
        <p>
            Java, Python, Javascript, HTML, CSS, Node.js, React, Spring Boot, Django, OpenCV, PostgreSQL, MongoDB,
            DigitalOcean, Docker, Nginx, Ubuntu / Debian, Arch
        </p>

      <h1>Professional Work</h1>
      <h2><span>Undergraduate Research</span> - University of Northern Colorado <span>Nov 2020 - Present</span></h2>
      <p>
          I am currently conducting research on the use of autonomous drones in the detection, containment, and
          extinguishing of Wildfires. Individually reached out to the university following the current record breaking
          fires in Colorado.
      </p>

      <h2><span>Software Engineer (Intern)</span> - Buderflys Tech, Inc <span>Apr 2020 -Aug 2020</span></h2>
      <p>
          Was tasked with creating a dashboard to allow employees to log-in and add podcast and audiobook suggestions
          that would populate a recommendations section within a Shopify store.
      </p>
      <ul>
          <li>Utilized Java and Spring Boot to build a RESTful API according to standards presented by Roy Fielding.</li>
          <li>Designed and configured a PostgreSQL database, hosted on DigitalOcean, to store podcast recommendations.</li>
      </ul>

      <h1>Education</h1>
      <h2><span>Bachelor of Science (BS) Software Engineering</span> at University of Northern Colorado <span>Grad: Dec 2021</span></h2>
      <p>Relevant coursework:</p>
      <ul>
          <li>Introduction to Software Engineering</li>
          <li>Web Design & Development for Small Business</li>
          <li>Graphical Interface Programming</li>
          <li>Information Systems</li>
          <li>Intermediate Web Development</li>
          <li>Networking & Data Communications Systems</li>
          <li>User Interface Design & Development</li>
          <li>Fundamentals of Project Management</li>
          <li>Computer Programming</li>
          <li>Structured Programming</li>
          <li>Object-Oriented Analysis, Design, & Programming</li>
          <li>Algorithms & Data Structures</li>
          <li>Software Engineering I</li>
          <li>Discrete Mathematics</li>
      </ul>

      <h1>Open-source contributions</h1>
      <ul>
          <li><a href="https://github.com/mozilla/blurts-server/issues/1954">(Mozilla) Removed links to Firefox lockwise on firefox.com</a></li>
          <li><a href="https://github.com/mozilla/bedrock/pull/9648">(Mozilla) Converted NodeList to array for compatibility</a></li>
          <li><a href="https://github.com/wikimedia/WikimediaUI-Style-Guide/pull/415">(WikiMedia) Add Design blog link to homepage</a></li>
      </ul>

      <h1>About</h1>
      <h3>What I am seeking in in my next role</h3>
      <p>I would love to learn best practices when it comes to backend develop as well as the software lifecycle.
          Additionally, I am seeking an internship with the possibility of a follow on offer.
      </p>
      <h3>A project I have worked on and am proud of</h3>
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
          I spent some time digging around and quickly realized just how common the issue is. As a result, I set out to
          build a site - beginning in my home city - that allows individuals to locate apartments by specific breed
          restrictions.
      </p>
      <p>For this project, I have decided upon the following technology (still building):</p>
      <ul>
          <li>Java and Spring Boot to build a truly RESTful API according to the standards presented by Roy Fielding.</li>
          <li>PostgreSQL relational database using a data model presented by Shantanu Kher at Vertabelo.</li>
          <li>React for frontend implementation due to its simplicity and outstanding documentation.</li>
          <li>
              DigitalOcean droplet using Ubuntu and Nginx reverse proxy. API and frontend deployed in Docker containers
              using CircleCI for deployment.
          </li>
      </ul>
    </div>
  </>
)

export default AboutPage
