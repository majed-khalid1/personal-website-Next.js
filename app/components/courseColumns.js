import CourseCard from "@/components/courseCard";
import { courses } from "@/data/courses";

const groups = [
  { status: "completed", title: "Completed", dot: "bg-brand" },
  { status: "current", title: "Currently studying", dot: "bg-amber-600" },
  { status: "planned", title: "Planned", dot: "bg-violet-500" },
];

export default function CourseColumns({ preview = false }) {
  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
      {groups.map((group) => {
        const matches = courses.filter(
          (course) => course.status === group.status,
        );
        const visible = preview ? matches.slice(0, 2) : matches;

        return (
          <section key={group.status}>
            <h2 className="mb-4 flex items-center gap-2 font-semibold">
              <span
                aria-hidden="true"
                className={`size-2 rounded-full ${group.dot}`}
              />
              {group.title}
            </h2>

            <div className="grid gap-3">
              {visible.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
