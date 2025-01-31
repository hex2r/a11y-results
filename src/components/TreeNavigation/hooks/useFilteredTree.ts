import { ChangeEvent, FormEvent, useRef, useState } from "react";

// TODO: ts type
export default function useFilteredTree() {
  const [filter, setFilter] = useState<string>(
    // Todo: Move this to the new function
    new URL(window.location.href).searchParams.get("filter") || ""
  );
  const input = useRef<string>(
    // Todo: Move this to the new function
    new URL(window.location.href).searchParams.get("filter") || ""
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    input.current = e.target.value;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Todo: move to the function
    const currentURL = new URL(window.location.href);

    if (input.current) {
      currentURL.searchParams.set("filter", input.current);
    } else {
      currentURL.searchParams.delete("filter");
    }

    history.pushState("/", "", currentURL.href);

    setFilter(input.current);
  };

  return {
    filter,
    input: input.current,
    onChange,
    onSubmit,
  };
}
