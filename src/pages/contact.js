import React from "react"
import HomePageLink from "../components/HomePageLink/HomePageLink"
import styled from "styled-components"

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledInputWrapper = styled.div`
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 10px;
`

const StyledForm = styled.form`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledInput = styled.input`
  padding: 10px;
  border-bottom: 3px rgb(0, 0, 0) solid;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  appearance: none;
  min-width: 200px;
`

const StyledLabel = styled.label`
  opacity: 0;
`

const StyledTextArea = styled.textarea`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid rgb(0, 0, 0);
  resize: none;
  padding: 10px;
  min-width: 200px;
  min-height: 200px;
`

const StyledButton = styled.button`
  border: none;
  outline: none;
  text-decoration: none;
  color: rgb(0, 0, 0);
  cursor: pointer;
  position: relative;
  background: none;
  margin: 20px 0 10px;
  padding: 10px 25px;
  z-index: 1;
  width: 100%;

  &:hover::before {
    transform: translate(5px, -5px);
  }

  &:hover::after {
    transform: translate(-5px, 5px);
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 5px;
    right: 5px;
    background: #ffd500;
    z-index: -1;
    transition: transform 0.15s ease-out 0s;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    border: 1px solid rgb(0, 0, 0);
    opacity: 1;
    transition: transform 0.15s ease-out 0s;
  }
`

const ContactPage = () => (
  <StyledWrapper>
    <StyledForm
      netlify-honeypot="bot-field"
      name="contact"
      method="POST"
      data-netlify="true"
      action="/thank-you"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <StyledInputWrapper>
        <StyledInput
          placeholder="email"
          autoComplete="off"
          type="email"
          name="email"
        />
        <StyledLabel htmlFor="email" />
      </StyledInputWrapper>
      <div>
        <StyledLabel htmlFor="message" />
        <StyledTextArea
          placeholder="Thank you for leaving a message"
          name="message"
        />
      </div>
      <StyledButton type="submit">Send</StyledButton>
    </StyledForm>
    <HomePageLink to="/">Go back to homepage</HomePageLink>
  </StyledWrapper>
)

export default ContactPage
