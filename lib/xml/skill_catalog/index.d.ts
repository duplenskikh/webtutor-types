type SkillCatalogDocumentTopElem = XmlTopElem & { Doc: SkillCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_id: XmlElem<number>;
  use_parent_levels: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElem<number>;
}

type SkillCatalogDocument = XmlDocument & { TopElem: SkillCatalogDocumentTopElem; };
