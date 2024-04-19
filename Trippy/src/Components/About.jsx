import React from "react";
import "./herostyle.css";
import "./Aboutstyle.css";
import about from "../assets/About.jpg"; // Make sure to include './' before the file path

import Hero from "./Hero";

function About() {
  return (
    <>
      <Hero
        cName="hero"
        img1={about}
        title="Your Journey Your Story"
        text="Choose your Favorite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <div className="about">
        <h1>About Us</h1>

        <p>
          Welcome to Taprobana, your ultimate destination for
          unforgettable travel experiences! At [Your Travel Website Name], we're
          passionate about exploring the world and helping you create memories
          that last a lifetime. Whether you're a seasoned traveler or embarking
          on your first adventure, we're here to make your journey seamless,
          exciting, and filled with discovery.
        </p>

        <div className="mission-card">
          <h2>Our Mission</h2>

          <p>
            Our mission is to inspire and empower travelers to explore the world
            with confidence, curiosity, and respect. We believe that travel has
            the power to enrich lives, foster understanding between cultures,
            and create lasting connections. Through our platform, we aim to
            provide exceptional travel resources, expert advice, and
            personalized recommendations to help you make the most of your
            travels.
          </p>
        </div>

        <div className="offer-text">
          <h2>What We Offer</h2>
          <p>
            Curated Travel Experiences: Discover handpicked destinations,
            itineraries, and activities designed to showcase the best of each
            region. Whether you're craving a relaxing beach getaway, an
            adventurous trek through the mountains, or a cultural immersion in a
            bustling city, we've got you covered. Expert Travel Guides: Gain
            insights and insider tips from our team of experienced travelers and
            local experts. From practical advice on packing essentials to hidden
            gems off the beaten path, our comprehensive travel guides will help
            you navigate every aspect of your journey. Tailored Recommendations:
            Personalize your travel experience with our customized
            recommendations. Whether you're seeking family-friendly
            accommodations, romantic retreats, or adrenaline-pumping adventures,
            we'll help you find the perfect fit for your interests and
            preferences. Travel Inspiration: Fuel your wanderlust with
            captivating stories, stunning photography, and inspiring travel
            narratives from around the globe. Follow along as we share our own
            adventures, highlight top destinations, and celebrate the diversity
            of cultures and landscapes that make our world so extraordinary.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
