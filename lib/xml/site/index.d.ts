interface ISiteMenuDocument {
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

interface ISiteMenu {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  documents?: XmlMultiElem<ISiteMenuDocument>;
}
interface SiteTopElem extends XmlTopElem<SiteDocument>,
  IWTObjectCodeNameBase,
  IWTFuncManagersBase,
  IWTCustomElemsBase
{
  title?: XmlElem<string>;
  html_header?: XmlElem<string>;
  html_icon_href?: XmlElem<string>;
  web_design_id?: XmlElem<number>;
  lng_id?: XmlElem<string>;
  owner_objects?: XmlMultiElem<any>;
  menus?: XmlMultiElem<ISiteMenu>;
  web_designs?: XmlMultiElem<any>;
  first_unauthorized_url?: XmlElem<string>;
  first_authorized_url?: XmlElem<string>;
  anonym_collaborator_id?: XmlElem<number>;
  anonymous_modes?: XmlMultiElem<any>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  is_std?: XmlElem<boolean>;
}

type SiteDocument = XmlDocument<SiteTopElem>;
