import InputWithLabel from "./InputWithLabel"

export default function SearchForm({handleSearch, handleSubmit, searchTerm}) {
  return (
    <>
    <form onSubmit={handleSubmit}>
        <InputWithLabel
          value={searchTerm}
          handleInputChange={handleSearch}
          id = "search"
        >
        <strong>Search: </strong>
        </InputWithLabel>
        <button disabled={!searchTerm}>Search</button>
    </form>
    </>
  )
}
