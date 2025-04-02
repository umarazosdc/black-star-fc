import React from "react";
import CldImg from "@/components/utils/cldimg";
import { EllipsisIcon } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";

const ImageDisplayCard = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <CldImg src={src} alt={alt} className="rounded-md shadow-md" />
      <Drawer>
        <DrawerTrigger asChild>
          <EllipsisIcon className="text-accen self-end" strokeWidth={3} />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle></DrawerTitle>
            <DrawerDescription></DrawerDescription>
            PLayer
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ImageDisplayCard;
