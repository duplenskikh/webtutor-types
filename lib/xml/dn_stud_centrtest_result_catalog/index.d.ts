type DnStudCentrtestResultCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  subject: XmlElem<string>;
  mark: XmlElem<number>;
  result_date: XmlElem<Date>;
  student_id: XmlElem<number, DnStudentCatalogDocumentTopElem>;
  student_fullname: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
