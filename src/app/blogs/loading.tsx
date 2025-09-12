import { Spinner } from "@ui/Spinner";

const Loading: React.FC = () => {
  return (
    <>
      <div className="grid items-center justify-center gap-x-4">
        <h1 className="text-lg text-secondary-500">در حال بارگیری اطلاعات</h1>
        <Spinner />
      </div>
    </>
  );
};
export default Loading;
