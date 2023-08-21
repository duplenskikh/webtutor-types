declare namespace Websoft {
  namespace Office {
    /**
     * Библиотека для работы с документами Microsoft Office Excel.
     */
    namespace Excel {

      /**
       * Описание границы ячейки.
       */
      class Border {
        /**
         * Цвет границы.
         */
        Color: string;

        /**
         * Стиль границы.
         */
        LineStyle: "None"
        | "DashDot"
        | "DashDotDot"
        | "Dashed"
        | "Dotted"
        | "Double"
        | "Hair"
        | "Medium"
        | "MediumDashDot"
        | "MediumDashDotDot"
        | "MediumDashed"
        | "SlantedDashDot"
        | "Thick"
        | "Thin";

        /**
         * Используется для получения последней произошедшей ошибки.
         */
        GetError(): string;

        /**
         * Используется для получения версии компонента.
         */
        GetVersion(): string;
      }

      /**
       * Класс для работы с границами ячейки.
       */
      class Borders {
        /**
         * Получает описание границы указанного типа.
         * @param string - BorderType.
         */
        GetBorder(
          borderType: "LeftBorder"
          | "RightBorder"
          | "TopBorder"
          | "BottomBorder"
          | "DiagonalDown"
          | "DiagonalUp"
          | "Vertical"
          | "Horizontal"
        ): Border;

        /**
         * Используется для получения последней произошедшей ошибки.
         */
        GetError(): string;

        /**
         * Используется для получения версии компонента.
         */
        GetVersion(): string;

        /**
         * Устанавливает стиль границ ячейки.
         */
        SetColor(color: string): void;

        /**
         * Устанавливает стиль границ ячейки.
         */
        SetStyle(
          borderType: "None"
          | "DashDot"
          | "DashDotDot"
          | "Dashed"
          | "Dotted"
          | "Double"
          | "Hair"
          | "Medium"
          | "MediumDashDot"
          | "MediumDashDotDot"
          | "MediumDashed"
          | "SlantedDashDot"
          | "Thick"
          | "Thin"
        ): void;
      }

      class Cell {
        /**
         * Формула.
         */
        Formula: string;
        /**
         * Значение в формате HTML.
         */
        HtmlString: string;
        /**
         * Является ли ячейка объединенной с другими.
         */
        readonly IsMerged: boolean;
        /**
         * Количество картинок в ячейке.
         */
        readonly PicturesCount: number;
        /**
         * Стиль ячейки.
         */
        readonly Style: Style;
        /**
         * Значение ячейки.
         */
        Value: string;

        /**
         * Используется для получения последней произошедшей ошибки.
         * @returns Текст последней произошедшей ошибки.
         */
        GetError(): string;
        /**
         * Получить картинку.
         * @param System.Int32 - Порядковый номер изображения.
         * @returns Изображение.
         */
        GetPicture(index: number): Drawing.Picture;
        /**
         * Используется для получения версии компонента.
         * @returns Версия компонента.
         */
        GetVersion(): string;
      }

      class Cells {
        /**
         * Колонки.
         */
        Columns: Columns;
        /**
         * Настройка потребления памяти. Принимает значения "MemoryPreference" или "Normal".
         * Значение "MemoryPreference" применяется при записи в документ большого количества данных.
         */
        MemorySetting: string;
        /**
         * Строки.
         */
        Rows: Rows;

        /**
         * Выбирает диапазон ячеек для массового управления.
         * @param rangeCells - Диапазон ячеек в формате "A1:B9".
         */
        CreateRange(rangeCells: string): Range;

        /**
         * Получает ячейку по указанному расположению.
         * @param cellName - Расположение.
         */
        GetCell(cellName: string): Cell;

        /**
         * Используется для получения последней произошедшей ошибки.
         */
        GetError(): string;

        /**
         * Используется для получения версии компонента.
         */
        GetVersion(): string;

        /**
         * Скрывает колонку.
         * @param number - Номер колонки.
         */
        HideColumn(number: number): void;

        /**
         * Скрывает строку.
         * @param number - Номер строки.
         */
        HideRow(number: number): void;

        /**
         * Объединяет указанные ячейки.
         * @param firstRow - Номер строки.
         * @param firstColumn - Номер колонки.
         * @param totalRows - Количество строк.
         * @param totalColumns - Количество колонок.
         */
        // eslint-disable-next-line no-magic-numbers
        Merge(firstRow: number, firstColumn: number, totalRows: number, totalColumns: number): 1 | 0;

        /**
         * Устанавливает ширину колонки.
         * @param columnNum - Номер колонки.
         * @param width - Ширина (Double).
         */
        // eslint-disable-next-line no-magic-numbers
        SetColumnWidth(columnNum: number, width: number): 1 | 0;

        /**
         * Устанавливает ширину строки.
         * @param rowNum - Номер строки.
         * @param width - Ширина (Double).
         */
        // eslint-disable-next-line no-magic-numbers
        SetRowHeight(rowNum: number, width: number): 1 | 0;

        /**
         * Разъединяет указанные ячейки.
         * @param firstRow - Номер строки.
         * @param firstColumn - Номер колонки.
         * @param totalRows - Количество строк.
         * @param totalColumns - Количество колонок.
         */
        // eslint-disable-next-line no-magic-numbers
        UnMerge(firstRow: number, firstColumn: number, totalRows: number, totalColumns: number): 1 | 0;
      }

      class Column {
        /**
         * Ширина колонки.
         */
        Width: number;

        /**
         * Используется для получения последней произошедшей ошибки.
         */
        GetError(): string;

        /**
         * Используется для получения версии компонента.
         */
        GetVersion(): string;
      }

      class Columns {
        /**
         * Получает {@link Columns | колонку} по указанному номеру.
         * @param index - Номер колонки.
         *
         */
        GetColumn(index: number): Column;

        /**
         * Используется для получения последней произошедшей ошибки.
         */
        GetError(): string;

        /**
         * Используется для получения версии компонента.
         */
        GetVersion(): string;
      }

      /**
       * Класс для работы с документом Microsoft Excel.
       */
      class Document {
        /**
         * Количество страниц.
         */
        readonly WorkSheetsCount: number;

        /**
         * Создает новый лист.
         */
        AddWorksheet(): Worksheet;

        /**
         * Закрывает документ.
         */
        // eslint-disable-next-line no-magic-numbers
        Close(): 0 | 1;

        /**
         * Создает книгу Excel.
         */
        // eslint-disable-next-line no-magic-numbers
        CreateWorkBook(): 0 | 1;

        /**
         * Используется для получения последней произошедшей ошибки.
         */
        GetError(): string;

        /**
         * Используется для получения версии компонента.
         */
        GetVersion(): string;

        /**
         * Получает значение листа по номеру.
         * @param index - Порядковый номер листа.
         */
        GetWorksheet(index: number): Worksheet;

        /**
         * Загружает данные в формате HTML из указанного файла.
         * @param filePath - Путь до файла в формате HTML.
         * @param resourcesDirectoryName - Название папки с ресурсами (изображения, стили и т.д.).
         *
         */
        // eslint-disable-next-line no-magic-numbers
        LoadHtmlFile(filePath: string, resourcesDirectoryName: string): 0 | 1;

        /**
         * Загружает данные в формате HTML из строки.
         * @param htmlText - Переменная, содержащаю строку в формате HTML.
         * @param resourcesDirectoryName - Название папки с ресурсами (изображения, стили и т.д.).
         *
         */
        // eslint-disable-next-line no-magic-numbers
        LoadHtmlString(htmlText: string, resourcesDirectoryName: string): 0 | 1;

        /**
         * Открывает файл Microsoft Excel.
         * @param filePath - Путь до файла.
         */
        // eslint-disable-next-line no-magic-numbers
        Open(filePath: string): 1 | 0;

        /**
         * Сохраняет текущий документ.
         */
        // eslint-disable-next-line no-magic-numbers
        Save(): 1 | 0;

        /**
         * Сохраняет документ по указанному пути.
         * Формат определяется по расширению имени файла в пути сохранения.
         * Доступные форматы: CSV, ODS, TIFF, SVG, PDF, MHTML, HTML.
         * @param newPath - Путь сохранения, включая имя файла.
         */
        // eslint-disable-next-line no-magic-numbers
        SaveAs(newPath: string): 1 | 0;
      }

      class Font {}

      class PageSetup {
        /**
         * Адаптировать содержимое по высоте под указанное количество страниц.
         */
        FitToPagesTall: number;

        /**
         * Адаптировать содержимое по ширине под указанное количество страниц.
         */
        FitToPagesWide: number;

        /**
         * Ориентация страницы. Допустимые значения: "Landscape" или "Portrait".
         */
        Orientation: "Landscape" | "Portrait";

        /**
         * Размер страницы для печати.
         */
        PaperSize: "PaperLetter"
        | "PaperLetterSmall"
        | "PaperTabloid"
        | "PaperLedger"
        | "PaperLegal"
        | "PaperStatement"
        | "PaperExecutive"
        | "PaperA3"
        | "PaperA4"
        | "PaperA4Small"
        | "PaperA5"
        | "PaperB4"
        | "PaperB5"
        | "PaperFolio"
        | "PaperQuarto"
        | "Paper10x14"
        | "Paper11x17"
        | "PaperNote"
        | "PaperEnvelope9"
        | "PaperEnvelope10"
        | "PaperEnvelope11"
        | "PaperEnvelope12"
        | "PaperEnvelope14"
        | "PaperCSheet"
        | "PaperDSheet"
        | "PaperESheet"
        | "PaperEnvelopeDL"
        | "PaperEnvelopeC5"
        | "PaperEnvelopeC3"
        | "PaperEnvelopeC4"
        | "PaperEnvelopeC6"
        | "PaperEnvelopeC65"
        | "PaperEnvelopeB4"
        | "PaperEnvelopeB5"
        | "PaperEnvelopeB6"
        | "PaperEnvelopeItaly"
        | "PaperEnvelopeMonarch"
        | "PaperEnvelopePersonal"
        | "PaperFanfoldUS"
        | "PaperFanfoldStdGerman"
        | "PaperFanfoldLegalGerman"
        | "PaperISOB4"
        | "PaperJapanesePostcard"
        | "Paper9x11"
        | "Paper10x11"
        | "Paper15x11"
        | "PaperEnvelopeInvite"
        | "PaperLetterExtra"
        | "PaperLegalExtra"
        | "PaperTabloidExtra"
        | "PaperA4Extra"
        | "PaperLetterTransverse"
        | "PaperA4Transverse"
        | "PaperLetterExtraTransverse"
        | "PaperSuperA"
        | "PaperSuperB"
        | "PaperLetterPlus"
        | "PaperA4Plus"
        | "PaperA5Transverse"
        | "PaperJISB5Transverse"
        | "PaperA3Extra"
        | "PaperA5Extra"
        | "PaperISOB5Extra"
        | "PaperA2"
        | "PaperA3Transverse"
        | "PaperA3ExtraTransverse"
        | "PaperJapaneseDoublePostcard"
        | "PaperA6"
        | "PaperJapaneseEnvelopeKaku2"
        | "PaperJapaneseEnvelopeKaku3"
        | "PaperJapaneseEnvelopeChou3"
        | "PaperJapaneseEnvelopeChou4"
        | "PaperLetterRotated"
        | "PaperA3Rotated"
        | "PaperA4Rotated"
        | "PaperA5Rotated"
        | "PaperJISB4Rotated"
        | "PaperJISB5Rotated"
        | "PaperJapanesePostcardRotated"
        | "PaperJapaneseDoublePostcardRotated"
        | "PaperA6Rotated"
        | "PaperJapaneseEnvelopeKaku2Rotated"
        | "PaperJapaneseEnvelopeKaku3Rotated"
        | "PaperJapaneseEnvelopeChou3Rotated"
        | "PaperJapaneseEnvelopeChou4Rotated"
        | "PaperJISB6"
        | "PaperJISB6Rotated"
        | "Paper12x11"
        | "PaperJapaneseEnvelopeYou4"
        | "PaperJapaneseEnvelopeYou4Rotated"
        | "PaperPRC16K"
        | "PaperPRC32K"
        | "PaperPRCBig32K"
        | "PaperPRCEnvelope1"
        | "PaperPRCEnvelope2"
        | "PaperPRCEnvelope3"
        | "PaperPRCEnvelope4"
        | "PaperPRCEnvelope5"
        | "PaperPRCEnvelope6"
        | "PaperPRCEnvelope7"
        | "PaperPRCEnvelope8"
        | "PaperPRCEnvelope9"
        | "PaperPRCEnvelope10"
        | "PaperPRC16KRotated"
        | "PaperPRC32KRotated"
        | "PaperPRCBig32KRotated"
        | "PaperPRCEnvelope1Rotated"
        | "PaperPRCEnvelope2Rotated"
        | "PaperPRCEnvelope3Rotated"
        | "PaperPRCEnvelope4Rotated"
        | "PaperPRCEnvelope5Rotated"
        | "PaperPRCEnvelope6Rotated"
        | "PaperPRCEnvelope7Rotated"
        | "PaperPRCEnvelope8Rotated"
        | "PaperPRCEnvelope9Rotated"
        | "PaperPRCEnvelope10Rotated"
        | "PaperB3"
        | "PaperBusinessCard";

        /**
         * Используется для получения последней произошедшей ошибки.
         * @returns Текст последней произошедшей ошибки.
         */
        GetError(): string;
        /**
         * Используется для получения версии компонента.
         * @returns Версия компонента.
         */
        GetVersion(): string;
      }

      class Range {}

      class Row {}

      class Rows {}

      class Style {
        /**
         * Границы ячейки.
         */
        Borders: Borders;
        /**
         * Свой шаблон формата данных ячейки.
         */
        Custom: string;
        /**
         * Цвет шрифта.
         */
        FontColor: string;
        /**
         * Название шрифта.
         */
        FontName: string;
        /**
         * Размер шрифта.
         */
        FontSize: number;
        /**
         * Цвет заливки.
         */
        ForegroundColor: string;
        /**
         * Выравнивание по горизонтали. Принимает значения "Left", "Right", "Center", "Justify".
         */
        HorizontalAlignment: string;
        /**
         * Ширность шрифта.
         */
        IsBold: boolean;
        /**
         * Курсив.
         */
        IsItalic: boolean;
        /**
         * Автоперенос текста.
         */
        IsTextWrapped: boolean;
        /**
         * Номер стиля и формата в таблице. Описание можно посмотреть тут: http://www.aspose.com/docs/display/cellsnet/Setting+Display+Formats+of+Numbers+and+Dates.
         */
        Number: number;
        /**
         * Выравнивание по вертикали. Принимает значения "Top", "Bottom", "Center".
         */

        /**
         * Используется для получения последней произошедшей ошибки.
         */
        GetError(): string;

        /**
         * Используется для получения версии компонента.
         */
        GetVersion(): string;
      }

      /**
       * Лист книги Excel.
       */
      class Worksheet {
        /**
         * Свойство для управления ячейками листа.
         */
        Cells: Cells;

        /**
         * Наборы графиков.
         */
        Charts: ChartsCollection;

        /**
         * Название листа.
         */
        Name: string;

        /**
         * Параметры страницы.
         */
        PageSetup: PageSetup;

        /**
         * Набор изображений листа.
         */
        Pictures: Pictures;

        /**
         * Создает новый набор графиков.
         * @deprecated
         * @param chartType - Тип графика.
         * @param left - Позиция по горизонтали.
         * @param top - Позиция по вертикали.
         * @param width - Ширинf.
         * @param height - Высота.
         */
        AddChart(
          chartType: string,
          left: number,
          top: number,
          width: number,
          height: number
        ): Chart;

        /**
         * Получает ячейку по указанному расположению
         * (устаревшее, вместо данной функции нужно использовать Cells.GetCell()).
         * @param cellName - Расположение.
         */
        GetCell(cellName: string): Cell;

        /**
         * Используется для получения последней произошедшей ошибки.
         */
        GetError(): string;

        /**
         * Используется для получения версии компонента.
         */
        GetVersion(): string;
      }

      class ChartsCollection {}

      class Pictures {}

      class Chart {}

      namespace Drawing {
        class Picture {}
      }
    }
  }

  namespace RegExp {
    interface IRegExpMatchesItem {
      SubMatches(index: number): string;
    }

    interface RegExpMatches {
      Count: number;
      Item(index: number): IRegExpMatchesItem;
    }

    class RegExp {
      Pattern: string;
      Global: boolean;
      IgnoreCase: boolean;
      MultiLine: boolean;
      Execute(string: string): RegExpMatches;
    }
  }
}
