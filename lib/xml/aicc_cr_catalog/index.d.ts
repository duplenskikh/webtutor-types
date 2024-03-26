interface AiccCrsDocumentCourse {
  course_id: XmlElem<string>;
  course_title: XmlElem<string>;
  version: XmlElem<string>;
}

interface AiccCrsDocumentCourseWindow {
  width: XmlElem<number>;
  height: XmlElem<number>;
}

type AiccCrCatalogDocumentTopElem = XmlTopElem & {
  course: XmlElem<AiccCrsDocumentCourse>;
  course_description: XmlElem<string>;
  course_window: XmlElem<AiccCrsDocumentCourseWindow>;
};
