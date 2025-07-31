
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FAQsSection = (): JSX.Element => {
  // FAQ data for easier maintenance and mapping
  const faqItems = [
    {
      question: "Is expert AI HIPAA Compliant?",
      answer: "Yes Expert AI is 100% HIPAA Compliant.",
    },
    {
      question: "What is Expert AI's ROI (Return on Investment)?",
      answer:
        "Before any discounts, the average monthly cost for Expert AI is $99. If you see one Medicare Advantage patient, the healthcare provider receives $89 per visit. One visit's payment can cover the monthly subscription for Expert AI.",
    },
    {
      question: "How is Expert AI Different from another AI Scribe?",
      answer:
        "It was developed by health professionals for health professionals. As a healthcare provider, the creator understands the challenges faced by other clinicians and has curated Expert AI to assist them. The solution is supported by chart auditors, billers, and physicians. It saves healthcare providers two hours of work each day by offering ICD-10 coding and generating patient instructions that can be emailed to patients at the end of their visit.",
    },
    {
      question: "How Do I use your platform?",
      answer:
        "We offer versions for Android, iOS, and the web, all of which are interconnected. For example, if you record a patient encounter using your phone, you can access the same information from our web version. Please note that for security and HIPAA compliance reasons, you cannot be logged into both the mobile and web versions at the same time.",
    },
    {
      question:
        "How Does it come to my EMR/EHR (Electronic Medical/ Health Record)",
      answer:
        "We are currently working on the integration with the Major EMR. In the meantime, you can copy and paste created visits from the web version to your EMR/EHR.",
    },
    {
      question: "Do I need Consent form from the patient?",
      answer:
        'No, you just need verbal consent from the patient stating, "You are recording this conversation to capture accurate health information. Is it OK?" We haven\'t had any patients so far who have declined this process.',
    },
    {
      question: "What is the Accuracy of your product?",
      answer: "The current accuracy of Expert AI is 99.4%.",
    },
    {
      question: "Does EMR has Problem with your platform?",
      answer:
        "None of the EMRs has encountered any problems with the integration so far.",
    },
    {
      question: "Does it also Translate other languages?",
      answer:
        "We currently have a few languages undergoing beta testing for accuracy.",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-6 xs:gap-8 px-3 xs:px-4 py-10 xs:py-12 w-full max-w-4xl mx-auto">
      <h2 className="font-bold font-['Poppins',Helvetica] text-3xl xs:text-4xl text-center tracking-tight leading-tight xs:leading-9 bg-[linear-gradient(90deg,rgba(67,126,235,1)_0%)] bg-clip-text text-transparent px-2">
        Frequently Asked Questions
      </h2>

      <div className="w-full max-w-2xl px-1 xs:px-0">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={`faq-${index}`} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg p-3 xs:p-4 hover:bg-gray-50 transition-colors"
            >
              <AccordionTrigger className="font-['Poppins',Helvetica] font-bold text-sm xs:text-base text-left px-1 xs:px-2 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-['Poppins',Helvetica] font-normal text-xs xs:text-sm text-left px-1 xs:px-2 pt-2 text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
