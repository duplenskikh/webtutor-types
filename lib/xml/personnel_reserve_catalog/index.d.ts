type PersonnelReserveCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.personnel_reserve_status_types>;
  career_reserve_type_id: XmlElem<number | null, CareerReserveTypeCatalogDocumentTopElem>;
  exclusion_reason_id: XmlElem<number | null, ExclusionReasonCatalogDocumentTopElem>;
  nomination_id: XmlElem<number | null, TalentPoolNominationCatalogDocumentTopElem>;
  development_potential_id: XmlElem<number | null, DevelopmentPotentialCatalogDocumentTopElem>;
  efficiency_estimation_id: XmlElem<number | null, EfficiencyEstimationCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  person_position_name: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  include_reserve_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
