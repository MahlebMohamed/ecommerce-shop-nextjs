import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:px-24 lg:pb-52 xl:gap-x-8 xl:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="absolute -top-20 left-0 hidden w-28 lg:block">
                <img src="/snake-1.png" alt="logo" className="w-full" />
              </div>
              <h1 className="relative mt-16 w-fit text-balance text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case{" "}
              </h1>
              <p>
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allwos you to protect your memories, not just your
                phone case.
              </p>

              <ul className="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
                <li className="flex items-center gap-1.5 text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />
                  High-quantity, durable meterial
                </li>
                <li className="flex items-center gap-1.5 text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />5 year
                  print gurantee
                </li>
                <li className="flex items-center gap-1.5 text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />
                  Modern iPhone models supported
                </li>
              </ul>

              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  <img
                    src="/users/user-1.png"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img
                    src="/users/user-2.png"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img
                    src="/users/user-3.png"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img
                    src="/users/user-4.jpg"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img
                    src="/users/user-5.jpg"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                </div>

                <div className="flex flex-col items-center justify-between sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                  </div>

                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
