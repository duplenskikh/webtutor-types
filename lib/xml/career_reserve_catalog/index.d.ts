type CareerReserveCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.career_reserve_status_types>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  person_position: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  plan_readiness_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  readiness_percent: XmlElem<number | null>;
  personnel_reserve_id: XmlElem<number | null, PersonnelReserveCatalogDocumentTopElem>;
  successor_id: XmlElem<number | null, SuccessorCatalogDocumentTopElem>;
  career_plan_id: XmlElem<number | null, CareerPlanCatalogDocumentTopElem>;
  position_type: XmlElem<string>;
  position_name: XmlElem<string | null>;
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  development_programs_id: XmlMultiElemObject<number | null, TypicalDevelopmentProgramCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
