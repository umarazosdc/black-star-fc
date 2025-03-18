"use client";
import { PlayerSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import FlexAligned from "../utils/flex-aligned";
import { editPlayer } from "@/lib/validations";
import PlayerStat from "../admin/player-stat";
import { Input } from "../ui/input";
import { stats } from "@/lib/data";
import {
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import FormImage from "../explore/form-image";
import FormInputField from "../explore/form-input-field";
import FormPosition from "../explore/form-position";
import FormWeight from "../explore/form-weight";
import FormSide from "../explore/form-side";
import FormHeight from "../explore/form-height";
import FormCalendar from "../explore/form-calendar";
import { Player, Stats } from "@prisma/client";

const EditPlayerForm = ({
  player,
  playerStats,
}: {
  player: Player;
  playerStats: Stats;
}) => {
  const form = useForm<z.infer<typeof PlayerSchema>>({
    defaultValues: {
      firstname: player.firstname,
      lastname: player.lastname,
      side: player.side,
      position: player.position,
      height: player.height,
      weight: player.weight,
      dob: new Date(player.dob),
      statImage: player.image,
      thumbnail: player.thumbnail,
      videos: player.videos,
      stats: {
        spd: playerStats.speed,
        sho: playerStats.shot,
        def: playerStats.defence,
        dri: playerStats.dribble,
        pac: playerStats.pace,
        pas: playerStats.pass,
      },
    },
    resolver: zodResolver(PlayerSchema),
  });

  const [isLoading, startTransition] = useTransition();
  const [urlThumbnail, setUrlThumbnail] = React.useState<string>();
  const [urlStatImage, setUrlStatImage] = React.useState<string>();
  React.useState<Array<string>>();
  const [thumbnailLoading, setThumbnailLoading] =
    React.useState<boolean>(false);
  const [statisticLoading, setStatisticLoading] =
    React.useState<boolean>(false);
  const [videoLoading, setVideoLoading] = React.useState<boolean>(false);
  const [thumbnailFile, setThumbnailFile] = React.useState<File | null>(null);
  const [statImageFile, setStatImageFile] = React.useState<File | null>(null);
  const [videoFiles, setVideoFiles] = React.useState<File[]>([]);

  const statRef = React.useRef<HTMLInputElement>(null);
  const thumbnailRef = React.useRef<HTMLInputElement>(null);

  const handleThumbnailImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (!file) return;

    if (urlThumbnail) {
      URL.revokeObjectURL(urlThumbnail); // Revoke previous URL before setting a new one
    }

    setThumbnailFile(file);
    const newUrl = URL.createObjectURL(file);
    setUrlThumbnail(newUrl);
  };

  const handleStatImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (!file) return;

    if (urlStatImage) {
      URL.revokeObjectURL(urlStatImage); // Revoke previous URL before setting a new one
    }

    setStatImageFile(file);
    const newUrl = URL.createObjectURL(file);
    setUrlStatImage(newUrl);
  };

  const handleVideos = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (!files) return;
    setVideoFiles([...files]);
  };

  const handlePlayerSubmit = async (values: z.infer<typeof PlayerSchema>) => {
    const toastId = toast.loading(
      `Updating ${player.firstname + " " + player.lastname}...`
    );

    try {
      setThumbnailLoading(true);
      setStatisticLoading(true);
      setVideoLoading(true);

      // Upload Thumbnail
      let thumbnailPublicId = null;
      if (thumbnailFile) {
        const formData = new FormData();
        formData.append("file", thumbnailFile);
        formData.append("publicId", player.thumbnail);

        const res = await fetch("/api/update-image", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        thumbnailPublicId = data.publicId;
        form.setValue("thumbnail", thumbnailPublicId);
      }

      // Upload Statistic Image
      let statImagePublicId = null;
      if (statImageFile) {
        const formData = new FormData();
        formData.append("file", statImageFile);
        formData.append("publicId", player.image);

        const res = await fetch("/api/update-image", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        statImagePublicId = data.publicId;
        form.setValue("statImage", statImagePublicId);
      }

      // Upload Videos
      let playerVideosPublicIds: string[] = [];
      if (videoFiles.length > 0) {
        const formData = new FormData();
        videoFiles.forEach((file) => formData.append("file", file));
        player.videos.forEach((vid) => formData.append("publicId", vid));

        const res = await fetch("/api/update-videos", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        playerVideosPublicIds = data.publicIds;
        form.setValue("videos", playerVideosPublicIds);
      }

      // Submit Form Data
      startTransition(() => {
        editPlayer({
          ...values,
          thumbnail: thumbnailPublicId ? thumbnailPublicId : player.thumbnail,
          statImage: statImagePublicId ? statImagePublicId : player.image,
          videos: playerVideosPublicIds ? playerVideosPublicIds : player.videos,
          id: player.id,
        }).then((data) => {
          if (data?.error) {
            toast.error(data.error, { id: toastId });
          } else {
            toast.success(data?.success, { id: toastId });
          }
        });
      });
    } catch {
      toast.error("Error updating player");
    } finally {
      setThumbnailLoading(false);
      setStatisticLoading(false);
      setVideoLoading(false);

      // ✅ Revoke Blob URLs after successful upload
      if (urlThumbnail) URL.revokeObjectURL(urlThumbnail);
      if (urlStatImage) URL.revokeObjectURL(urlStatImage);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <div
          className="w-full"
          onClick={() => {
            thumbnailRef.current?.click();
          }}
        >
          <FormImage selectedImage={urlThumbnail} name="Thumbnail" />
          <input
            type="file"
            onChange={(e) => handleThumbnailImage(e)}
            hidden
            required
            ref={thumbnailRef}
            accept="image/*"
            disabled={thumbnailLoading}
          />
        </div>
        <div
          className="w-full"
          onClick={() => {
            statRef.current?.click();
          }}
        >
          <FormImage selectedImage={urlStatImage} name="Statistic image" />
          <input
            type="file"
            onChange={(e) => handleStatImage(e)}
            hidden
            required
            ref={statRef}
            accept="image/*"
            disabled={statisticLoading}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm">Videos</span>
        {videoLoading ? (
          <span className="text-sm rounded-md border bg-card py-2 px-3 w-full">
            Uploading videos
          </span>
        ) : (
          <Input
            type="file"
            accept="video/*"
            multiple
            required
            disabled={videoLoading}
            onChange={(e) => handleVideos(e)}
          />
        )}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handlePlayerSubmit)}>
          <div className="space-y-6 flex flex-col">
            <FlexAligned>
              <FormInputField
                name="First name"
                field="firstname"
                form={form}
                placeholder="Isa"
              />
              <FormInputField
                name="Last name"
                field="lastname"
                form={form}
                placeholder="Umar"
              />
            </FlexAligned>
            <FlexAligned>
              <FormPosition field="position" form={form} />
              <FormSide form={form} field="side" />
            </FlexAligned>
            <FlexAligned>
              <FormWeight form={form} field="weight" />
              <FormHeight form={form} field="height" />
            </FlexAligned>
            <FormCalendar field="dob" form={form} />
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold">Statistics</span>
              <div className="grid grid-cols-3 gap-3">
                {Object.entries(stats).map(([key, label]) => (
                  <PlayerStat
                    key={key}
                    form={form}
                    name={label}
                    stat={key as "spd" | "def" | "sho" | "pas" | "pac" | "dri"}
                  />
                ))}
              </div>
            </div>
          </div>
          <footer className="flex flex-col mt-8">
            <AlertDialogAction
              className="bg-accent text-primary hover:bg-accent"
              type="submit"
              disabled={
                isLoading ||
                thumbnailLoading ||
                videoLoading ||
                statisticLoading
              }
            >
              Add
            </AlertDialogAction>
            <AlertDialogCancel
              className="hover:bg-secondary transition-colors duration-300"
              type="button"
              disabled={
                isLoading ||
                thumbnailLoading ||
                videoLoading ||
                statisticLoading
              }
              onClick={() => {
                if (urlThumbnail) URL.revokeObjectURL(urlThumbnail);
                if (urlStatImage) URL.revokeObjectURL(urlStatImage);
              }}
            >
              Cancel
            </AlertDialogCancel>
          </footer>
        </form>
      </Form>
    </div>
  );
};

export default EditPlayerForm;
