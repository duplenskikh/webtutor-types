type ProfessionCategoryDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ProfessionCategoryDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type ProfessionCategoryDocument = XmlDocument & {
  TopElem: ProfessionCategoryDocumentTopElem;
  profession_category: ProfessionCategoryDocumentTopElem;
  DocDesc(): string;
};
