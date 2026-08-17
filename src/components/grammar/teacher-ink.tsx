import type { TeacherNote } from "@/content/schema/content-types";

type TeacherInkProps = {
  notes: TeacherNote[];
};

export function TeacherInk({ notes }: TeacherInkProps) {
  return (
    <div className="teacher-stack">
      {notes.map((note, index) => (
        <aside className="teacher-ink" key={`${note.title}-${index}`}>
          <p className="teacher-label">Teacher ink</p>
          <h2>{note.title.replace(/^Teacher ink —\s*/i, "")}</h2>
          <p>{note.body}</p>
          {note.fa ? (
            <p className="teacher-fa" dir="rtl" lang="fa">
              {note.fa}
            </p>
          ) : null}
        </aside>
      ))}
    </div>
  );
}
