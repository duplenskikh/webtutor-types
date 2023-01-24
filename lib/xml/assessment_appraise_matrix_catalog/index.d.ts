type AssessmentAppraiseMatrixCatalogDocumentTopElem = XmlTopElem & { Doc: AssessmentAppraiseMatrixCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type AssessmentAppraiseMatrixCatalogDocument = XmlDocument & { TopElem: AssessmentAppraiseMatrixCatalogDocumentTopElem; };
