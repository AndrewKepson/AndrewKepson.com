import React from 'react'

export const NameInput = () => (
  <div className="mb-6">
    <label
      className="mb-2 block text-sm font-bold text-gray-700"
      htmlFor="fullNameInput"
    >
      Your Name:
    </label>
    <input
      className="block w-full appearance-none rounded border border-gray-200 bg-gray-50 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
      type="text"
      name="fullName"
      id="fullNameInput"
      placeholder="Name"
    />
  </div>
)
