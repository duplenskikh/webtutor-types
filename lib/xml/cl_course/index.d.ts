interface ClCourseModule {
  id?: XmlElem<number>;
  path_id?: XmlElem<string>;
  folder_id?: XmlElem<number>;
}

interface ClCourseWindow {
  module_id?: XmlElem<number>;
  zoom?: XmlElem<number>;
  active?: XmlElem<boolean>;
  slide_id?: XmlElem<number>;
}

interface ClCourseFolder {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  parent_id?: XmlElem<number>;
}

interface ClCourseAuthorType {
  type_id?: XmlElem<number>;
}

interface ClCourseAuthor extends PersonFillingBase {
  person_id?: XmlElem<number>;
  types?: XmlMultiElem<ClCourseAuthorType>;
  typecode?(): any;
  types_display?(): any;
}

interface ClCourseRepositorium {
  repositorium_id?: XmlElem<number>;
}

interface ClCourseAuxConst {
  code?: XmlElem<string>;
  cl_const_id?: XmlElem<number>;
}

interface ClCoursePlanTablePlanRow {
  id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  plan_date?: XmlElem<Date>;
  fact_date?: XmlElem<Date>;
  completion?: XmlElem<number>;
  name?: XmlElem<string>;
  responsible_id?: XmlElem<number>;
  responsible_fullname?: XmlElem<string>;
  description?: XmlElem<string>;
  req_plan_row_id?: XmlElem<string>;
}

interface ClCoursePlanTable {
  plan_row?: XmlElem<ClCoursePlanTablePlanRow>;
}

interface ClCourseView extends DescBase {
  selector?: XmlElem<string>;
  view_part_selector?: XmlElem<number>;
  module_href?: XmlElem<string>;
  module_view_selector?: XmlElem<number>;
}

interface ClCourseTopElem extends XmlTopElem<ClCourseDocument>, ObjectCodeNameBase, ClLocalizationsBase, KnowledgePartsBase, CustomElemsBase {
  start_date?: XmlElem<Date>;
  end_date?: XmlElem<Date>;
  state_id?: XmlElem<number>;
  platform?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  forum_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  modules?: XmlMultiElem<ClCourseModule>;
  windows?: XmlMultiElem<ClCourseWindow>;
  folders?: XmlMultiElem<ClCourseFolder>;
  authors?: XmlMultiElem<ClCourseAuthor>;
  repositoriums?: XmlMultiElem<ClCourseRepositorium>;
  aux_consts?: XmlMultiElem<ClCourseAuxConst>;
  plan_table?: XmlElem<ClCoursePlanTable>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<ClCourseView>;
  module_href_get?(): any;
  export_2_scorm?(): any;
}

type ClCourseDocument = XmlDocument<ClCourseTopElem>;
