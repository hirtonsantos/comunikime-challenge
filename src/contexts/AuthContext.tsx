'use client'

import { AuthService } from "@/services/AuthService";
import { ProductService } from "@/services/ProductService";
import { useRouter } from 'next/navigation';
import { createContext, useEffect, useState } from "react";

type User = {
  companyId: number;
  email: string;
  id: number;
  name: string;
}

type SignInData = {
  email: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated?: boolean | null;
  user?: User;
  signIn?: any;
  registerAccount?: any;
  createProduct: any
  findProducts: any;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {

  const router = useRouter()

  const [user, setUser] = useState<User>()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

    async function signIn({ email, password }: SignInData) {
      await AuthService.login(email, password).then((res) => {
        localStorage.setItem("current_user", JSON.stringify(res.data.user)) as any
        localStorage.setItem("access_token", res.data.token);
        setUser(res.data.user)
        router.push('/');
      }).catch((error) => {
      })
    }

    async function registerAccount(data: any) {
      await AuthService.register(data).then((res) => {
        localStorage.setItem("current_user", JSON.stringify(res.data.user)) as any
        localStorage.setItem("access_token", res.data.token);
        setUser(res.data.user)
        router.push('/');
      }).catch((error) => {
      })
    }

    async function createProduct(data: any) {
      await ProductService.create(data)
    }

    async function findProducts(data: any) {
      return await ProductService.findAllProducts(data)
    }

    useEffect(() => {
      const userJSON = localStorage.getItem("current_user");
      const isAuthenticated = !!userJSON && userJSON !== 'undefined';
      isAuthenticated ? JSON.parse(userJSON) : null;    
      setIsAuthenticated(isAuthenticated);
    }, [user])

  return (
    <AuthContext.Provider value={{signIn, user, isAuthenticated, createProduct, findProducts, registerAccount}}>
      {children}
    </AuthContext.Provider>
  )
}