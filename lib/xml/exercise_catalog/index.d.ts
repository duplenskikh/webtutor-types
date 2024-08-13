type ExerciseCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
