import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onRatingChange,
    onCategoryChange,
    onSearchChange,
    onFilterClear,
    search,
  } = props

  const clickCategory = id => {
    onCategoryChange(id)
  }

  const clickRating = id => {
    onRatingChange(id)
  }

  const onClickFilter = () => {
    onFilterClear()
  }

  const inputChange = event => {
    onSearchChange(event.target.value)
  }
  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      <input
        placeholder="search"
        value={search}
        onChange={inputChange}
        type="search"
      />
      <BsSearch />

      <div>
        <h1>Category</h1>
        {categoryOptions.map(each => (
          <p
            key={each.categoryId}
            onClick={() => clickCategory(each.categoryId)}
          >
            {each.name}
          </p>
        ))}
      </div>
      <div>
        <h1>Rating</h1>
        {ratingsList.map(each => (
          <list key={each.ratingId}>
            <img alt={`rating ${each.ratingId}`} src={each.imageUrl} />
            <p onClick={() => clickRating(each.ratingId)}>&up</p>
          </list>
        ))}
      </div>
      <button onClick={onClickFilter} type="button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
