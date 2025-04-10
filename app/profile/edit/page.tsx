import { auth } from "@/auth";
import EditProfile from "@/components/utils/edit-profile";
import { getUserById } from "@/lib/database/queries";
import { redirect } from "next/navigation";

const EditProfilePage = async ({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) => {
  const session = await auth();

  if (!session?.user) redirect("/login");

  const params = await searchParams;
  const id = params.id || undefined;
  const user = await getUserById(id as string);

  return <EditProfile user={user} />;
};

export default EditProfilePage;
