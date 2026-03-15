import { DialogClose } from "@/components/ui/shadcn/dialog";

const ProjectDialogHeader = ({ title }: { title: string }) => {
  return (
    <div className="border-border/50 relative flex items-center border-b px-4 py-3">
      <div className="flex items-center gap-2">
        <DialogClose>
          <span className="block size-3 rounded-full bg-[#ff5f57]" />
        </DialogClose>

        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
      </div>

      <p className="text-muted-foreground absolute left-1/2 -translate-x-1/2 text-xs">
        {title}
      </p>
    </div>
  );
};

export default ProjectDialogHeader;
