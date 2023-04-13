import { useState, useEffect } from "react";
import IValidations from "../common/interfaces/IValidations";
import useValidation from "./useValidation";

const useInput = (initialValue: string, validations: IValidations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setDirty(false)
  }
  const onBlur = () => {
    setDirty(true)
  }

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  }
}

export default useInput;
