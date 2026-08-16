import type { ReactNode } from "react";

type LessonSectionProps = {
  label: string;
  title: string;
  children: ReactNode;
  id?: string;
};

export function LessonSection({
  label,
  title,
  children,
  id,
}: LessonSectionProps) {
  return (
    <section className="lesson-section" id={id}>
      <div className="section-heading">
        <span>{label}</span>
        <h2>{title}</h2>
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}
