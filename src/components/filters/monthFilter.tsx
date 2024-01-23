import { FilterProps } from "./filters";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export default function MonthFilter({ updateFilter }: FilterProps) {
  return (
    <select
      id="month_filter"
      onChange={(e) => updateFilter({ month: e.target.value })}
    >
      <option value="">...Month</option>
      {months.map((month) => (
        <option value={month} key={month}>
          {month}
        </option>
      ))}
    </select>
  );
}
