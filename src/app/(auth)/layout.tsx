type AuthLayout = {
  children: React.ReactNode;
};

const Layout: React.FC<AuthLayout> = ({ children }) => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="max-w-md p-2 w-full">{children}</div>
    </div>
  );
};

export default Layout;
