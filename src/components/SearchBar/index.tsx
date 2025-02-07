import './SearchBar.css';

interface SearchBarProps {
  filterText: string;
  onFilterTextChange: (text: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ filterText, onFilterTextChange }) => {
  return (
    <div className="containerSearchBar">
      <img src="/icons/glass.svg" alt="Glass Icon" />
      <input
        className="inputSearch"
        type="text"
        placeholder="Search for a user"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
    </div>
  );
};
