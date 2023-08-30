import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
    const session =  await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}

const Profile = () => {
    return (
        <div>
            <p className="text-white text-4xl">Profile</p>
        </div>
    )
}

export default Profile