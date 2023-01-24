type DnDisciplineCatalogDocumentTopElem = XmlTopElem & { Doc: DnDisciplineCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  discipl_block_id: XmlElem<number>;
  faculty_id: XmlElem<number>;
  chair_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnDisciplineCatalogDocument = XmlDocument & { TopElem: DnDisciplineCatalogDocumentTopElem; };
