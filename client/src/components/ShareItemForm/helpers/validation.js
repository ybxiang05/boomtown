export default function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "required";
  }
  if (!values.description) {
    errors.description = "required";
  }
  if (!values.tags) {
    errors.tags = "required";
  }

  return errors;
}
