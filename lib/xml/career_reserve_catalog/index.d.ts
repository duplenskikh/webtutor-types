type CareerReserveCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_position: XmlElem<string>;
  start_date: XmlElem<Date>;
  plan_readiness_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  readiness_percent: XmlElem<number>;
  personnel_reserve_id: XmlElem<number, PersonnelReserveCatalogDocumentTopElem>;
  successor_id: XmlElem<number, SuccessorCatalogDocumentTopElem>;
  career_plan_id: XmlElem<number, CareerPlanCatalogDocumentTopElem>;
  position_type: XmlElem<string>;
  position_name: XmlElem<string>;
  position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  development_programs_id: XmlMultiElemObject<number, TypicalDevelopmentProgramCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
