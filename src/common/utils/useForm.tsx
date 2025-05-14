import { useState } from "react";
import { notification } from "antd";
import { ok } from "assert";

interface IValues {
  name: string;
  email: string;
  message: string;
  phone: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
  phone: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));

    const url = "https://api.telegram.org/bot6219383439:AAHpWp7eOb0c1KaoDyyuS7JGVq_rwv10B-c/sendMessage?chat_id=-1002259367304&text="; // Fill in your API URL here

    try {
      if (Object.values(errors).every((error) => error === "")) {
        //const response = {ok: true}
        const response = await fetch(url + JSON.stringify(values));
        if (!response.ok) {
          notification["error"]({
            message: "Error",
            description:
              "There was an error sending your message, please try again later.",
          });
        } else {
          event.target.reset();
          setFormState(() => ({
            values: { ...initialValues },
            errors: { ...initialValues },
          }));

          notification["success"]({
            message: "Success",
            description: "Your message has been sent!",
          });
        }
      }
    } catch (error) {
      notification["error"]({
        message: "Error",
        description: "Failed to submit form. Please try again later.",
      });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};
