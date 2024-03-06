type DnProgDiscAppendDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnProgDiscAppendDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  program_discipline_id: XmlElem<number, DnProgramDisciplCatalogDocumentTopElem>;
  academ_year_id: XmlElem<number, DnAcademYearCatalogDocumentTopElem>;
  special_id: XmlElem<number, DnSpecialCatalogDocumentTopElem>;
  specialization_id: XmlElem<number, DnSpecializationCatalogDocumentTopElem>;
  educat_form_id: XmlElem<string>;
  qualification_id: XmlElem<number, QualificationCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnProgDiscAppendDocument = XmlDocument & {
  TopElem: DnProgDiscAppendDocumentTopElem;
  dn_prog_disc_append: DnProgDiscAppendDocumentTopElem;
  DocDesc(): unknown;
};
