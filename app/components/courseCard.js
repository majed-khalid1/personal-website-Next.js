import Image from "next/image";

export default function CourseCard({ course }) {
  return (
    <article className="overflow-hidden rounded-xl border border-line bg-white">
      {course.image && (
        <div className="relative aspect-[2/1] w-full bg-surface">
          <Image
            src={course.image}
            alt={`${course.title} course`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-contain"
          />
        </div>
      )}

      <div className="p-5">
        <h3 className="text-base font-semibold">
          <a href={course.href} className="hover:text-brand-dark">
            {course.title}
          </a>
        </h3>

        <p className="mt-2 text-sm text-muted">{course.provider}</p>

        {course.notesHref && (
          <a
            href={course.notesHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            View my notes →
          </a>
        )}
      </div>
    </article>
  );
}
