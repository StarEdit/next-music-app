import { AudioPlayer } from "@/components";

type Props = {};

const SidePlayMusic = (props: Props) => {
  return (
    <div className="w-80 pt-4 px-1 border-l border-divider flex flex-col justify-between">
      <div>Top</div>
      <div>
        <AudioPlayer />
      </div>
    </div>
  );
};

export default SidePlayMusic;
