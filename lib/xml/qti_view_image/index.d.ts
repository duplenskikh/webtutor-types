interface QtiViewImageDocumentViewImage {
  title: XmlElem<string>;
  image_url: XmlElem<string>;
}

type QtiViewImageDocumentTopElem = XmlTopElem & {
  Doc: QtiViewImageDocument;

};

type QtiViewImageDocument = XmlDocument & {
  TopElem: QtiViewImageDocumentTopElem;
  qti_view_image: QtiViewImageDocumentTopElem;
  view_image: XmlElem<QtiViewImageDocumentViewImage>;
};
