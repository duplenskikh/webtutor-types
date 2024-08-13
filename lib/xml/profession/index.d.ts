type ProfessionDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ProfessionDocument;
  professional_area_id: XmlElem<number | null, ProfessionalAreaCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type ProfessionDocument = XmlDocument & {
  TopElem: ProfessionDocumentTopElem;
  profession: ProfessionDocumentTopElem;
  DocDesc(): string;
};
