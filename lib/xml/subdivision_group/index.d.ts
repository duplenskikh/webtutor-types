interface SubdivisionGroupSubdivision {
  subdivision_id?: XmlElem<number>;
  subdivision_name?: XmlElem<string>;
}

interface SubdivisionGroupView extends DescBase {
  knowledge_classifier_id?: XmlElem<number>;
  knowledge_sort_type_id?: XmlElem<string>;
}

interface SubdivisionGroupTopElem extends XmlTopElem<SubdivisionGroupDocument>, ObjectCodeNameBase, KnowledgePartsBase, KnowledgePartsBaseOld, CustomElemsBase, RequirementsBase, ViewConditionsBase {
  is_dynamic?: XmlElem<boolean>;
  kpi_profile_id?: XmlElem<number>;
  bonus_profile_id?: XmlElem<number>;
  schedule_type_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  desc?: XmlElem<string>;
  rows?: XmlElem<any>;
  row_disp_elem?: XmlElem<string>;
  row_list_field?: XmlElem<string>;
  row_key_field?: XmlElem<string>;
  subdivisions?: XmlMultiElem<SubdivisionGroupSubdivision>;
  view?: XmlElem<SubdivisionGroupView>;
  dynamic_select_subdivision?(): any;
  dynamic_select_person?(): any;
  start_action?(): any;
}

type SubdivisionGroupDocument = XmlDocument<SubdivisionGroupTopElem>;
