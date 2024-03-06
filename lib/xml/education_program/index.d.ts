interface EducationProgramDocumentEducationMethod {
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
}

type EducationProgramDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: EducationProgramDocument;
  desc: XmlElem<string>;
  education_methods: XmlMultiElem<EducationProgramDocumentEducationMethod>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  role_id: XmlMultiElemObject<number>;
};

type EducationProgramDocument = XmlDocument & {
  TopElem: EducationProgramDocumentTopElem;
  education_program: EducationProgramDocumentTopElem;
  DocDesc(): unknown;
};
