import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AccessSection = (): JSX.Element => {
  // Platform data for mapping
  const platforms = [
    {
      name: "Web",
      icon: "https://c.animaapp.com/mdq1kflvOGBUYm/img/web-icon.png",
      iconSize: "w-[67px] h-[56.75px]",
      url: "https://experthealth.ai/sign-in",
    },
    {
      name: "Android",
      icon: "https://c.animaapp.com/mdq1kflvOGBUYm/img/android-icon.png",
      iconSize: "w-[60px] h-[60px]",
      url: "https://play.google.com/store/apps/details?id=com.expertai.app&hl=en-US",
    },
    {
      name: "iPhone",
      icon: "https://c.animaapp.com/mdq1kflvOGBUYm/img/iphone-icon.png",
      iconSize: "w-[60px] h-[60px]",
      url: "https://apps.apple.com/us/app/expert-ai",
    },
  ];

  return (
    <section className="flex flex-col w-full py-10 items-center justify-center gap-[35px] bg-white">
      <h2 className="bg-[linear-gradient(90deg,rgba(67,126,235,1)_0%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-bold text-transparent text-4xl text-center tracking-[0] leading-[35px]">
        Easily Access on
      </h2>

      <div className="flex flex-row items-start gap-[21px]">
        {platforms.map((platform, index) => (
          <Card
            key={index}
            className="w-[100px] h-28 bg-white rounded-[5px] border-[none] shadow-[4px_4px_4px_#1e1e1e6b] flex flex-col items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[5px] before:[background:linear-gradient(180deg,rgba(67,126,235,1)_0%,rgba(96,47,230,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
          >
            <CardContent className="p-0 flex flex-col items-center justify-center w-full h-full">
              <div className="w-[75.43px] bg-[linear-gradient(90deg,rgba(67,126,235,1)_0%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-bold text-transparent text-xs text-center tracking-[0] leading-[normal]">
                {platform.name}
              </div>

              <img
                className={`${platform.iconSize}`}
                alt={`${platform.name} icon`}
                src={platform.icon}
              />

              <a href={platform.url} target="_blank" rel="noopener noreferrer" className="no-underline w-full flex justify-center">
                <Button className="w-[93px] h-[35px] p-0 bg-[#437eeb] rounded flex items-center justify-center">
                  <span className="[font-family:'Poppins',Helvetica] font-bold text-white text-xs text-center tracking-[0] leading-[normal]">
                    Access Now
                  </span>
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
