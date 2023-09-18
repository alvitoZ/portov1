import BlankTemplate from "@/components/templates/BlankTemplate";
import dynamic from "next/dynamic";

const index = () => {
  const PostImage = dynamic(() => import("../components/organisms/PostImage"), {
    ssr: false,
  });
  const LeftSection = dynamic(
    () => import("../components/organisms/LeftSection"),
    { ssr: false }
  );
  const RightSection = dynamic(
    () => import("../components/organisms/RightSection"),
    { ssr: false }
  );
  return (
    <BlankTemplate>
      <PostImage />
      <LeftSection />
      <RightSection />
    </BlankTemplate>
  );
};

export default index;
