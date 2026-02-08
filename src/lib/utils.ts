export function calculateAge(birthDateIso: string, now = new Date()): number {
  const birthDate = new Date(birthDateIso);
  let age = now.getFullYear() - birthDate.getFullYear();
  const monthDiff = now.getMonth() - birthDate.getMonth();
  const dayDiff = now.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age -= 1;
  }

  return age;
}

export function calculateYearsOfExperience(startYear: number, now = new Date()): number {
  return Math.max(0, now.getFullYear() - startYear);
}
