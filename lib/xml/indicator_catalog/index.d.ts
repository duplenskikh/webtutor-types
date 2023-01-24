type IndicatorCatalogDocumentTopElem = XmlTopElem & { Doc: IndicatorCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  competence_id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  role_id: XmlMultiElem<number>;
}

type IndicatorCatalogDocument = XmlDocument & { TopElem: IndicatorCatalogDocumentTopElem; };
