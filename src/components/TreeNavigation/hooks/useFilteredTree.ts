import { ChangeEvent, FormEvent, useRef, useState } from "react";

export default function useFilteredTree(data) {
  const [filter, setFilter] = useState<string>("");
  const input = useRef<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    input.current = e.target.value;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFilter(input.current);
  };

  return {
    filter,
    input,
    onChange,
    onSubmit,
  };
}
