import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

import { Nav } from './Nav'
import { MobileNav } from './Mobilenav'

export const Header = () => (
  <header className="relative z-10 bg-white pb-6 sm:pt-6 md:pb-12">
    <Popover>
      {({ open }) => (
        <>
          <div className="relative px-4 pt-6 font-work-sans text-xl sm:px-6 lg:px-8">
            <Nav />
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
            >
              <MobileNav />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  </header>
)
