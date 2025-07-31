import Link from "next/link";

const topKeywords = [
  { title: "X7 Smart Electric" },
  { title: "dell precision 5560" },
  { title: "dell precision 7550" },
  { title: "IdeaPad Slim 3 16 2025 (XiaoXin 16c AHP10)" },
  { title: "thinkbook 14 g5+" },
  { title: "tomtoc explorer - t60 15l" },
  { title: "Thinkbook 16 G7+ AKP" },
  { title: "Vivobook S 14 (Q423)" },
  { title: "legion 5i 2024" },
  { title: "dell inspiron 5445" },
  { title: "dell inspiron 7445 2 in 1" },
  { title: "ThinkPad X1 Carbon Gen 12 21KC009MVN" },
  { title: "ThinkPad E16 GEN 3 21SR002NVN" },
  { title: "dell precision 7560" },
  { title: "herman miller sayl" },
  { title: "ThinkBook 14 G8 IRL 21SG007MVA" },
  { title: "Zenbook S 14 OLED 2025 UX5406" },
  { title: "dell inspiron 5430" },
];

export default function TopKeywords() {
    return (
    <section className="section-top-keywords mt-10 md:mt-20 mb-10 md:mb-10">
      <div className="title flex md:justify-center">
        <span className="text-xl md:text-4xl lg:text-5xl font-lexend font-bold">
          Tìm kiếm nhiều nhất
        </span>
      </div>
      <div className="mt-4 md:mt-10 flex md:justify-center">
        <div
          className="t-flex-gap"
          style={{ "--gap-x": "16px", "--gap-y": "16px" }}
        >
          <div className="flex flex-wrap md:justify-center t-flex-gap__wrapper">
            {topKeywords.map((topKeyword, index) => (
              <Link
                key={index}
                className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center"
                href="#"
                rel="noopener noreferrer"
              >
                <span>{topKeyword.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
