import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import { BlogPost } from './BlogPost'
import { Sidebar } from './Sidebar'
import { NothingHere } from './NothingHere'

export const BlogPageContent = ({
  posts = [],
  category = 'All Categories',
}) => {
  const [displayedPosts, setDisplayedPosts] = useState({
    posts,
    displayedPosts: posts,
  })
  const [searchInput, setSearchInput] = useState('')

  const filterBySearch = e => {
    const input = e.target.value

    setSearchInput(input)

    if (input === '') {
      setDisplayedPosts(prev => ({ ...prev, displayedPosts: posts }))
    } else {
      const filteredList = posts.filter(
        post =>
          post.title.toLowerCase().startsWith(input.toLowerCase()) ||
          post.title.toLowerCase().includes(input.toLowerCase()) ||
          post.categories.nodes[0].name
            .toLowerCase()
            .startsWith(input.toLowerCase())
      )

      setDisplayedPosts(prev => ({
        ...prev,
        displayedPosts: [...filteredList.slice(0, 10)],
      }))
    }
  }

  const filterByCategory = e => {
    e.preventDefault()
    console.log(e)
    const { value } = e.target

    console.log(value)

    if (value === '/blog') navigate(`/blog`)

    navigate(value)
  }

  const onClear = e => {
    e.preventDefault()

    setDisplayedPosts(prev => ({
      ...prev,
      displayedPosts: [...posts],
    }))

    setSearchInput('')

    navigate(`/blog/`)
  }

  return (
    <div className="-mx-4 flex flex-wrap justify-center">
      <Sidebar
        posts={posts}
        selectedCategory={category}
        searchedName={null}
        searchInput={searchInput}
        filterBySearch={filterBySearch}
        filterByCategory={filterByCategory}
        onClear={onClear}
      />
      <div className="w-full p-4 lg:w-7/12 xl:w-8/12">
        <div>
          {displayedPosts.displayedPosts.length > 0 ? (
            displayedPosts.displayedPosts.map(post => {
              const category = post.categories.nodes[0].name

              return <BlogPost key={post.id} post={post} category={category} />
            })
          ) : (
            <NothingHere />
          )}
          <div className="text-center font-roboto font-semibold">
            Powered by Headless WordPress
          </div>
        </div>
      </div>
    </div>
  )
}

BlogPageContent.propTypes = {
  posts: PropTypes.array.isRequired,
  category: PropTypes.string,
}
