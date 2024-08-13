type WikiArticleTypeDocumentTopElem = XmlTopElem & {
  Doc: WikiArticleTypeDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
  comment: XmlElem<string | null>;
};

type WikiArticleTypeDocument = XmlDocument & {
  TopElem: WikiArticleTypeDocumentTopElem;
  wiki_article_type: WikiArticleTypeDocumentTopElem;
  DocDesc(): string;
};
