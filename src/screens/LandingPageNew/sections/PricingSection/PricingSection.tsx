import React from "react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";
import { MonthlyPricingSection } from "../MonthlyPricingSection";
import { YearlyPricingSection } from "../YearlyPricingSection";

export const PricingSection = (): JSX.Element => {
  const [billingCycle, setBillingCycle] = React.useState("monthly");

  return (
    <div className="flex flex-col items-center w-full gap-8">
      <div className="flex flex-col w-full max-w-md items-center gap-2.5 bg-white">
        <h2 className="w-full bg-[linear-gradient(90deg,rgba(67,126,235,1)_0%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-poppins font-bold text-transparent text-4xl text-center tracking-[0] leading-normal">
          How Much It Costs
        </h2>

        <p className="w-full font-poppins font-normal text-black text-base text-center tracking-[0] leading-normal">
          Affordable, transparent pricing to streamline your documentation.
        </p>

        <ToggleGroup
          type="single"
          value={billingCycle}
          onValueChange={(value) => {
            if (value) setBillingCycle(value);
          }}
          className="flex items-center gap-3 mt-2"
        >
          <ToggleGroupItem
            value="monthly"
            className={`w-[107px] h-10 rounded font-poppins font-bold text-xs ${
              billingCycle === "monthly"
                ? "bg-[#437eeb] text-white"
                : "text-[#437eeb] border border-[#437eeb]"
            }`}
          >
            Monthly
          </ToggleGroupItem>

          <ToggleGroupItem
            value="yearly"
            className={`w-[107px] h-10 rounded font-poppins text-[13px] ${
              billingCycle === "yearly"
                ? "bg-[#437eeb] text-white font-bold"
                : "bg-transparent font-normal before:content-[''] before:absolute before:inset-0 before:p-px before:rounded before:[background:linear-gradient(90deg,rgba(67,126,235,1)_0%,rgba(96,47,230,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
            }`}
          >
            <span
              className={
                billingCycle !== "yearly"
                  ? "bg-[linear-gradient(90deg,rgba(67,126,235,1)_0%,rgba(96,47,230,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]"
                  : ""
              }
            >
              Yearly
            </span>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Display the appropriate pricing card with animation */}
      <div className="w-full flex justify-center">
        <div className="relative w-[350px] h-[600px]">
          <div 
            className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${billingCycle === 'monthly' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
          >
            <MonthlyPricingSection />
          </div>
          <div 
            className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${billingCycle === 'yearly' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
          >
            <YearlyPricingSection />
          </div>
        </div>
      </div>
    </div>
  );
};
