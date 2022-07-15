interface TutorPositionCommon {
  position_common_id?: XmlElem<number>;
}

interface TutorTypicalDevelopmentProgram {
  typical_development_program_id?: XmlElem<number>;
}

interface TutorSubdivision {
  subdivision_id?: XmlElem<number>;
}

interface TutorView extends DescBase {
}

interface TutorTopElem extends XmlTopElem<TutorDocument>, PersonFillingBase, FileListBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  person_id?: XmlElem<number>;
  career_reserve_type_id?: XmlElem<number>;
  status?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  position_commons?: XmlMultiElem<TutorPositionCommon>;
  typical_development_programs?: XmlMultiElem<TutorTypicalDevelopmentProgram>;
  subdivisions?: XmlMultiElem<TutorSubdivision>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<TutorView>;
}

type TutorDocument = XmlDocument<TutorTopElem>;
