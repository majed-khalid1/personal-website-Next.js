import Image from "next/image";
import Link from "next/link";
import CourseColumns from "@/components/courseColumns";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr] md:py-24">
        <div className="min-w-0">
          <h1 className="mt-3 text-5xl leading-tight font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Majed Khaled
            <br />
            <span className="text-brand">Al-Thobaiti.</span>
          </h1>

          <p className="mt-6 font-semibold">
            Software Engineering Student &amp; Front-End Developer
          </p>

          <p className="mt-4 max-w-md leading-relaxed text-muted">
            I&apos;m a final-year Software Engineering student at the University
            of Jeddah. I build responsive web applications with React and
            Next.js, and develop my skills through hands-on projects. My
            full-stack blog gave me practical experience with authentication,
            databases, and deployment.
          </p>
        </div>

        <figure className="m-0 grid min-w-0 justify-items-center gap-4">
          <Image
            src="https://raw.githubusercontent.com/majed-khalid1/Personal-Webstie-Media/main/cources-images/My%20Personal%20Picture.jpg"
            alt="Majed Khaled Al-Thobaiti"
            width={720}
            height={900}
            sizes="(min-width: 768px) 360px, 256px"
            className="aspect-square w-64 max-w-full rounded-full border-8 border-emerald-50 object-cover object-[center_25%] md:w-[360px]"
          />
        </figure>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-3xl font-bold">Projects.</h2>
            <Link
              href="/projects"
              className="text-sm font-semibold text-brand-dark"
            >
              All projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-3xl font-bold">Courses &amp; learning.</h2>
          <Link
            href="/courses"
            className="text-sm font-semibold text-brand-dark"
          >
            All courses →
          </Link>
        </div>
        <CourseColumns preview />
      </section>
    </>
  );
}
