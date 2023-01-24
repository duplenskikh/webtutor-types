type SubdivisionCatalogDocumentTopElem = XmlTopElem & { Doc: SubdivisionCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  org_id: XmlElem<number>;
  parent_object_id: XmlElem<number>;
  is_disbanded: XmlElem<boolean>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  place_id: XmlElem<number>;
  region_id: XmlElem<number>;
  kpi_profile_id: XmlElem<number>;
  bonus_profile_id: XmlElem<number>;
  cost_center_id: XmlElem<number>;
  is_faculty: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type SubdivisionCatalogDocument = XmlDocument & { TopElem: SubdivisionCatalogDocumentTopElem; };
