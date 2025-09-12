
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const NotFound: React.FC = () => {

  return (
    <>
      <div className="h-screen">
        <div className="container xl:max-w-screen-xl">
          <div className="flex justify-center pt-10">
            <div>
              <p className="text-xl font-bold text-secondary-700 mb-8">
                پست مورد نظر پیدا نشد 
              </p>
             <Link href={"/blogs"}>رفتن به همه پست ها </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
