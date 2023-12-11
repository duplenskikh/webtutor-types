/**
 * Объект Response доступен на сервере xHttp.exe при вызове кода веб-страницы.
 * Обозначает ответ сервера к соответствующему HTTP-запросу к странице.
 * В современных приложениях объект Response использовать не рекомендуется,
 * поскольку он доступен только в ASP-коде страницы, но не доступен, например, в коде OnWebRequest().
 * Вместо этого, рекомендуется использовать аналогичные методы объекта Request,
 * которые позже были перенесены из объекта Response.
 */
interface Response {
  /**
   * Более старый эквивалент атрибута RespContentType объекта Request.
   * Атрибут доступен как на чтение так и на запись.
   * Содержит значение заголовка "Content-Type" ответа на текущий запрос. HTTP.
   * Если заголовок уже был отправлен, попытка изменения атрибута возвращает ошибку.
   * @returns String.
   */
  ContentType: string;

  /**
   * Возвращает исходный объект Request, к которому относится данный объект.
   */
  OrigRequest: Request;

  /**
   * Более старый эквивалент атрибута RespStream объекта Request.
   * Возвращает объект типа Stream, в который можно писать данные ответа HTTP.
   * Если заголовок ответа еще не был отправлен к моменту первого обращения к атрибуту,
   * отправляется ответ HTTP 200.
   */
  Stream: Stream;

  /**
   * Атрибут доступен как на чтение так и на запись.
   * Содержит текущее значение режима записи тела ответа.
   * Допустимые значения: "buffered" - при записи тела ответа маленькими порциями,
   * данные накапливаются до определенной величины, и после этого большими
   * частями отправляются по сети. Данное значение устанавливается по умолчанию
   * для ASP-страниц.
   * "direct" - записываемый данные сразу отправляются в сеть.
   * Используется в очень редких случаях, как правило при отправке бинарных данных.
   * "single - данные накапливаются в буфере до завершения формирования
   * полного тела ответа, после чего целиком отправляются в сеть.
   * Используется, как правило при отправке формализованных данных
   * (например XML), с тем, чтобы в случае возникновения ошибки была возможность
   * сформировать ответ HTTP 500, что было бы невозможно, если часть данных уже
   * была отправлена вместе с кодом HTTP 200.
   */
  WriteMode: string;

  /**
   * Более старый эквивалент метода AddRespHeader() объекта Request.
   * Добавляет или заменяет поле заголовка HTTP-ответа.
   * Если заголовок уже был отправлен, метод возвращает ошибку.
   * @param {string} fieldName - Имя поля (String).
   * @param {string} fieldValue - Значение поля (String).
   * @param {boolean} replaceExisting - Заменить существующее (Boolean).
   * Заменить значение существующего поля с таким же именем, если есть.
   * Необязательный аргумент, по умолчанию равен true.
   */
  AddHeader(fieldName: string, fieldValue: string, replaceExisting?: boolean): void;

  /**
   * Выполняет проверку по условию поля If-Modified-Since HTTP-запроса
   * для заданной даты модификации файла. Если поле If-Modified-Since
   * присутствует в запросе и его значение меньше либо равно заданной дате,
   * метод возвращает ошибку HTTP 304 Not modified и завершается с
   * исключением типа Cancel(), в противном случае метод не производит никаких действий.
   * Метод обычно используется для скриптов, возвращающих файлы,
   * хранящиеся вне файловой системы, например внутри базы данных приложения.
   * @param {Date} date - Дата последнего изменения файла (Date).
   */
  CheckModified(date: Date): void;

  /**
   * Отправляет содержимое файла, как если бы файл был запрошен напрямую.
   * При этом отправляется правильный Content-Type и Last-Modified.
   * @param {string} filePath - Путь к файлу или url файла (String).
   */
  HandleStaticFile(filePath: string): void;

  /**
   * Более старый эквивалент метода Redirect() объекта Request.
   * Вызывает отправку статуса HTTP 302 "Object Moved" (перенаправление).
   * Если заголовок уже был отправлен, метод возвращает ошибку.
   * @param {string} redirectUrl - Url, на которое происходит перенаправление (String).
   */
  Redirect(redirectUrl: string): void;

  /**
   * Более старый эквивалент метода {@link SetRespStatus}() объекта Request.
   * Возвращает статус HTTP-ответа. Если заголовок уже был отправлен,
   * метод возвращает ошибку.
   * @param {number} statusCode - Трехзначный код статуса (Integer).
   * @param {string} statusDesc - Наименование статуса (String).
   * Response.SetRespStatus( 500, 'Invalid server state' );.
   */
  SetRespStatus(statusCode: number, statusDesc: string): void;

  /**
   * Более старый эквивалент метода {@link SetWrongAuth()} объекта Request.
   * Используется для проверки авторизации внутри Web-страницы.
   * Вызывает отправку статуса HTTP 401 "Authorization required".
   * Код Web-страницы обычно вызывает данный метод, если Request.AuthLogin
   * возвращает пустую строку, либо указаны неверные авторизационные данные.
   * Если заголовок уже был отправлен, метод возвращает ошибку.
   * @param {string} options - Список опций вида 'name1=value1;name2=value2;...' (String).
   * Допустимые значения: basic=1, ntlm=1 - разрешенные виды авторизации.
   */
  SetWrongAuth(options: string): void;

  /**
   * Записывает содержимое строки в тело HTTP-ответа.
   * Содержимое предварительно накапливается в буфере,
   * либо немедленно отправляется в сеть в зависимости от значение атрибута {@link WriteMode}.
   * Именно в это метод транслируется конструкция вида <%=xxx%> в ASP-подобных страницах.
   * @param {T} payload - Строка с данными (String).
   * @param {boolean} encode - Маскировать передаваемые данные по правилам HTML (Bool).
   * Необязательный атрибут, по умолчанию false.
   */
  Write<T>(payload: T, encode?: boolean): void;

  /**
   * Записывает содержимое бинарного объекта в тело HTTP-ответа.
   * Содержимое предварительно накапливается в буфере, либо немедленно
   * отправляется в сеть в зависимости от значение атрибута WriteMode.
   * Данный метод используется редко по сравнению с методом Write(),
   * особенно после того, как объекты XmlElem типа "string" и "binary"
   * стали вести себя одинаково.
   * @param {string|Binary} data - Объект типа XmlElem типа "string" и "binary",
   * либо объект типа Binary (Object).
   */
  WriteBinary(data: XmlElem<string> | Binary): void;
}

declare const Response: Response;
