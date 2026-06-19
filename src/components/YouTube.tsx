type Props = {
  id: string;
  title?: string;
};

export default function YouTube({ id, title = "YouTube video" }: Props) {
  return (
    <div className="my-6 aspect-video w-full overflow-hidden rounded-lg shadow not-prose">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
