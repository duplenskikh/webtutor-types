type SubdivisionGroupCatalogDocumentTopElem = XmlTopElem & { Doc: SubdivisionGroupCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_dynamic: XmlElem<boolean>;
  kpi_profile_id: XmlElem<number>;
  bonus_profile_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
}

type SubdivisionGroupCatalogDocument = XmlDocument & { TopElem: SubdivisionGroupCatalogDocumentTopElem; };
