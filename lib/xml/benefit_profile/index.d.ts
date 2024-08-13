interface BenefitProfileDocumentPositionCommon {
  id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
}

interface BenefitProfileDocumentGrade {
  id: XmlElem<number | null, GradeCatalogDocumentTopElem>;
}

interface BenefitProfileDocumentBenefit {
  id: XmlElem<number | null, BenefitCatalogDocumentTopElem>;
}

type BenefitProfileDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
PersonFillingBase &
FileListBase &
CustomElemsBase & {
  Doc: BenefitProfileDocument;
  status: XmlElem<string | null, typeof common.benefit_statuses>;
  position_commons: XmlMultiElem<BenefitProfileDocumentPositionCommon | null>;
  grades: XmlMultiElem<BenefitProfileDocumentGrade | null>;
  benefits: XmlMultiElem<BenefitProfileDocumentBenefit | null>;
  position_family_id: XmlElem<number | null, PositionFamilyCatalogDocumentTopElem>;
  subdivision_group_id: XmlElem<number | null, SubdivisionGroupCatalogDocumentTopElem>;
  person_region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  subdivision_region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  person_place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  subdivision_place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  work_form_id: XmlElem<number | null, WorkFormCatalogDocumentTopElem>;
  working_condition_type_id: XmlElem<number | null, WorkingConditionTypeCatalogDocumentTopElem>;
  work_experience: XmlElem<number | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type BenefitProfileDocument = XmlDocument & {
  TopElem: BenefitProfileDocumentTopElem;
  benefit_profile: BenefitProfileDocumentTopElem;
  DocDesc(): string;
};
