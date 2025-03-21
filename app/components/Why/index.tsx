import Image from "next/image";
import whay from "../../../public/assets/why/whay.png";
import check from "../../../public/assets/why/check.svg";
import {useTranslations} from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface WhyData {
  heading: string;
  subheading: string;
}


const Why = () => {
  const tt=useTranslations("homepage.whay")
  const whyData: WhyData[] = [
    {
      heading: tt("whyData.heading1"),  
      subheading: tt("whyData.subheading1"),
    },
    {
      heading: tt("whyData.heading2"),
      subheading:
      tt("whyData.subheading2"),},
    {
      heading: tt("whyData.heading3"),
      subheading:
      tt("whyData.subheading3"),},
  ];
  return (
    <div id="about" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-12">
          {/* IMAGE COLUMN */}
          <div className="flex-1 flex items-center justify-center">
            <Image
              src={whay}
              alt="Illustration image"
              width={600}
              height={800}
              className="rounded-lg shadow-2xl object-cover h-full transform transition-transform hover:scale-105"
            />
          </div>

          {/* TEXT COLUMN */}
          <div className="flex-1 flex flex-col justify-center space-y-8">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">
              {tt("title")}
            </h3>

            <p className="text-lg text-gray-600">
              {tt("description")}
            </p>

            <div className="space-y-8">
              {whyData.map((item, index) => (
                <div
                  className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  key={index}
                >
                  <div className="flex-shrink-0">
                    <div className="h-12 w-full rounded-full bg-blue-50 flex items-center justify-center">
                      <Image
                        src={check}
                        alt="Check icon"
                        width={24}
                        height={24}
                        className="text-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                  <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>{item.heading}</AccordionTrigger>
    <AccordionContent>
    {item.subheading}
    </AccordionContent>
  </AccordionItem>
</Accordion>
                  </div>




                  
                




                  
                </div>
               
              
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;