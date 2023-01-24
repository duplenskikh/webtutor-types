type SupplementaryQuestionCatalogDocumentTopElem = XmlTopElem & { Doc: SupplementaryQuestionCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  section: XmlElem<string>;
  type: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type SupplementaryQuestionCatalogDocument = XmlDocument & { TopElem: SupplementaryQuestionCatalogDocumentTopElem; };
