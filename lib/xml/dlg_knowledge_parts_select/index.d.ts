interface DlgKnowledgePartsSelectDocumentValue {
  key: XmlElem<number>;
  key_obj: XmlElem<unknown>;
}

type DlgKnowledgePartsSelectDocumentTopElem = XmlTopElem &
MsViewCatalogBase & {
  Doc: DlgKnowledgePartsSelectDocument;
  view_part_selector: XmlElem<number>;
  object_id: XmlElem<number>;
  object_obj: XmlElem<unknown>;
  multi_select: XmlElem<boolean>;
  values: XmlMultiElem<DlgKnowledgePartsSelectDocumentValue>;
  value_array: XmlElem<unknown>;
};

type DlgKnowledgePartsSelectDocument = XmlDocument & {
  TopElem: DlgKnowledgePartsSelectDocumentTopElem;
  dlg_knowledge_parts_select: DlgKnowledgePartsSelectDocumentTopElem;
};
