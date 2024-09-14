import React, { useState, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../../../lib/graphql/mutations";
import styles from "./index.module.scss";
import SubmitButton from "../../../../shared/SubmitButton";

const FormComponent: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [createUser, { data, loading: isLoading, error }] = useMutation(CREATE_USER);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    []
  );

  const isValidEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      const response = await createUser({
        variables: {
          input: {
            name: email.split("@")[0],
            username: email.split("@")[0],
            email: email,
          },
        },
      });
      console.log("User created:", response.data.createUser);
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };

  return (
    <form className={styles["form-component"]} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        className={styles["form-component__input"]}
        value={email}
        onChange={handleInputChange}
        aria-label="Email"
        required
      />
      <SubmitButton
        variant={isMobile ? "mobile" : "desktop"}
        className={styles["form-component__button"]}
        email={email}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Start free trial"}
      </SubmitButton>
      {error && <p className={styles.error}>Error: {error.message}</p>}
      {data && <p className={styles.success}>User created: {data.createUser.email}</p>}
    </form>
  );
};

export default FormComponent;
