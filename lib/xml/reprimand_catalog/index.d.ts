type ReprimandCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  reprimand_type_id: XmlElem<number | null, ReprimandTypeCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  date: XmlElem<Date | null>;
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
