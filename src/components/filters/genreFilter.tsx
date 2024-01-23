import { FilterProps } from "./filters";

const genres = ["Phone", "Laptop", "Other"];

export default function GenreFilter({ updateFilter }: FilterProps) {
  return (
    <select
      id="genre_filter"
      onChange={(e) => updateFilter({ genre: e.target.value })}
    >
      <option value="">...Genre</option>
      {genres.map((gen, index) => (
        <option value={gen} key={index}>
          {gen}
        </option>
      ))}
    </select>
  );
}
