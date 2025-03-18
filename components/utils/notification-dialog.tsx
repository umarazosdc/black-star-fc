"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import CldImg from "./cldimg";
import { readNotification } from "@/lib/database/queries";
import { useRouter } from "next/navigation";

const NotificationDialog = ({
  children,
  src,
  alt,
  name,
  description,
  date,
  message,
  subject,
  id,
}: {
  children: React.ReactNode;
  src: string;
  alt: string;
  name: string;
  description: string;
  date: string;
  message: string;
  subject: string;
  id: string;
}) => {
  const router = useRouter();

  const handleReadNotification = async () => {
    try {
      await readNotification(id);
      router.refresh();
    } catch (error) {
      console.log("Could read notification", error);
    }
  };

  return (
    <Dialog onOpenChange={handleReadNotification}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{""}</DialogTitle>
          <DialogDescription>{""}</DialogDescription>
        </DialogHeader>
        <div className="flex gap-3">
          <CldImg src={src} alt={alt} className="rounded-full border size-12" />
          <div className="flex flex-col">
            <h1 className="self-start font-bold">{name}</h1>
            <p className="self-start text-sm text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
        <main className="text-sm max-h-80 flex flex-col gap-2">
          <h2 className="font-bold">{subject}</h2>
          <p>{message}</p>
        </main>
        <DialogFooter>
          <span className="text-xs text-muted-foreground ml-auto">{date}</span>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationDialog;
