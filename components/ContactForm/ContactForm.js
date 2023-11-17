"use client";

import styles from "./ContactForm.module.css";
import { useState } from "react";
import { submitContact } from "@/services/submitContact";
import { useFormValidation } from "@/services/useFormValidation";

export const ContactForm = () => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormValidation();
  const [isNameTouched, setIsNameTouched] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isMessageTouched, setIsMessageTouched] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    submitContact({
      name: values.name,
      email: values.email,
      message: values.message,
    });
    resetForm();
  }

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit}
      name="contact-form"
    >
      <span className={styles.spanerr}>
        {isNameTouched && errors.name !== "" && errors.name}
      </span>
      <input
        type="text"
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={() => setIsNameTouched(true)}
        className={`${styles.input} ${
          isNameTouched && errors.name !== "" && styles.inputerr
        }`}
        placeholder="Name"
        required
      />
      <span className={styles.spanerr}>
        {isEmailTouched && errors.email !== "" && errors.email}
      </span>
      <input
        type="email"
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={() => setIsEmailTouched(true)}
        className={`${styles.input} ${
          isEmailTouched && errors.email !== "" && styles.inputerr
        }`}
        placeholder="Email"
        required
      />
      <span className={styles.spanerr}>
        {isMessageTouched && errors.message !== "" && errors.message}
      </span>
      <textarea
        id="message"
        name="message"
        rows={10}
        value={values.message}
        onChange={handleChange}
        onBlur={() => setIsMessageTouched(true)}
        className={`${styles.message} ${
          isMessageTouched && errors.message !== "" && styles.messageerr
        }`}
        placeholder="Type your message here"
        required
      />
      <button className={styles.button} isDisabled={!isValid}>
        Submit
      </button>
    </form>
  );
};
