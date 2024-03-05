type ReprimandCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  reprimand_type_id: XmlElem<number, ReprimandTypeCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  OnBuild(): unknown;
};
