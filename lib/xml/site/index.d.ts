interface SiteDocumentOwnerObject {
  object_id: XmlElem<number>;
  catalog_name: XmlElem<string>;
}

interface SiteDocumentMenuDocument {
  id: XmlElem<string>;
  document_id: XmlElem<number>;
  parent_document_id: XmlElem<string>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  position: XmlElem<number>;
  icon_url: XmlElem<string>;
  class: XmlElem<string>;
  link_url: XmlElem<string>;
}
interface SiteDocumentMenu {
  id: XmlElem<string>;
  name: XmlElem<string>;
  documents: XmlMultiElem<SiteDocumentMenuDocument>;
}

interface SiteDocumentWebDesign {
  web_design_id: XmlElem<number>;
}

interface SiteDocumentAnonymousMode {
  mode: XmlElem<string>;
}

type SiteDocumentTopElem = XmlTopElem & { Doc: SiteDocument } & 
  ObjectCodeNameBase &
  FuncManagersBase &
  CustomElemsBase & {
  title: XmlElem<string>;
  html_header: XmlElem<string>;
  html_icon_href: XmlElem<string>;
  web_design_id: XmlElem<number>;
  lng_id: XmlElem<string>;
  owner_objects: XmlMultiElem<SiteDocumentOwnerObject>;
  menus: XmlMultiElem<SiteDocumentMenu>;
  web_designs: XmlMultiElem<SiteDocumentWebDesign>;
  first_unauthorized_url: XmlElem<string>;
  first_authorized_url: XmlElem<string>;
  anonym_collaborator_id: XmlElem<number>;
  anonymous_modes: XmlMultiElem<SiteDocumentAnonymousMode>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
}

type SiteDocument = XmlDocument & { TopElem: SiteDocumentTopElem; };
