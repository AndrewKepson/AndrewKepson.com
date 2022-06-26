import React from 'react'
import { useWordPressCategories } from '../../hooks'

export const Sidebar = ({
  selectedCategory,
  filterBySearch,
  filterByCategory,
  searchInput,
  onClear,
}) => {
  const categories = useWordPressCategories()

  return (
    <aside className="hidden w-full p-4 lg:order-1 lg:block lg:w-5/12 xl:w-4/12">
      <div className="sticky top-20 rounded-sm bg-opacity-70 p-6 shadow-lg">
        <form>
          <div className="relative mb-4">
            <input
              className="w-full appearance-none rounded border border-gray-300 py-4 pl-4 pr-10"
              placeholder="Looking for?"
              type="text"
              required=""
              onChange={filterBySearch}
              value={searchInput}
            />
            <span className="absolute inset-y-0 right-4 inline-flex items-center text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="1em"
                height="1em"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
                </g>
              </svg>
            </span>
          </div>
          <div className="relative mb-4">
            <select
              required=""
              className="w-full appearance-none rounded border border-gray-300 py-4 pl-4 pr-10"
              onChange={filterByCategory}
              value={selectedCategory}
            >
              <option>Choose Category</option>
              {categories.map(category => (
                <option
                  key={category.id}
                  value={category.uri}
                  name={category.name}
                >
                  {category.name}
                </option>
              ))}
            </select>
            <span className="absolute inset-y-0 right-4 inline-flex items-center text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
              </svg>
            </span>
          </div>

          <div className="text-right">
            <button
              className="inline-block rounded-full bg-purple-600 px-6 py-2 text-center text-white shadow-lg hover:bg-purple-400"
              type="submit"
              onClick={onClear}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </aside>
  )
}
