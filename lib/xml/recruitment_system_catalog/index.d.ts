type RecruitmentSystemCatalogDocumentTopElem = XmlTopElem & { Doc: RecruitmentSystemCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type RecruitmentSystemCatalogDocument = XmlDocument & { TopElem: RecruitmentSystemCatalogDocumentTopElem; };
