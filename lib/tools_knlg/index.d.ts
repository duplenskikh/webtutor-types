declare namespace tools_knlg {
  function alerd(text: string, print: boolean): void;
  function update_acquaint_assign(acquaintId: number, acquaintTopElem: AcquaintDocumentTopElem, isDelete: boolean, isDebug: boolean): number;
  function activate_learning_task(payload: ActivateLearningTaskPayload): ActiveLearningTaskResult;
  function set_status_learning_task_result(payload: SetStatusLearningTaskResultPayload): ActiveLearningTaskResult;
  function http_request(url: string, body: string, executeOnServer: boolean): HttpResponse["Body"];
  function http_request_obj(url: string, method: string, body: string, header: string, executeOnServer: boolean): Pick<HttpResponse, "Body" | "RespCode">;
  function get_http_request_file_id(url: string, method: string, s: string, header: string, onServer: boolean, fileUrl: string, fileName: string): unknown;
  function base64_encode(value: string): string;
  function get_article_desc(description: string, url: string, queryParam: string): string | never;
}

type ActivateLearningTaskPayload = {
  // id сотрудника, которому назначается
  person_id: number;
  // top_elem сотрудника
  tePerson: CollaboratorDocumentTopElem;
  // id задания
  learning_task_id: number;
  // top_elem задания
  teLearningTask: LearningTaskDocumentTopElem;
  // id плана обучения
  education_plan_id: number;
  // массив id файлов
  files: number[];
  // описание
  desc: string;
  // id незаконченного курса
  active_learning_id: number;
  // id эксперта
  expert_id: number;
  // дата начала
  start_date: Date;
  // плановая дата начала
  plan_start_date: Date;
  // плановая дата завершения
  plan_end_date: Date;
};

type ActiveLearningTaskResult = {
  // eslint-disable-next-line no-magic-numbers
  error: 0 | 1;
  message: string;
  doc_learning_task_result: LearningTaskResultDocument | null
};

type SetStatusLearningTaskResultPayload = {
  // новый статус (failed, success)
  status: "failed" | "success";
  // id задания
  learning_task_result_id: number;
  // документ задания
  docLearningTaskResult: LearningTaskResultDocument;
  // необходимо сохранение
  need_save: boolean;
};
