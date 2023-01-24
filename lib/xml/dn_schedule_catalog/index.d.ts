type DnScheduleCatalogDocumentTopElem = XmlTopElem & { Doc: DnScheduleCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  faculty: XmlElem<number>;
  chair: XmlElem<number>;
  academ_year_id: XmlElem<number>;
  term_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnScheduleCatalogDocument = XmlDocument & { TopElem: DnScheduleCatalogDocumentTopElem; };
