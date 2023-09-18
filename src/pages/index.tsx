import BlankTemplate from "@/components/templates/BlankTemplate";
import dynamic from "next/dynamic";
import { CommonSEO } from "@/components/SEO";

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
      <CommonSEO
        title={"kitanv1 ui/ux"}
        description="Description of Create Next Page by aing"
      />
      <PostImage />
      <LeftSection />
      <RightSection />
    </BlankTemplate>
  );
};

export default index;
