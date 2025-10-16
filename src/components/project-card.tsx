"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  detail?: any;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  detail,
}: Props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      {/* ---- Card ---- */}
      <Card
        className={cn(
          "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full cursor-pointer",
          className
        )}
        onClick={handleOpen}
      >
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        ) : image ? (
          <Image
            src={image}
            alt={title}
            width={300}
            height={150}
            className="h-40 w-full object-cover object-top dark:brightness-[0.9] dark:hover:brightness-100 transition-all duration-300 ease-out"
          />
        ) : null}

        <CardHeader className="px-5">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          {dates && <time className="font-sans text-xs">{dates}</time>}
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert line-clamp-3">
            {description}
          </Markdown>
        </CardHeader>

        <CardContent className="mt-auto flex flex-col px-4">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>

        {links && links.length > 0 && (
          <CardFooter className="px-3 pb-3">
            <div className="flex flex-wrap gap-1">
              {links.map((linkItem, idx) => (
                <Badge
                  key={idx}
                  className="flex gap-2 px-2 py-1 text-[10px]"
                  variant="secondary"
                >
                  {linkItem.icon}
                  {linkItem.type}
                </Badge>
              ))}
            </div>
          </CardFooter>
        )}
      </Card>
      {/* ---- Dialog ---- */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl px-3 md:px-6 max-h-[100vh]   overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-60 object-cover"
              />
            ) : image ? (
              <Image
                src={image}
                alt={title}
                width={800}
                height={400}
                className="w-full h-60 object-cover"
              />
            ) : null}

            <div className="p-6 space-y-4">
              <DialogHeader>
                <DialogTitle className="text-lg font-semibold">
                  {title}
                </DialogTitle>
                {dates && (
                  <DialogDescription className="text-sm text-muted-foreground">
                    {dates}
                  </DialogDescription>
                )}

                {links?.length ? (
                  <div className="flex flex-wrap gap-2 pt-4">
                    {links.map((linkItem, idx) => (
                      <Link
                        href={linkItem.href}
                        key={idx}
                        target="_blank"
                        className="flex items-center gap-2 text-xs font-medium text-primary hover:underline"
                      >
                        {linkItem.icon}
                        {linkItem.type}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </DialogHeader>

              <Markdown className="prose max-w-full text-sm dark:prose-invert">
                {description}
              </Markdown>

              {tags?.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-2">
                  {tags.map((tag) => (
                    <Badge
                      className="px-2 py-0.5 text-[10px]"
                      variant="secondary"
                      key={tag}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <div>
              {/* Detail Page */}
              {detail?.length > 0 && (
                <>
                  <h3 className=" mb-2  text-xl font-semibold flex  justify-center">
                    Additional Images{" "}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {detail.map((item: any, idx: number) => (
                      <div
                        key={idx}
                        className="flex flex-col gap-2 p-4 bg-background rounded-lg"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold">
                            {item.title}
                          </h3>
                        </div>
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={800}
                          height={400}
                          className="w-full h-60 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}
