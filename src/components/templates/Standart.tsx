import { NextPage } from "next";
import PrimaryNavigation from "../molecules/PrimaryNavigation";

type props = {
  children: React.ReactNode;
};

const BlankTemplate = ({ children }: props) => {
  return (
    <div>
      <PrimaryNavigation />	
    </div>
  );
};

export default BlankTemplate;
