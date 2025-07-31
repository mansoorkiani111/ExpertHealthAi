import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const EnterprisePlanSection = (): JSX.Element => {
  return (
    <Card className="flex flex-col w-[350px] h-[387px] items-center gap-[34px] relative rounded-[20px] overflow-hidden border-none shadow-[0px_4px_4px_#00000040] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(90deg,rgba(67,126,235,1)_0%,rgba(96,47,230,1)_50%,rgba(67,126,235,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <div className="relative self-stretch w-full h-[123px] [background:url(https://c.animaapp.com/mdq1kflvOGBUYm/img/featured-1.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(49,62,91,1)_0%,rgba(49,62,91,1)_100%)]">
        <h2 className="absolute top-[34px] left-9 font-['Poppins',Helvetica] font-bold text-white text-4xl text-center tracking-[0] leading-[normal]">
          Enterprise Plan
        </h2>
      </div>

      <CardContent className="flex flex-col w-[300px] items-center gap-[25px] p-0">
        <div className="flex flex-col items-center gap-5 relative self-stretch w-full">
          <p className="relative self-stretch mt-[-1.00px] font-['Poppins',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal]">
            For businesses with advanced needs, our Enterprise Plan offers
            customized solutions tailored to your requirements. Contact us today
            to discuss your needs and find the perfect fit for your
            organization.
          </p>
        </div>

        <Button className="relative w-[107px] h-10 bg-[#437eeb] rounded font-['Poppins',Helvetica] font-bold text-white text-xs">
          Contact Now
        </Button>
      </CardContent>
    </Card>
  );
};
