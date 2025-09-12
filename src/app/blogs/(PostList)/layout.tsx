import { Metadata } from "next";
import { ReactNode } from "react";
import CategoryList from "../_components/CategoryList";
import Search from "@ui/Search";

export const metadata: Metadata = {
  title: "لیست بلاگ ها ",
};
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 text-center">
          <h1 className="text-lg font-bold ">لیست بلاگ ها</h1>
          <Search />
        </div>

        <div className="grid grid-cols-12 gap-8 ">
          <div className="col-span-12 lg:col-span-4 xl:col-span-3 text-secondary-500 space-y-4 ">
            <CategoryList />
          </div>
          <div className="col-span-12 lg:col-span-8 xl:col-span-9">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
