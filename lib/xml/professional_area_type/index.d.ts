type ProfessionalAreaTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: ProfessionalAreaTypeDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type ProfessionalAreaTypeDocument = XmlDocument & {
  TopElem: ProfessionalAreaTypeDocumentTopElem;
  professional_area_type: ProfessionalAreaTypeDocumentTopElem;
  DocDesc(): string;
};
