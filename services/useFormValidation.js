import { useCallback, useState } from "react";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export function useFormValidation() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === "email" && target.validationMessage !== "") {
      setErrors({
        ...errors,
        [name]: "Please enter a valid email address.",
      });
    } else if (name === "name" && target.validationMessage !== "") {
      setErrors({
        ...errors,
        [name]: "Please enter your name.",
      });
    } else if (name === "message" && target.validationMessage !== "") {
      setErrors({
        ...errors,
        [name]: "Please type your message.",
      });
    } else {
      setErrors({ ...errors, [name]: target.validationMessage });
    }
    setValues({ ...values, [name]: value });
    const form = target.closest("form");
    if (form) {
      setIsValid(form.checkValidity());
    }
  };

  const resetForm = useCallback(
    (
      newValues = initialValues,
      newErrors = initialValues,
      newIsValid = false,
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return { values, handleChange, errors, isValid, resetForm, setIsValid };
}
