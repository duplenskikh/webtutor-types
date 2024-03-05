type TutorCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  career_reserve_type_id: XmlElem<number, CareerReserveTypeCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.tutor_status_types>;
  typical_development_program_id: XmlMultiElemObject<number, TypicalDevelopmentProgramCatalogDocumentTopElem>;
  subdivision_id: XmlMultiElemObject<number, SubdivisionCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
