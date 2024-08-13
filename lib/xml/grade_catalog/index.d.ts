type GradeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  level: XmlElem<number | null>;
  name: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
