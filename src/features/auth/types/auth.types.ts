export interface LoginFormValues {
  username: string;
  password: string;
  remember?: boolean;
}

export interface AuthUser {
  id: string;
  name: string;
  email?: string;
}
