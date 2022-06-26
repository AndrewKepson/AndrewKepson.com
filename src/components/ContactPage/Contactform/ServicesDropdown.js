import React from 'react'

import ServicesOffered from '../../../data/servicesOffered'

import DropdownOption from './DropdownOption'
import DropdownArrow from './DropdownArrow'

export const ServicesDropdown = () => (
  <div className="mb-6">
    <label
      className="mb-2 block text-sm font-bold text-gray-700"
      htmlFor="servicesDropdown"
    >
      I Need Help With:
    </label>
    <div className="relative">
      <select
        className="block w-full appearance-none rounded border border-gray-200 bg-gray-50 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
        name="service-needed"
        id="servicesDropdown"
      >
        <DropdownOption options={ServicesOffered} />
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <DropdownArrow />
      </div>
    </div>
  </div>
)
