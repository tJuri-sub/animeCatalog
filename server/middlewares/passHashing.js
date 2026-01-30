import { compare, hash } from "bcryptjs";

export const hashPassword = async (plainPassword) => {
  return await hash(plainPassword, 10);
};

export const comparePassword = async (plainPassword, hashedPassword) => {
  return await compare(plainPassword, hashedPassword);
};
