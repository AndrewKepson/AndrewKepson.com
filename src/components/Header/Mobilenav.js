import React from 'react'
import { Link } from 'gatsby'
import { Popover } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

import { Brand } from './Brand'

const navigation = [
  // { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Headless WordPress', to: '/headless-wordpress-developer' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact', to: '/contact' },
]

export const MobileNav = () => (
  <div className="h-screen overflow-hidden rounded-lg bg-gray-900 font-work-sans shadow-md ring-1 ring-black ring-opacity-5">
    <div className="flex items-center justify-between px-5 pt-4">
      <Brand />
      <div className="-mr-2">
        <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:text-gray-600  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-600">
          <span className="sr-only">Close main menu</span>
          <XIcon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
    </div>
    <div className="space-y-1 px-2 pt-2 pb-3">
      {navigation.map(item => (
        <Link
          key={item.name}
          to={item.to}
          className="block rounded-md px-3 py-2 text-base  font-medium text-gray-200 hover:bg-gray-50 hover:text-gray-400"
        >
          {item.name}
        </Link>
      ))}
    </div>
  </div>
)

export default MobileNav
