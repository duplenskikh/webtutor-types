type AssessmentResultRecommendCatalogDocumentTopElem = XmlTopElem & { Doc: AssessmentResultRecommendCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type AssessmentResultRecommendCatalogDocument = XmlDocument & { TopElem: AssessmentResultRecommendCatalogDocumentTopElem; };
