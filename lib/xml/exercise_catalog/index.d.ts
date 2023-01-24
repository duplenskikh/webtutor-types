type ExerciseCatalogDocumentTopElem = XmlTopElem & { Doc: ExerciseCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
}

type ExerciseCatalogDocument = XmlDocument & { TopElem: ExerciseCatalogDocumentTopElem; };
