import React from 'react'

import { NameInput } from './NameInput'
import { EmailInput } from './EmailInput'
import { ServicesDropdown } from './ServicesDropdown'
import { MessageInput } from './MessageInput'
import { SubmitButton } from './SubmitButton'

export const ContactForm = () => (
  <form
    name="contact"
    method="post"
    action="/thank-you/"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact" />
    <NameInput />
    <EmailInput />
    <ServicesDropdown />
    <MessageInput />
    <SubmitButton />
  </form>
)
