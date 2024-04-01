interface DlgSelectPositionCommonForOutstaffDocumentPositionCommon extends CostCurrencyBase {
  position_common_id: XmlElem<number>;
  preferable: XmlElem<boolean>;
}

type DlgSelectPositionCommonForOutstaffDocumentTopElem = XmlTopElem & {
  Doc: DlgSelectPositionCommonForOutstaffDocument;
  object_id: XmlElem<number>;
  position_commons: XmlMultiElem<DlgSelectPositionCommonForOutstaffDocumentPositionCommon>;
};

type DlgSelectPositionCommonForOutstaffDocument = XmlDocument & {
  TopElem: DlgSelectPositionCommonForOutstaffDocumentTopElem;
  dlg_select_position_common_for_outstaff: DlgSelectPositionCommonForOutstaffDocumentTopElem;
  OnInit(): void;
};
