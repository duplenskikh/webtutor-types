type PersonnelReserveCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.personnel_reserve_status_types>;
  career_reserve_type_id: XmlElem<number, CareerReserveTypeCatalogDocumentTopElem>;
  exclusion_reason_id: XmlElem<number, ExclusionReasonCatalogDocumentTopElem>;
  nomination_id: XmlElem<number, TalentPoolNominationCatalogDocumentTopElem>;
  development_potential_id: XmlElem<number, DevelopmentPotentialCatalogDocumentTopElem>;
  efficiency_estimation_id: XmlElem<number, EfficiencyEstimationCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  start_date: XmlElem<Date>;
  include_reserve_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
