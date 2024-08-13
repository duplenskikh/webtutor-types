type BenefitProfileCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  status: XmlElem<string | null, typeof common.benefit_statuses>;
  position_family_id: XmlElem<number | null, PositionFamilyCatalogDocumentTopElem>;
  subdivision_group_id: XmlElem<number | null, SubdivisionGroupCatalogDocumentTopElem>;
  person_region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  subdivision_region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  person_place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  subdivision_place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  work_form_id: XmlElem<number | null, WorkFormCatalogDocumentTopElem>;
  working_condition_type_id: XmlElem<number | null, WorkingConditionTypeCatalogDocumentTopElem>;
  work_experience: XmlElem<number | null>;
  position_commons_ids: XmlMultiElemObject<number | null, PositionCommonCatalogDocumentTopElem>;
  grades_ids: XmlMultiElemObject<number | null, GradeCatalogDocumentTopElem>;
  benefits_ids: XmlMultiElemObject<number | null, BenefitCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
