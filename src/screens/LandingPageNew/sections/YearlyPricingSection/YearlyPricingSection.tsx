import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const YearlyPricingSection = (): JSX.Element => {
  const features = [
    "Get Extra 20% OFF",
    "Unlimited Real Time Transcription",
    "ICD 10 Codes",
    "Ability to send Instructions to Patient",
  ];

  return (
    <Card className="flex flex-col w-[350px] h-[445px] items-center gap-1 relative rounded-[20px] overflow-hidden border-[none] shadow-[0px_4px_4px_#00000040] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(90deg,rgba(67,126,235,1)_0%,rgba(96,47,230,1)_50%,rgba(67,126,235,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <div className="relative self-stretch w-full h-[164px] overflow-hidden [background:url(https://c.animaapp.com/mdq1kflvOGBUYm/img/featured-1.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(49,62,91,1)_0%,rgba(49,62,91,1)_100%)]">
        <div className="relative w-[429px] h-[247px] top-[-98px] left-[25px]">
          <div className="absolute w-[304px] h-[118px] top-[129px] left-0">
            <div className="absolute top-0 left-[59px] [font-family:'Poppins',Helvetica] font-bold text-transparent text-4xl text-center tracking-[0] leading-[normal]">
              <span className="text-white">$1188 / </span>
              <span className="text-white text-base">Yearly</span>
            </div>

            <div className="absolute w-[300px] top-[58px] left-0 [font-family:'Poppins',Helvetica] font-normal text-white text-[13px] text-center tracking-[0] leading-[normal]">
              Choose the plan that fits your needs and streamline medical
              documentation effortlessly.
            </div>
          </div>

          <div className="absolute w-[143px] h-[124px] top-8 left-[263px] bg-[#437eeb] rotate-[43deg]" />
          <div className="absolute top-[116px] left-[270px] rotate-[42deg] [font-family:'Outfit',Helvetica] font-normal text-white text-[13px] text-center tracking-[0] leading-[normal]">
            Featured
          </div>
        </div>
      </div>

      <CardContent className="flex flex-col w-[300px] items-center gap-[19px] pt-0">
        <div className="flex flex-col items-center gap-5 relative self-stretch w-full">
          <h2 className="relative w-fit mt-[-1.00px] bg-[linear-gradient(90deg,rgba(67,126,235,1)_0%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-bold text-transparent text-4xl text-center tracking-[0] leading-[normal]">
            Yearly
          </h2>

          <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal]">
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                {feature}
                {index < features.length - 1 && <br />}
                {index === 0 && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <Button className="bg-[#437eeb] w-[107px] h-10 rounded font-bold text-white text-xs">
          Sign Up Now
        </Button>
      </CardContent>
    </Card>
  );
};
