interface ResourceDocumentLink {
  object_id?: XmlElem<number>;
  object_catalog?: XmlElem<string>;
  object_name?: XmlElem<string>;
  date_modify?: XmlElem<Date>;
}

interface ResourceDocumentFileUrl {
  id?: XmlElem<string>;
  code?: XmlElem<string>;
  url?: XmlElem<string>;
}

interface IDownloadResponse {
  error: number;
  errorText: string;
}

interface ICheckResourceDouble {
  message: string;
  resource_id: number;
  error: number;
}

type ResourceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
CustomElemsBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
GameBonusBase & {
  Doc: ResourceDocument;
  type: XmlElem<string>;
  status: XmlElem<string>;
  file_name: XmlElem<string>;
  allow_download: XmlElem<boolean>;
  allow_unauthorized_download: XmlElem<boolean>;
  allow_search: XmlElem<boolean>;
  data: XmlElem<Binary>;
  file_url: XmlElem<string>;
  size: XmlElem<number>;
  use_count: XmlElem<number>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  file_source: XmlElem<number>;
  resource_type_id: XmlElem<number>;
  file_path: XmlElem<string>;
  checksum: XmlElem<string>;
  links: XmlMultiElem<ResourceDocumentLink>;
  library_player_id: XmlElem<number>;
  file_urls: XmlMultiElem<ResourceDocumentFileUrl>;
  access: XmlElem<AccessDocBase>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  save_data(): boolean;
  get_data(url?: string): string;
  get_data_add(id: number, url?: string): string;
  download(req: Request, res: Response): IDownloadResponse;
  download_add(id: number, req: Request, res: Response): void;
  check_resource_double(fileName: string, size: number): ICheckResourceDouble;
  put_data(url: string, source: XmlTopElem): void;
  put_data_add(url: string, code: string): void;
  del_data_add(id: number): void;
  put_str(data: string, fileName: string, source?: XmlTopElem): unknown;
  add_counter(source?: XmlTopElem): number;
  del_counter(source?: XmlTopElem, id?: number): boolean;
  obtain_link(source?: XmlTopElem): null | void;
  guess_type(fileUrl: string): void;
  role_id: XmlMultiElem<number>;
}

type ResourceDocument = XmlDocument & {
  TopElem: ResourceDocumentTopElem;
};
