// This must be at the top of the file
"use client";

import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  // Use the useUserAuth hook to get the user object and auth functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Login Page</h1>

      {user ? (
        <div>
          <p className="mb-2">
            Welcome, {user.displayName || user.email}!
          </p>
          <div className="flex gap-4">
            <button onClick={firebaseSignOut} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Logout
            </button>
            <Link href="/week-9/shopping-list" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go to Shopping List
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={gitHubSignIn} className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
            Login with GitHub
          </button>
        </div>
      )}
    </main>
  );
}