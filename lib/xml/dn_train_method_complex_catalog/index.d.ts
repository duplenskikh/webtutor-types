type DnTrainMethodComplexCatalogDocumentTopElem = XmlTopElem & { Doc: DnTrainMethodComplexCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  faculty_id: XmlElem<number>;
  chair_id: XmlElem<number>;
  discipline_id: XmlElem<number>;
  program_discipline_id: XmlElem<number>;
  program_discipline_name: XmlElem<string>;
  lector_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnTrainMethodComplexCatalogDocument = XmlDocument & { TopElem: DnTrainMethodComplexCatalogDocumentTopElem; };
