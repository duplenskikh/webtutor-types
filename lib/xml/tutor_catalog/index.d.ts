type TutorCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  person_position_name: XmlElem<string | null>;
  person_subdivision_name: XmlElem<string | null>;
  career_reserve_type_id: XmlElem<number | null, CareerReserveTypeCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.tutor_status_types>;
  typical_development_program_id: XmlMultiElemObject<number | null, TypicalDevelopmentProgramCatalogDocumentTopElem>;
  subdivision_id: XmlMultiElemObject<number | null, SubdivisionCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
