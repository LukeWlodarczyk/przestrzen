import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SubscribeFormSchema, type SubscribeFormFields } from "./schema";

import { setSubscribeRootErrorMessage } from "./utils";

const useBlogSubscribeForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, touchedFields, isSubmitting },
  } = useForm<SubscribeFormFields>({
    mode: "onTouched",
    resolver: zodResolver(SubscribeFormSchema),
    defaultValues: { email: "" },
  });

  const onSubmit: SubmitHandler<SubscribeFormFields> = async (data) => {
    try {
      clearErrors("root");

      // TODO: connect to api
      alert(`NOT IMPLEMENTED. Submitted: ${data.email}.`);

      reset();
    } catch (error) {
      setError(`root`, {
        message: setSubscribeRootErrorMessage(error),
      });
    }
  };

  const isValidFilled = (key: keyof SubscribeFormFields) =>
    Boolean(touchedFields[key] && !errors[key]);

  return {
    register,
    formState: { errors, isValidFilled, isSubmitting },
    handleSubmit: handleSubmit(onSubmit),
  };
};

export default useBlogSubscribeForm;
