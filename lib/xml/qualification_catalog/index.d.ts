type QualificationCatalogDocumentTopElem = XmlTopElem & { Doc: QualificationCatalogDocument } & 
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  join_mode: XmlElem<string>;
  parent_id: XmlElem<number>;
  status: XmlElem<string>;
  yourself_start: XmlElem<boolean>;
  qualification_id: XmlMultiElem<number>;
  level_id: XmlElem<number>;
  role_id: XmlMultiElem<number>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type QualificationCatalogDocument = XmlDocument & { TopElem: QualificationCatalogDocumentTopElem; };
