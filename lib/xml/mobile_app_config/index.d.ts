interface MobileAppConfigDocumentDocument {
  id: XmlElem<number>;
  is_default: XmlElem<boolean>;
  is_menu: XmlElem<boolean>;
  partial: XmlElem<boolean>;
  cf: XmlElem<number>;
  hidden: XmlElem<boolean>;
}

interface MobileAppConfigDocumentInfoDoc {
  id: XmlElem<number>;
}

interface MobileAppConfigDocumentHtmlInjection {
  zone: XmlElem<string>;
  html: XmlElem<string>;
}

type MobileAppConfigDocumentTopElem = XmlTopElem & { Doc: MobileAppConfigDocument } &
CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  documents: XmlMultiElem<MobileAppConfigDocumentDocument>;
  info_docs: XmlMultiElem<MobileAppConfigDocumentInfoDoc>;
  display_mode: XmlElem<number>;
  html_injections: XmlMultiElem<MobileAppConfigDocumentHtmlInjection>;
  show_header: XmlElem<boolean>;
  use_update_stamp: XmlElem<boolean>;
  use_offline_scorm: XmlElem<boolean>;
  display_scorm_in_menu: XmlElem<boolean>;
  login_question: XmlElem<string>;
  days_credentials_update: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type MobileAppConfigDocument = XmlDocument & {
  TopElem: MobileAppConfigDocumentTopElem;
};
