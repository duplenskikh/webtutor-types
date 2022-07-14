interface AccountTopElem extends XmlTopElem<AccountDocument>,
  IWTObjectTypeBase,
  IWTAdminAccessBase
  {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  balance?: XmlElem<number>;
  currency_type_id?: XmlElem<string>;
  status?: XmlElem<string>;
  budget_period_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
}

type AccountDocument = XmlDocument<AccountTopElem>;
