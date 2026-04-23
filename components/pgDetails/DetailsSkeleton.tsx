import { Skeleton } from "../ui/skeleton";

export const DetailsSkeleton = () => {

    return (

        <div className="mx-auto max-w-7xl px-4 pt-20 animate-pulse">

            <Skeleton className="h-12 w-1/3 mb-4 rounded-xl" />

            <Skeleton className="h-6 w-1/2 mb-8 rounded-lg" />

            <Skeleton className="h-[500px] w-full rounded-[32px] mb-12" />

            <div className="grid grid-cols-3 gap-12">

                <div className="col-span-2 space-y-8">

                    <Skeleton className="h-20 w-full rounded-2xl" />

                    <Skeleton className="h-64 w-full rounded-2xl" />

                </div>

                <Skeleton className="h-96 w-full rounded-[32px]" />

            </div>

        </div>

    );

}