import Image from "next/image";

const ProjectPreviewImage = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  return (
    <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-sm">
      <Image
        fill
        src={image}
        alt={`${title} preview`}
        className="object-cover transition-transform duration-200 hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />
    </div>
  );
};

export default ProjectPreviewImage;
