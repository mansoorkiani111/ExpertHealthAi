

export const FooterSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    { label: "Contact Us", value: "" },
    { label: "Phone:", value: "+1 888 555 1234" },
    { label: "Email:", value: "support@expertai.com" },
    {
      label: "Address:",
      value: "123 Medical Tech Lane,\nSan Francisco, CA 94105, USA",
      multiline: true,
    },
  ];

  return (
    <footer className="flex flex-col items-center gap-[15px] w-full bg-white">
      {/* Top dark bar */}
      <div className="w-full h-5 bg-[linear-gradient(90deg,rgba(65,65,65,1)_0%)]" />

      {/* Main footer content */}
      <div className="flex items-start justify-center gap-14 w-full px-4 py-2">
        {/* Company info column */}
        <div className="flex flex-col w-[163px] items-center gap-2">
          <img
            className="w-[119px] h-[31px] object-cover"
            alt="ExpertHealth Logo"
            src="https://c.animaapp.com/mdq1kflvOGBUYm/img/image-2.png"
          />

          <p className="font-['Poppins',Helvetica] font-normal text-black text-xs text-center">
            We help healthcare providers automate their note-taking process and
            prevent documentation burnout.
          </p>
        </div>

        {/* Contact info column */}
        <div className="flex flex-col w-[170px] items-center gap-1">
          {contactInfo.map((item, index) => (
            <p
              key={index}
              className="w-full font-['Poppins',Helvetica] font-normal text-black text-xs text-center"
            >
              {item.label} {item.value && item.value}
              {item.multiline && item.value.includes("\n") && (
                <>
                  <br />
                  {item.value.split("\n")[1]}
                </>
              )}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom blue bar */}
      <div className="w-full h-[27px] bg-[linear-gradient(90deg,rgba(67,126,235,1)_0%)] flex items-center px-4">
        <div className="flex items-center justify-between w-full max-w-[410px] mx-auto">
          <p className="font-['Poppins',Helvetica] font-normal text-white text-xs text-center">
            Copyright © 2025 ExpertHealth
          </p>

          <p className="font-['Poppins',Helvetica] font-normal text-white text-xs text-center">
            Powered by ExpertHealth
          </p>
        </div>
      </div>
    </footer>
  );
};
