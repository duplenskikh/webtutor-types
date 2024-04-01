interface BenefitProfileDocumentPositionCommon {
  id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
}

interface BenefitProfileDocumentGrade {
  id: XmlElem<number, GradeCatalogDocumentTopElem>;
}

interface BenefitProfileDocumentBenefit {
  id: XmlElem<number, BenefitCatalogDocumentTopElem>;
}

type BenefitProfileDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
PersonFillingBase &
FileListBase &
CustomElemsBase & {
  Doc: BenefitProfileDocument;
  status: XmlElem<string, typeof common.benefit_statuses>;
  position_commons: XmlMultiElem<BenefitProfileDocumentPositionCommon>;
  grades: XmlMultiElem<BenefitProfileDocumentGrade>;
  benefits: XmlMultiElem<BenefitProfileDocumentBenefit>;
  position_family_id: XmlElem<number, PositionFamilyCatalogDocumentTopElem>;
  subdivision_group_id: XmlElem<number, SubdivisionGroupCatalogDocumentTopElem>;
  person_region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  subdivision_region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  person_place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  subdivision_place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  work_form_id: XmlElem<number, WorkFormCatalogDocumentTopElem>;
  working_condition_type_id: XmlElem<number, WorkingConditionTypeCatalogDocumentTopElem>;
  work_experience: XmlElem<number>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type BenefitProfileDocument = XmlDocument & {
  TopElem: BenefitProfileDocumentTopElem;
  benefit_profile: BenefitProfileDocumentTopElem;
  DocDesc(): string;
};
