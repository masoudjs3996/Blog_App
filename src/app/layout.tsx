import React, { ReactNode, FC } from "react";
import "@styles/globals.css";
import vazirFont from "@constants/localFont";
import Header from "@components/Header";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@context/AuthContext";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: {
    template: "%s | بلاگ اپ",
    default: "بلاگ اپ",
  },
  description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران ",
};
const RootLayout: FC<RootLayoutProps> = ({ children }) => {

  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`}>
        <AuthProvider>
          <Toaster />
          <Header />
          <div className="container xl:max-w-screen-xl">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
