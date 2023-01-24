type TutorCatalogDocumentTopElem = XmlTopElem & { Doc: TutorCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  career_reserve_type_id: XmlElem<number>;
  status: XmlElem<string>;
  typical_development_program_id: XmlMultiElem<number>;
  subdivision_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type TutorCatalogDocument = XmlDocument & { TopElem: TutorCatalogDocumentTopElem; };
