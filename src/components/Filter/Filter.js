export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        placeholder="Search"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </>
  );
};
