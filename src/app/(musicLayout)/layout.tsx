import { SideNav, SidePlayMusic } from "@/components";

const MusicLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <section>
      <div className="flex gap-2">
        <SideNav />
        <div className="flex-1">{children}</div>
        <SidePlayMusic />
      </div>
    </section>
  );
};

export default MusicLayout;
