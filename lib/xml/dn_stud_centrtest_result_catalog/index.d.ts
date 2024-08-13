type DnStudCentrtestResultCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  subject: XmlElem<string | null>;
  mark: XmlElem<number | null>;
  result_date: XmlElem<Date | null>;
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  student_fullname: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
