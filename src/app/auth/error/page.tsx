import AuthError from "@/components/auth/Error";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { Suspense } from "react";


export default function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AuthError />
    </Suspense>
  )
}