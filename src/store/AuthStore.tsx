import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

export type User = {
  id: string;
  name: string;
  email?: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;

  // acciones
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null, token?: string | null) => void;
};

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        token: null,
        refreshToken: null,
        isAuthenticated: false,

        login: async (email, password) => {
    
          await new Promise((r) => setTimeout(r, 700));

        
          if (!email || !password) {
            throw new Error('Credenciales inválidas');
          }

     
          const fakeUser: User = {
            id: 'u_' + Math.random().toString(36).slice(2, 9),
            name: email,
            email: `${name}@example.com`,
          };

          const fakeToken =
            'jwt-token-' + Math.random().toString(36).slice(2);

          set({
            user: fakeUser,
            token: fakeToken,
            isAuthenticated: true,
          });
        },

        logout: () => {
          set({
            user: null,
            token: null,
            isAuthenticated: false,
          });
        },

        setUser: (user, token = null) => {
          set({
            user,
            token,
            isAuthenticated: !!user,
          });
        },
      }),
      {
        name: 'auth-storage', 
        partialize: (state) => ({
          user: state.user,
          token: state.token,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    )
  )
);
