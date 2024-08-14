interface PluginDocumentHistoryLog {
  /** Дата внесения */
  install_date: XmlElem<Date | null>;
  /** Версия */
  version: XmlElem<number | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

type PluginDocumentTopElem = XmlTopElem & {
  Doc: PluginDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Блок */
  block: XmlElem<string | null, typeof common.access_block_types>;
  /** Плагин */
  plugin_id: XmlElem<string | null>;
  /** Версия */
  version: XmlElem<number | null>;
  history_logs: XmlMultiElem<PluginDocumentHistoryLog | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type PluginDocument = XmlDocument & {
  TopElem: PluginDocumentTopElem;
  plugin: PluginDocumentTopElem;
  DocDesc(): string;
};
