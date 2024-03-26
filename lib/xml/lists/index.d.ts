interface ListsViewConditionsScheme extends ViewConditionsBase {
  id: XmlElem<string>;
  name: XmlElem<string>;
  catalog: XmlElem<string>;
  access_role: XmlElem<string, AccessRoleCatalogDocumentTopElem>;
  disp_web: XmlElem<boolean>;
  is_parametric: XmlElem<boolean>;
}

interface ILists extends ExchangeListsBase {
  view_conditions_schemes: XmlMultiElem<ListsViewConditionsScheme>;
}

declare const lists: XmlElem<ILists>;
