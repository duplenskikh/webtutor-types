type ReprimandTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
