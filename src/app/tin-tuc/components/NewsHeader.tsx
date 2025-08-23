interface NewsHeaderProps {
  title: string;
}

export default function NewsHeader({ title }: NewsHeaderProps) {
  return (
    <div className="mt-4 md:mt-10">
      <h1 className="text-2xl md:text-5xl font-bold font-lexend">{title}</h1>
    </div>
  );
}
