import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

//import { Collection } from "@/components/shared/Collection";
import Header from "@/components/shared/Header";
//import { getUserImages } from "@/lib/actions/image.actions";
import { getUserById } from "@/lib/actions/user.actions";

const Profile = async ({ searchParams }: SearchParamProps) => {
    const page = Number(searchParams?.page) || 1;
    const { userId } = auth();

    if (!userId) redirect("/sign-in");

    const user = await getUserById(userId);
    //const images = await getUserImages({ page, userId: user.idUser });

    return (
        <>
            <Header title="Il tuo profilo" />

            <section className="mt-5 flex flex-col gap-5 sm:flex-row md:mt-8 md:gap-10">
                <div className="w-full rounded-[16px] border-2 border-purple-200/20 bg-white p-5 shadow-lg shadow-purple-200/10 md:px-6 md:py-8">
                    <p className="p-14-medium md:p-16-medium">
                        CREDITI DISPONIBILI
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                        <Image
                            src="/assets/icons/coins.svg"
                            alt="coins"
                            width={50}
                            height={50}
                            className="size-9 md:size-12"
                        />
                        <h2 className="h2-bold text-dark-600">
                            {user.creditBalance}
                        </h2>
                    </div>
                </div>

                <div className="w-full rounded-[16px] border-2 border-purple-200/20 bg-white p-5 shadow-lg shadow-purple-200/10 md:px-6 md:py-8">
                    <p className="p-14-medium md:p-16-medium">TEST SVOLTI</p>
                    <div className="mt-4 flex items-center gap-4">
                        <Image
                            src="/assets/icons/photo.svg"
                            alt="coins"
                            width={50}
                            height={50}
                            className="size-9 md:size-12"
                        />
                        {/* <h2 className="h2-bold text-dark-600">
                            {images?.data.length}
                        </h2> */}
                    </div>
                </div>
            </section>

            <section className="mt-8 md:mt-14">
                {/* <Collection
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        /> */}
            </section>
        </>
    );
};

export default Profile;
