interface OutstaffContractDocumentRegionPositionCommon extends CostCurrencyBase {
  position_common_id?: XmlElem<number>;
  preferable?: XmlElem<boolean>;
}

interface OutstaffContractDocumentRegionMaterial extends CostCurrencyBase {
  material_type_id?: XmlElem<number>;
}
interface OutstaffContractDocumentRegion {
  id?: XmlElem<string>;
  region_id?: XmlElem<number>;
  subdivision_id?: XmlElem<number>;
  subdivision_name?(): unknown;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  all_period?: XmlElem<boolean>;
  position_commons?: XmlMultiElem<OutstaffContractDocumentRegionPositionCommon>;
  materials?: XmlMultiElem<OutstaffContractDocumentRegionMaterial>;
}

type OutstaffContractDocumentTopElem = XmlTopElem & { Doc: OutstaffContractDocument } & 
  FileListBase &
  AdminAccessBase &
  CustomElemsBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?(): unknown;
  status?: XmlElem<string>;
  type_id?: XmlElem<string>;
  date?: XmlElem<Date>;
  number?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  outstaff_provider_id?: XmlElem<number>;
  disp_name?(): unknown;
  regions?: XmlMultiElem<OutstaffContractDocumentRegion>;
  access?: XmlElem<AccessDocBase>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type OutstaffContractDocument = XmlDocument & { TopElem: OutstaffContractDocumentTopElem; };
