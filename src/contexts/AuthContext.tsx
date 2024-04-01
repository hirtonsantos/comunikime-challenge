'use client'

import { createContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { AuthService } from "@/services/AuthService";
import { ProductService } from "@/services/ProductService";

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
  createProduct: any
  findProducts: any;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {

  const router = useRouter()

  const [user, setUser] = useState<User>()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(false)

    async function signIn({ email, password }: SignInData) {
      setLoading(true)
      await AuthService.login(email, password).then((res) => {
        localStorage.setItem("current_user", JSON.stringify(res.data.user)) as any
        localStorage.setItem("access_token", res.data.token);
        setUser(res.data.user)
        router.push('/');
      }).catch((error) => {
      })
      setLoading(false)
    }

    async function createProduct(data: any) {
      await ProductService.create(data)
    }

    async function findProducts(data: any) {
      return await ProductService.findAllProducts(data)
    }

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("current_user") as any)
      const isAuthenticated = user ? true : false
      setIsAuthenticated(isAuthenticated)
    }, [user])

  return (
    <AuthContext.Provider value={{signIn, user, isAuthenticated, createProduct, findProducts}}>
      {children}
    </AuthContext.Provider>
  )
}