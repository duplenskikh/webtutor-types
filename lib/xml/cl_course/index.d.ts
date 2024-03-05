interface ClCourseDocumentModule {
  id: XmlElem<number, ClModuleCatalogDocumentTopElem>;
  path_id: XmlElem<string>;
  folder_id: XmlElem<number>;
}

interface ClCourseDocumentWindow {
  module_id: XmlElem<number, ClModuleCatalogDocumentTopElem>;
  zoom: XmlElem<number>;
  active: XmlElem<boolean>;
  slide_id: XmlElem<number, ClSlideCatalogDocumentTopElem>;
}

interface ClCourseDocumentFolder {
  id: XmlElem<number>;
  name: XmlElem<string>;
  parent_id: XmlElem<number>;
}

interface ClCourseDocumentAuthorType {
  type_id: XmlElem<number, typeof common.cl_author_types>;
}

interface ClCourseDocumentAuthor extends PersonFillingBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  typecode(): unknown;
  types: XmlMultiElem<ClCourseDocumentAuthorType>;
  types_display(): unknown;
}

interface ClCourseDocumentRepositoriumsRepositorium {
  repositorium_id: XmlElem<number, RepositoriumCatalogDocumentTopElem>;
}

interface ClCourseDocumentRepositoriums {
  repositorium: XmlElem<ClCourseDocumentRepositoriumsRepositorium>;
}

interface ClCourseDocumentPlanTablePlanRow {
  id: XmlElem<string>;
  start_date: XmlElem<Date>;
  plan_date: XmlElem<Date>;
  fact_date: XmlElem<Date>;
  completion: XmlElem<number>;
  name: XmlElem<string>;
  responsible_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  responsible_fullname: XmlElem<string>;
  description: XmlElem<string>;
  req_plan_row_id: XmlElem<string>;
}

interface ClCourseDocumentPlanTable {
  plan_row: XmlElem<ClCourseDocumentPlanTablePlanRow>;
}

interface ClCourseDocumentAuxConst {
  code: XmlElem<string>;
  cl_const_id: XmlElem<number, ClConstCatalogDocumentTopElem>;
}

type ClCourseDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ClLocalizationsBase &
KnowledgePartsBase &
CustomElemsBase & {
  Doc: ClCourseDocument;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  state_id: XmlElem<number, typeof common.cl_states>;
  platform: XmlElem<string>;
  modules: XmlMultiElem<ClCourseDocumentModule>;
  windows: XmlMultiElem<ClCourseDocumentWindow>;
  folders: XmlMultiElem<ClCourseDocumentFolder>;
  authors: XmlMultiElem<ClCourseDocumentAuthor>;
  repositoriums: XmlElem<ClCourseDocumentRepositoriums>;
  plan_table: XmlElem<ClCourseDocumentPlanTable>;
  aux_consts: XmlMultiElem<ClCourseDocumentAuxConst>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  forum_id: XmlElem<number, ForumCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  module_href_get(): unknown;
  export_2_scorm(): unknown;
  fix_new_authors(): unknown;
};

type ClCourseDocument = XmlDocument & {
  TopElem: ClCourseDocumentTopElem;
};
