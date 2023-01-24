type PersonnelDocumentCatalogDocumentTopElem = XmlTopElem & { Doc: PersonnelDocumentCatalogDocument } & 
PersonFillingBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  person_id: XmlElem<number>;
  create_date: XmlElem<Date>;
  state_id: XmlElem<string>;
  personnel_document_type_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type PersonnelDocumentCatalogDocument = XmlDocument & { TopElem: PersonnelDocumentCatalogDocumentTopElem; };
