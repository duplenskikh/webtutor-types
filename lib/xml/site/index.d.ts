interface SiteDocumentOwnerObject {
  object_id: XmlElem<number>;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
}

interface SiteDocumentMenuDocument {
  id: XmlElem<string>;
  document_id: XmlElem<number, DocumentCatalogDocumentTopElem>;
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
  web_design_id: XmlElem<number, WebDesignCatalogDocumentTopElem>;
}

interface SiteDocumentAnonymousMode {
  mode: XmlElem<string>;
}

type SiteDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ObjectTypeBase &
I18nBase &
FuncManagersBase &
CustomElemsBase & {
  Doc: SiteDocument;
  title: XmlElem<string>;
  html_header: XmlElem<string>;
  html_icon_href: XmlElem<string>;
  web_design_id: XmlElem<number, WebDesignCatalogDocumentTopElem>;
  lng_id: XmlElem<string>;
  owner_collaborator: XmlElem<boolean>;
  owner_candidate: XmlElem<boolean>;
  owner_outstaff: XmlElem<boolean>;
  owner_objects: XmlMultiElem<SiteDocumentOwnerObject>;
  menus: XmlMultiElem<SiteDocumentMenu>;
  web_designs: XmlMultiElem<SiteDocumentWebDesign>;
  first_unauthorized_url: XmlElem<string>;
  first_authorized_url: XmlElem<string>;
  anonym_collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  anonymous_modes: XmlMultiElem<SiteDocumentAnonymousMode>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
};

type SiteDocument = XmlDocument & {
  TopElem: SiteDocumentTopElem;
  site: SiteDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};
