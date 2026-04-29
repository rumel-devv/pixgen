"use client";
import { UpdateUserModal } from "@/components/UpdateModal";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import Image from "next/image";

const ProfilePgae = () => {
  const { data, isLoading } = authClient.useSession();
  const user = data?.user;
  if (isLoading) {
    <div className="flex flex-col items-center gap-2">
      <Spinner color="current" />
      <span className="text-xs text-muted">Current</span>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 text-center">
        <Image
          src={user?.image}
          alt="profile"
          width={300}
          height={300}
          className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-600"
        />

        <h2 className="text-xl font-bold text-white">
          {user?.name}
        </h2>

        <p className="text-gray-400 text-sm mt-1">{user?.email}</p>

        <div className="mt-6 space-y-2 text-sm text-gray-300">
          <p>
            <span className="text-gray-500">User ID:</span> {user.id}
          </p>
        </div>

        <button
          onClick={() => authClient.signOut()}
          className="my-6 w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Logout
        </button>
        <UpdateUserModal/>
      </div>
    </div>
  );
};

export default ProfilePgae;
