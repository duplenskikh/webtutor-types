/**
 * Объект XmlFormElem соответствует элементу загруженной формы.
 * Обычно используется для анализа содержимого формы.
 */
interface XmlFormElem {
  AllowHide: any;
  ColAlign: any;
  ColTitle: any;
  DefaultValue: any;
  ExpMaxLen: any;
  Expr: any;
  ExprInit: any;
  ForeignArrayExpr: any;
  FtUseValue: any;
  IsIndexed: any;
  IsMethod: any;
  IsMultiple: any;
  IsTemp: any;
  Name: any;
  NullFalse: any;
  OptPrimaryDispName: any;
  ResultDataType: any;
  Title: any;
  TopElem: any;
  Type: any;
  Xml: any;

  AddChild(): any;
  Child(): any;
  ChildExists(): any;
  EvalPath(): any;
  GetBoolAttr(): any;
  GetOptAttr(): any;
  Inherit(): any;
  IsMultipleRecChild(): any;
  LoadChildTags(): any;
  OptChild(): any;
  PathExists(): any;
}

// TODO: update it
