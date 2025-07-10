import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: (auth: boolean) => {},
  email: '',
  setEmail: (email: string) => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
} 