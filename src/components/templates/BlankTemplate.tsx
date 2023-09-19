import { NextPage } from "next";
import { useRouter } from "next/router";

type props = {
  children: React.ReactNode;
};

const BlankTemplate: NextPage<props> = ({ children }) => {
  const router = useRouter();
  // const myPath = (): string => {
  //   let path: string = "";
  //   if (router.asPath == "/") {
  //     path = "Home";
  //   } else {
  //     path = router.asPath.replace("/", "");
  //   }
  //   return path;
  // };

  return (
    <>
      <div className="flex-col py-10 min-h-screen flex w-full justify-center items-center overflow-hidden">
        {children}
      </div>
    </>
  );
};

export default BlankTemplate;
