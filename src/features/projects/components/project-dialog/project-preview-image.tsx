const ProjectPreviewImage = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  return (
    <img
      src={image}
      alt={`${title} preview`}
      className="mx-auto aspect-video w-full rounded-sm object-cover"
    />
  );
};

export default ProjectPreviewImage;
