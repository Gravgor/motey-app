import AuthError from "@/components/auth/Error";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { Suspense } from "react";


export default function Page() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center h-screen">
        <div className="w-10 h-10 bg-gray-200 rounded-full animate-spin"></div>
      </div>
    }>
      <AuthError />
    </Suspense>
  )
}