import css from "./SearchBox.module.css"


interface SearchBoxProps {
    defaultValue: string;
    onSearch: (nextSerchQuery: string) => void;
}


export default function SearchBox ({defaultValue, onSearch}: SearchBoxProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <input
  className={css.input}
  type="text"
  placeholder="Search notes"
  value={defaultValue}
  onChange={handleChange}
 />
    )
}