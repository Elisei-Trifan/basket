export const getAge = (dayOfBirth?: Date) => {
  if (!dayOfBirth) return null;
  const birthDate = new Date(dayOfBirth);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};
