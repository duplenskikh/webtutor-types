interface SubdivisionOutstaff extends OutstaffPeriodsBase {
}

interface SubdivisionViewFilter extends AuFtFilter {
}

interface SubdivisionView extends DescBase {
  do_update_document_persons?: XmlElem<boolean>;
  knowledge_classifier_id?: XmlElem<number>;
  knowledge_sort_type_id?: XmlElem<string>;
  drop_pers_hier_entry?: XmlElem<boolean>;
  filter?: XmlElem<SubdivisionViewFilter>;
}

interface SubdivisionTopElem extends XmlTopElem<SubdivisionDocument>, ObjectCodeNameBase, FileListBase, FuncManagersBase, KnowledgePartsBase, KnowledgePartsBaseOld, CustomElemsBase, DocumentPersonsBase {
  org_id?: XmlElem<number>;
  parent_object_id?: XmlElem<number>;
  is_disbanded?: XmlElem<boolean>;
  lng_id?: XmlElem<string>;
  location_id?: XmlElem<string>;
  access_time_start?: XmlElem<string>;
  access_time_end?: XmlElem<string>;
  show_detailed?: XmlElem<boolean>;
  show_children?: XmlElem<boolean>;
  place_id?: XmlElem<number>;
  region_id?: XmlElem<number>;
  kpi_profile_id?: XmlElem<number>;
  bonus_profile_id?: XmlElem<number>;
  schedule_type_id?: XmlElem<number>;
  formed_date?: XmlElem<Date>;
  disbanded_date?: XmlElem<Date>;
  cost_center_id?: XmlElem<number>;
  is_faculty?: XmlElem<boolean>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  rows?: XmlElem<any>;
  row_disp_elem?: XmlElem<string>;
  row_list_field?: XmlElem<string>;
  row_key_field?: XmlElem<string>;
  outstaff?: XmlElem<OutstaffPeriodsBase>;
  outstaff?: XmlElem<SubdivisionOutstaff>;
  view?: XmlElem<SubdivisionView>;
  start_action?(): any;
}

type SubdivisionDocument = XmlDocument<SubdivisionTopElem>;
