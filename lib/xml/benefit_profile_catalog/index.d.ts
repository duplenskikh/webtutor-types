type BenefitProfileCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  status: XmlElem<string, typeof common.benefit_statuses>;
  position_family_id: XmlElem<number, PositionFamilyCatalogDocumentTopElem>;
  subdivision_group_id: XmlElem<number, SubdivisionGroupCatalogDocumentTopElem>;
  person_region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  subdivision_region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  person_place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  subdivision_place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  work_form_id: XmlElem<number, WorkFormCatalogDocumentTopElem>;
  working_condition_type_id: XmlElem<number, WorkingConditionTypeCatalogDocumentTopElem>;
  work_experience: XmlElem<number>;
  position_commons_ids: XmlMultiElemObject<number, PositionCommonCatalogDocumentTopElem>;
  grades_ids: XmlMultiElemObject<number, GradeCatalogDocumentTopElem>;
  benefits_ids: XmlMultiElemObject<number, BenefitCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
