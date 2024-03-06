type ProfessionDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ProfessionDocument;
  professional_area_id: XmlElem<number, ProfessionalAreaCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type ProfessionDocument = XmlDocument & {
  TopElem: ProfessionDocumentTopElem;
  profession: ProfessionDocumentTopElem;
  DocDesc(): unknown;
};
