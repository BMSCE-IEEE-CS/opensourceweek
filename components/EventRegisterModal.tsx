"use client";

import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface EventProps {
  title: string;
  desc: string;
  longDesc?: string;
  posterUrl: string;
  registerLink: string;
}

interface EventRegisterModalProps {
  event: EventProps;
  children: React.ReactNode;
}

export function EventRegisterModal({
  event,
  children,
}: EventRegisterModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-neutral-900 border-green-800 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-green-300">
            {event.title}
          </DialogTitle>
          <DialogDescription className="text-neutral-400">
            {event.desc}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <Image
            src={event.posterUrl}
            alt={`${event.title} Poster`}
            width={1080}
            height={1080}
            className="w-full h-auto rounded-md"
          />

          {event.longDesc && (
            <p className="text-sm text-neutral-300">{event.longDesc}</p>
          )}
          <Button
            asChild
            className="w-full bg-gradient-to-r from-green-500 to-green-400 text-black font-semibold text-lg py-6 hover:brightness-110 animate-neon-glow"
          >
            <a
              href={event.registerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register for this Event
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
