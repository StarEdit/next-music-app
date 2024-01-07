"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Slider,
  Tooltip,
} from "@nextui-org/react";
import { useState } from "react";

import {
  AddPendingPlaylist,
  CopyIcon,
  EllipsisVerticalIcon,
  LoopIcon,
  MusicIcon,
  MuteIcon,
  PauseIcon,
  PlayIcon,
  RandomIcon,
  SeekNextIcon,
  SeekPrevIcon,
  VolumeIcon,
} from "@/assets";

type Props = {};

const AudioPlayer = (props: Props) => {
  const [volume, setVolume] = useState(1);
  return (
    <div className="px-3 mb-4">
      <div className="flex justify-between items-center">
        <Tooltip
          placement="top"
          content={
            <Slider
              className="h-32"
              size="sm"
              step={0.01}
              maxValue={1}
              minValue={0}
              orientation="vertical"
              aria-label="Temperature"
              defaultValue={0.2}
            />
          }
          offset={-14}
          shouldFlip={false}
        >
          <Button radius="full" isIconOnly className="bg-transparent">
            {volume > 0.1 ? <VolumeIcon /> : <MuteIcon />}
          </Button>
        </Tooltip>
        <Button radius="full">Danh sách phát</Button>
        <Dropdown>
          <DropdownTrigger>
            <Button radius="full" isIconOnly className="bg-transparent">
              <EllipsisVerticalIcon />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new" startContent={<AddPendingPlaylist />}>
              Thêm vào chờ phát
            </DropdownItem>
            <DropdownItem key="copy" startContent={<CopyIcon />}>
              Sao chép link
            </DropdownItem>
            <DropdownItem key="edit" startContent={<MusicIcon />}>
              Đi đên bài hát
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="my-4 h-10 flex justify-between items-center gap-2">
        <div className="text-xs ">00:00</div>
        <Slider
          size="sm"
          step={0.01}
          maxValue={1}
          minValue={0}
          aria-label="Temperature"
          defaultValue={0.2}
          className="max-w-md justify-center"
        />
        <div className="text-xs flex">00:00</div>
      </div>
      <div className="flex justify-between items-center">
        <Button isIconOnly radius="full" className="bg-transparent">
          <RandomIcon />
        </Button>
        <Button isIconOnly radius="full" className="bg-transparent">
          <SeekPrevIcon />
        </Button>
        {1 ? (
          <Button isIconOnly radius="full" className="bg-transparent">
            <PlayIcon className="size-8" />
          </Button>
        ) : (
          <Button isIconOnly radius="full" className="bg-transparent">
            <PauseIcon className="size-8" />
          </Button>
        )}
        <Button isIconOnly radius="full" className="bg-transparent">
          <SeekNextIcon />
        </Button>
        <Button isIconOnly radius="full" className="bg-transparent">
          <LoopIcon />
        </Button>
      </div>
    </div>
  );
};

export default AudioPlayer;
