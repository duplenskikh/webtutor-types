type ExpertCatalogDocumentTopElem = XmlTopElem & { Doc: ExpertCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  code: XmlElem<string>;
  type: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  sub_expert_id: XmlElem<number>;
  rating: XmlElem<number>;
  answer_expire_time: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ExpertCatalogDocument = XmlDocument & { TopElem: ExpertCatalogDocumentTopElem; };
