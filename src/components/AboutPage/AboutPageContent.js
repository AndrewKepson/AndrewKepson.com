import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { usePortraitPhoto } from '../../hooks'

export const AboutPageContent = () => (
  <section className="bg-white py-20 xl:pt-24 xl:pb-28">
    <div className="container mx-auto px-4">
      <div className="-mx-4 flex flex-wrap">
        <div className="mb-14 w-full px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="mb-10 w-full lg:mb-0 lg:w-1/2">
              <h3 className="mb-4 font-roboto text-3xl font-bold tracking-tighter text-gray-900 md:text-4xl">
                About Andrew Kepson
              </h3>
              <p className="font-roboto text-lg font-semibold leading-8 text-gray-700 md:text-xl">
                Working at the intersection of web development &amp; marketing
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <div className="-mb-2 flex flex-wrap items-center lg:justify-center">
                <Link
                  className="mb-2 inline-block w-full rounded-md bg-purple-600 py-3 px-6 text-center  font-roboto font-medium leading-7 text-white shadow-sm hover:bg-purple-500 focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 md:mr-5 md:w-auto"
                  to="/contact/"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 w-full px-4 lg:mb-0 lg:w-1/2">
          <p className="mb-6 font-garamond text-lg font-medium leading-7 text-gray-700 md:text-2xl">
            I'm Andrew Kepson. I'm a web developer and digital marketer based in
            Colorado with a passion for building exceptionally fast websites.
          </p>
          <h3 className="mb-4 font-roboto text-2xl font-semibold text-gray-800 lg:text-3xl">
            How This All Started
          </h3>
          <p className="mb-5 font-garamond text-lg font-medium leading-7 text-gray-700 md:text-2xl">
            I built my first website around 2003 using GeoCities to host web
            pages built purely with HTML. A couple of years later, I was
            creating custom MySpace pages for myself &amp; a few friends with
            CSS.
          </p>
          <p className="font-garamond text-lg font-medium leading-7 text-gray-700 md:text-2xl">
            At the time I didn't realize the opportunities available in web
            development, and in college I pursued my interests in writing and
            philosophy, earning my Bachelor of Arts as a double major in English
            Literature &amp; Philosophy from the University of Colorado,
            Colorado Springs. After looking for ways to make a living from
            writing, I discovered the world of content marketing, writing blogs
            and other content for websites with a focus on burgeoning software
            technology including blockchain.
          </p>
          <h3 className="mb-4 font-roboto text-2xl font-semibold text-gray-800 lg:text-3xl">
            Moving into Digital Marketing
          </h3>
          <p className="font-garamond text-lg font-medium leading-7 text-gray-700 md:text-2xl">
            After discovering the world of digital marketing as a content
            writer, I became interested in the world of SEO, joining the team at
            one of the leading digital marketing firms in the United States,
            SocialSEO. This gave me the opportunity to apply my writing skills
            and many other SEO tactics every day working with a range of
            businesses, from small local companies to ecommerce brands to large
            corporate enterprises and SaaS companies.
          </p>
          <p className="mt-2 font-garamond text-lg font-medium leading-7 text-gray-700 md:text-2xl">
            Working in SEO also reignited my passion for web development, and I
            returned to school to attend University of Denver's coding bootcamp,
            which is an intensive full stack web development program focused on
            JavaScript development using the MERN stack.
          </p>
          <h3 className="mb-4 font-roboto text-2xl font-semibold text-gray-800 lg:text-3xl">
            Back to My Roots
          </h3>
          <p className="font-garamond text-lg font-medium leading-7 text-gray-700 md:text-2xl">
            Upon graduating from University of Denver, I continued improving my
            knowledge and skills in SEO with a focus on SEO for React web
            applications, Core Web Vitals, and organic ecommerce growth. Not
            satisfied with improving sites built by others, I made the decision
            to move into software full time. Now I work as a{' '}
            <Link
              to="/headless-wordpress-developer/"
              className="text-purple-600 hover:text-purple-500"
            >
              headless Wordpress developer
            </Link>{' '}
            building professional and fast websites that are set up to achieve
            results with SEO and easily maintained by business owners and
            marketers.
          </p>
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <GatsbyImage
            image={usePortraitPhoto()}
            className="w-full rounded-sm shadow-lg"
            alt="Andrew Kepson is a web developer with extensive digital marketing experience based in Colorado"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
)
