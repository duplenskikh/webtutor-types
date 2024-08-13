type RatingCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  date: XmlElem<Date | null>;
  expert_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  expert_person_fullname: XmlElem<string | null>;
  expert_person_position_name: XmlElem<string | null>;
  status: XmlElem<boolean | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
