import { InputField } from "../ui";

export default function TableFilters({
  placeholder = "Filter",
  filterId,
  columnFilters,
  setColumnFilters,
}) {
  const name = columnFilters.find(({ id }) => id === filterId)?.value || "";

  const handleFilterChange = (id, value) => {
    return setColumnFilters((state) => [
      ...state.filter((item) => item.id !== id),
      {
        id,
        value,
      },
    ]);
  };

  return (
    <InputField
      placeholder={placeholder}
      autoFocus={true}
      value={name}
      onChange={(e) => handleFilterChange(filterId, e.target.value)}
    />
  );
}
