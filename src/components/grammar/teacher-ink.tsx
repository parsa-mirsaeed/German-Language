import type { TeacherNote } from "@/content/schema/content-types";
import type { Locale } from "@/i18n/config";

type TeacherInkProps = {
  notes: TeacherNote[];
  contentLocale: Locale;
  uiLocale: Locale;
};

export function TeacherInk({ notes, contentLocale, uiLocale }: TeacherInkProps) {
  const contentDir = contentLocale === "fa" ? "rtl" : "ltr";
  const label = uiLocale === "fa" ? "یادداشت معلم" : "Teacher ink";

  return (
    <div className="teacher-stack">
      {notes.map((note, index) => (
        <aside className="teacher-ink" key={`${note.title}-${index}`}>
          <p className="teacher-label">{label}</p>
          <h2 dir={contentDir} lang={contentLocale}>{note.title.replace(/^Teacher ink —\s*/i, "")}</h2>
          <p dir={contentDir} lang={contentLocale}>{note.body}</p>
          {note.fa && contentLocale !== "fa" ? (
            <p className="teacher-fa" dir="rtl" lang="fa">{note.fa}</p>
          ) : null}
        </aside>
      ))}
    </div>
  );
}
