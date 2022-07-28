interface ClCourseDocumentModule {
  id?: XmlElem<number>;
  path_id?: XmlElem<string>;
  folder_id?: XmlElem<number>;
}

interface ClCourseDocumentWindow {
  module_id?: XmlElem<number>;
  zoom?: XmlElem<number>;
  active?: XmlElem<boolean>;
  slide_id?: XmlElem<number>;
}

interface ClCourseDocumentFolder {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  parent_id?: XmlElem<number>;
}

interface ClCourseDocumentAuthorType {
  type_id?: XmlElem<number>;
}
interface ClCourseDocumentAuthor extends PersonFillingBase {
  person_id?: XmlElem<number>;
  typecode?(): unknown;
  types?: XmlMultiElem<ClCourseDocumentAuthorType>;
  types_display?(): unknown;
}

interface ClCourseDocumentRepositorium {
  repositorium_id?: XmlElem<number>;
}

interface ClCourseDocumentAuxConst {
  code?: XmlElem<string>;
  cl_const_id?: XmlElem<number>;
}

type ClCourseDocumentTopElem = XmlTopElem & { Doc: ClCourseDocument } & 
  ObjectCodeNameBase &
  ClLocalizationsBase &
  KnowledgePartsBase &
  CustomElemsBase & {
  start_date?: XmlElem<Date>;
  end_date?: XmlElem<Date>;
  state_id?: XmlElem<number>;
  platform?: XmlElem<string>;
  modules?: XmlMultiElem<ClCourseDocumentModule>;
  windows?: XmlMultiElem<ClCourseDocumentWindow>;
  folders?: XmlMultiElem<ClCourseDocumentFolder>;
  authors?: XmlMultiElem<ClCourseDocumentAuthor>;
  repositoriums?: XmlMultiElem<ClCourseDocumentRepositorium>;
  aux_consts?: XmlMultiElem<ClCourseDocumentAuxConst>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  forum_id?: XmlElem<number>;
  role_id?: XmlMultiElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  module_href_get?(): unknown;
  export_2_scorm?(): unknown;
}

type ClCourseDocument = XmlDocument & { TopElem: ClCourseDocumentTopElem; };
