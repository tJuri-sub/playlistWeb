import { hash, compare } from "bcryptjs";

// Hash a password
export const hashPassword = async (plainPassword) => {
  return await hash(plainPassword, 10); // 10 is the salt rounds
};

// Compare passwords
export const comparePassword = async (plainPassword, hashedPassword) => {
  return await compare(plainPassword, hashedPassword);
};
