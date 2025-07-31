import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SOAPSection = (): JSX.Element => {
  return (
    <Card className="relative w-full max-w-[364px] h-[230px] rounded-[20px] shadow-[0px_4px_4px_#00000040] border-none before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(90deg,rgba(67,126,235,1)_0%,rgba(96,47,230,1)_50%,rgba(67,126,235,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <CardContent className="flex flex-col items-center justify-center gap-1 h-full p-4">
        <img
          className="w-[67px] h-[67px]"
          alt="Instructions icon"
          src="https://c.animaapp.com/mdq1kflvOGBUYm/img/instructions-icon-1.png"
        />

        <h3 className="w-full bg-[linear-gradient(90deg,rgba(67,126,235,1)_0%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-bold text-xl text-center tracking-[0] leading-normal font-['Poppins',Helvetica]">
          Customizable SOAP
          <br /> Notes
        </h3>

        <p className="w-full font-['Poppins',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-normal">
          AI learns your style, producing tailored SOAP notes in moments for
          seamless EHR integration.
        </p>
      </CardContent>
    </Card>
  );
};
