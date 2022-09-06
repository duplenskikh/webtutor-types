// TODO: need ref

/**
 * Проверяет строку на соответствие контрольной сумме.
 * @param {string} str - проверяемая строка (String).
 * @param {string} arg - контрольная сумма (String).
 * @returns boolean
 * CheckPamMd5(str,arg)Проверяет строку на соответствие контрольной сумме, вычисленной по алгоритму PamMd5
 */
declare function CheckPamMd5(str: string, arg: string): boolean;

/**
 * Возвращает true, если пользователем в буфер (Clipboard) скопировано нечто заданного формата. Возвращает false, если нет (буфер пуст или его содержимое не того формата). Обычно формат 'text/plain' или 'text/html'.
 * @param {string} arg1 - наименование формата (string).
 * @param {any} boolean - 
 */
declare function ClipboardFormatAvailable(arg1: string, boolean: any): any;

/**
 * Вычисляет контрольную сумму по алгоритму CRC.
 * @param {string} arg - строка, содержащая массив байт (String).
 * @returns number
 */
declare function CRC(arg: string): number;

/**
 * Выдает сообщение, содержащее значение параметра. На сервере сообщение записывается в журнал 'xhttp', на рабочем месте - в  виде всплывающего окна (MgBox).
 * @param {any} val - значение (Any).
 * @returns any
 * LoadUrlData( alert( url ) );
 */
declare function alert(val: any): any;

/**
 * Выдает true, если модуль, наименование которого указано в качестве аргумента, используется программой, и false, если указанный модуль программой не используется. Наименования стандартных модулей считывается из файла описания структуры приложения, наименование  подключаемого модуля считывается из файла первичных настроек при запуске исполнимого файла. Функция используется, например, в ядре программы, если необходимо по-разному его настраивать для работы с различными подключаемыми модулями.
 * @param {string} moduleName - наименование модуля (String)
 * @returns boolean
 * AppModuleUsed( 'module_datex' );
 */
declare function AppModuleUsed(moduleName: string): boolean;

/**
 * Вызывает исключение специального типа, аналогичное нажатию кнопки "Cancel" пользователями. Позволяет генерировать исключение, на которое не будет выдаваться ссобщение об ошибке.

 * @returns undefined
 */
declare function Cancel(): void;

/**
 * Проверяет не должен ли текущий поток завершиться (обычно после прерывания его пользователем). Если да, вызывает исключение аналогично функции Cancel().

 * @returns undefined
 * Если поток вызывает в цикле функцию Sleep() либо любую функцию, вызывающее сетевой запрос, то вызывать функцию CheckCurThread() нет необходимости, поскольку вышеназванные функции сами проверяют запрос на отмену выполнения потока.
 */
declare function CheckCurThread(): void;

/**
 * Увеличивает яркость цвета, переданного в качестве аргумента.
 * @param {string} color - цвет в формате RGB (String).
 * @param {any} ratio - действительное число обозначающее на сколько увеличивается/уменьшается яркость (Real).
 * @returns string
 */
declare function ColorNewBrightness(color: string, ratio: any): string;

/**
 * Сигнализирует о завершении длительного процесса с упрощенным индикатором, начатым при помощи функции StartModalTask().

 * @returns undefined
 */
declare function FinishModalTask(): void;

/**
 * Извлекает содержимое составного документа html (с вложенными файлами в формате <compound-attc/>) в файл, сохраняя все вложенные файлы относительно него.
 * @param {any} html - 
 * @param {string} fileUrl - url файлв (String).
 * @returns undefined
 */
declare function ExtractCompoundHtml(html: any, fileUrl: string): void;

/**
 * Выполняет заданный код в основном потоке на следующее системное событие.  Функция помещает этот код в очередь, и на следующем системном событии он выполняется. Эта функция блокирует поток, и дожидается окончания выполнения вызванного кода. См. также EvalAsync.
 * @param {string} arg1 - код, который необходимо выполнить (string).
 * @param {any} arg2 и последующие аргументы - передаются выполняемому коду. Необязательные аргументы.
 */
declare function EvalSync(arg1: string, arg2: any): any;

/**
 * Включает/выключает заданный журнал.
 * @param {string} name - название журнала (String).
 * @param {boolean} enable - включить/выключить (Bool). Необязятельный аргумент. По умолчанию true.
 * @returns undefined
 * EnableLog( 'xquery', true )
 */
declare function EnableLog(name: string, enable?: boolean): void;

/**
 * Выполняет заданный код в основном потоке на следующее системное событие. Обычно, если код выполняется в отдельном потоке, из него нельзя обращатьтся к пользовательскому интерфейсу. Если же нужно сделать, например, обновление экрана, то этот код нужно вызывать через EvalAsync. Функция помещает этот код в очередь, и на следующем системном событии он выполняется. См. также EvalSync.
 * @param {string} arg1 - код, который необходимо выполнить (string).
 * @param {any} arg2  и последующие аргументы - передаются выполняемому коду. Необязательные аргументы.
 */
declare function EvalAsync(arg1: string, arg2: any): any;

/**
 * Возвращает значение системной переменной окружения.
 * @param {string} name - имя переменной (String).
 * @returns string
 * GetSysEnvironmentVariable( 'windir' );
 */
declare function GetSysEnvironmentVariable(name: string): string;

/**
 * Возвращает имя пользователя операционной системы под которым выполняется текущий процесс.

 * @returns string
 */
declare function GetSysUserName(): string;

/**
 * Включает заданный журнал. В отличие от функции EnableLog() позволяет задать дополнительные опции ведения журнала.
 * @param {string} name - название журнада (String).
 * @param {string} options - набор опций вида 'param1=value1;param2=value2;...' (String). Необязательный аргумент.
 * @returns undefined
 * EnableLogExt( 'web-request', 'header-str=date\turl\tquery;use-std-event-prefix=0' ) Возможные опции: life-time - период, на котрый заводится новый файла журнала ('day', 'month', 'permanent' ) (String). По умолчанию свой файл журнала заводится на каждую дату ('day') base-dir - директория, в которой будут заводиться журнал (String). По умолчанию используется директория Logs в установочной директории use-std-event-prefix - Включать в начало каждой строки журнала стандартный префикс (дата, время, ID потока) (Bool). По умолчанию true. header-str - строка заголовка, добавляемая в начало каждого нового файла журнала (String). По умолчанию строка заголовка не добавляется.
 */
declare function EnableLogExt(name: string, options: string): void;

/**
 * Проверяет, не нажата ли какая-либо клавиша в данный момент. Обычно проверятся Ctrl или Shift.
 * @param {number} arg1 - код клавиши (integer).
 */
declare function IsKeyPressed(arg1: number): any;

/**
 * Конструктор объекта MailMessage, предназначенной для хранения E-mail - сообщения. Объект строится по форме x-app://app/sx_mail_message.xmd и является обычным объектом типа XmlElem
 * @returns XmlElem
 */
declare function MailMessage(): XmlElem<any>;

/**
 * Делает запись в файл лога определенного типа.
 * @param {string} type - тип лога (String).
 * @param {string} text - текст (String).
 * @returns undefined
 * LogEvent(type, text)
 */
declare function LogEvent(type: string, text: string): void;

/**
 * Создает объект типа MailMessage на основании почтового сообщения в формате MIME.
 * @param {string} mimeData - почтовое сообщение в формате MIME (String)
 * @returns XmlElem
 */
declare function MailMessageFromMimeStr(mimeData: string): XmlElem<any>;

/**
 * Вычисляет контрольную сумму по алгоритму Md5 и возвращает результат в бинарном формате (массив байт).
 * @param {string} data - строка, содержащая массив байт (String).
 * @returns string
 */
declare function Md5(data: string): string;

/**
 * Возвращает тип склонения существительного в русском языке для заданного числа.
 * @param {number} num - число  (Integer).
 * @returns number
 * IntModType(num)Возвращает тип склонения существительного в русском языке (0,1,2) для заданного числа. (0 - "штук", 1 - "штука", 2 - "штуки")
 */
declare function IntModType(num: number): number;

/**
 * Максимальное значение из нескольких аргументов.
 * @param {any} arg1 - Число 1  (Real).
 * @param {any} arg2 - Число 2  (Real). Не обязательный аргумент.
 * @returns number
 * Max(arg1,arg2...)Возвращает максимальное значение из нескольких аргументов
 */
declare function Max(arg1: any, arg2: any): number;

/**
 * Выполняет HTTP-запрос.
 * @param {string} url - url (String).
 * @param {string} method - метод ('get', 'post') (String). Необязательный аргумент. По умолчанию 'get'.
 * @param {string} body - тело запроса (String). Необязательный аргумент.
 * @param {string} headers - список дополнительных полей заголовка http-запроса в соответствующем формате(имя:значение перевод строки) (String). Необязательный аргумент. Список также может содержать дополнительные опции.
 * @returns WTHttpResponse
 * HttpRequest( 'http://reg.datex-soft.com/' ) HttpRequest( 'http://reg.datex-soft.com/login.htm', 'post', UrlEncodeQuery( {login:'xxx',password:'xxx'} ) ) HttpRequest( 'http://reg.datex-soft.com/login.htm', 'post', '<xxx>111</xxx>', 'Content-type: text/xml\nIgnore-Errors: 1\n' ) Среди списка дополнительных полей заголовка возможно использование следующих опций, которые обрабатываются отдельно и не попадают в передаваемый заголовок: Ignore-Errors - Игнорировать наличие кода ошибки HTTP в ответе. Если указана эта опция, код ошибки можно получить через атрибут RespCode возвращаемого объекта. По умолчанию функция завершается с ошибкой в случае получения кода ошибки по HTTP. Auto-Redirect - Автоматически следовать редиректам HTTP 303, HTTP 304. По умолчанию true.
 * http://docs.datex.ru/article.htm?id=5620276892448878634
 */
declare function HttpRequest(url: string, method?: string, body?: string, headers?: string): HttpResponse;

/**
 * Минимальное значение из нескольких аргументов.
 * @param {any} arg1 - Число 1  (Real).
 * @param {any} arg2 - Число 2  (Real). Не обязательный аргумент.
 * @returns number
 * Min(arg1,arg2,...)Возвращает минимальное значение из нескольких аргументов :_a = Min(2,5,10,15);Вернет:
 */
declare function Min(arg1: any, ...args: any): number;

/**
 * Возвращает Полное имя человека в виде "Фамилия И.О."
 * @param {string} lastname - фамилия (String).
 * @param {string} firstname - имя (String).
 * @param {string} middlename - отчество (String). Не обязательный аргумент.
 * @returns string
 * PersonShortName( lastname, firstname, middlename )
 */
declare function PersonShortName(lastname: string, firstname: string, middlename: string): string;

/**
 * Вычисляет контрольную сумму по алгоритму PamMd5.
 * @param {string} arg - строка, содержащая массив байт (String).
 * @returns string
 * PamMd5(arg)Вычисляет контрольную сумму по алгоритму PamMd5
 */
declare function PamMd5(arg: string): string;

/**
 * Смешивает два цвета в заданной пропорции.
 * @param {string} color1 - цвет в формате RGB (String).
 * @param {string} color2 - цвет в формате RGB (String).
 * @param {any} arg - пропорции (Real). Необязательный аргумент. в случае его отсутствия цвета будут смешаны в пропорции 1 к 1
 * @returns string
 */
declare function MixColors(color1: string, color2: string, arg: any): string;

/**
 * Вычисляет контрольную сумму по алгоритму Md5 и возвращает результат в виде HEX-строки.
 * @param {string} data - строка, содержащая массив байт (String).
 * @returns string
 */
declare function Md5Hex(data: string): string;

/**
 * Возвращает случайное целое число в заданном диапазоне.
 * @param {number} minVal - нижняя граница диапазона (Integer).
 * @param {number} maxVal - верхняя граница диапазона (Integer).
 * @returns number
 */
declare function Random(minVal: number, maxVal: number): number;

/**
 * Вызывает отправку почтового сообщения через тот способ, который был выбран в настройках, как правило - Simple MAPI. В качестве параметра передается объект, созданный функцией MailMessage.
 * @param {any} arg1 - объект, созданный при помощи функции MailMessage (Object SpXml).
 */
declare function SendMailMessage(arg1: any): any;

/**
 * Вызывает выполнение процесса.
 * @param {string} path - путь к исполняемому файлу, или имя исполняемого файла (String).
 * @param {string} cmdLine - аргументы командной строки (String). Не бязательный аргумент.
 * @param {string} options - набор опций через ";", в виде "имя опции=значение; ..." (String). Необязательный аргумент.
 * @returns number
 * work-dir - рабочая директория для процесса (String) sys - cсистемный процесс (Bool), в этом случае в качестве первого аргумента функции можно указывать не путь до исполняемого файла, а имя системного процесса wait - дожидатсья завершения процесса (Bool). Если указана опция wait=1, функция вернет код завершения процесса (0 - успешное завершение, иначе - ошибка). В остальных случаях функция ничего не возвращает. hidden - запуск без пользовательского интерфейса (Bool) (рекомендуется включать, если функция вызывается с сервера); Пример: ProcessExecute( 'C:\Temp\pkzipc.exe', ' -add -rec -path=current xxx.zip 1.htm 2.htm', 'wait=1;hidden=1;work-dir=C:\Temp' );
 */
declare function ProcessExecute(path: string, cmdLine: string, options: string): number;

/**
 * Устанавливает авторизацию, используемую клиентом по умолчанию.
 * @param {string} log - логин (String).
 * @param {string} pass - пароль (String).
 * @returns undefined
 * SetHttpDefaultAuth(log, pass)Можно использовать только на spxml т.к. он не делает одновременных запросов по разным адресам
 */
declare function SetHttpDefaultAuth(log: string, pass: string): void;

/**
 * Вычисляет hash функцию по алгоритму SHA1.
 * @param {string} str - строка, содержащая массив байт (String).
 * @returns string
 */
declare function SHA1(str: string): string;

/**
 * Создает временную задержку, не загружая процессор.
 * @param {number} ticks - величина задержки в миллисекундах (Integer).
 * @returns undefined
 */
declare function Sleep(ticks: number): void;

/**
 * Записывает текст в сроку состояния в главном окне программы. Обычно используется для показа количества найденных объектов в списке.
 * @param {string} msg - строка (String).
 * @returns undefined
 * StatusMsg( 'Записей в списке: ' + n );
 */
declare function StatusMsg(msg: string): void;

/**
 * Вычисляет hash функцию по алгоритму SHA1  и возвращает строку, закодированную в Base64
 * @param {string} str - строка, содержащая массив байт (String).
 * @returns string
 */
declare function SHA1Base64(str: string): string;

/**
 * Вызывает действие для Windows Shell.
 * @param {string} action - вызываемое действие (как правило, "open" или "print") (String).
 * @param {string} target - путь к вызываемому файлу, или url (String).
 * @param {string} args - аргументы для вызываемой программы (если url определяет исполняемый файл) (String). Не обязательный аргумент.
 * @returns undefined
 * ShellExecute( 'open', 'calc.exe' ) ShellExecute( 'print', 'C:\\Temp\\xxx.doc' ) ShellExecute( 'open', 'http://www.e-staff.ru/' ) ShellExecute( 'open', 'mailto:support@e-staff.ru' )
 */
declare function ShellExecute(action: string, target: string, args: string): void;

/**
 * Создает zip архив.
 * @param {string} archivePath - путь (или url) к создаваемому архиву (String).
 * @param {Array} filesArray - массив, содержащий список файлов или папок, которые нужно заархивировать (Array).
 * @param {any} options - объект с параметрами (Object). Необязательный аргумент.
 * @returns undefined
 * Пример: ZipCreate( 'C:\\Temp\1.zip', ['app','base','SpXml.exe'], { BaseDir: 'C:\\Program Files\\EStaff' } );
 */
declare function ZipCreate(archivePath: string, filesArray: any[], options: any): void;

/**
 * Распаковывает архив.
 * @param {string} archivePath - путь до архива (String).
 * @param {string} destPath - путь до папки, в которую нужно распаковать (String).
 * @returns undefined
 */
declare function ZipExtract(archivePath: string, destPath: string): void;

/**
 * Выбирает определенное поле (атрибут) из каждого элемента массива.
 * Возвращает новый массив той же длинны, содержащий выбранные элементы.
 * Функция аналогична более универсальной функции ArrayExtract(), но работает быстрее.
 * @param {Array} array - исходный массив
 * @param {string} field - имя поля (String).
 * @returns {any[]}
 */
declare function ArrayExtractKeys<T = any>(array: T[], field: string): any[];

/**
 * Возвращает строку, полученную путем склеивания данных из элементов массива.
 * @param {Array} array - массив
 * @param {string} elemExpr - выражение, вычисляющее значение, используемое для склейки, относительно элемента массива (String).
 * @param {string} delim - строка-разделитель (String). Необязательный аргумент.
 * @returns {string}
 */
declare function ArrayMerge(array: any, elemExpr: string, delim: string): string;

/**
 * Возвращает массив, содержащий элементы массива 1, у которых значение ключевого поля совпадает хотя бы в с одним элементом массива 2.
 * @param {Array} array1 - массив 1
 * @param {Array} array2 - массив 2
 * @param {string} fieldExpr1 - выражение, вычисляемое относительно каждого элемента массива 1 и возвращающее значение ключа для сравнения. Необязательный аргумент (String). Если аргумент не указан, используется значение самого элемента (This).
 * @param {string} fieldExpr2 - выражение, вычисляемое относительно каждого элемента массива 2 и возвращающее значение ключа для сравнения. Необязательный аргумент (String). Если аргумент не указан, используется значение самого элемента (This).
 * @returns {Array}
 */
declare function ArrayIntersect(array1: any, array2: any, fieldExpr1: string, fieldExpr2: string): any[];

/**
 * Возвращает первый элемент заданного массива. Если массив не содержит ни одного элемента,
 * функция завершается с исключением.
 * @param {Array} array - массив
 * @returns {any}
 */
declare function ArrayFirstElem<T = any>(array: T[]): T | never;

/**
 * Возвращает элемент заданного массива, содержащий максимальное
 * значение определенного поля среди его элементов.
 * Если массив не содержит ни одного элемента, функция завершается с исключением.
 * @param {Array} array - массив
 * @param {string} elemExpr - выражение (строка), вычисляющее значение поля относительно элемента массива (String).
 * @returns {any}
 */
declare function ArrayMax(array: any, elemExpr: string): any;

/**
 * Находит первый элемент массива, удовлетворяющий заданному условию.
 * Если элемент, удовлетворяющий условию, не найден, функция завершается с исключением.
 * @param {Array} array - массив
 * @param {string} qualExpr - выражение, определяющее соответствие элемента массива критерию.
 * Вычисляется относительно элемента массива. (String).
 * @returns {any}
 */
declare function ArrayFind(array: any, qualExpr: string): any;

/**
 * Возвращает число элементов массива. Для массивов прямого доступа функция срабатывает мгновенно, для сложных массивов (например результатов XQuery) вызов этой функции может повлечь за собой обращение к серверу либо другую длительную по времени операцию, поэтому не следует использовать данную функцию внутри циклов.
 * @param {Array} array - массив
 * @returns {number}
 */
declare function ArrayCount(array: any): number;

/**
 * Преобразует заданный массив к массиву с прямым индексированием. Если заданный массив и так поддерживает прямое индексирование, функция возвращает сам исходный массив. В противном случае функция работает аналогично ArraySelectAll() и возвращает массив типа Array, содержащий копию исходного массива.
 * @param {Array} array - исходный массив
 * @returns {Array}
 */
declare function ArrayDirect(array: any): any[];

/**
 * Выбирает определенное значение из каждого элемента массива. Возвращает новый массив той же длинны, содержащий выбранные элементы.
 * @param {Array} array - исходный массив
 * @param {string} fieldExpr - выражение, вычисляемое относительно каждого элемента исходного массива (String).
 * @returns {Array}
 */
declare function ArrayExtract(array: any, fieldExpr: string): any[];

/**
 * Ищет первый элемент массива с заданным значением определнного поля (ключа). Если такой элемент не найден, возвращается undefined.
 * @param {Array} array - массив
 * @param {any} keyValue - значение ключа.
 * @param {string} keyName - имя элемента, являющегося ключом (String). Необязательный аргумент. Если имя ключа не указано, используется первичный ключ.
 * @returns {any}
 */
declare function ArrayOptFindByKey(array: any, keyValue: any, keyName: string): any;

/**
 * Находит первый элемент массива, удовлетворяющий заданному условию. Если элемент, удовлетворяющий условию, не найден, возвращается undefined.
 * @param {Array} array - массив
 * @param {string} qualExpr - выражение, определяющее соответствие элемента массива критерию. Вычисляется относительно элемента массива. (String).
 * @returns {any}
 */
declare function ArrayOptFind<T>(array: T[] | XmlMultiElem<T>, qualExpr: string): T | undefined;

/**
 * Возвращает элемент заданного массива, содержащий минимальное значение определенного поля среди его элементов. Если массив не содержит ни одного элемента, функция завершается с исключением.
 * @param {Array} array - массив
 * @param {string} elemExpr - выражение (строка), вычисляющее значение поля относительно элемента массива (String).
 * @returns {any}
 */
declare function ArrayMin(array: any, elemExpr: string): any;

/**
 * Возвращает элемент заданного массива, содержащий максимальное значение определенного поля среди его элементов. Если массив не содержит ни одного элемента, функция возвращает undefined.
 * @param {Array} array - массив
 * @param {string} elemExpr - выражение (строка), вычисляющее значение поля относительно элемента массива (String).
 * @returns {any}
 */
declare function ArrayOptMax(array: any, elemExpr: string): any;

/**
 * Возвращает фрагмент массива с определенной позиции. Данная функция как правило используется для реализации постраничного простомотра (paging) результатов запроса XQuery.
 * @param {Array} array - исходный массив
 * @param {number} pos - начальная позиция (Integer).
 * @param {number} elemsNum - количество элементов нового массива (Integer). Необязательный аргумент. Если количестов не указано, возвращаются все элементы с начальной позиции.
 * @returns {Array}
 */
declare function ArrayRange<T>(array: T[], pos: number, elemsNum: number): T[];

/**
 * Выбирает элементы массива, удовлетворяющие заданному критерию.
 * @param {any} array - массив
 * @param {String} expression - выражение, определяющее соответствие элемента массива критерию. Вычисляется относительно элемента массива. (Bool).
 * @returns {Array|XmlElem}
 */
declare function ArraySelect<T = any>(array: T[] | XmlMultiElem<T>, expression: string): T[] | XmlMultiElem<T>;

/**
 * Возвращает элемент заданного массива, содержащий минимальное значение определенного поля среди его элементов. Если массив не содержит ни одного элемента, функция возвращает undefined.
 * @param {Array} array - массив
 * @param {string} elemExpr - выражение (строка), вычисляющее значение поля относительно элемента массива (String).
 * @returns {any}
 */
declare function ArrayOptMin<T>(array: T[], elemExpr: string): T;

/**
 * Возвращает первый элемент заданного массива. Если массив не содержит ни одного элемента, функция возвращает либо указанный второй аргумент, либо undefined.
 * @param {Array} array - массив
 * @param {any} defaultValue - аргумент по умолчанию
 * @returns {any}
 */
declare function ArrayOptFirstElem<T>(array: XmlMultiElem<T> | T[]): T | undefined;
declare function ArrayOptFirstElem<T, K = undefined>(array: XmlMultiElem<T> | T[], defaultValue: K): T | K;

/**
 * Ищет первый элемент массива с заданным значением определенного поля (ключа). Если такой элемент не найден, возвращается undefined. Предполагается, что массив предварительно отсортирован по ключевому полю по возрастанию, что значительно повышает скорость поиска по сравнению с функцией ArrayOptFindByKey(). Функцию имеет смысл использовать для частого поиска в каком-либо фиксированном справочнике большого размера, который необходимо заранее отсортировать.
 * @param {Array} array - массив
 * @param {string} keyValue - значение ключа (String).
 * @param {string} keyName - имя элемента, являющегося ключом (String). Необязательный аргумент. Если имя ключа не указано, используется первичный ключ.
 * @returns {any}
 */
declare function ArrayOptFindBySortedKey(array: any, keyValue: string, keyName: string): any;

/**
 * Возвращает массив, содержащий все элементы исходного массива в виде стандартного массива Array. Функция, как правило, используется в двух случаях: 1. Для сложной либо многократной обработки (особенно с прямым индексированием) "медленных" массивов, таких как результаты XQuery 2. Когда в цикле, осуществляющем проход по массиву, происходит выборочное удаление его элементов.
 * @param {Array} array - исходный массив
 * @returns {Array}
 */
declare function ArraySelectAll<T>(array: T[] | XmlMultiElem<T>): T[];

/**
 * Возвращает массив уникальных значений элементов заданного массива.
 * @param {Array} array - исходный массив
 * @param {string} fieldExpr - выражение, вычисляемое относительно каждого элемента исходного массива (String). Необязательный аргумент. Если аргумент не указан, используется значение самого элемента (This).
 * @returns {Array}
 */
declare function ArraySelectDistinct(array: any, fieldExpr?: string): any[];

/**
 * Последовательное объединение нескольких массивов в один.
 * @param {Array} array1 - массив 1
 * @param {Array} array2 - массив 2
 * @param {Array} array3 - массив 3
 * @returns {Array}
 */
declare function ArrayUnion(...args: any[]): any[];

/**
 * Проверяет, является ли аргумент массивом.
 * @param {any} arg - аргумент
 * @returns {boolean}
 */
declare function IsArray(arg: any): boolean;

/**
 * Выбирает элементы массива, с определенным значением  заданного поля (ключа) внутри элемента. Массив должен быть предварительно отсортирован по возрастанию значения ключа, что делает эту функцию существенно быстрее по сравнению с ArraySelectByKey().
 * @param {Array} array - массив
 * @param {string} value - значение ключа (String).
 * @param {string} name - имя элемента, являющегося  ключом (String).
 * @returns {Array}
 */
declare function ArraySelectBySortedKey<T>(array: T[], value: string, name: string): T[];

/**
 * Выбирает элементы массива, с определенным значением заданного поля (ключа) внутри элемента. Функция аналогична более универсальной функции ArraySelect(), но работает быстрее.
 * @param {Array} array - массив
 * @param {string} value - значение ключа (String).
 * @param {string} name - имя элемента, являющегося ключом (String). Необязательный аргумент. Если имя ключа не указано, используется первичный ключ.
 * @returns {Array}
 */
declare function ArraySelectByKey<T = any>(array: T[] | XmlMultiElem<T>, value: string | number, name: string): T[] | XmlMultiElem<T>;

/**
 * Сортирует массив по заданным полям. Возвращает новый массив отсортированных значений. Функция требует нечетного чилса аргументов (не менее 3-х), для каждого нового уровня сортировки добаляется 2 новых аргумента.
 * @param {Array} array - массив
 * @param {string} field - выражение, вычисляющее значение полей относительно элемента массива,
 * по которым осуществляется сортировка (String).
 * @param {string} direction - направление сортировки ('+' или '-') (String). Не обязательный аргумент.
 * @param {string} args
 * @returns {Array}
 * ArraySort( array, 'name', '+', 'date', '-' )
 */

declare function ArraySort<T = any>(array: T[] | XmlMultiElem<T>, field: string, direction: string, ...args: string[]): T[] | XmlMultiElem<T>;

/**
 * Возвращает сумму значений определенного поля по всем элементам массива.
 * @param {Array} array - массив
 * @param {string} expression - выражение, вычисляющее поле, по которому происходит суммирование (String).
 * @returns {number}
 */
declare function ArraySum<T = any>(array: T[] | XmlMultiElem<any>, expression: string): number;

/**
 * Текущая дата системы время системы
  */
declare const CurDate: Date;

/**
 * Изменяет значение времени в заданной дате. Возвращает измененную дату. Если указан только первый аргумент, функция возвращает дату без времени.
 * @param {Date} date - дата (Date).
 * @param {number} hour - час (Integer). Необязательный аргумент.
 * @param {number} minute - минута (Integer). Необязательный аргумент.
 * @param {number} second - секунда (Integer). Необязательный аргумент.
 * @returns {Date}
 */
declare function DateNewTime(date: Date, hour?: number, minute?: number, second?: number): Date;

/**
 * Возвращает время в милисекундах, прошедшее с момента запуска операционной системы.
 * @returns {number}
 */
declare function GetCurTicks(): number;

/**
 * Возвращает разницу между 2-мя датами в секундах. Если первая дата меньше второй, разница будет отрицательным числом.
 * @param {Date} date1 - Дата 1 (Date).
 * @param {Date} date2 - Дата 2 (Date).
 * @returns {number}
 */
declare function DateDiff(date1: Date, date2: Date): number;

/**
 * Сдвигает дату на указанное число секунд. Если значение второго аргумента отрицательное, дата сдвигается назад.
 * @param {Date} date - заданная дата (Date).
 * @param {number} seconds - сдвиг в секундах (Integer).
 * @returns {Date}
 */
declare function DateOffset(date: Date, seconds: number): Date;

/**
 * Возвращает количество секунд, прошедших с 1970 года до заданной даты.
 * @param {Date} date - дата (Date).
 * @returns {number}
 */
declare function DateToRawSeconds(date: Date): number;

/**
 * Возвращает значение часа для заданной даты. Если дата не содержит времени, возращается undefined.
 * @param {Date} date - дата (Date).
 * @returns {number}
 */
declare function Hour(date: Date): number;

/**
 * Возвращает значение дня (1-31) для заданной даты.
 * @param {Date} date - дата (Date).
 * @returns {number}
 */
declare function Day(date: Date): number;

/**
 * Возвращает значение минуты для заданной даты. Если дата не содержит времени, возращается undefined.
 * @param {Date} date - дата (Date).
 * @returns {number}
 */
declare function Minute(date: Date): number;

/**
 * Возвращает номер месяца (1-12) для заданной даты.
 * @param {Date} date - дата (Date).
 * @returns {number}
 */
declare function Month(date: Date): number;

/**
 * Пребразует дату в формат MIME.
 * @param {Date} Date - Дата (Date).
 * @returns {string}
 * StrMimeDate( Date( '26.12.2011 10:45' ) ) вернет 'Mon, 26 Dec 2011 10:45:00 +0400'
 */
declare function StrMimeDate(Date: Date): string;

/**
 * Преобразует дату в строку в "длинном" формате (со словесным написанием месяца). Если в качестве аргумента передается null или пустая строка, функция возвращает пустую строку.
 * @param {Date} date - дата (Date).
 * @returns {string}
 * StrLongDate( Date( '26.12.2011' ) ) вернет '26 декабря 2011 г.'
 */
declare function StrLongDate(date: Date): string;

/**
 * Конструирует значение типа Date. Возвращает undefined в случае, если указаны недопустимые аргументы.
 * Допустимые варианты использования:
 * OptDate( "2019-04-20" )
 * OptDate( "2019-04-20T12:30" )
 * OptDate( "2019-04-20T12:30:00" )
 * OptDate( 2019, 04, 20 )
 * OptDate( 2019, 04, 20, 12, 30 )
 * OptDate( 2019, 04, 20, 12, 30, 0 )
 * Функция OptDate() рекомендуется для использования,
 * если необходимо проверить корректность даты (например 29 февраля),
 * где обычная функция Date() будет вести себя по-разному на десктопной и web-версиях.
 * @returns {Date}
 */
declare function OptDate(date: any): Date;
declare function OptDate(date: Date, defaultDate: Date): Date;
declare function OptDate(shortDateString: string): Date;
declare function OptDate(longDateString: string): Date;
declare function OptDate(year: number, month: number, day: number): Date;
declare function OptDate(year: number, month: number, day: number, hour: number, minute: number): Date;
declare function OptDate(year: number, month: number, day: number, hour: number, minute: number, second: number): Date;

/**
 * Преобразует строку с датой в большинсве изветных форматов в дату.
 * В отличие от функции Date() понимает дату со словесным указанием месяца, например '1 ноября 2011 года'
 * @param {string} date - строка с датой (String).
 * @returns {Date}
 */
declare function ParseDate(date: string): Date;

/**
 * Преобразует количество секунд, прошедших с 1970 года в дату.
 * @param {number} seconds - количество секунд (Integer).
 * @returns {Date}
 */
declare function RawSecondsToDate(seconds: number): Date;

/**
 * Возвращает значение секунд для заданной даты. Если дата не содержит значения секунд, возращается undefined.
 * @param {Date} date - дата (Date).
 * @returns {number}
 */
declare function Second(date: Date): number;

/**
 * Преобразует дату в строку, с двухсимвольным форматом года.
 * @param {Date} date - дата, которую преобразуется (Date).
 * @returns {string}
 */
declare function StrShortDate(date: Date): string;

/**
 * Преобразует дату в строку в формате, используемом по умолчанию в операционной системе. Если в качестве аргумента передается null или пустая строка, функция возвращает пустую строку.
 * @param {Date} date - Объект даты (Date).
 * @param {boolean} showTime - Включать время (Bool). Необязательный аргумент.
 * @param {boolean} showSeconds - Включать секунды во времени (Bool). Необязательный аргумент.
 * @returns {string}
 * StrDate(Date, ShowTime, ShowSeconds) Преобразует дату в строку.
 */
declare function StrDate(date: Date, showTime?: boolean, showSeconds?: boolean): string;

/**
 * Преобразует дату из универсального часового пояса в текущий часовой пояс.
 * @param {Date} date - Дата (Date).
 * @returns {Date}
 */
declare function UtcToLocalDate(date: Date): Date;

/**
 * Преобразует значение времени внутри даты в строку. Если время не содержится внутри даты, возвращается пустая строка.
 * @param {Date} date - дата (Date).
 * @returns {string}
 * StrTime( Date( '26.12.2011 10:45' ) ) вернет '10:45'
 */
declare function StrTime(date: Date): string;

/**
 * Возвращает значение года для заданной даты.
 * @param {Date} date - дата (Date).
 * @returns {number}
 */
declare function Year(date: Date): number;

/**
 * Возвращает номер дня недели для заданной даты. (0 - Воскресенье, 1 - Понедельник и т.д.)
 * @param {Date} date - дата (Date).
 * @returns {number}
 */
declare function WeekDay(date: Date): number;

/**
 * Преобразует дату в строку в формате, используемом в XML. Данный формат не зависит от региональных настроек в системе.
 * @param {Date} date - Объект даты (Date).
 * @param {boolean} showTime - Включать время (Bool). Необязательный аргумент.
 * @param {boolean} showSeconds - Включать секунды во времени (Bool). Необязательный аргумент.
 * @example StrXmlDate(Date("26.12.2011")) вернет "2011-12-26"
 * @example StrXmlDate(Date("26.12.2011 10:45")) вернет "2011-12-26T10:45"
 * @returns {string}
 */
declare function StrXmlDate(date: Date, showTime?: boolean, showSeconds?: boolean): string;

/**
 * Создает динамический (без привязки к форме) XML-элемент. Созданный элемент не имеет родительского элемента.
 * @param {string} name - имя элемента (String)
 * @param {string} type - тип данных XML-элемента (String)
 * @returns XmlElem<any>
 * CreateDynamicElem( 'elem_count', 'integer' );
 */
declare function CreateDynamicElem(name: string, type: string): XmlElem<any>;

/**
 * Создает XML-элемент заданному по фрагменту формы. Созданный элемент не имеет родительского элемента. Функция используется для управления сложными структурами в оперативной памяти компьютера (как альтернатива javascript object), а так же для формирования XML для внешнего использования.
 * @param {string} formUrl - url xmd-файла, в котором находится форма (String)
 * @param {string} elemPath - пусть к фрагменту формы (String)
 * @returns XmlElem<any>
 * CreateElem( '//base2/base2_user.xmd', 'user' );
 */
declare function CreateElem(formUrl: string, elemPath: string): XmlElem<any>;

/**
 * Выдает целевой элемент массива по значению первичного ключа. Если соответсвующей элемент не найден, возвращается undefined. Смотри так же GetForeignElem(). Действие функции несколько отличается от функции ArrayOptFindByKey() за счет поддержки рекурсивных массивов XML-элементов.
 * @param {Array} array - массив объектов
 * @param {any} keyVal - значение ключевого элемента (any)
 * @returns any
 * GetOptForeignElem( event_types, 'interview' )
 */
declare function GetOptForeignElem(array: any, keyVal: any): any;

/**
 * Загружает массив XML-элементов в строку. Используется для передачи параметров в плагины и другие внешние процедуры. Смотри так же LoadElemsFromStr.
 * @param {Array} arg1 - массив XML-элементов (array of objects)
 * @returns string
 */
declare function declareElemsToStr(arg1: any[]): string;

/**
 * Загружает строку в массив XML-элементов. Используется при обработке параметров, полученных от внешних процедур и плагинов. Смотри также declareElemsToStr .
 * @param {string} arg1 - строка (string)
 * @returns {Array}
 */
declare function LoadElemsFromStr(arg1: string): any[];

/**
 * Выдает целевой элемент массива по значению первичного ключа. Смотри так же GetOptForeignElem. Действие функции несколько отличается от функции ArrayOptFindByKey() за счет поддержки рекурсивных массивов XML-элементов. Кроме этого, в новой объектной модели функция никогда не завершается с ошибкой, если соотвевтвующей элемент не найден, а возвращает пустой псевдо-элемент (режим терпимости к незаполенным и битым ссылкам).
 * @param {Array} array - массив объектов
 * @param {any} keyVal - значение ключевого элемента (any)
 * @returns any
 * GetForeignElem( event_types, 'interview' )
 */
declare function GetForeignElem(array: any, keyVal: any): any;

/**
 * Создает новый пустой элемент массива, не добавляя его в в сам массив. Используется для отработки "битых ссылок" на элементы массива и ссылок на удаленные элементы массива. Смотри так же GetOptForeignElem и GetForeignElem . В текущей реализации массив может быть только каталогом.
 * @param {Array} array - массив элементов
 * @returns XmlElem<any>
 */
declare function GetFailedForeignElem(array: any): XmlElem<any>;


/**
 * @param {string} dbName - наименование базы данных (String).
 * @returns {Object}
 */
declare function FetchDb(dbName: string): any;

/**
 * Ищет каталог по имени во всех используемых базах данных. Если не находит - выдает ошибку. Функция по историческим причнам называется не совсем корректно. Ее ближайший эквивалент - FindOptCatalog() имеет правильное название.
 * @param {string} catalogName - наименование каталога базы данных (String)
 * @returns {Object}
 * catalog = FindSharedCatalog( 'events' );
 */
declare function FindSharedCatalog(catalogName: string): any;

/**
 * Аналог функции LoadUrlData(), позволящий явно указать адрес сервера приложения, с котрого будут загружаться данные. Используется как правило для синхронизации данных или обмена данными между несколькими серверами приложений.
 * @param {string} url - url (String)
 * @param {string} options - опции, необязательный аргумент (String)
 * @returns string
 * LoadUrlData( 'x-local://shared/xxx.xml', 'lds-server=test2.datex.ru:9000' )
 */
declare function LoadLdsUrlData(url: string, options: string): string;

/**
 * На основании наименования зашифрованной базы данных (модуля) выдает полный путь до зашифрованного модуля базы данных (XFP - файл). Функция не проверяет фактическое существование файла по указанному пути. Аргумент moduleName - наименование базы данных (String)
 * @returns string
 * GetDbFilePath( 'app2' ) вернет 'С:\Program files\EStaff\app2.xfp'
 */
declare function GetDbFilePath(): string;

/**
 * Преобразует имя каталога в имя объекта. Фактически функция преобразует имя существительное множественного числа в имя существительное единственного числа по правилам английского языка.
 * @param {string} catalogName - (String)
 * @returns string
 * CatalogNameToObjectName( 'candidates' ) вернет 'candidate'
 */
declare function CatalogNameToObjectName(catalogName: string): string;

/**
 * Ищет каталог по имени во всех используемых базах данных. Если не находит - возврашает undefined.
 * @param {string} catalogName - наименование каталога базы данных (String)
 * @returns {Object}
 * catalog = FindOptCatalog( 'events' );
 */
declare function FindOptCatalog(catalogName: string): any;

/**
 * Осуществляет загрузку в указанную зашифрованную базу данных (модуль) информации из объекта. Используется, например, при подгрузке интернет-модулей в E-Staff c сайта производителя. Объект, информация из которого может быть загуржена в базу данных, создается специальной командой new FilePackage, после чего в объект помещается информация, например, при помощи метода LoadFromStr.
 * @param {string} dbName - имя базы данных, (String)
 * @param {any} filePackage - объект типа FilePackage, информация из которого загружается в базу данных.
 * @returns undefined
 */
declare function SetDbFilePackage(dbName: string, filePackage: any): void;

/**
 * Выдает true, если указанная база данных находится  в зашифрованном модуле (XFP - файл), и false, если не содержит.
 * @param {string} dbName - наименование базы данных (String)
 * @returns boolean
 * IsPackageDb( 'app2' )
 */
declare function IsPackageDb(dbName: string): boolean;

/**
 * Устанавливает директорию, которую программа будет считать местом расположения базы данных. По умолчанию директория называется так же, как и база И располагается в программной директории. Функция используется, если нужно поместить базу в другую директорию.
 * @param {string} dbName - наименование базы данных (String)
 * @param {string} dirUrl - url директории (String)
 * @returns undefined
 */
declare function SetDbHostDir(dbName: string, dirUrl: string): void;

/**
 * Выполняет заданный запрос XQuery на клиентской машине. Используется для запроса данных из каталогов локальных баз данных.
 * @param {string} query - строка, содержащая запрос (String).
 * @returns {Array}
 */
declare function XQueryLocal(query: string): any;

/**
 * Выполняет заданный запрос XQuery. В сетевой версии приложения запрос выполняется на сервере.
 * @param {string} query - строка, содержащая запрос (String).
 * @param {string} options - набор опций (String). Необязательный аргумент.
 * @returns {Array}
 * lds-server - явный адрес сервера приложения, на который будт отправлен запрос (String). Используется для обмена данных между серверами. preload-foreign-data - заранее кэшировать связанные данные (Bool). Обычно используется при показе списков в пользовательском интерфейсе сетевой версии, в которых будет использовать связянные данные (ForeignElem). Пример: XQuery( 'for $elem in candidates order by $elem/fullname return $elem', 'preload-foreign-data=1' )
 */
declare function XQuery<T = any>(query: string, options?: string): T[];


/**
 * Переводит все символы строки в нижний регистр.
 * @param {string} str - строка, которую необходимо преобразовать (String).
 * @returns {string}
 * StrLowerCase(str)
 */
declare function StrLowerCase(str: string): string;

/**
 * Возвращает часть строки str, длиной length, начиная с первого символа переданной строки. Если второй аргумент больше длины передаваемой строки, возвращается str
 * @param {string} str - строка (String).
 * @param {number} length - длина строки (Integer).
 * @returns {string}
 * StrLeftRange(str, length)
 */
declare function StrLeftRange(str: string, length: number): string;

/**
 * Возвращает часть строки str, длиной length, начиная с первого символа переданной строки. Если второй аргумент больше длины передаваемой строки, возвращается str
 * В отличие от StrLeftRange возвращает не биты, а именно символы
 * @param {string} str - строка (String).
 * @param {number} length - длина строки (Integer).
 * @returns {string}
 * StrLeftCharRange(str, length)
 */
declare function StrLeftCharRange(string: string, length: number): string;

/**
 * Проверяет состоит ли строка только из цифр или латинских символов.
 * @param {string} str - проверяемая строка (String).
 * @returns {boolean}
 * StrIsAlphaNum(str)
 */
declare function StrIsAlphaNum(str: string): boolean;

/**
 * Возвращает длину строки в байтах. Данная длина может быть больше количества символов, если приложение использует кодировку UTF-8. Для определения количества символов в строке необходимо использовать функцию StrCharCount.
 * @param {string} str - строка (String).
 * @returns {number}
 */
declare function StrLen(str: string): number;

/**
 * Проверяет, начинается ли строка на другую строку.
 * @param {string} str - строка, в которой ищут (String).
 * @param {string} subStr - подстрока, которую ищут (String).
 * @param {boolean} ignoreCase - не учитывать регистр (Bool). Необязательный аргумент.
 * @returns {boolean}
 * StrBegins(str, subStr, ignoreCase)
 */
declare function StrBegins(str: string, subStr: string, ignoreCase?: boolean): boolean;

/**
 * Проверяет, содержит ли строка другую строку в качестве подстроки.
 * @param {string} str - строка, в которой ищут (String).
 * @param {string} subStr - подстрока, которую ищут (String).
 * @param {boolean} ignoreCase - не учитывать регистр (Bool). Не обязательный аргумент.
 * @returns {boolean}
 * StrContains(str, subStr, ignoreCase)
 */
declare function StrContains(str: string, subStr: string, ignoreCase?: boolean): boolean;

/**
 * Проверяет, оканчивается ли строка на другую строку.
 * @param {string} str - строка, в которой ищут (String).
 * @param {string} subStr - подстрока, которую ищут (String).
 * @param {boolean} ignoreCase - не учитывать регистр (Bool). Не обязательный аргумент.
 * @returns {boolean}
 * StrEnds(str, subStr, ignoreCase)
 */
declare function StrEnds(str: string, subStr: string, ignoreCase?: boolean): boolean;

/**
 * Возвращает количество символов в строке.
 * @param {string} str - строка (String).
 * @returns {number}
 */
declare function StrCharCount(str: string): number;

/**
 * Проверяет, удовлетворяет ли строка одной из масок. Маски перечисляются через запятую вторым аргументом.
 * @param {string} str - Строка, в которой ищут (String).
 * @param {string} pattern - Шаблоны поиска, разделенные запятой (String).
 * @returns {boolean}
 * StrMatchesMultiPattern( str, 'aaa*bbb,ccc*ddd*eee' )
 */
declare function StrMatchesMultiPattern(str: string, pattern: string): boolean;

/**
 * Заменяет первое вхождение строки на указанную подстроку.
 * @param {string} str - Исходная строка (String).
 * @param {string} subStr - Исходная подстрока (String).
 * @param {string} newSubStr - Новая подстрока (String).
 * @returns {string}
 * StrReplaceOne(str1, str2)
 */
declare function StrReplaceOne(str: string, subStr: string, newSubStr: string): string;

/**
 * Возвращает часть строки, начиная с указанной позиции до конца строки.
 * @param {string} str - строка (String).
 * @param {number} pos - позиция (Integer).
 * @returns {string}
 * StrRightRangePos(str, pos)
 */
declare function StrRightRangePos(str: string, pos: number): string;

/**
 * Проверяет, удовлетворяет ли строка маске поиска, использующей симолы '*'
 * @param {string} str - строка (String).
 * @param {string} mask - маска (String).
 * @returns {boolean}
 * StrMatchesPattern( str, 'aaa*bbb' )
 */
declare function StrMatchesPattern(str: string, mask: string): boolean;

/**
 * Преобразует строку в нижний регистр.
 * @param {string} str - строка, которую нужно преобразовать (String).
 * @returns {string}
 * StrUpperCase(str)
 */
declare function StrUpperCase(str: string): string;

/**
 * Возвращает часть строки по заданным позициям.
 * @param {string} str - строка (String).
 * @param {number} pos1 - начальная позиция (Integer).
 * @param {number} pos2 - конечная позиция (Integer).
 * @returns {string}
 * StrRangePos( str, pos1, pos2 )
 */
declare function StrRangePos(str: string, pos1: number, pos2: number): string;

/**
 * Переводит первую букву строки в нижний регистр.
 * @param {string} str - строка (String).
 * @returns {string}
 * StrNonTitleCase(str)
 */
declare function StrNonTitleCase(str: string): string;

/**
 * Заменяет все вхождения одной подстроки на другую в заданной строке, если такие имеются. Возвращает измененную строку.
 * @param {string} str - Исходная строка (String).
 * @param {string} subStr - Исходная подстрока (String).
 * @param {string} newSubStr - Новая подстрока (String).
 * @returns {string}
 * StrReplace(str, subStr, newSubStr)
 */
declare function StrReplace(str: string, subStr: string, newSubStr: string): string;

/**
 * Извлекает из строки фрагменты в соответствии с заданным шаблоном.
 * Шаблоны могут содержать элементы: %s - вхождение подстроки (возращаемое) %*s - вхождение подстроки (невозвращаемое)
 * @param {string} str - строка (String).
 * @param {any} arg - шаблон
 * @returns {Array}
 * obj = StrScan( str, '%*s/vacancy/%s.htm' ); vacancyID = obj[0];
 */
declare function StrScan(str: string, arg: any): any[];

/**
 * Преобразует первую букву строки в заглавную.
 * @param {string} str - строка, которую нужно преобразовать (String).
 * @returns {string}
 * StrTitleCase(str)
 */
declare function StrTitleCase(str: string): string;

/**
 * Экспериментальная.

 * @returns {undefined}
 */
declare function StrWordMatchRating(): void;

/**
 * Заменяет повторяющиеся последовательности символов пробела, перевода строк и табуляции в строке на одиночные пробелы.
 * @param {string} str - Исходная строка (String).
 * @returns {string}
 * UnifySpaces(str)
 */
declare function UnifySpaces(str: string): string;

/**
 * Удаляет символы пробела, перевода строк и табуляции в начале и конце строки.
 * @param {string} str - Исходная строка (String).
 * @returns {string}
 * Trim(str)
 */
declare function Trim(str: string): string;


/**
 * Удаляет объект с заданным url.
 * @param {string} url - url (String).
 * @returns {undefined}
 */
declare function DeleteUrl(url: string): void;

/**
 * Копирует содержимое под заданным url в новый url.
 * @param {string} destUrl - url, в который производиться копирования (String).
 * @param {string} srcUrl - url, содержимое которого копируется (String).
 * @returns {undefined}
 */
declare function CopyUrl(destUrl: string, srcUrl: string): void;

/**
 * Загружает содержимое заданного url и возвращает его в виде строки, содержащей бинарные данные.
 * @param {string} url - url (String).
 * @returns {string}
 */
declare function LoadUrlData(url: string): string;

declare function LoadUrlText(url: string): string;

/**
 * Проверяет является ли строка абсолютным URL. Существование объекта под указанным url не проверяется.
 * @param {string} url - строка с URL (String).
 * @returns {boolean}
 * IsAbsoluteUrlStr( 'http://www.ya.ru/search.htm' ) вернет true IsAbsoluteUrlStr( 'search.htm' ) вернет false
 */
declare function IsAbsoluteUrlStr(url: string): boolean;

/**
 * Сохраняет содержимое строки, содержащей бинарные данные, в заданном url.
 * @param {string} url - url (String).
 * @param {string} dataStr - строка (String).
 * @returns {undefined}
 */
declare function PutUrlData(url: string, dataStr: string): void;

/**
 * Преобразует путь файловой системы в локальный url типа file: или x-local:
 * @param {string} filePath - путь файловой системы (String).
 * @param {string} baseUrl - базовый url, к схеме которого будет приводиться путь (String). Необязательный аргумент.
 * @returns {string}
 * FilePathToUrl( 'C:\\Temp\\1.htm' ) вернет 'file:///C:/Temp/1.htm'
 */
declare function FilePathToUrl(filePath: string, baseUrl?: string): string;

/**
 * Заменяет суффикс (расширение) имени файла в заданном url. Если заданный url имеет другой суффикс в имени файла, возвращается исходный url. Функция не осуществляет фактического обращения к файловой системе.
 * @param {string} url - url (String).
 * @param {string} suffix1 - расширение, которое нужно заменить (String).
 * @param {string} suffix2 - расширение, на которое нужно заменить (String).
 * @returns {string}
 * ReplaceUrlPathSuffix( 'http://news.websoft.ru/tree.html?query', 'html', 'asp' ) вернет 'http://news.websoft.ru/tree.asp?query'
 */
declare function ReplaceUrlPathSuffix(url: string, suffix1: string, suffix2: string): string;

/**
 * Преобразует заданный url в абсолютный. Если заданный url и так является абсолютным, возвращается он же.
 * @param {string} url - относительный url (String).
 * @param {string} baseUrl - базовый абсолютный url, относительно которого считается относительный url (String). Необязятельный аргумент. Если аргумент не указан, в качестве базового url используется родительский url файла, содержащий выполняемый код.
 * @returns {string}
 * AbsoluteUrl( 'zz/1.htm', 'x-local://data/static' ) вернет 'x-local://data/static/zz/1.htm' AbsoluteUrl( 'zz/1.htm' ), вызванный в библиотеке x-app://rcr/rcr_lib_recruit.js, вернет 'x-app://rcr/zz/1.htm'
 */
declare function AbsoluteUrl(url: string, baseUrl: string): string;

/**
 * Регистрирует автоматическую подмену одного url другим. После вызова функции при попытке любого обращения к url, являющегося дочерним, по отношению к исходному базовому, будет происходить обращение к новому url, полученному путем замены исходной базовой части на новую базовую часть. Функция как правило используется для конвертации данных из предыдущих версий программ в новую, при которой старые формы .xmd более не существуют и заменяются на новые.
 * @param {string} baseUrl - базовый url, который нужно подменить (String).
 * @param {string} newBaseUrl - базовый url, на который нужно подменить (String).
 * @returns {undefined}
 */
declare function AddUrlMapping(baseUrl: string, newBaseUrl: string): void;

/**
 * Добавляет фрагмент пути к заданному url.
 * @param {string} url - url (String).
 * @param {string} addPath - добавляемый путь (String).
 * @returns {string}
 * UrlAppendPath( 'http://www.lin.ru/service', 'z/1.htm' ) вернет 'http://www.lin.ru/service/z/1.htm'
 */
declare function UrlAppendPath(url: string, addPath: string): string;

/**
 * Извлекает url родительской директории из заданного url.
 * @param {string} url - url (String).
 * @returns {string}
 * UrlParent( 'http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html?query=xxx' ) вернет 'http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/'
 */
declare function UrlParent(url: string): string;

/**
 * Извлекает имя файла из заданного url.
 * @param {string} url - url (String).
 * @returns {string}
 * UrlHost( 'http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html?query=xxx' ) вернет 'tree.html'
 */
declare function UrlFileName(url: string): string;

/**
 * Определяет размер файла в байтах по локальному url, переданному в качестве аргумента.
 * @param {string} url - локальный url типа file: или x-local: (String).
 * @returns {number}
 */
declare function UrlFileSize(url: string): number;

/**
 * Извлекает из url, переданного в качестве аргумента, строку запроса в исходном виде.
 * @param {string} url - url (String).
 * @returns {string}
 * UrlHost( 'http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html?query=xxx' ) вернет 'query=xxx'
 */
declare function UrlParam(url: string): string;

/**
 * Возвращает дату изменения файла, находящегося по локальному пути типа file: или x-local:.
 * @param {string} url - url (String).
 * @returns {Date}
 */
declare function UrlModDate(url: string): Date;

/**
 * Возвращает хост из переданного в качестве аргумента URL.
 * @param {string} url - url (String).
 * @returns {string}
 * UrlHost( 'http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html?query=xxx' ) вернет 'news.websoft.ru'
 */
declare function UrlHost(url: string): string;

/**
 * Извлекает из URL, переданного в качестве аргумента, путь.
 * @param {string} url - url (String).
 * @returns {string}
 * UrlPath( 'http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html' ) вернет '/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html'
 */
declare function UrlPath(url: string): string;

/**
 * Возвращает расширение файла, укахзанного через url.
 * @param {string} url - url (String).
 * @returns {string}
 * UrlPathSuffix( 'http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html' ) вернет '.html'
 */
declare function UrlPathSuffix(url: string): string;

/**
 * Извлекает из URL, переданного в качестве аргумента, параметры запроса с разбивкой их на пары "имя - значение".
 * @param {string} url - url (String).
 * @returns {Object}
 * obj = UrlQuery( 'http://news.websoft.ru/en?x=1&y=2&z=3' );alert( obj.x ); alert( obj.y );
 */
declare function UrlQuery(url: string): any;

/**
 * Преобразует локальный url типа file: или x-local: в путь файловой системы..
 * @param {string} url - локальный url (String).
 * @returns {string}
 * UrlToFilePath( 'file:///d:/work/Temp.rar' ) вернет 'd:\\work\\Temp.rar'
 */
declare function UrlToFilePath(url: string): string;

/**
 * Возвращает схему URL (file, http, mailto, ftp, x-local).
 * @param {string} url - url (String).
 * @returns {string}
 * UrlSchema( 'http://news.websoft.ru/' ) вернет 'http'
 */
declare function UrlSchema(url: string): string;

/**
 * Преобразует заданный url (схемы "x-app") в url, пригодный для использования во встроенном браузере (элемент HYPER). Для десктоп-версии осуществляется преобразование в url схемы "file", а для веб-версии - в специальный серверный запрос.
 * @param {string} url - url (String).
 * @returns {string}
 */
declare function WebAppUrl(url: string): string;


/**
 * Возвращает документ с заданным url из кэша.
 * Если документ с заданным url в кэше отсутствует, функция завершается с ошибкой.
 * @param {string} url - url документа (String).
 * @returns WTXmlDocument
 */
declare function GetCachedDoc(url: string): XmlDocument;

/**
 * Удаляет на сервере приложения документ с заданным url.
 * Используется в специализированном коде, предназначенном для синхронизации баз данных или обмена данными между базами.
 * Аргуметы: docUrl - url документа (String) options - опции, необязательный аргумент (String)
 * @returns undefined
 * LdsDeleteDoc( 'x-db-obj://data/candidate/042D8A4596B679/E0.xml', 'lds-server=test2.datex.ru:9000' )
 */
declare function LdsDeleteDoc(): void;

/**
 * Выдает ID объектного документа по его url. Смотри так же ObjectDocUrl .
 * @param {string} url - url объекта (string)
 * @returns number
 */
declare function ObjectIDFromUrl(url: string): number;

/**
 * Удаляет документ с заданным url.
 * @param {string} url - url документа (String).
 * @param {boolean} permanent - удалить мимо корзины. По умолчанию - false
 * @returns undefined
 * DeleteDoc( 'x-db-obj://data/candidate/0x4DF75B9F13FE5160.xml' )
 */
declare function DeleteDoc(url: string, permanent?: boolean): void;

/**
 * Возвращает url объектного документа по имени базы, типа объекта и ID документа.
 * @param {string} dbName - наименование базы данных (String)
 * @param {string} objectType - наименование типа объекта (String)
 * @param {number} objectID - ID документа (Integer или String)
 * @returns string
 * ObjectDocUrl( 'data', 'person', 1238461 ) вернет 'x-db-obj://data/person/0x000000000012E5BD.xml' ObjectDocUrl( 'data', 'event_type', 'interview' ) вернет 'x-db-obj://data/event_type/interview.xml'
 */
declare function ObjectDocUrl(dbName: string, objectType: string, objectID: number): string;

/**
 * Перемещает XML-документ из одного url в другой url.
 * В отличие от обычного перемещиня файла, действие этой функции сопровождается
 * выполнением стандартных свойств OnSave, OnBeforeSave и т.д.
 * Документ сначала пересохраняется по новому url, затем удаляется из предыдущей.
 * Редко используемая функция.
 * @param {string} url - url существующего документа (String)
 * @param {string} newUrl - новый url документа (String)
 */
declare function MoveDoc(url: string, newUrl: string): void;

/**
 * Открывает XML-документ и помещает его в кэш документов.
 * Если документ с заданным url уже находится в кэше, возвращается уже загруженный в кэш документ.
 * @param {string} url - url документа (String).
 * @param {string} options - опции открытия документа (String). Необязательный аргумент.
 * @returns {XmlDocument}
 */
declare function FetchDoc(url: string, options: string): XmlDocument;

/**
 * Пытается найти открытую в пользовательском интерфейсе карточку XML-документа.
 * Если таковая карточка найдена, функция возвращает ссылку на документ из этой карточки.
 * В противном случае действие функции аналогично OpenDoc().
 * Чтобы сохранить измененный документ, необходимо использовать
 * функцию UpdateUiDoc (а не вызвать метод Doc.Save, как при открытии документа при помощи OpenDoc).
 * Если документ был открыт пользователем на экране, то при выполнении функции UpdateUiDoc
 * документ будет изменен прямо на экране, если открытого документа небыло - то документ будет просто сохранен.
 * @param {string} docUrl - url XML-документа (String)
 * @returns {XmlDocument}
 */
declare function ObtainUiDoc(docUrl: string): XmlDocument;

/**
 * Загружает xml документ в кэш документов и делает его корневой элемент видимым в списке глобальных имен.
 * @param {string} docUrl - url документа (String).
 * @returns {XmlDocument}
 */
declare function RegisterSharedDoc(docUrl: string): XmlDocument;

/**
 * Открывает XML-документ, содержащийся к строке.
 * @param {string} dataStr - строка, содержащая данные открываемого документа (String).
 * @param {string} options - опции открытия документа в виде "param1='value1';param2='value2';..." (String). Необязательный аргумент. См. Опции открытия документа XML
 * @returns {XmlDocument}
 */
declare function OpenDocFromStr(dataStr: string, options?: string): XmlDocument;

declare function LoadFileText(filePath: string): string;

/**
 * Выдает наименование типа объекта по его url. Смотри так же ObjectDocUrl и ObjectIDFromUrl .
 * @param {string} url - url объекта (string)
 * @returns string
 * ObjectNameFromUrl( 'x-db-obj://data/person/0x000000000012E5BD.xml' ) вернет 'person' ObjectNameFromUrl( 'x-db-obj://data/event_type/interview.xml' ) вернет 'event_type'
 */
declare function ObjectNameFromUrl(url: string): string;

/**
 * Создает новый XML-документ по заданной форме.
 * @param {string} formUrl - url формы (String).
 * @returns {XmlDocument}
 */
declare function OpenNewDoc(formUrl: string): XmlDocument;

/**
 * Открывает XML-документ. Возвращает объект типа XmlDoc.
 * @param {string} url - url документа (String).
 * @param {string} options - опции открытия документа в виде "param1='value1';param2='value2';..." (String). Необязательный аргумент. См. Опции открытия документа XML
 * @returns {XmlDocument}
 */
declare function OpenDoc<T = XmlDocument>(url: string, options?: string): T;

/**
 * Сохраняет изменения в документе, открытом при помощи функции ObtainUiDoc . Если это был документ, открытый пользователем на экране, то фукнция устанавливает аргумент метода Doc.SetChanged(true), и больше ничего не делает. Установка этого аргумента необходима, чтобы при закрытии документа  пользователю было предложено сохранить изменения. Если это был документ, открытый программой без участия пользователя, действие функции аналогично действию метода Doc.Save(). Аргумент doc - открытый документ (объект XmlDoc)

 * @returns undefined
 */
declare function UpdateUiDoc(): void;

/**
 * Удаляет определенные форму из кэша. Функция используется в редких случаях при изменении структур данных на лету.
 * @param {string} urlPattern - маска url формы (т.е. XMD-файла), (String)
 * @returns undefined
 * DropFormsCache( '*candidate*' )
 */
declare function DropFormsCache(urlPattern: string): void;

/**
 * Создает новый элемент формы. Созданный элемент формы не имеет родительского элемента. Функция используется в редких случаях, например для динамической генерации форм данных.
 * @param {string} name - имя поля XMD-формы (String)
 * @param {string} type - тип данных XMD-формы (String)
 * @returns {Object}
 */
declare function CreateFormElem(name: string, type: string): any;

/**
 * Пытается найти форму в кэше загруженных форм по заданному url. Если такая форма была загружена в кэш, возвращает объект ссылка на форму, если нет - возвращает undefined. Аргумент formUrl - url формы (String)
 * @returns {Object}
 */
declare function GetOptCachedForm(): any;

/**
 * Удаляет все зарегистрированные при помощи фукции RegisterFormMapping() перенаправления форм. Функция обычно используется при конвертации баз данных из предыддущих версий программы.
 */
declare function DeleteAllFormMappings(): void;

/**
 * Регистрирует отображение (mapping) одной формы в другую. Mapping - это таблица, в которой содрежит соответствия между старыми и новыми формами документов. При попытке открыть документ по старой форме, будет автоматически вызвана новая форма, на которую указывает элемент таблицы. Функция используется  вредких случаях, обычно при конвертации данных из предыддыщих версий программы.
 * @param {string} formUrl - url старой формы (String)
 * @param {string} newForm - url новой формы (String)
 * @returns undefined
 */
declare function RegisterFormMapping(formUrl: string, newForm: string): void;

/**
 * Находит зарегистрированный AutoDoc (т.е пару url документа - url формы, смотри так же функцию RegisterAutoDoc ) в списке зарегистрированных автоматически документов, и возвращает ссылку на форму. Если соответствующая пара в списке отсутствует, возвращает undefined. Аргумент docUrl - url документа (string)
 * @returns {Object}
 */
declare function GetOptAutoDocForm(): any;

/**
 * Если форма с данным url уже находится в кэше, возвращается уже загруженный вариант.
 * @param {string} formUrl - url формы (String).
 */
declare function FetchForm(formUrl: string): void;

/**
 * Регистрирует XML-форму, описанную в строке. Используется для программной генерации форм "на лету".
 * @param {string} formUrl - url, по которому будет зарегистрирована форма (String)
 * @param {string} formData - строка с описанием формы (String)
 * @returns {Object}
 */
declare function RegisterFormFromStr(formUrl: string, formData: string): any;

/**
 * Регистрирует пару (url  документа) - (url формы) для автоматически создаваемого документа. Если где-то из программы будет обращение к этому документу с попыткой его открыть, а документ еще не создан, то он будет создан по форме и открыт. Если документ на момент обращения уже будет существовать, то он будет открыт по той же форме. Используется для регистрации в программе каких-либо файлов, содержащих настройки, которых изначально нет, но при первой попытки обращения к ним она фактически созадются в базе данных.
 * @param {string} docUlr - url документа (String)
 * @param {string} formUrl - url формы (String)
 * @returns undefined
 * RegisterAutoDoc( 'x-local://static/global-settings.xml', 'x-app://rcr/rcr_global_settings.xmd' )
 */
declare function RegisterAutoDoc(docUlr: string, formUrl: string): void;

/**
 * Региструрует фрагмент (элемент) существующий формы под новым url. Новый url состоит из url формы и полного наименования элемента формы, которое включает в себя путь внутри формы от корня до этого элемента. Возвращает url новой формы. Редко используемая функция. Аргумент formUrl - url формы (String) elemPath - полное наименование элемента формы, включающее в себя путь внутри формы от корня до этого элемента (String)
 * @returns string
 * RegisterSubForm( 'base3_events.xmd', 'events.event' )
 */
declare function RegisterSubForm(): string;


/**
 * Преобразует значение аргумента к целому числу.
 * @param {any} arg - целое число, вещественное число или строка, содержащая число.
 * @returns {number}
 * Пример: Int( 123 ) Int( '123' ) Int( 123.45 )
 */
declare function Int(arg: any): number;

/**
 * Возвращает скалярное значение аргумента, если в качестве аргумента передан объект. Если передано скалярное значение, возращается оно же.
 * @param {any} arg - аргумент (Any).
 * @returns {any}
 */
declare function RValue(arg: any): any;

/**
 * Возвращает строку, содержащую аргумент в шестнадцатиричном виде (64 бита).
 * @param {number} num - число, которую нужно преобразовать (Integer).
 * @returns {string}
 * StrHexInt( 1000 ) вернет '00000000000003E8'
 */
declare function StrHexInt(num: number): string;

/**
 * Преобразует вещественный аргумент в строку.
 * @param {any} arg - вещественный аргумент (Real).
 * @param {number} pricision - максимальное число знаков после запятой (Integer). Необязательный аргумент. По умолчанию 6.
 * @param {boolean} addGroupDelim - разделять тысячные разряды пробелами (Bool). Необязательный аргумент.
 * @returns {string}
 * StrReal( 90154.249 ) вернет '90154.249' StrReal( 90154.249, 2 ) вернет '90154.25' StrReal( 90154.249, 2, true ) вернет '90 154.25'
 */
declare function StrReal(arg: any, pricision?: number, addGroupDelim?: boolean): string;

/**
 * Преобразует значение аргумента к вещественному числу.
 * @param {any} arg - целое число, вещественное число или строка, содержащая вещественное число.
 * @returns {number}
 * Пример: Real( 12.6 ) Real( '12.6' )
 */
declare function Real(arg: any): number;

/**
 * Преобразует 10 обозначение цвета (RGB) в  шестнадцатиричное, принятое в формате html.
 * @param {string} color - 10 обозначение цвета  (String).
 * @returns {string}
 * Пример: StrHexColor( '128,128,128' ) вернет '808080'
 */
declare function StrHexColor(color: string): string;

/**
 * Если значение целочисленного аргумента = 0 преобразует его в "-", иначе в строку (аналогично функции StrInt ())
 * @param {number} arg - целочисленный аргумент (Integer).
 * @param {number} digitsNum - минимальное число символов в строке (Integer). Не обязательный аргумент.
 * @param {boolean} addGroupDelim - разделять тысячные разряды пробелами (Bool). Не обязательный аргумент.
 * @returns {string}
 */
declare function StrIntZero(arg: number, digitsNum: number, addGroupDelim: boolean): string;

/**
 * Преобразует вещественный аргумент в строку.
 * @param {any} arg - вещественный аргумент (Real).
 * @param {number} precision - число символов в дробной части числа (Integer). Недостающие символы компенсируются нулями.
 * @param {boolean} addGroupDelim - разделять тысячные разряды пробелами (Bool). Необязательный аргумент.
 * @returns {string}
 * StrRealFixed( 90154.2 ) вернет '90154.20' StrRealFixed( 90154.2, 2, true ) вернет '90 154.20'
 */
declare function StrRealFixed(arg: any, precision: number, addGroupDelim: boolean): string;

/**
 * Преобразует целочисленный аргумент в строку.
 * @param {number} arg - целочисленный аргумент (Integer).
 * @param {number} digitsNum - минимальное число символов в строке (Integer). Необязательный аргумент. Недостающие символы компенсируются нулями перед числом.
 * @param {boolean} addGroupDelim - разделять тысячные разряды пробелами (Bool). Необязательный аргумент.
 * @returns {string}
 * StrInt( 11500 ) вернет '11500' StrInt( 11500, 6 ) вернет '011500'      StrInt( 11500, 0, true ) вернет '11 500'
 */
declare function StrInt(arg: number, digitsNum?: number, addGroupDelim?: boolean): string;

/**
 * Преобразует целое число в словесное строковое представление. Только для русского языка.
 * @param {number} arg - числовой аргумент (Integer).
 * @param {any} gender - род (0 - мужской, 1 - женский). Необязательный аргумент.
 * @returns {string}
 * TextInt( 121 ) возвращает 'сто двадцать один' TextInt( 121, 1 ) возвращает 'сто двадцать одна'
 */
declare function TextInt(arg: number, gender: any): string;

/**
 * Возвращает уникальный ID
  */
declare function UniqueID(): number;
declare function ParseHeaderPairs(string: any): any;


/**
 * Кодирует строку, содержащую текст, для использования внутри HTML. В результате символы & и < заменяются на &amp; и &lt;, соответственно, а переводы строк - на <br/>.
 * @param {string} str - строка (String).
 * @returns {string}
 */
declare function HtmlEncode(str: string): string;

/**
 * Декодирует данные из формата Base64. Данные возвращаются в виде строки, которая может содержать бинарные данные.
 * @param {string} str - строка в Base64 (String).
 * @returns {string}
 */
declare function Base64Decode(str: string): string;

/**
 * Переводит строку из кодировки, используемой  в программе по умолчанию, в заданную кодировку.
 * @param {string} str - строка (String).
 * @param {string} charset - имя кодировки, в которую нужно перевести строку (String).
 * @returns {string}
 */
declare function EncodeCharset(str: string, charset: string): string;

/**
 * Преобразует строку, содержащую HTML, в простой текст.
 * @param {string} html - строка, содержащая HTML (String).
 * @returns {string}
 */
declare function HtmlToPlainText(html: string): string;

/**
 * Преобразует массив байт в 16-ое представление.
 * @param {string} arg - строка, содержащая массив байт (String).
 * @returns {string}
 * HexData( 'апрол' ) вернет 'E0EFF0EEEB'
 */
declare function HexData(arg: string): string;

/**
 * Преобразует строку, содержащую обычный текст в полный HTML-документ. Действие функции аналогично действию функции HtmlEncode(), но, в отличие от последней, HtmlEncodeDoc() формирует завершенный HTML-документ, содержащий теги <html>, <body> и др.
 * @param {string} str - str (String).
 * @returns {string}
 */
declare function HtmlEncodeDoc(str: string): string;

/**
 * Формирует тело http запроса для последующей отправки методом POST в формате multipart/form-data.
 * @param {any} obj - Объект, содержащий атрибуты и их значения (Object).
 * @returns {string}
 */
declare function MultipartFormEncode(obj: any): string;

/**
 * Кодирует строку в формат Base64.
 * @param {string} str - строка (String). Может содержать бинарные данные.
 * @returns {string}
 */
declare function Base64Encode(str: string): string;

/**
 * Переводит строку из заданной кодировки в кодировку, используемой в программе по умолчанию.
 * @param {string} str - строка, которую нужно перевести (String).
 * @param {string} charset - название кодировки, в которую нужно перевести строку (String).
 * @returns {string}
 */
declare function DecodeCharset(str: string, charset: string): string;

/**
 * Кодирует обычный текст в формат rtf.
 * @param {string} str - строка, которую нужно преобразовать (String).
 * @returns {string}
 */
declare function RtfEncode(str: string): string;

/**
 * Шифрует строку простым встроенным алгоритмом шифрования.
 * @param {string} str - шифруемая строка (String).
 * @returns {string}
 */
declare function StrSimpleEncrypt(str: string): string;

/**
 * Переводит текст в формате rtf в обычный текст.
 * @param {string} str - текст в формате rtf (String).
 * @returns {string}
 */
declare function RtfToPlainText(str: string): string;

/**
 * Дешифрует строку, зашифрованную простым встроенным алгоритмом.
 * @param {string} str - дешифруемая строка (String).
 * @returns {string}
 */
declare function StrSimpleDecrypt(str: string): string;

/**
 * Декодирует строчку по стандартным правилам декодирования url, т.е. заменяет знак "%код" на соответствующий символ.
 * @param {string} url - url (String).
 * @returns {string}
 * UrlDecode( 'qwerty%2D%E0%EF%F0%EE%EB%2Ehtm' ) вернет 'qwerty-апрол.htm'
 */
declare function UrlDecode(url: string): string;

/**
 * Кодирует строку символов для использования в качестве параметра url, используя UTF-16.
 * @param {string} str - строка (String).
 * @returns {string}
 * UrlEncode( 'qwerty-апрол.htm' ) вернет 'qwerty%2D%u0430%u043F%u0440%u043E%u043B%2Ehtm'
 */
declare function UrlEncode16(str: string): string;

/**
 * Кодирует строку символов для использования в качестве параметра url.
 * @param {string} str - строка (String).
 * @returns {string}
 * UrlEncode( 'qwerty-апрол.htm' ) вернет 'qwerty%2D%E0%EF%F0%EE%EB%2Ehtm'
 */
declare function UrlEncode(str: string): string;

/**
 * Кодирует значение как константу (литерал) языка SQL. Функция используется при генерированиия выражений на SQL из программы.
 * @param {any} arg - аргумент произвольного типа.
 * @returns {string}
 * Значение типа string заключается  в кавычки, при этом существующие кавычки внутри строки маскируются по правилам SQL. Значение типа integer переводится в соответствующее строковое значение Значение типа date переводится в строку, содержающую дату в формате SQL
 */
declare function SqlLiteral(arg: string | number | Date): string;

/**
 * Преобразут объект типа Object в строку вида 'name1=value1&name2=value2&...' для использования в качестве запроса в url.
 * @param {any} obj - объект, содержащий список значений (Object).
 * @returns {string}
 */
declare function UrlEncodeQuery(obj: any): string;

/**
 * Маскирует аргумент для вставки в xml в качестве значения атрибута. В результате действия функции символы перевода строки, табуляции, симводы & и < и двойные кавычки маскируются последовательностями &#10;, &#09;, &lt;, &amp; и &quot;
 * @param {string} str - аргумент (String).
 * @returns {string}
 */
declare function XmlAttrEncode(str: string): string;

/**
 * Преобразут объект типа Object в строку вида 'name1=value1&name2=value2&...' для использования в качестве запроса в url.
 * @param {any} obj - объект, содержащий список значений (Object).
 * @param {string} charset - целевая кодировка (String). Необязательный аргумент.
 * @returns {string}
 */
declare function UrlEncodeQueryExt(obj: any, charset: string): string;

/**
 * Формирует строку с xml тегом.
 * @param {string} name - имя тега (String).
 * @param {string} text - значение тега (String).
 * @returns {string}
 * XmlStr( 'text', 'Hotel "Ariana"' ) возвращает '<text>'Hotel &quot;Ariana&quot;</text>'
 */
declare function XmlStr(name: string, text: string): string;

/**
 * Кодирует аргумент как константу XQuery. Функция используется при генерированиия выражений XQuery из программы.
 * @param {string | number| Date} arg - аргумент (String).
 * @returns {string}
 * Значение типа string заключается в одинарные кавычки, при этом существующие кавычки внутри строки маскируются по правилам XQuery. Значение типа integer или real переводится в соответствующее строковое значение Значение типа bool переводится в строку 'true()' или 'false()'. Значение типа date переводится в строку вида date( '2011-01-30T10:30:00' )
 */
declare function XQueryLiteral(arg: string | number | Date): string;


/**
 * Возвращает путь к директории, из которой запущено приложение.
 * @returns {string}
 */
declare function AppDirectoryPath(): string;

/**
 * Создает новую директорию внутри существующей директории.
 * @param {string} path - путь до новой директории, или url (String).
 * @returns {undefined}
 */
declare function CreateDirectory(path: string): void;

/**
 * Возвращает дату модификации файла.
 * @param {string} path - путь (или url) к файлу (String).
 * @returns {Date}
 */
declare function GetFileModDate(path: string): Date;

/**
 * Удаляет директорию, включая все вложенные файлы и директории.
 * @param {string} path - путь (или url) до удаляемой директории (String).
 * @returns {undefined}
 */
declare function DeleteDirectory(path: string): void;

/**
 * Проверяет существует ли файл (или директория) по указанному пути.
 * @param {string} path - путь к файлу (String).
 * @returns {boolean}
 */
declare function FilePathExists(path: string): boolean;

/**
 * Проверяет существует ли файл (или директория) по указанному url.
 * @param {string} url - url файла (String).
 * @returns {boolean}
 */
declare function UrlExists(url: string): boolean;

/**
 * Извлекает имя файла из пути, переданного в качестве аргумента.
 * @param {string} url - путь к файлу (String).
 * @returns {string}
 * FileName( 'work\data\doc.pdf' ) вернет 'doc.pdf' FileName( 'work\data\' ) вернет 'data'
 */
declare function FileName(url: string): string;

/**
 * Удаляет файл.
 * @param {string} path - путь (или url) к удаляемому файлу (String).
 * @returns {undefined}
 */
declare function DeleteFile(path: string): void;

/**
 * Проверяет открыт ли файл в другом приложении.
 * @param {string} path - путь (или url) к файлу (String).
 * @returns {boolean}
 */
declare function FileIsBusy(path: string): boolean;

/**
 * Создает ярлык на указанный файл.
 * @param {string} linkPath - путь (или url) к создаваемому ярлыку (String).
 * @param {string} targetPath - путь (или url) к файлу, на который будет указывать ярлык (String).
 * @returns {undefined}
 */
declare function CreateShellLink(linkPath: string, targetPath: string): void;

/**
 * Возвращает путь к одной из стандартных директорий Shell.
 * @returns {string}
 * AppData - директория для хранения данных пользователя, например "C:\Documents and Settings\User\Application Data"
 */
declare function GetShellFolderPath(): string;

/**
 * Проверяет, является ли указанный путь (или url) директорией.
 * @param {string} path - путь (или url) (String).
 * @returns {boolean}
 */
declare function IsDirectory(path: string): boolean;

/**
 * Возвращает url для временного файла.
 * @param {string} suffix - требуемый суффикс имени файла (String). Необязательный аргумент.
 * @returns {string}
 */
declare function ObtainTempFile(suffix: string): string;

/**
 * Загружает содержимое файла по заданному пути, результат возвращается в виде строки, содержащей бинарные данные.
 * @param {string} path - путь к файлу (String).
 * @returns {string}
 */
declare function LoadFileData(path: string): string;

/**
 * Проверяет, существует ли указанная директория, если нет - создает ее.
 * @param {string} path - путь (или url) к директории (String).
 * @param {boolean} isRecursive - создавать всю цепочку родительских директорий, если они не существуют (Bool). Необязательный аргумент.
 * @returns {undefined}
 */
declare function ObtainDirectory(path: string, isRecursive?: boolean): void;

/**
 * Проверяет является ли путь к файлу, переданный в качестве аргумента. Существование файла по данному пути не проверяется.
 * @param {string} path - путь к файлу (String).
 * @returns {boolean}
 * IsAbsoluteFilePath( 'c:\temp\1.ddd' ) вернет true IsAbsoluteFilePath( 'temp\1.ddd' ) вернет false
 */
declare function IsAbsoluteFilePath(path: string): boolean;

/**
 * Возвращает url для временного файла, который будет автоматически удален при следующем запуске приложения.
 * @param {string} suffix - требуемый суффикс имени файла (String). Необязательный аргумент.
 * @returns {string}
 */
declare function ObtainSessionTempFile(suffix: string): string;

/**
 * Перемещает или переименовывает файл.
 * @param {string} path1 - исходный путь к файлу (String).
 * @param {string} path2 - новый путь к файлу (String).
 * @returns {undefined}
 */
declare function MoveFile(path1: string, path2: string): void;

/**
 * Возвращает путь к родительской директории. Фактическое существование директорий не проверяется.
 * @param {string} path - путь к исходной директории (String).
 * @returns {string}
 */
declare function ParentDirectory(path: string): string;

/**
 * Возвращает массив, содержащий список файлов и вложенных директорий внутри указанной директории. Каждый элемент массива будет содержать полный путь ко вложенному файлу или директории.
 * @param {string} path - путь до директории (String).
 * @returns {Array}
 */
declare function ReadDirectoryByPath(path: string): Array<string>;

/**
 * Возвращает путь к директории для хранении данных пользователя. По умолчанию директория совпадает с установочной, если специальными настройками не установлено иное.
 * @returns {string}
 */
declare function UserDataDirectoryPath(): string;

/**
 * Сохраняет содержимое строки в файл. Содержимое строки интерпретируется как бинарные данные.
 * @param {string} path - путь к файлу (String).
 * @param {string} str - данные (String).
 * @returns {undefined}
 */
declare function PutFileData(path: string, str: string): void;

/**
 * Проверяет, существует ли директория по указанному пути.
 * @param {string} path - путь до директории (String).
 * @returns {boolean}
 */
declare function PathIsDirectory(path: string): boolean;

/**
 * Возвращает массив, содержащий список файлов и вложенных директорий внутри указанной директории. Каждый элемент массива будет содержать url вложенного файла или директории.
 * @param {string} dirUrl - url директории (String).
 * @returns {Array}
 */
declare function ReadDirectory(dirUrl: string): Array<string>;

declare function OptInt<T, K = undefined>(variable: T, defaultValue?: K): number | K;
declare function OptReal<T, K = undefined>(variable: T, defaultValue?: K): number | K;
declare function UrlFromDocID(documentId: number, databaseName?: string): string;
declare function EncodeJson(arg: any): string;
declare function ParseJson(arg: string): any;

/**
 * Извлекает из объекта типа Error пользовательскую часть сообщения об ошибке. Если объект не содержит выделенно пользовательской части, возвращается полное описание ошибки.
 * @param {any} e - ошибка (Error).
 * @returns string
 * try { HttpRequest( .... ); } catch ( e ) { alert( 'Невозможно активировать программу: ' + ExtractUserError( e ) ); }
 */
declare function ExtractUserError(e: any): string;

/**
 * Выполняет код JScript в текущем окружении. В отличие от функции eval() выполяняет код на том же уровне (переменные, объявленные внутри кода, будут видны снаружи), и не позволяет возвращать значение.
 * @param {string} code - выполняемый код JScript (String).
 * @returns undefined
 */
declare function InPlaceEval(code: string): void;

/**
 * Интерпретирует содержимое страницы по правилам ASP.
 * @param {string} pageUrl - url, содержащий текст активной страницы (String).
 * @param {string} options - опции (string). Необязательный аргумент.
 * @returns string
 * strict-errors - завершать функцию  с ошибкой, если таковая возникнет при обработке страницы (Bool). По умолчанию, в случае возникновения ошибки ее текст добавляется к результату, а функция возвращается без ошибки.
 */
declare function EvalCodePageUrl(pageUrl: string, options?: string): string;

/**
 * Кодирует аргумент как константу JScript. Используется для генерации выражений.
 * @param {any} value - аргумент (Any)
 * @param {any} quoteChar - символ, используемый в качестве кавычки (допусимые значения: одинарная или двойная кавычка). Необязательный аргумент. По умолчанию используется одинарная кавычка.
 * @returns string
 * null Значение типа string заключается в кавычки, при этом существующие кавычки внутри строки маскируются по правилам JScript. Значение типа integer или real переводится в соответствующее строковое значение Значение типа bool переводится в строку 'true' или 'false'. Значение типа date переводится в строку вида 'Date( '2011-01-30T10:30:00' )'
 */
declare function CodeLiteral(value: any, quoteChar?: any): string;

/**
 * @throws {Error}
 * @param {string} arg
  */
declare function RegisterCodeLibrary(arg: string): any;

/**
 * Функция ядра, которая удаленно (на сервере) вызывает метод с параметрами для конкретного объекта.
 * Примечание - По существу, оператор oResult = CallObjectMethod (oLib, ‘some_function’, [param1, param2])
 * выполняет почти то же самое, что и oResult = oLib.some_function (param1, param2),
 * с той разницей, что второй вариант выполнится там, где он вызван (на клиенте или на сервере),
 * а первый вариант – всегда выполняется на сервере (но результат выполнения возвращается в место вызова).
 * См. также tools.call_code_library_method.
 * @param {Object} object (обязательный). Тип: Объект без задания структуры (variant). Объект, для которого производится вызов метода.
 * @param {string} method (обязательный). Тип: Строка. Название вызываемого метода объекта.
 * @param {Array[any]} params (необязательный). Тип: Массив без описания структуры элементов. Массив параметров. В качестве элементов массива могут быть объекты разного типа – строки, числа, объекты, массивы… Порядок следования элементов в массиве должен соответствовать порядку параметров метода. Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки. В случае, если параметры метода не предусмотрены, указывается пустой массив ([]).
 * @returns {any} result
  */
declare function CallObjectMethod(object: any, method: string, params?: any[]): any;

/**
 * Интерпретирует содержимое страницы по правилам ASP.
 * @param {string} pageData - строка, содержащая текст страницы (String).
 * @param {boolean} raiseErrors - завершать функцию  с ошибкой, если такаовая возникнет при обработке страницы (Bool). Необязательный аргумент. По умолчанию, в случае возникновения ошибки ее текст добавляется к результату, а функция возвращается без ошибки.
 * @returns string
 */
declare function EvalCodePage(pageData: string, raiseErrors?: boolean): string;

/**
 * Проверяет, является ли заданный объект типа Error ошибкой отменой операции .
 * @param {any} e - объект типа Error
 * @returns boolean
 * try { HttpRequest( .... ); } catch ( e ) { if ( ! IsCancelError( e ) ) alert( 'Невозможно активировать программу: ' + ExtractUserError( e ) ); }
 */
declare function IsCancelError(e: any): boolean;

/**
 * Выполняет код JScript в текущем окружении. Аналогична стандартной функции JScript с таким же именем, но, в отличие от нее выполяняет код на отдельном уровне (переменные, объявленные внутри кода, не будут видны снаружи). См. также InPlaceEval
 * @param {string} code - выполняемый код JScript (String).
 * @returns any
 */
declare function eval(code: string): any;

/**
 * Выполняет код JScript аналогично функции eval(), но внутри т.н. критической секции, что исключает одновременнео выполнение кода из разных потоков. Функция как правило используется для доступа к данным, не являющимся thread-safe, например к глобальным XML-документам. Данной функцией следуетт пользоваться с осторожностью, поскольку глобальная секция является общей для всего приложения. Не следует выполянть внтури кртической секции код, который может занять продолжительное время (обращения к диску, сети и д.р.)
 * @param {string} codeString - объект String, содержащий допустимый код JScript (String).
 * @returns any
 * EvalCs( 'global_agents.agent_completed = true' )
 */
declare function EvalCs(codeString: string): any;

/**
 * Загружает код на JavaScript из заданного url и выполняет его.
 * @param {string} codeUrl - url, содержащий код (String).
 * @param {string} subCode - вспомогательный код, выполняемый после выполнения основного кода (String). Необязятельный аргумент. Как правило, содержит вызов функции, описанный в основном коде.
 * @returns any
 * EvalCodeUrl( 'rcr_lib_backup.js', 'RunBackup()' ) Использование данной функции для вызова функций, описанных в файле, не рекомендуется после появления функции OpenCodeLib(), предлагающей более понятные правила области видимости переменных:     OpenCodeLib( 'rcr_lib_backup.js' ).RunBackup()
 */
declare function EvalCodeUrl(codeUrl: string, subCode: string): any;

/**
 * Обозначает текущий статус выполения фрагмент кода с упрощенной индикацией пользователю, начатого путем вызова функции StartModalTask()
 * @param {string} msg - строка статуса (String).
 * @returns undefined
 */
declare function ModalTaskMsg(msg: string): void;

/**
 * @param {string} code - код, который будет выполняться на сервере (String)
 * @returns string
 */
declare function ServerEval(code: string): string;

/**
* Выполняет код в окружении, где доступны только те объекты и переменные, которые описаны (являются свойствами) объекта param_object. Другие переменные и объекты (системные или описанные в коде, внутри которого был вызван SafeEval) недоступны.
* См. также функцию eval.
* @param {string} (обязательный) - Код.
* @param {any[]} (необязательный) - Объект, содержащий набор свойств, определяющих окружение, в котором будет исполнятся код. Если данный аргумент не указан, то программный код исполняется в пустом окружении. Однако, обычно данный аргумент указывается.
  */
declare function SafeEval(code: string, arguments?: any[]): any;

/**
 * Выполняет код JS, который, возможно, завершится с ошибкой, с возвратом заданного значения по умолчанию в случае ошибки.
 * @param {string} code - код JScript (String).
 * @param {any} defaultVal - значение, возвращаемое в случае ошибки (Any). Необязательный аргумент. Если аргумент не указан, а код завершается с ошибкой, возвращается undefined.
 * @returns any
 * OptEval( 'doc.TopElem.xxx', '' )
 */
declare function OptEval(code: string, defaultVal: any): any;

/**
 * Обозначает запуск длительного фрагмент кода с упрощенной индикацией пользователю. Прогресс выполнения будет обозначаться путем перидического вызова функции ModalTaskMsg()
 * @param {string} taskTitle - название задачи для пользователя (String).
 * @returns undefined
 * ModalTaskMsg( 'Импорт данных' ); for ( ... ) { ModalTaskMsg( 'Объект ' + i ); } FinishModalTask(); В часто вызываемом коробочном коде данную функцию использовать не рекомендуется, ввиду наличия более удобного для пользователя механизма методов с прогресс-индикаторами. Функцию хорошо использовать в одноразовом или редко используемом коде ввиду его простоты.
 */
declare function StartModalTask(taskTitle: string): void;

/**
 * Открывает документ либо с расширением XML, содержащий набор методов, и возвращает его корневой элемент, либо с расширением .JS, содержащий функции, возвращает псевдо-документ (псевдо-форму), содержащую те же функции. Действие этой функции похоже на действие функции EvalCodeUrl, но не тождествены ей. Если мы выполняем сторонние функции при помощи  EvalCodeUrl, то переменные из нашего кода видны внутри сторонних функций, что может привести к разрушению кода при совпадении названий переменных. OpenCodeLib лишен этого недостатка, т.к. приводит к загрузке функций из внешнего источника как независимых методов, каждый из которых выполняется в собственном окружении. Но в этом случае, в отличие от EvalCodeUrl, загружаемый js-файл не может содержать глобальных переменных, а только функции. Аргуент url - url загружаемого документа с расширением XML или JS (string).
 * @returns WTXmlDocument
 */
declare function OpenCodeLib(string: any): any;

/**
 * 
 * @param libraryName 
 * @param methodName 
 * @param arguments 
  */
declare function CallServerMethod(libraryName: string, methodName: string, arguments?: any[]): any;

/**
 * Возвращает тип переданного значения
 * @param {any} entity - проверяемое значение
 * @returns {string}
  */
declare function DataType(entity: any): string;

/**
 * Возвращает тип переданного значения
 * @param {any} entity - проверяемое значение
 * @returns {string}
  */
declare function ObjectType(entity: any): string;

declare function StrToCharCodesArray(str: string): Array<number>;
