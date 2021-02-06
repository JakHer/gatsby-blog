import React from "react"
import HomePageLink from "../components/HomePageLink/HomePageLink"

const ContactPage = () => (
  <>
    <form
      netlify-honeypot="bot-field"
      name="contact"
      method="POST"
      data-netlify="true"
      action="/thank-you"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="email">Your Emai</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" />
      </div>
      <button type="submit">Send</button>
    </form>
    <HomePageLink to="/">Go back to homepage</HomePageLink>
  </>
)

export default ContactPage
