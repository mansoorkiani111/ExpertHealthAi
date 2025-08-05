import { MonthlyPricingSection } from "../MonthlyPricingSection";

export const PricingSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full gap-8">
      <div className="flex flex-col w-full max-w-md items-center gap-2.5 bg-white">
        <h2 className="w-full bg-[linear-gradient(90deg,rgba(67,126,235,1)_0%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-poppins font-bold text-transparent text-4xl text-center tracking-[0] leading-normal">
          How Much It Costs
        </h2>

        <p className="w-full font-poppins font-normal text-black text-base text-center tracking-[0] leading-normal">
          Affordable, transparent pricing to streamline your documentation.
        </p>
      </div>

      {/* Display the monthly pricing card */}
      <div className="w-full flex justify-center">
        <div className="w-[350px]">
          <MonthlyPricingSection />
        </div>
      </div>
    </div>
  );
};
