type SalarySurveySourceCatalogDocumentTopElem = XmlTopElem & { Doc: SalarySurveySourceCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type SalarySurveySourceCatalogDocument = XmlDocument & { TopElem: SalarySurveySourceCatalogDocumentTopElem; };
