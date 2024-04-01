interface DlgEditStatisticRecsDocumentStatisticRecs {
  id: XmlElem<number, StatisticRecCatalogDocumentTopElem>;
  name: XmlElem<string>;
}

interface DlgEditStatisticRecsDocumentSelectedStatisticRec {
  id: XmlElem<number, StatisticRecCatalogDocumentTopElem>;
  name: XmlElem<string>;
}

type DlgEditStatisticRecsDocumentTopElem = XmlTopElem & {
  Doc: DlgEditStatisticRecsDocument;
  query_qual: XmlElem<string>;
  statistic_recs: XmlMultiElem<DlgEditStatisticRecsDocumentStatisticRecs>;
  selected_statistic_recs: XmlMultiElem<DlgEditStatisticRecsDocumentSelectedStatisticRec>;
};

type DlgEditStatisticRecsDocument = XmlDocument & {
  TopElem: DlgEditStatisticRecsDocumentTopElem;
  dlg_edit_statistic_recs: DlgEditStatisticRecsDocumentTopElem;
};
