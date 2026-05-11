import Image from "next/image";

const ProjectPreviewImage = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  return (
    <div className="mx-auto aspect-video w-full overflow-hidden rounded-sm">
      <Image
        src={image}
        alt={`${title} preview`}
        className="object-cover transition-transform duration-200 hover:scale-105"
      />
    </div>
  );
};

export default ProjectPreviewImage;
