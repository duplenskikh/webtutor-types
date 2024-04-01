interface ViewKeyPositionsProtectionReportDocumentStatus {
  id: XmlElem<string, typeof common.key_position_status_types>;
}

interface ViewKeyPositionsProtectionReportDocumentKeyPosition {
  id: XmlElem<number, KeyPositionCatalogDocumentTopElem>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  org_name: XmlElem<string>;
  subdivision_id: XmlElem<number, SubCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string>;
  region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  region_name: XmlElem<string>;
  person_fullname: XmlElem<string>;
  key_position_threat_id: XmlElem<number, KeyPositionThreatCatalogDocumentTopElem>;
  key_position_threat_name: XmlElem<string>;
  risk_levels_num: XmlElem<number>;
  active_successors_num: XmlElem<number>;
  approved_successors_num: XmlElem<number>;
}

type ViewKeyPositionsProtectionReportDocumentTopElem = XmlTopElem & {
  Doc: ViewKeyPositionsProtectionReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  key_position_threat_id: XmlElem<number, KeyPositionThreatCatalogDocumentTopElem>;
  group_by_common_position: XmlElem<boolean>;
  hier_show: XmlElem<boolean>;
  disp_tree_selector: XmlElem<boolean>;
  statuss: XmlMultiElem<ViewKeyPositionsProtectionReportDocumentStatus>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  key_positions: XmlMultiElem<ViewKeyPositionsProtectionReportDocumentKeyPosition>;
  set_sel_action(list: unknown, screen: unknown): unknown;
};

type ViewKeyPositionsProtectionReportDocument = XmlDocument & {
  TopElem: ViewKeyPositionsProtectionReportDocumentTopElem;
  view_key_positions_protection_report: ViewKeyPositionsProtectionReportDocumentTopElem;
  OnInit(): void;
};
