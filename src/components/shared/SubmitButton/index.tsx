import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../lib/graphql/mutations";
import styles from "./index.module.scss";

interface SubmitButtonProps {
  children: React.ReactNode;
  variant: "mobile" | "desktop";
  className?: string;
  email?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  variant,
  className,
  email = "tymbal0804@gmail.com",
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState(children);
  const [createUser] = useMutation(CREATE_USER);

  const handleClick = async () => {
    setIsLoading(true);

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
      setButtonText("Created!");
      console.log("User created:", response.data.createUser);
      setTimeout(() => {
        setButtonText(children);
        setIsLoading(false);
      }, 2000);
    } catch (err) {
      console.error("Error creating user:", err);
      setIsLoading(false);
    }
  };

  return (
    <button
      className={`${styles.button} ${
        styles[`button--${variant}`]
      } ${className}`}
      onClick={handleClick}
      disabled={isLoading}
    >
      {buttonText}
    </button>
  );
};

export default SubmitButton;
