import React from 'react';
import {
   Accordion,
   AccordionItem,
   AccordionTrigger,
   AccordionContent,
} from '@/components/ui/accordion';
import Link from 'next/link';

const SheetAccordion = ({
   field,
   items,
   icon: Icon,
}: {
   field: string;
   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
   items: { path: string; name: string }[];
}) => {
   return (
      <Accordion type="single" collapsible>
         <AccordionItem value="item1" className="border-none">
            <div className="flex items-center gap-2 text-sm">
               <Icon />
               <AccordionTrigger className="hover:no-underline py-0 w-[12.5rem]">
                  {field}
               </AccordionTrigger>
            </div>
            {items.map((value, key) => (
               <Link href={value.path} key={key}>
                  <AccordionContent className="flex mt-4 pb-0 bg-primary py-2 pl-8 rounded-md">
                     {value.name}
                  </AccordionContent>
               </Link>
            ))}
         </AccordionItem>
      </Accordion>
   );
};

export default SheetAccordion;
