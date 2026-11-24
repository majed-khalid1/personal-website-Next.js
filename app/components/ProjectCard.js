import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white">
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        width={900}
        height={520}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="aspect-video w-full object-cover object-top"
      />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

        <ul className="my-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-md bg-surface px-3 py-1 text-xs text-muted"
            >
              {technology}
            </li>
          ))}
        </ul>

        <a
          href={project.href}
          target="_blank"
          className="mt-auto pt-2 font-semibold text-brand-dark hover:underline"
        >
          View live project →
        </a>
      </div>
    </article>
  );
}
