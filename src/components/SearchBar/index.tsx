import { Input } from "@/components/ui/input"

  interface SearchBarProps {
    filterText: string;
    onFilterTextChange: (text: string) => void;
  }

export const Searchbar = ({ filterText, onFilterTextChange } : SearchBarProps) => {
    return(
        <div className="flex flex-row items-center shadow rounded-2xl bg-white pr-5 pl-2">
            <img className="p-3" src="/icons/glass.svg" alt="GLass Icon" />
            <Input
            className="border-none outline-none shadow-none focus-visible:ring-0" 
            onChange={(e) => onFilterTextChange(e.target.value)} 
            value={filterText} 
            placeholder="Search for a user" />
        </div>
    )
}