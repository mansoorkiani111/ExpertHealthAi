import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { AccessSection } from "./sections/AccessSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContentSection } from "./sections/ContentSection";
import { EnterprisePlanSection } from "./sections/EnterprisePlanSection";
import { FAQsSection } from "./sections/FAQsSection";
import { FooterSection } from "./sections/FooterSection";
import { HowExpertAiHelpsSection } from "./sections/HowExpertAiHelpsSection";
import { HowExpertAiWorksSection } from "./sections/HowExpertAiWorksSection";
import { ICDSection } from "./sections/ICDSection";
import { InstructionsSection } from "./sections/InstructionsSection";
import { MainContentSection } from "./sections/MainContentSection";
import { OverviewSection } from "./sections/OverviewSection";
import { PricingSection } from "./sections/PricingSection";
import { RealTimeSupportSection } from "./sections/RealTimeSupportSection";
import { SOAPSection } from "./sections/SOAPSection";
import { StepByStepSection } from "./sections/StepByStepSection";
import { StepWrapperSection } from "./sections/StepWrapperSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const LandingPageNew = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 relative bg-white overflow-hidden w-full min-w-[320px]"
      data-model-id="1:4"
    >
      <OverviewSection />

      <Card className="w-full max-w-[387px] px-3 xs:px-4 sm:px-0 bg-white border-none shadow-none">
        <CardContent className="p-0">
          <p className="font-['Poppins',Helvetica] font-normal text-black text-base text-center">
            ExpertAI revolutionizes medical documentation, saving up to 2 hours
            daily, reducing admin costs by 40%, and ensuring compliance with
            seamless integration.
          </p>
        </CardContent>
      </Card>

      <RealTimeSupportSection />
      <ICDSection />
      <InstructionsSection />
      <SOAPSection />

      <div className="flex flex-wrap justify-center items-center gap-2 xs:gap-3 w-full px-3 xs:px-4 sm:px-0">
        <Button className="w-[107px] h-10 rounded bg-[#437eeb] font-['Poppins',Helvetica] font-bold text-white text-xs">
          Sign Up Now
        </Button>

        <Button
          variant="outline"
          className="w-[107px] h-10 rounded font-['Poppins',Helvetica] font-normal text-[13px] border-none relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded before:[background:linear-gradient(90deg,rgba(67,126,235,1)_0%,rgba(96,47,230,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
        >
          <span className="bg-[linear-gradient(90deg,rgba(67,126,235,1)_0%,rgba(96,47,230,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
            Schedule Demo
          </span>
        </Button>
      </div>

      <HowExpertAiHelpsSection />

      <div className="flex flex-wrap justify-center items-center gap-2 xs:gap-3 w-full px-3 xs:px-4 sm:px-0 max-w-[400px] sm:max-w-none">
        <Button className="w-[107px] h-10 rounded bg-[#437eeb] font-['Poppins',Helvetica] font-bold text-white text-xs">
          Sign Up Now
        </Button>

        <Button
          variant="outline"
          className="w-[107px] h-10 rounded font-['Poppins',Helvetica] font-normal text-[13px] border-none relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded before:[background:linear-gradient(90deg,rgba(67,126,235,1)_0%,rgba(96,47,230,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
        >
          <span className="bg-[linear-gradient(90deg,rgba(67,126,235,1)_0%,rgba(96,47,230,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
            Schedule Demo
          </span>
        </Button>
      </div>

      <HowExpertAiWorksSection />
      <StepByStepSection />
      <StepWrapperSection />
      <MainContentSection />
      <ContentSection />
      <CallToActionSection />
      <PricingSection />
      <EnterprisePlanSection />
      <AccessSection />
      <TestimonialsSection />
      <FAQsSection />

      <div className="flex flex-col sm:flex-row w-full max-w-[320px] xs:max-w-[378px] sm:max-w-[500px] md:max-w-[600px] items-stretch sm:items-center justify-center px-3 xs:px-4 sm:px-0">
        <div className="flex flex-1 items-center">
          <Input
            className="flex-1 px-4 py-2.5 bg-slate-50 rounded-[8px] sm:rounded-r-none border border-[#e0e5eb] font-['Poppins',Helvetica] font-medium text-x-7e-7e-7e text-sm tracking-[-0.42px] leading-[21px]"
            placeholder="Your Email Address"
          />
        </div>

        <Button className="inline-flex items-center justify-center gap-1.5 px-[18px] py-2.5 bg-[#437eeb] rounded-[8px] sm:rounded-l-none mt-2 sm:mt-0 w-full sm:w-auto font-['Poppins',Helvetica] font-medium text-defaultstyle text-sm tracking-[-0.42px] leading-[21px]">
          Get Started
          <ArrowRightIcon className="w-[22px] h-[22px]" />
        </Button>
      </div>

      <FooterSection />
    </div>
  );
};
