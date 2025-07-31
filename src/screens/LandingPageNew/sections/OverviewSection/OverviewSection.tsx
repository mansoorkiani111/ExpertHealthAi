import { Button } from "../../../../components/ui/button";

export const OverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start px-3 xs:px-4 sm:px-6 md:px-8 py-12 xs:py-16 sm:py-20 md:py-28 w-full bg-[linear-gradient(90deg,rgba(96,47,230,1)_0%,rgba(67,126,235,1)_50%,rgba(96,47,230,1)_100%)] relative overflow-hidden">
      {/* Mobile phone image positioned on the right */}
      <div className="absolute -right-12 xs:-right-15 sm:-right-15 top-[65%] xs:top-[60%] sm:top-1/2 transform -translate-y-1/2 z-10 w-[85vw] xs:w-[250px] sm:w-[300px] md:w-[350px] transition-all duration-300">
        <img
          className="w-full h-auto"
          alt="Mobile phone"
          src="/images/Aesthetic Phone Mockup Instagram Post 1.png"
        />
      </div>

      <div className="flex flex-col items-start gap-9 w-full relative z-20">
        <div className="flex flex-col items-start gap-4 sm:gap-[15px] w-full max-w-3xl">
          <h2 className="font-['Poppins',Helvetica] font-bold text-white text-[28px] xs:text-3xl sm:text-4xl md:text-[40px] leading-tight sm:leading-10 max-w-full xs:max-w-[300px] sm:max-w-[375px] md:max-w-[500px]">
            Effortless Medical Documentation <br /> with Expert AI
          </h2>

          <p className="font-['Poppins',Helvetica] font-semibold text-white text-xs xs:text-sm leading-normal max-w-[200px] xs:max-w-none">
            HIPAA-compliant AI scribe for Health Care Providers, Save 2 hours
            daily and focus on patient care.
          </p>
        </div>
      </div>

      <div className="flex flex-col xs:flex-row items-center gap-2 xs:gap-3 sm:gap-4 relative z-20 mt-4 xs:mt-6 sm:mt-8 w-full max-w-[200px] xs:max-w-none">
        <Button className="w-full xs:w-[165px] h-[35px] bg-white rounded-[7px] hover:bg-gray-100">
          <span className="font-['Poppins',Helvetica] font-semibold text-[#4d4d4d] text-xs">
            Get 20 Free Visits Now
          </span>
        </Button>

        <Button
          variant="outline"
          className="w-[107px] h-10 border border-solid border-white rounded text-white bg-transparent hover:bg-white/10"
        >
          <span className="font-['Poppins',Helvetica] font-bold text-xs">
            Schedule Demo
          </span>
        </Button>
      </div>
    </section>
  );
};
