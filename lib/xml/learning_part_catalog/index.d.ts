type LearningPartCatalogDocumentTopElem = XmlTopElem & { Doc: LearningPartCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  learning_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type LearningPartCatalogDocument = XmlDocument & { TopElem: LearningPartCatalogDocumentTopElem; };
