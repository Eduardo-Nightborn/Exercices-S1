
interface SearchBarProps {
  filterText: string;
  onFilterTextChange: (text: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ filterText, onFilterTextChange }) => {
  return (
    <div className="flex flex-row bg-white p-3 rounded-2xl group hover:shadow-2xl">
      <img src="/icons/glass.svg" alt="Glass Icon" />
      <input
        className=" ml-3 focus:outline-none border-0 flex-grow"
        type="text"
        placeholder="Search for a user"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
    </div>
  );
};
