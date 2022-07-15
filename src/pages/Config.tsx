import { FormEvent, useState } from "react";

export const Config = ({ onSubmit }: { onSubmit: (e: FormEvent) => void }) => {
  const [isValid, setIsValid] = useState(true);
  console.log(isValid);

  // TODO: Add debounce
  const validate = (val: string) => {
    try {
      JSON.parse(val);
      setIsValid(true);
    } catch (e) {
      setIsValid(false);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea name="configData" onChange={(e) => validate(e.target.value)} />
      {!isValid && <span className="font-xl">Invalid form</span>}
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};
