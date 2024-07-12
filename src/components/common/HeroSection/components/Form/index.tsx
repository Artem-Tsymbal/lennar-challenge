import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../../../lib/graphql/mutations";
import styles from "./index.module.scss";
import SubmitButton from "../../../../shared/SubmitButton";

const FormComponent: React.FC = () => {
  const [email, setEmail] = useState("");
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      />
      <SubmitButton
        variant={isMobile ? "mobile" : "desktop"}
        className={styles["form-component__button"]}
        email={email}
      >
        Start free trial
      </SubmitButton>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>User created: {data.createUser.email}</p>}
    </form>
  );
};

export default FormComponent;
