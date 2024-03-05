type ProfessionCategoryDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ProfessionCategoryDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type ProfessionCategoryDocument = XmlDocument & {
  TopElem: ProfessionCategoryDocumentTopElem;
};
