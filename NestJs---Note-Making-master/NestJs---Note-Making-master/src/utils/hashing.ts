import * as bcrypt from 'bcrypt';

export async function hash(password: string): Promise<string> {
  return await bcrypt.hash(password, process.env.SALTROUNDS);
}

export async function verifyPassword(password1, password2): Promise<boolean> {
  return await bcrypt.compare(password1, password2);
}
