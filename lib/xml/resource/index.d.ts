interface IWTResourceTopElem extends ObjectCodeNameBase, IWTDocInfo {
  type?: XmlElem<string>;
  status?: XmlElem<string>;
  file_name?: XmlElem<string>;
  allow_download?: XmlElem<boolean>;
  allow_unauthorized_download?: XmlElem<boolean>;
  allow_search?: XmlElem<boolean>;
  file_url?: XmlElem<string>;
  size?: XmlElem<number>;
  use_count?: XmlElem<number>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  file_source?: number;
  resource_type_id?: XmlElem<number>
  file_path?: XmlElem<string>;
  checksum?: XmlElem<string>;
  links?: XmlMultiElem<IWTResourceLink>;
  library_player_id?: XmlElem<number>;
  file_urls?: XmlElem<IWTResourceFileUrl>;
  last_data?: {
    file_name?: XmlElem<string>;
    size?: XmlElem<number>;
  };
  comment?: XmlElem<string>;
  save_data?(): boolean;
  get_data?(url: string): string;
  get_data_add?(sIDParam: number, sUrlParam: string): string;
  download?(oRequest: Request, oResponse: Response): any;
  download_add?(sIDParam: number, oRequest: Request, oResponse: Response): any;
  check_resource_double?(sFileName: string, iSize: number): Object;
  put_data?(_url: string, _source: any): void;
  put_data_add?(sUrlParam: string, sCodeParam: string): void;
  del_data_add?(sIDParam: number): void;
  put_str?(sDataPARAM: string, _filename: string, _source?: any): void;
  add_counter?(source: any): number;
  del_counter?(_source: any, _source_id: number): boolean;
  obtain_link?(_source: any): null | void;
  guess_type?(sFileUrlParam: string): void;
}

type IWTResourceDocument = IWTXmlDocument<IWTResourceTopElem>;
