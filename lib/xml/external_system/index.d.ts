interface ExternalSystemDocumentKnowledgeUrlPair {
  code: XmlElem<string>;
  knowledge_part_id: XmlElem<number, KnowledgePartCatalogDocumentTopElem>;
}

interface ExternalSystemDocumentSettings {
  float_button_title: XmlElem<string>;
  list_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  list_web_template_params: XmlElem<WebVariablesBase>;
  bubble_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  bubble_web_template_params: XmlElem<WebVariablesBase>;
  custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  custom_web_template_params: XmlElem<WebVariablesBase>;
}

type ExternalSystemDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: ExternalSystemDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  knowledge_url_pairs: XmlMultiElem<ExternalSystemDocumentKnowledgeUrlPair>;
  anonymous_user_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  settings: XmlElem<ExternalSystemDocumentSettings>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ExternalSystemDocument = XmlDocument & {
  TopElem: ExternalSystemDocumentTopElem;
};
