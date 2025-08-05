import React from "react";
import { Button } from "../../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center gap-[13px]">
      <a href="https://app.experthealth.ai/sign-up" target="_blank" rel="noopener noreferrer" className="no-underline">
        <Button className="w-[107px] h-10 bg-[#437eeb] hover:bg-[#3a6fd6] rounded font-['Poppins',Helvetica] font-bold text-xs">
          Sign Up Now
        </Button>
      </a>

      <a href="https://calendly.com/contact-experthealth/expert-ai_-product-demo?month=2025-02" target="_blank" rel="noopener noreferrer" className="no-underline">
        <Button
          variant="outline"
          className="w-[118px] h-10 rounded border-none font-['Poppins',Helvetica] font-normal text-[13px] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded before:[background:linear-gradient(90deg,rgba(67,126,235,1)_0%,rgba(96,47,230,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
        >
          <span className="bg-[linear-gradient(90deg,rgba(67,126,235,1)_0%,rgba(96,47,230,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent">
            Schedule Demo
          </span>
        </Button>
      </a>
    </div>
  );
};
