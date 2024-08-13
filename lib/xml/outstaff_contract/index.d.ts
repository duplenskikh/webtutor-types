interface OutstaffContractDocumentRegionPositionCommon extends CostCurrencyBase {
  position_common_id: XmlElem<number | null>;
  preferable: XmlElem<boolean | null>;
}

interface OutstaffContractDocumentRegionMaterial extends CostCurrencyBase {
  material_type_id: XmlElem<number | null>;
}

interface OutstaffContractDocumentRegion {
  id: XmlElem<string | null>;
  region_id: XmlElem<number | null>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  subdivision_name(): unknown;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  all_period: XmlElem<boolean>;
  position_commons: XmlMultiElem<OutstaffContractDocumentRegionPositionCommon | null>;
  materials: XmlMultiElem<OutstaffContractDocumentRegionMaterial | null>;
}

type OutstaffContractDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: OutstaffContractDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name(): string;
  status: XmlElem<string, typeof common.order_status_types>;
  type_id: XmlElem<string, typeof common.outstaff_contract_types>;
  date: XmlElem<Date | null>;
  number: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  outstaff_provider_id: XmlElem<number | null, OutstaffProviderCatalogDocumentTopElem>;
  disp_name(): unknown;
  regions: XmlMultiElem<OutstaffContractDocumentRegion | null>;
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type OutstaffContractDocument = XmlDocument & {
  TopElem: OutstaffContractDocumentTopElem;
  outstaff_contract: OutstaffContractDocumentTopElem;
  DocDesc(): string;
};
