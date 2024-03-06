interface PresentationDocumentShape {
  id: XmlElem<string>;
  slide_id: XmlElem<string>;
  json: XmlElem<string>;
}

type PresentationDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: PresentationDocument;
  access: XmlElem<AccessDocBase>;
  file_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  vclass_setting_id: XmlElem<number, VclassSettingCatalogDocumentTopElem>;
  current_slide_id: XmlElem<string>;
  shapes: XmlMultiElem<PresentationDocumentShape>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type PresentationDocument = XmlDocument & {
  TopElem: PresentationDocumentTopElem;
  presentation: PresentationDocumentTopElem;
  DocDesc(): unknown;
};
