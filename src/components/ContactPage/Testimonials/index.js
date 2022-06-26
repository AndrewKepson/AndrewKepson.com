import React from 'react'

import { testimonialsData } from '../../../data/testimonialsData'
import Testimonial from './Testimonial'

const Testimonials = () => (
  <Testimonial
    quote={testimonialsData[0].testimonial}
    source={testimonialsData[0].source}
  />
)

export default Testimonials
