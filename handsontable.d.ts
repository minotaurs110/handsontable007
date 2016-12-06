// Based on https://github.com/DefinitelyTyped/DefinitelyTyped/blob/types-2.0/handsontable/index.d.ts for 0.24.3
declare namespace ht {

  type RowIndex = number;
  type ColIndex = number|string;
  type CellValue = number|string|boolean;

  /**
   * Row index, col index, old cell value, new cell value
   */
  type Change = [RowIndex, ColIndex, CellValue, CellValue];

  interface Coordinates {
    row: number;
    col: number;
  }

  interface Selection {
    start: Coordinates;
    end: Coordinates;
  }

  interface Renderer {
    (instance: any, td: Element, row: number, col: number, prop, value, cellProperties): void;
  }

  interface Renderers {
    AutocompleteRenderer: Renderer;
    BaseRenderer: Renderer;
    CheckboxRenderer: Renderer;
    HtmlRenderer: Renderer;
    NumericRenderer: Renderer;
    PasswordRenderer: Renderer;
    TextRenderer: Renderer;
    cellDecorator: Renderer;
    getRenderer: (rendererName: string) => Renderer;
    registerRenderer: (rendererName: string, Renderer) => void;
  }

  type ContextMenuDefaultKeys = 'row_above' | 'row_below' | 'col_left' | 'col_right' | 'remove_row' |
    'remove_col' | 'undo' | 'redo' | 'make_read_only' | 'alignment' | 'borders' | 'commentsAddEdit' |
    'commentsRemove' | 'hidden_columns_hide' | 'hidden_columns_show' | 'copy' | 'paste' | '---------';

  interface ContextMenuEntry {
    key?: string;
    name?: string;
    disabled?: () => boolean | boolean;
    hidden?: () => boolean | boolean;
    callback?: (key: string, selection: Selection, event: Event) => void;
  }

  interface ContextMenu {
    callback?: (key, options) => void;
    items: {[key: string]: ContextMenuEntry|string};
  }

  interface HiddenColumns {
    columns: number[];
    indicators?: boolean;
  }

  interface ColumnSorting {
    column: number|string;
    sortOrder: boolean;
  }

  interface BaseOptions {
    allowEmpty?: boolean;
    allowInsertColumn?: boolean;
    allowInsertRow?: boolean;
    allowInvalid?: boolean;
    allowRemoveColumn?: boolean;
    allowRemoveRow?: boolean;
    autoColumnSize?: Object|boolean;
    autoComplete?: any[];
    autoRowSize?: Object|boolean;
    autoWrapCol?: boolean;
    autoWrapRow?: boolean;
    bindRowsWithHeaders?: boolean|string;
    cell?: any[];
    cells?: Function;
    checkedTemplate?: boolean|string;
    className?: string|any[];
    colHeaders?: boolean|any[]|Function;
    collapsibleColumns?: boolean|any[];
    columnHeaderHeight?: number|any[];
    columns?: ColumnsOptions[];
    columnSorting?: boolean|ColumnSorting;
    columnSummary?: Object;
    colWidths?: any[]|Function|number|string;
    commentedCellClassName?: string;
    comments?: boolean|any[];
    contextMenu?: boolean|ContextMenuDefaultKeys[]|ContextMenu;
    contextMenuCopyPaste?: Object;
    copyable?: boolean;
    copyColsLimit?: number;
    copyPaste?: boolean;
    copyRowsLimit?: number;
    correctFormat?: boolean;
    currentColClassName?: string;
    currentRowClassName?: string;
    customBorders?: boolean|any[];
    dataSchema?: Object;
    dateFormat?: string;
    debug?: boolean;
    defaultDate?: string;
    disableVisualSelection?: boolean|string|any[];
    dropdownMenu?: boolean|ContextMenuDefaultKeys[]|ContextMenu;
    editor?: string|Function|boolean;
    enterBeginsEditing?: boolean;
    enterMoves?: Object|Function;
    fillHandle?: boolean|string|Object;
    filter?: boolean;
    filteringCaseSensitive?: boolean;
    filters?: boolean;
    fixedColumnsLeft?: number;
    fixedRowsBottom?: number;
    fixedRowsTop?: number;
    format?: string;
    fragmentSelection?: boolean|string;
    ganttChart?: Object;
    headerTooltips?: boolean|Object;
    height?: number|Function;
    hiddenColumns?: boolean|HiddenColumns;
    hiddenRows?: boolean|Object;
    invalidCellClassName?: string;
    label?: Object;
    language?: string;
    manualColumnFreeze?: boolean;
    manualColumnMove?: boolean|any[];
    manualColumnResize?: boolean|any[];
    manualRowMove?: boolean|any[];
    manualRowResize?: boolean|any[];
    maxCols?: number;
    maxRows?: number;
    mergeCells?: boolean|any[];
    minCols?: number;
    minRows?: number;
    minSpareCols?: number;
    minSpareRows?: number;
    multiSelect?: boolean;
    nestedHeaders?: any[];
    noWordWrapClassName?: string;
    observeChanges?: boolean;
    observeDOMVisibility?: boolean;
    outsideClickDeselects?: boolean;
    pasteMode?: string;
    persistentState?: boolean;
    placeholder?: any;
    placeholderCellClassName?: string;
    preventOverflow?: string|boolean;
    readOnly?: boolean;
    readOnlyCellClassName?: string;
    renderAllRows?: boolean;
    renderer?: string|Renderer;
    rowHeaders?: boolean|any[]|Function;
    rowHeaderWidth?: number|any[];
    rowHeights?: any[]|Function|number|string;
    search?: boolean;
    selectOptions?: any[];
    skipColumnOnPaste?: boolean;
    sortByRelevance?: boolean;
    sortFunction?: Function;
    sortIndicator?: boolean;
    source?: any[]|Function;
    startCols?: number;
    startRows?: number;
    stretchH?: string;
    strict?: boolean;
    tableClassName?: string|any[];
    tabMoves?: Object;
    title?: string;
    trimDropdown?: boolean;
    trimWhitespace?: boolean;
    type?: string;
    uncheckedTemplate?: boolean|string;
    undo?: boolean;
    validator?: Function|RegExp;
    viewportColumnRenderingOffset?: number|string;
    viewportRowRenderingOffset?: number|string;
    visibleRows?: number;
    wordWrap?: boolean;
    isEmptyCol?: (col: number) => boolean;
    isEmptyRow?: (row: number) => boolean;

    // hooks
    afterAutofillApplyValues?: (startArea: any[], entireArea: any[]) => void;
    afterCellMetaReset?: () => void;
    afterChange?: (changes: Change[], source: string) => void;
    afterChangesObserved?: () => void;
    afterColumnMove?: (movedColumns: number[], newPosition: number) => void;
    afterColumnResize?: (currentColumn: number, newSize: number, isDoubleClick: boolean) => void;
    afterColumnSort?: (column: number, order: boolean) => void;
    afterContextMenuDefaultOptions?: (predefinedItems: any[]) => void;
    afterContextMenuExecute?: () => any;
    afterContextMenuHide?: (context: Object) => void;
    afterContextMenuShow?: (context: Object) => void;
    afterCopyLimit?: (selectedRows: number, selectedColumnds: number, copyRowsLimit: number,
      copyColumnsLimit: number) => void;
    afterCreateCol?: (index: number, amount: number) => void;
    afterCreateRow?: (index: number, amount: number) => void;
    afterDeselect?: () => void;
    afterDestroy?: () => void;
    afterDocumentKeyDown?: (event: Event) => void;
    afterFilter?: (formulasStack: any[]) => void;
    afterGetCellMeta?: (row: number, col: number, cellProperties: Object) => void;
    afterGetColHeader?: (col: number, TH: Element) => void;
    afterGetColumnHeaderRenderers?: (array: any[]) => void;
    afterGetRowHeader?: (row: number, TH: Element) => void;
    afterGetRowHeaderRenderers?: (array: any[]) => void;
    afterInit?: () => void;
    afterLoadData?: (firstTime: boolean) => void;
    afterMomentumScroll?: () => void;
    afterOnCellCornerMouseDown?: (event: Object) => void;
    afterOnCellMouseDown?: (event: Object, coords: Object, TD: Element) => void;
    afterOnCellMouseOver?: (event: Object, coords: Object, TD: Element) => void;
    afterRemoveCol?: (index: number, amount: number) => void;
    afterRemoveRow?: (index: number, amount: number) => void;
    afterRender?: (isForced: boolean) => void;
    afterRenderer?: (TD: Element, row: number, col: number, prop: string|number, value: string,
      cellProperties: Object) => void;
    afterRowMove?: (startRow: number, endRow: number) => void;
    afterRowResize?: (currentRow: number, newSize: number, isDoubleClick: boolean) => void;
    afterScrollHorizontally?: () => void;
    afterScrollVertically?: () => void;
    afterSelection?: (r: number, c: number, r2: number, c2: number) => void;
    afterSelectionByProp?: (r: number, p: string, r2: number, p2: string) => void;
    afterSelectionEnd?: (r: number, c: number, r2: number, c2: number) => void;
    afterSelectionEndByProp?: (r: number, p: string, r2: number, p2: string) => void;
    afterSetCellMeta?: (row: number, col: number, key: string, value: any) => void;
    afterUpdateSettings?: () => void;
    afterValidate?: (isValid: boolean, value: any, row: number, prop: string|number, source: string) => void|boolean;
    beforeAutofill?: (start: Object, end: Object, data: any[]) => void;
    beforeCellAlignment?: (stateBefore: any, range: any, type: string, alignmentClass: string) => void;
    beforeChange?: (changes: any[], source: string) => void;
    beforeChangeRender?: (changes: any[], source: string) => void;
    beforeColumnMove?: (movedColumns: number[], newPosition: number) => void|false;
    beforeColumnResize?: (currentColumn: number, newSize: number, isDoubleClick: boolean) => void;
    beforeColumnSort?: (column: number, order: boolean) => boolean;
    beforeDrawBorders?: (corners: any[], borderClassName: string) => void;
    beforeFilter?: (formulasStack: any[]) => void;
    beforeGetCellMeta?: (row: number, col: number, cellProperties: Object) => void;
    beforeInit?: () => void;
    beforeInitWalkontable?: (walkontableConfig: Object) => void;
    beforeKeyDown?: (event: Event) => void;
    beforeOnCellMouseDown?: (event: Event, coords: Object, TD: Element) => void;
    beforeRemoveCol?: (index: number, amount: number, logicalCols?: any[]) => void;
    beforeRemoveRow?: (index: number, amount: number, logicalRows?: any[]) => void;
    beforeRender?: (isForced: boolean) => void;
    beforeRenderer?: (TD: Element, row: number, col: number, prop: string|number, value: string,
      cellProperties: Object) => void;
    beforeRowMove?: (startRow: number, endRow: number) => void;
    beforeRowResize?: (currentRow: number, newSize: number, isDoubleClick: boolean) => any;
    beforeSetRangeEnd?: (coords: any[]) => void;
    beforeStretchingColumnWidth?: (stretchedWidth: number, column: number) => void;
    beforeTouchScroll?: () => void;
    beforeValidate?: (value: any, row: number, prop: string|number, source: string) => void;
    construct?: () => void;
    init?: () => void;
    modifyCol?: (col: number) => void;
    modifyColHeader?: (column: number) => void;
    modifyColWidth?: (width: number, col: number) => void;
    modifyCopyableRange?: (copyableRanges: any[]) => void;
    modifyRow?: (row: number) => void;
    modifyRowHeader?: (row: number) => void;
    modifyRowHeight?: (height: number, row: number) => void;
    persistentStateLoad?: (key: string, valuePlaceholder: Object) => void;
    persistentStateReset?: (key: string) => void;
    persistentStateSave?: (key: string, value: any) => void;
    unmodifyCol?: (col: number) => void;
  }

  interface BaseOptionsPro extends BaseOptions {
    hiddenColumn?: (col: number) => void;
  }

  interface GridOptions extends BaseOptionsPro {
    data?: any[]|Function;
    width?: number|Function;
    rowHeights?: number;
  }

  interface ColumnsOptions extends BaseOptionsPro {
    data: any|Function;
    width?: number|Function;
  }

  interface Instance {
    addHook(key: string, callback: Function|any[]): void;
    addHookOnce(key: string, callback: Function|any[]): void;
    alter(action: string, index: number, amount?: number, source?: string, keepEmptyRows?: boolean): void;
    clear(): void;
    colOffset(): number;
    colToProp(col: number): string|number;
    countCols(): number;
    countEmptyCols(ending?: boolean): number;
    countEmptyRows(ending?: boolean): number;
    countRenderedCols(): number;
    countRenderedRows(): number;
    countRows(): number;
    countSourceRows(): number;
    countVisibleCols(): number;
    countVisibleRows(): number;
    deselectCell(): void;
    destroy(): void;
    destroyEditor(revertOriginal?: boolean): void;
    getActiveEditor(): Object;
    getCell(row: number, col: number, topmost?: boolean): Element;
    getCellEditor(row: number, col: number): Object;
    getCellMeta(row: number, col: number): Object;
    getCellRenderer(row: number, col: number): Function;
    getCellValidator(row: number, col: number): any;
    getColHeader(col?: number): any[]|string;
    getColWidth(col: number): number;
    getCoords(elem: Element): Object;
    getCopyableData(row: number, column: number): string;
    getCopyableText(startRow: number, startCol: number, endRow: number, endCol: number): string;
    getData(r?: number, c?: number, r2?: number, c2?: number): any[];
    getDataAtCell(row: number, col: number): any;
    getDataAtCol(col: number): any[];
    getDataAtProp(prop: string|number): any[];
    getDataAtRow(row: number): any[];
    getDataAtRowProp(row: number, prop: string): any;
    getDataType(rowFrom: number, columnFrom: number, rowTo: number, columnTo: number): string;
    getInstance(): any;
    getPlugin(pluginName: string): any;
    getRowHeader(row?: number): any[]|string;
    getRowHeight(row: number): number;
    getSchema(): Object;
    getSelected(): any[];
    getSelectedRange(): any;
    getSettings(): Object;
    getSourceData(r?: number, c?: number, r2?: number, c2?: number): any[];
    getSourceDataAtCell(row: number, column: number): any;
    getSourceDataAtCol(column: number): any[];
    getSourceDataAtRow(row: number): any[]|Object;
    getValue(): any;
    hasColHeaders(): boolean;
    hasHook(key: string): boolean;
    hasRowHeaders(): boolean;
    isEmptyCol(col: number): boolean;
    isEmptyRow(row: number): boolean;
    isListening(): boolean;
    listen(): void;
    loadData(data: any[]): void;
    populateFromArray(row: number, col: number, input: any[], endRow?: number, endCol?: number, source?: string,
      method?: string, direction?: string, deltas?: any[]): any;
    propToCol(prop: string): number;
    removeCellMeta(row: number, col: number, key: string): void;
    removeHook(key: string, callback: Function): void;
    render(): void;
    rowOffset(): number;
    runHooks(key: string, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any, p6?: any): any;
    selectCell(row: number, col: number, endRow?: number, endCol?: number, scrollToCell?: boolean,
      changeListener?: boolean): boolean;
    selectCellByProp(row: number, prop: string, endRow?: number, endProp?: string, scrollToCell?: boolean): boolean;
    setCellMeta(row: number, col: number, key: string, val: string): void;
    setCellMetaObject(row: number, col: number, prop: Object): void;
    setDataAtCell(row: number|any[], col: number, value: string, source?: string): void;
    setDataAtRowProp(row: number|any[], prop: string, value: string, source?: string): void;
    spliceCol(col: number, index: number, amount: number, elements?: any): void;
    spliceRow(row: number, index: number, amount: number, elements?: any): void;
    unlisten(): void;
    updateSettings(settings: Object, init: boolean): void;
    validateCells(callback: Function): void;
  }
}

declare module 'handsontable/dist/handsontable.full.js' {
  const Handsontable: {
    (element: Element, options: ht.GridOptions): ht.Instance;
    new (element: Element, options: ht.GridOptions): ht.Instance;
    renderers: ht.Renderers;
    cellTypes: {[name: string]: {
      renderer: ht.Renderer;
      editor: Function;
      validator?: Function;
      dataType?: string;
      copyable?: boolean;
    }};
    helper: {
      KEY_CODES: any;
      [name: string]: Function;
    };
  };
  export = Handsontable;
}
