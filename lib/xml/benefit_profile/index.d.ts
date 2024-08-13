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
  /** Статус */
  status: XmlElem<string | null, typeof common.benefit_statuses>;
  position_commons: XmlMultiElem<BenefitProfileDocumentPositionCommon | null>;
  grades: XmlMultiElem<BenefitProfileDocumentGrade | null>;
  benefits: XmlMultiElem<BenefitProfileDocumentBenefit | null>;
  /** Семейство должностей */
  position_family_id: XmlElem<number | null, PositionFamilyCatalogDocumentTopElem>;
  /** Группы подразделений */
  subdivision_group_id: XmlElem<number | null, SubdivisionGroupCatalogDocumentTopElem>;
  person_region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  subdivision_region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  person_place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  subdivision_place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  work_form_id: XmlElem<number | null, WorkFormCatalogDocumentTopElem>;
  working_condition_type_id: XmlElem<number | null, WorkingConditionTypeCatalogDocumentTopElem>;
  /** Стаж */
  work_experience: XmlElem<number | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type BenefitProfileDocument = XmlDocument & {
  TopElem: BenefitProfileDocumentTopElem;
  benefit_profile: BenefitProfileDocumentTopElem;
  DocDesc(): string;
};
