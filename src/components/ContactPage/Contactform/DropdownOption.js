import React from 'react'
import PropTypes from 'prop-types'

const DropdownOption = ({ options }) =>
  options.map((optionText, i) => <option key={i}>{optionText}</option>)

DropdownOption.propTypes = {
  options: PropTypes.object.isRequired,
}

export default DropdownOption
