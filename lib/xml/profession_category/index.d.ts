type ProfessionCategoryDocumentTopElem = XmlTopElem & { Doc: ProfessionCategoryDocument } & 
ObjectCodeNameBase &
AdminAccessBase &
CustomElemsBase & {
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
}

type ProfessionCategoryDocument = XmlDocument & { TopElem: ProfessionCategoryDocumentTopElem; };
