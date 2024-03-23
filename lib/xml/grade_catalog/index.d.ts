type GradeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  level: XmlElem<number>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
  modification_date: XmlElem<Date>;
  OnBuild(): void;
};
