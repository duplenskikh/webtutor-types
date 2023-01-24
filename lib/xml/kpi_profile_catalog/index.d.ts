type KpiProfileCatalogDocumentTopElem = XmlTopElem & { Doc: KpiProfileCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  competence_profile_family_id: XmlElem<number>;
  role_id: XmlMultiElem<number>;
  kpi_id: XmlMultiElem<number>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type KpiProfileCatalogDocument = XmlDocument & { TopElem: KpiProfileCatalogDocumentTopElem; };
