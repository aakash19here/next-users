import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata : Metadata = {
    title : "Users" ,
}

export default async function Users() {
  const usersData : Promise<User[]> = getAllUsers()
  const users = await usersData;

  const content = (
    <section>
        <h2>
            <Link href={"/"} className="ml-10">Back to Home</Link> 
        </h2>
        <br/>
        {
            users.map(user => {
                return (
                    <>
                        <div className="w-[100vw] mx-auto">
                            <p key={user.id} className="text-blue-900 text-center">
                                <Link href={`/users/${user.id}`}>{user.name}</Link>
                            </p>
                            <br/>
                        </div>
                    </>
                )})}
    </section>
  )
  return content
}
