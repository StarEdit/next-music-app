"use client";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import clsx from "clsx";

import {
  DiscoverIcon,
  HomeIcon,
  MusicForYouIcon,
  MusicIcon,
  RankIcon,
  SearchIcon,
} from "@/assets";

type Props = {};

const SideNav = (props: Props) => {
  return (
    <div className="w-52 pt-4 px-1 border-r border-divider">
      <div className="flex items-center justify-evenly">
        <Button color="default" variant="bordered">
          Đăng nhập
        </Button>
        <Button color="default" variant="bordered">
          Đăng ký
        </Button>
      </div>

      <div className="py-2">
        <Button
          color="default"
          variant="light"
          startContent={<SearchIcon className="text-green-500" />}
          fullWidth
          className={clsx("justify-start", { ["text-c-primary"]: false })}
        >
          Tìm kiếm
        </Button>
        <Button
          color="default"
          variant="light"
          startContent={<HomeIcon className="text-c-primary" />}
          fullWidth
          className={clsx("justify-start", { ["text-c-primary"]: false })}
        >
          Trang chủ
        </Button>
        <Accordion
          isCompact
          showDivider={false}
          selectionMode="multiple"
          className="px-0 flex flex-col w-full"
          variant="light"
          itemClasses={{
            base: "py-0 w-full",
            title: "font-normal text-small",
            trigger:
              "px-4 py-0 data-[hover=true]:bg-default-100 rounded-lg h-10 flex items-center",
            indicator: "text-small",
            content: "text-small px-10",
          }}
        >
          <AccordionItem
            key="1"
            startContent={<DiscoverIcon className="text-yellow-500" />}
            title="Khám phá"
          >
            <Button
              color="default"
              variant="light"
              fullWidth
              className={clsx("justify-start h-unit-8", {
                ["text-c-primary"]: false,
              })}
            >
              Bài hát
            </Button>
            <Button
              color="default"
              variant="light"
              fullWidth
              className={clsx("justify-start h-unit-8", {
                ["text-c-primary"]: false,
              })}
            >
              Playlist
            </Button>
            <Button
              color="default"
              variant="light"
              fullWidth
              className={clsx("justify-start h-unit-8", {
                ["text-c-primary"]: false,
              })}
            >
              Video
            </Button>
            <Button
              color="default"
              variant="light"
              fullWidth
              className={clsx("justify-start h-unit-8", {
                ["text-c-primary"]: false,
              })}
            >
              Nghệ sỹ
            </Button>
          </AccordionItem>
          <AccordionItem
            key="2"
            startContent={<MusicIcon className="text-purple-500" />}
            title="Nghe gì hôm nay"
          >
            <Button
              color="default"
              variant="light"
              fullWidth
              className={clsx("justify-start h-unit-8", {
                ["text-c-primary"]: false,
              })}
            >
              Chủ đề
            </Button>
            <Button
              color="default"
              variant="light"
              fullWidth
              className={clsx("justify-start h-unit-8", {
                ["text-c-primary"]: false,
              })}
            >
              Tuyển tập
            </Button>
            <Button
              color="default"
              variant="light"
              fullWidth
              className={clsx("justify-start h-unit-8", {
                ["text-c-primary"]: false,
              })}
            >
              Top 100
            </Button>
          </AccordionItem>
        </Accordion>
        <Button
          color="default"
          variant="light"
          startContent={<RankIcon className="text-orange-500" />}
          fullWidth
          className={clsx("justify-start", { ["text-c-primary"]: false })}
        >
          Bảng xếp hạng
        </Button>
        <Button
          color="default"
          variant="light"
          startContent={<MusicForYouIcon className="text-cyan-500" />}
          fullWidth
          className={clsx("justify-start", { ["text-c-primary"]: false })}
        >
          Music 4U
        </Button>
      </div>
    </div>
  );
};

export default SideNav;
