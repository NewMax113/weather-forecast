import React from 'react'
import search_css from './search.module.scss'

export const Search = ({ setSearchCity, setCity, searchCity }) => {
    return (
        <div className={search_css.block_search}>
            <input type="text"
                onChange={(e) => setSearchCity(e.target.value)}
                className={search_css.search_city}
                placeholder='Поиск...'
            />
            <button
                onClick={() => setCity(searchCity)}
                className={search_css.btn_search_city}>
                Click
            </button>
        </div>
    )
}
