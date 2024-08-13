interface ExternalSystemDocumentKnowledgeUrlPair {
  code: XmlElem<string | null>;
  knowledge_part_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
}

interface ExternalSystemDocumentSettings {
  float_button_title: XmlElem<string | null>;
  list_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  list_web_template_params: XmlElem<WebVariablesBase | null>;
  bubble_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  bubble_web_template_params: XmlElem<WebVariablesBase | null>;
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  custom_web_template_params: XmlElem<WebVariablesBase | null>;
}

type ExternalSystemDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: ExternalSystemDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  knowledge_url_pairs: XmlMultiElem<ExternalSystemDocumentKnowledgeUrlPair | null>;
  anonymous_user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  settings: XmlElem<ExternalSystemDocumentSettings | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ExternalSystemDocument = XmlDocument & {
  TopElem: ExternalSystemDocumentTopElem;
  external_system: ExternalSystemDocumentTopElem;
  DocDesc(): string;
};
