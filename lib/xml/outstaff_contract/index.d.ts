interface OutstaffContractRegionPositionCommon extends CostCurrencyBase {
  position_common_id?: XmlElem<number>;
  preferable?: XmlElem<boolean>;
}

interface OutstaffContractRegionMaterial extends CostCurrencyBase {
  material_type_id?: XmlElem<number>;
}

interface OutstaffContractRegion {
  id?: XmlElem<string>;
  region_id?: XmlElem<number>;
  subdivision_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  all_period?: XmlElem<boolean>;
  position_commons?: XmlMultiElem<OutstaffContractRegionPositionCommon>;
  materials?: XmlMultiElem<OutstaffContractRegionMaterial>;
  subdivision_name?(): any;
}

interface OutstaffContractView extends DescBase {
}

interface OutstaffContractTopElem extends XmlTopElem<OutstaffContractDocument>, FileListBase, AdminAccessBase, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  status?: XmlElem<string>;
  type_id?: XmlElem<string>;
  date?: XmlElem<Date>;
  number?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  outstaff_provider_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  regions?: XmlMultiElem<OutstaffContractRegion>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<OutstaffContractView>;
  name?(): any;
  disp_name?(): any;
}

type OutstaffContractDocument = XmlDocument<OutstaffContractTopElem>;
