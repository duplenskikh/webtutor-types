interface EducationProgramDocumentEducationMethod {
  education_method_id: XmlElem<number>;
}

type EducationProgramDocumentTopElem = XmlTopElem & { Doc: EducationProgramDocument } & 
AdminAccessBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
  education_methods: XmlMultiElem<EducationProgramDocumentEducationMethod>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  role_id: XmlMultiElem<number>;
}

type EducationProgramDocument = XmlDocument & {
  TopElem: EducationProgramDocumentTopElem;
};
