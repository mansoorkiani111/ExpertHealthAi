import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const TestimonialsSection = (): JSX.Element => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  // Testimonial data for mapping
  const testimonials = [
    {
      name: "Dr. Patel",
      title: "NP-C",
      content:
        "As a hospitalist, juggling patient care and documentation can be overwhelming. Expert Al has been a true game-changer for our team. It streamlines the documentation process, saving us hours each day and ensuring records are accurate and organized. This efficiency allows us to dedicate more time to patient care and make critical decisions without being bogged down by paperwork. The Al adapts seamlessly to our workflow, reducing stress and enhancing overall productivity. Expert Al isn't just a tool-it's an indispensable partner in delivering high-quality care in a fast-paced hospital environment.",
      fontFamily: "Inter",
    },
    {
      name: "T Tumey",
      title: "Facility Manager",
      content:
        "Before Expert AI, completing a single visit note took 30-45 minutes, slowing operations and efficiency. \n\nNow, we complete 7-8 assessments per hour—a dramatic productivity boost. \n\nExpert AI enhances accuracy, improves patient documentation, and ensures better communication and care continuity. Beyond speed and accuracy, patient satisfaction has increased as our team spends more time with patients instead of administrative tasks. \n\nBy streamlining workflows and reducing errors, Expert AI has become an indispensable tool for high-quality, efficient care. It has truly revolutionized our assessments and transformed our organization.",
      fontFamily: "Poppins",
      titleClass:
        "font-caption-regular font-[number:var(--caption-regular-font-weight)] text-x-7e-7e-7e text-[length:var(--caption-regular-font-size)] tracking-[var(--caption-regular-letter-spacing)] leading-[var(--caption-regular-line-height)] whitespace-nowrap [font-style:var(--caption-regular-font-style)]",
    },
    {
      name: "P. Shah",
      title: "NP-C",
      content:
        "Using Expert Al in our home visiting practice has been a game-changer. Documentation, which used to consume hours of our day, is now streamlined and efficient. We save at least two hours daily, allowing us to focus more on patient care and less on administrative tasks. The Al's intuitive design helps us organize and complete records seamlessly, improving accuracy and compliance while reducing stress for our team. Our workflows are smoother than ever, enabling us to deliver better care to our patients without burnout. Expert Al has truly transformed the way we work—it's an essential tool for any home healthcare provider!",
      fontFamily: "Inter",
    },
  ];

  // Scroll to the middle card on component mount
  useEffect(() => {
    if (scrollContainer.current) {
      // Calculate the scroll position to center the second card
      const container = scrollContainer.current;
      const scrollWidth = container.scrollWidth;
      const containerWidth = container.clientWidth;
      // Scroll to center the second card
      container.scrollLeft = (scrollWidth - containerWidth) / 2;
    }
  }, []);

  return (
    <section className="flex flex-col items-center gap-6 xs:gap-8 px-3 xs:px-4 py-10 xs:py-12 w-full md:px-6 lg:px-[75px] max-w-screen-2xl mx-auto">
      <h2 className="w-full max-w-[280px] xs:max-w-[334px] bg-[linear-gradient(90deg,rgba(67,126,235,1)_0%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-bold text-transparent text-[28px] xs:text-3xl md:text-4xl text-center tracking-[0] leading-tight xs:leading-[35px]">
        What Customers Say About Expert AI
      </h2>

      <div className="relative w-full max-w-[1200px] mx-auto px-2 xs:px-3 sm:px-4 md:px-6">
        {/* Navigation Buttons */}
        <button 
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 sm:-translate-x-10 md:-translate-x-12 z-10 p-1.5 sm:p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors"
          onClick={() => {
            if (scrollContainer.current) {
              scrollContainer.current.scrollBy({
                left: -300,
                behavior: 'smooth'
              });
            }
          }}
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="w-6 h-6 text-[#437EEB]" />
        </button>
        
        <div 
          ref={scrollContainer}
          className="flex gap-3 xs:gap-4 sm:gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory w-full px-1 xs:px-2"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {/* This is a hidden spacer to help center the middle card */}
          <div className="flex-shrink-0 w-1/3 xs:w-1/2 sm:w-[calc(50%-150px)]" />
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`flex-shrink-0 w-[280px] md:w-[300px] snap-center ${index === 1 ? 'md:mx-auto' : ''}`}>
            <Card
              className="h-[683px] bg-white rounded-[5px] border-[none] shadow-[4px_4px_4px_#1e1e1e6b]"
            >
            <CardContent className="flex flex-col items-center justify-center h-full gap-[19px] p-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-fit mt-[-1.00px] [font-family:'${testimonial.fontFamily}',Helvetica] font-bold text-black text-2xl text-center tracking-[0] leading-[normal]`}
                >
                  {testimonial.name}
                </div>
                <div
                  className={
                    testimonial.titleClass ||
                    `w-fit [font-family:'${testimonial.fontFamily}',Helvetica] font-bold text-black text-2xl text-center tracking-[0] leading-[normal]`
                  }
                >
                  {testimonial.title}
                </div>
              </div>

              <div className="w-fit bg-[linear-gradient(90deg,rgba(67,126,235,1)_0%,rgba(96,47,230,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-bold text-transparent text-2xl text-center tracking-[0] leading-[normal]">
                ★★★★★
              </div>

              <div
                className={`w-[228px] [font-family:'${testimonial.fontFamily}',Helvetica] font-normal text-black text-[13px] text-justify tracking-[0] leading-[normal] whitespace-pre-line`}
              >
                {testimonial.content}
              </div>
            </CardContent>
          </Card>
          </div>
        ))}
          {/* This is a hidden spacer to help center the middle card */}
          <div className="flex-shrink-0 w-1/3 xs:w-1/2 sm:w-[calc(50%-150px)]" />
        </div>
        
        <button 
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 sm:translate-x-10 md:translate-x-12 z-10 p-1.5 sm:p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors"
          onClick={() => {
            if (scrollContainer.current) {
              scrollContainer.current.scrollBy({
                left: 300,
                behavior: 'smooth'
              });
            }
          }}
          aria-label="Next testimonials"
        >
          <ChevronRight className="w-6 h-6 text-[#437EEB]" />
        </button>
      </div>
    </section>
  );
};