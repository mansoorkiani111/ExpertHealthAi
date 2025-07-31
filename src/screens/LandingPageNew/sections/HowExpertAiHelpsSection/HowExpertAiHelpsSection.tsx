
import { Card, CardContent } from "../../../../components/ui/card";

export const HowExpertAiHelpsSection = (): JSX.Element => {
  // Data for the cards to enable mapping
  const statsCards = [
    {
      title: "Save Up To",
      value: "2 Hours / Day",
      isLarge: true,
    },
    {
      title: "Improves Accuracy",
      value: "100%",
      isLarge: false,
    },
    {
      title: "Seamless Integration",
      value: "100%",
      isLarge: false,
    },
  ];

  return (
    <section className="w-full py-8 sm:py-10 bg-[linear-gradient(90deg,rgba(96,47,230,1)_0%,rgba(67,126,235,1)_50%,rgba(96,47,230,1)_100%)]">
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 max-w-md mx-auto px-3 xs:px-4">
        <h2 className="text-3xl xs:text-4xl font-bold text-center [font-family:'Poppins',Helvetica] text-white px-2">
          Expert AI Helps You To
        </h2>

        <div className="flex flex-col w-full max-w-[316px] gap-3">
          {/* First row with large card */}
          {statsCards[0].isLarge && (
            <div className="flex justify-center w-full">
              <Card className="w-full bg-white relative shadow-[0px_4px_4px_#00000040] rounded-[10px] border-0 overflow-hidden">
                <CardContent className="flex flex-col items-center justify-center p-3">
                  <p className="text-xs xs:text-sm text-[#4d4d4d] [font-family:'Poppins',Helvetica] text-center leading-tight">
                    {statsCards[0].title}
                  </p>
                  <p className="text-3xl xs:text-4xl font-bold text-[#437eeb] [font-family:'Poppins',Helvetica] text-center leading-none mt-1">
                    {statsCards[0].value}
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Second row with two smaller cards */}
          <div className="flex gap-2 xs:gap-3 w-full">
            {statsCards.slice(1).map((card, index) => (
              <div key={index} className="flex-1 min-w-0">
                <Card className="w-full h-auto min-h-[90px] xs:min-h-[101px] bg-white relative shadow-[0px_4px_4px_#00000040] rounded-[10px] border-0 overflow-hidden">
                  <CardContent className="flex flex-col items-center justify-center p-2 xs:p-3 h-full">
                    <p className="text-[10px] xs:text-xs text-[#4d4d4d] [font-family:'Poppins',Helvetica] text-center leading-tight px-1">
                      {card.title}
                    </p>
                    <p className="text-2xl xs:text-3xl font-bold text-[#437eeb] [font-family:'Poppins',Helvetica] text-center leading-none mt-1">
                      {card.value}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
