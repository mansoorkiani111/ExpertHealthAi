import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  return (
    <Card className="relative w-full max-w-[342px] h-[155px] rounded-[20px] shadow-[0px_4px_4px_#00000040] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(90deg,rgba(67,126,235,1)_0%,rgba(96,47,230,1)_50%,rgba(67,126,235,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <CardContent className="flex flex-col items-center justify-center h-full gap-1 p-4">
        <h3 className="w-[311px] bg-[linear-gradient(90deg,rgba(67,126,235,1)_0%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-bold text-transparent text-2xl text-center tracking-[0] leading-[normal]">
          3. Review &amp; Edit
        </h3>

        <p className="w-[311px] [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal]">
          Customize SOAP notes with AI that adapts to your style, ready in
          moments.
        </p>
      </CardContent>
    </Card>
  );
};
