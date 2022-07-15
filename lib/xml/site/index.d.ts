interface SiteOwnerObject {
  object_id?: XmlElem<number>;
  catalog_name?: XmlElem<string>;
}

interface SiteMenuDocument {
  id?: XmlElem<string>;
  document_id?: XmlElem<number>;
  parent_document_id?: XmlElem<string>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  position?: XmlElem<number>;
  hier_level?: XmlElem<number>;
  hier_expanded?: XmlElem<boolean>;
  icon_url?: XmlElem<string>;
  class?: XmlElem<string>;
  link_url?: XmlElem<string>;
}

interface SiteMenu {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  documents?: XmlMultiElem<SiteMenuDocument>;
}

interface SiteWebDesign {
  web_design_id?: XmlElem<number>;
}

interface SiteAnonymousMode {
  mode?: XmlElem<string>;
}

interface SiteView extends DescBase {
  sel_sist_obj?: XmlElem<string>;
}

interface SiteTopElem extends XmlTopElem<SiteDocument>, ObjectCodeNameBase, FuncManagersBase, CustomElemsBase {
  title?: XmlElem<string>;
  html_header?: XmlElem<string>;
  html_icon_href?: XmlElem<string>;
  web_design_id?: XmlElem<number>;
  lng_id?: XmlElem<string>;
  first_unauthorized_url?: XmlElem<string>;
  first_authorized_url?: XmlElem<string>;
  anonym_collaborator_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  owner_objects?: XmlMultiElem<SiteOwnerObject>;
  menus?: XmlMultiElem<SiteMenu>;
  web_designs?: XmlMultiElem<SiteWebDesign>;
  anonymous_modes?: XmlMultiElem<SiteAnonymousMode>;
  view?: XmlElem<SiteView>;
}

type SiteDocument = XmlDocument<SiteTopElem>;
