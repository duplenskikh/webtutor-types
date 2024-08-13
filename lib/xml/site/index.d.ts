interface SiteDocumentOwnerObject {
  object_id: XmlElem<number | null>;
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
}

interface SiteDocumentMenuDocument {
  id: XmlElem<string | null>;
  document_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  parent_document_id: XmlElem<string | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  position: XmlElem<number | null>;
  icon_url: XmlElem<string | null>;
  class: XmlElem<string | null>;
  link_url: XmlElem<string | null>;
}

interface SiteDocumentMenu {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  documents: XmlMultiElem<SiteDocumentMenuDocument | null>;
}

interface SiteDocumentWebDesign {
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
}

interface SiteDocumentAnonymousMode {
  mode: XmlElem<string | null>;
}

type SiteDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ObjectTypeBase &
I18nBase &
FuncManagersBase &
CustomElemsBase & {
  Doc: SiteDocument;
  title: XmlElem<string | null>;
  html_header: XmlElem<string | null>;
  html_icon_href: XmlElem<string | null>;
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  lng_id: XmlElem<string | null>;
  owner_collaborator: XmlElem<boolean | null>;
  owner_candidate: XmlElem<boolean | null>;
  owner_outstaff: XmlElem<boolean | null>;
  owner_objects: XmlMultiElem<SiteDocumentOwnerObject | null>;
  menus: XmlMultiElem<SiteDocumentMenu | null>;
  web_designs: XmlMultiElem<SiteDocumentWebDesign | null>;
  first_unauthorized_url: XmlElem<string | null>;
  first_authorized_url: XmlElem<string | null>;
  anonym_collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  anonymous_modes: XmlMultiElem<SiteDocumentAnonymousMode | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  is_std: XmlElem<boolean | null>;
  changed: XmlElem<boolean>;
};

type SiteDocument = XmlDocument & {
  TopElem: SiteDocumentTopElem;
  site: SiteDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};
