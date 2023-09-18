import { NextPage } from "next";
import { CommonSEO } from "../SEO";
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
      <div className="flex-col md:px-[27%] px-[5%] py-10 min-h-screen flex w-full">
        <CommonSEO
          title={"kitanv1"}
          description="Description of Create Next Page by aing"
        />
        {children}
      </div>
    </>
  );
};

export default BlankTemplate;
