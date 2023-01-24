type RecommendationCatalogDocumentTopElem = XmlTopElem & { Doc: RecommendationCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  fullname: XmlElem<string>;
  phone: XmlElem<string>;
  email: XmlElem<string>;
  work_phone: XmlElem<string>;
  mobile_phone: XmlElem<string>;
  status: XmlElem<string>;
  vacancy_id: XmlElem<number>;
  vacancy_name: XmlElem<string>;
  src_person_id: XmlElem<number>;
  src_person_fullname: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type RecommendationCatalogDocument = XmlDocument & { TopElem: RecommendationCatalogDocumentTopElem; };
