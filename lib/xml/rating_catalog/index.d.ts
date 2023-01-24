type RatingCatalogDocumentTopElem = XmlTopElem & { Doc: RatingCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string>;
  date: XmlElem<Date>;
  expert_person_id: XmlElem<number>;
  expert_person_fullname: XmlElem<string>;
  expert_person_position_name: XmlElem<string>;
  status: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type RatingCatalogDocument = XmlDocument & { TopElem: RatingCatalogDocumentTopElem; };
