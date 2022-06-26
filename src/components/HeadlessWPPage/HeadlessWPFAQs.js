import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

import { headlessWPFAQs } from '../../data/headlessWPFAQs'

const classNames = (...classes) => classes.filter(Boolean).join(' ')

export const HeadlessWPFAQs = () => (
  <div className="w-full">
    <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
        <h2 className="text-center font-roboto text-3xl  font-extrabold text-gray-900 sm:text-4xl">
          Headless WordPress FAQs
        </h2>
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          {headlessWPFAQs.map(faq => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-800">
                      <span className="font-roboto font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? '-rotate-180' : 'rotate-0',
                            'h-6 w-6 transform'
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="font-work-sans text-base text-gray-700">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  </div>
)
