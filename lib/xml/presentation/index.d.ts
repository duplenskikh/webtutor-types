interface PresentationDocumentShape {
  id: XmlElem<string | null>;
  slide_id: XmlElem<string | null>;
  json: XmlElem<string | null>;
}

type PresentationDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: PresentationDocument;
  access: XmlElem<AccessDocBase | null>;
  file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  vclass_setting_id: XmlElem<number | null, VclassSettingCatalogDocumentTopElem>;
  current_slide_id: XmlElem<string | null>;
  shapes: XmlMultiElem<PresentationDocumentShape | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type PresentationDocument = XmlDocument & {
  TopElem: PresentationDocumentTopElem;
  presentation: PresentationDocumentTopElem;
  DocDesc(): string;
};
