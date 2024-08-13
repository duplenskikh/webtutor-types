interface TutorDocumentPositionCommon {
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
}

interface TutorDocumentTypicalDevelopmentProgram {
  typical_development_program_id: XmlElem<number | null, TypicalDevelopmentProgramCatalogDocumentTopElem>;
}

interface TutorDocumentSubdivision {
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
}

type TutorDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: TutorDocument;
  code: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  career_reserve_type_id: XmlElem<number | null, CareerReserveTypeCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.tutor_status_types>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  position_commons: XmlMultiElem<TutorDocumentPositionCommon | null>;
  typical_development_programs: XmlMultiElem<TutorDocumentTypicalDevelopmentProgram | null>;
  subdivisions: XmlMultiElem<TutorDocumentSubdivision | null>;
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type TutorDocument = XmlDocument & {
  TopElem: TutorDocumentTopElem;
  tutor: TutorDocumentTopElem;
  DocDesc(): string;
};
