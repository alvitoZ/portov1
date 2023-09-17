import BlankTemplate from "@/components/templates/BlankTemplate";
import dynamic from "next/dynamic";

const index = () => {
  const Section1 = dynamic(() => import("../components/organisms/Section1"), {
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
      <Section1 />
      <LeftSection />
      <RightSection />
    </BlankTemplate>
  );
};

export default index;
