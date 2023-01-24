type SkillTypeCatalogDocumentTopElem = XmlTopElem & { Doc: SkillTypeCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type SkillTypeCatalogDocument = XmlDocument & { TopElem: SkillTypeCatalogDocumentTopElem; };
