import { useId } from "react";
import { Formik, Form, Field, type FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";

interface OrderFormValues {
  username: string;
  email: string;
  deliveryTime: string;
}

const initialValues: OrderFormValues = {
  username: "",
  email: "",
  deliveryTime: "",
};

const OrderFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

export default function OrderForm() {
  const fieldId = useId();

  const handleSubmit = (
    values: OrderFormValues,
    actions: FormikHelpers<OrderFormValues>
  ) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={OrderFormSchema}
    >
      <Form
        className={
          "flex flex-col max-w-2xl justify-center items-center m-auto gap-2"
        }
      >
        <Field type="text" name="username" />
        <ErrorMessage name="username" component="span" />
        <Field type="email" name="email" />

        <label htmlFor={`${fieldId}-deliveryTime`}>
          Preferred delivery time
        </label>
        <Field as="select" name="deliveryTime" id={`${fieldId}-deliveryTime`}>
          <option value="">-- Choose delivery time --</option>
          <option value="morning">Morning (8:00–12:00)</option>
          <option value="afternoon">Afternoon (12:00–16:00)</option>
          <option value="evening">Evening (16:00–20:00)</option>
        </Field>

        <button type="submit">Place order</button>
      </Form>
    </Formik>
  );
}
