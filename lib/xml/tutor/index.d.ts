interface TutorDocumentPositionCommon {
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
}

interface TutorDocumentTypicalDevelopmentProgram {
  typical_development_program_id: XmlElem<number, TypicalDevelopmentProgramCatalogDocumentTopElem>;
}

interface TutorDocumentSubdivision {
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
}

type TutorDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: TutorDocument;
  code: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  career_reserve_type_id: XmlElem<number, CareerReserveTypeCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.tutor_status_types>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  position_commons: XmlMultiElem<TutorDocumentPositionCommon>;
  typical_development_programs: XmlMultiElem<TutorDocumentTypicalDevelopmentProgram>;
  subdivisions: XmlMultiElem<TutorDocumentSubdivision>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type TutorDocument = XmlDocument & {
  TopElem: TutorDocumentTopElem;
  tutor: TutorDocumentTopElem;
  DocDesc(): string;
};
