import { Input } from 'antd';

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <p>Search</p>
      <Input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </>
  );
};

export default SearchInput;
