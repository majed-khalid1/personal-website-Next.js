import CourseColumns from "@/components/courseColumns";

export default function CoursesPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="mb-8 text-5xl font-bold tracking-tight">
        Courses &amp; learning.
      </h1>
      <CourseColumns />
    </section>
  );
}
