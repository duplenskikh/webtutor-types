interface EducationProgramDocumentEducationMethod {
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
}

type EducationProgramDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: EducationProgramDocument;
  desc: XmlElem<string | null>;
  education_methods: XmlMultiElem<EducationProgramDocumentEducationMethod | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type EducationProgramDocument = XmlDocument & {
  TopElem: EducationProgramDocumentTopElem;
  education_program: EducationProgramDocumentTopElem;
  DocDesc(): string;
};
