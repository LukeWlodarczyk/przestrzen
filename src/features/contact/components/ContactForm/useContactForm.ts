import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FORM_NAME } from "./consts";

import { ContactFormSchema, type ContactFormFields } from "./schema";

import { redirectToSuccessPage, setContactRootErrorMessage } from "./utils";

import submitContactForm from "./api";

const useContactForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, touchedFields, isSubmitting },
  } = useForm<ContactFormFields>({
    mode: "onTouched",
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit: SubmitHandler<ContactFormFields> = async (data) => {
    try {
      clearErrors("root");

      await submitContactForm({
        ...data,
        "form-name": FORM_NAME,
        subject: `Nowa wiadomość od ${data.name}`,
      });

      reset();

      redirectToSuccessPage();
    } catch (error) {
      setError(`root`, {
        message: setContactRootErrorMessage(error),
      });
    }
  };

  const isValidFilled = (key: keyof ContactFormFields) =>
    Boolean(touchedFields[key] && !errors[key]);

  return {
    register,
    formState: { errors, isValidFilled, isSubmitting },
    handleSubmit: handleSubmit(onSubmit),
  };
};

export default useContactForm;
