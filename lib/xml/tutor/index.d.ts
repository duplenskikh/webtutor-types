interface TutorDocumentPositionCommon {
  position_common_id?: XmlElem<number>;
}

interface TutorDocumentTypicalDevelopmentProgram {
  typical_development_program_id?: XmlElem<number>;
}

interface TutorDocumentSubdivision {
  subdivision_id?: XmlElem<number>;
}

type TutorDocumentTopElem = XmlTopElem & { Doc: TutorDocument } & 
  PersonFillingBase &
  FileListBase &
  AdminAccessBase &
  CustomElemsBase & {
  code?: XmlElem<string>;
  person_id?: XmlElem<number>;
  career_reserve_type_id?: XmlElem<number>;
  status?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  position_commons?: XmlMultiElem<TutorDocumentPositionCommon>;
  typical_development_programs?: XmlMultiElem<TutorDocumentTypicalDevelopmentProgram>;
  subdivisions?: XmlMultiElem<TutorDocumentSubdivision>;
  access?: XmlElem<AccessDocBase>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type TutorDocument = XmlDocument & { TopElem: TutorDocumentTopElem; };
