type ProfessionalAreaTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: ProfessionalAreaTypeDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type ProfessionalAreaTypeDocument = XmlDocument & {
  TopElem: ProfessionalAreaTypeDocumentTopElem;
  professional_area_type: ProfessionalAreaTypeDocumentTopElem;
  DocDesc(): unknown;
};
