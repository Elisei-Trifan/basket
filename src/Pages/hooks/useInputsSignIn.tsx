export const useInputsSignIn = () => {
  const inputs = [
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
  ];

  return inputs;
};
