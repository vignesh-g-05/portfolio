import { DialogClose } from "@/components/ui/shadcn/dialog";

const ProjectDialogHeader = ({ title }: { title: string }) => {
  return (
    <div className="bg-accent border-border relative flex items-center border-b px-4 py-3">
      <div className="flex items-center gap-2">
        <DialogClose className="group">
          <span className="block size-3 rounded-full bg-[#ff5f57] shadow-[0_0_0_1px_#e0443e44] transition-opacity group-hover:opacity-80" />
        </DialogClose>
        <span className="size-3 rounded-full bg-[#febc2e] shadow-[0_0_0_1px_#d4a01788]" />
        <span className="size-3 rounded-full bg-[#28c840] shadow-[0_0_0_1px_#1aab2f88]" />
      </div>

      <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1.5">
        <div className="bg-surface0 size-3 rounded-[3px]" />
        <p className="text-muted-foreground font-mono text-[11.5px] whitespace-nowrap">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ProjectDialogHeader;
