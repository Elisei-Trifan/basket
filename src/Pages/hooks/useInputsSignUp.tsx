export const useInputsSignUp = () => {
  const inputs = [
    {
      label: "Name",
      name: "name",
      type: "name",
    },
    {
      label: "Login",
      name: "login",
      type: "login",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
    {
      label: "Enter your password again",
      name: "passwordAgain",
      type: "password",
    },
  ];

  return inputs;
};
