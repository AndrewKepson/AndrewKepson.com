import React from 'react'
import Fade from 'react-reveal/Fade'

import { ContactForm } from './Contactform'
import Testimonials from './Testimonials'

export const ContactPageContent = () => (
  <div>
    <Fade left>
      <h1 className="mb-4 font-roboto text-3xl text-gray-800 md:text-6xl">
        Contact Me
      </h1>
    </Fade>
    <Fade right>
      <ContactForm />
    </Fade>
    <Fade bottom>
      <Testimonials />
    </Fade>
  </div>
)
