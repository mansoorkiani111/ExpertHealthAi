import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HowExpertAiWorksSection = (): JSX.Element => {
  return (
    <Card className="border-none shadow-none w-full">
      <CardContent className="flex flex-col items-center gap-2.5 p-0">
        <h2 className="w-full bg-[linear-gradient(90deg,rgba(67,126,235,1)_0%)] bg-clip-text text-transparent font-['Poppins',Helvetica] font-bold text-4xl text-center tracking-[0] leading-[35px]">
          How Expert AI Works
        </h2>

        <p className="w-full font-['Poppins',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-normal">
          Streamline your workflow with our intuitive, AI-powered scribe
          designed for medical professionals.
        </p>
      </CardContent>
    </Card>
  );
};
