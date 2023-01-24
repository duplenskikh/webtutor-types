type ReprimandCatalogDocumentTopElem = XmlTopElem & { Doc: ReprimandCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  reprimand_type_id: XmlElem<number>;
  person_id: XmlElem<number>;
  date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
}

type ReprimandCatalogDocument = XmlDocument & { TopElem: ReprimandCatalogDocumentTopElem; };
