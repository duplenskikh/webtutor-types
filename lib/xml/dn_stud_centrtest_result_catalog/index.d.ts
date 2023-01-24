type DnStudCentrtestResultCatalogDocumentTopElem = XmlTopElem & { Doc: DnStudCentrtestResultCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  subject: XmlElem<string>;
  mark: XmlElem<number>;
  result_date: XmlElem<Date>;
  student_id: XmlElem<number>;
  student_fullname: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnStudCentrtestResultCatalogDocument = XmlDocument & { TopElem: DnStudCentrtestResultCatalogDocumentTopElem; };
