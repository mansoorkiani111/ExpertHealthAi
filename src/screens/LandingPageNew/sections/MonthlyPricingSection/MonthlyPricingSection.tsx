import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MonthlyPricingSection = (): JSX.Element => {
  const features = [
    "Unlimited Real Time Transcription",
    "ICD 10 Codes",
    "Ability to send Instructions to Patient",
  ];

  return (
    <div className="transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
      <Card className="flex flex-col w-[350px] min-h-[445px] items-center relative rounded-[20px] overflow-hidden border-[none] shadow-[0px_4px_4px_#00000040] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(90deg,rgba(67,126,235,1)_0%,rgba(96,47,230,1)_50%,rgba(67,126,235,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        {/* Header Section with Price */}
        <div className="relative w-full h-[164px] overflow-hidden [background:url(https://c.animaapp.com/mdq1kflvOGBUYm/img/featured-1.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(49,62,91,1)_0%,rgba(49,62,91,1)_100%)] px-4">

          {/* Price and Description */}
          <div className="flex flex-col items-center justify-center h-full relative z-10">
            <div className="text-center">
              <div className="[font-family:'Poppins',Helvetica] font-bold text-white text-4xl">
                <span>$99</span>
                <span className="text-base ml-2">/ Month</span>
              </div>
              <p className="mt-4 [font-family:'Poppins',Helvetica] font-normal text-white text-sm max-w-[280px] mx-auto leading-tight">
                Choose the plan that fits your needs and streamline medical
                documentation effortlessly.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <CardContent className="flex flex-col w-full items-center gap-6 py-6 px-4">
          <div className="flex flex-col items-center w-full">
            <h2 className="bg-gradient-to-r from-[#437eeb] to-[#602fe6] bg-clip-text text-transparent [font-family:'Poppins',Helvetica] font-bold text-4xl mb-4">
              Monthly
            </h2>

            <div className="w-full flex flex-col items-center gap-3 [font-family:'Poppins',Helvetica] font-normal text-black text-base">
              {features.map((feature, index) => (
                <div key={index} className="w-full text-center py-1">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <a href="https://app.experthealth.ai/sign-up" target="_blank" rel="noopener noreferrer" className="no-underline">
            <Button className="w-[180px] h-12 rounded-lg bg-[#437eeb] hover:bg-[#3a6fcf] text-white font-bold text-sm transition-colors">
              Sign Up Now
            </Button>
          </a>
        </CardContent>
      </Card>
    </div>
  );
};
