interface ClassificationModelDocumentClassificationsBlockClassification {
  id: XmlElem<string>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_classification_id: XmlElem<string>;
  processing_method: XmlElem<string, typeof common.processing_methods>;
  type: XmlElem<string>;
  processing_function: XmlElem<string>;
  expressions_file_url: XmlElem<string>;
  answers_file_url: XmlElem<string>;
  is_std: XmlElem<boolean>;
}

interface ClassificationModelDocumentClassificationsBlock {
  classifications: XmlMultiElem<ClassificationModelDocumentClassificationsBlockClassification>;
}

type ClassificationModelDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: ClassificationModelDocument;
  required_probability: XmlElem<number>;
  code_library_id: XmlElem<number, CodeLibraryCatalogDocumentTopElem>;
  processing_code_library_id: XmlElem<number, CodeLibraryCatalogDocumentTopElem>;
  classifications_block: XmlElem<ClassificationModelDocumentClassificationsBlock>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  access: XmlElem<AccessDocBase>;
};

type ClassificationModelDocument = XmlDocument & {
  TopElem: ClassificationModelDocumentTopElem;
  classification_model: ClassificationModelDocumentTopElem;
  OnCreate(): unknown;
  DocDesc(): unknown;
};
