type ExpertCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  code: XmlElem<string>;
  type: XmlElem<string, typeof common.lector_types>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  sub_expert_id: XmlElem<number, ExpertCatalogDocumentTopElem>;
  rating: XmlElem<number>;
  answer_expire_time: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
