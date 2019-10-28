/**
 * @file export interfaces needed in idb-manager
 */
export interface ItemInDBManager {
    dbName: string;
    tableList: TableConfig[];
    version: number;
}
export interface DB {
    name: string;
    tableList: TableConfig[];
    version: number;
}
export interface ItemInTable {
    [key: string]: any;
    expireTime: number;
    updateTime: number;
}
export interface DBConfig {
    dbName: string;
    tables?: {
        [key: string]: TableConfig;
    };
    dbVersion?: number;
    itemDuration?: MiliSeconds;
};
export interface TableConfig {
    tableName?: string;
    primaryKey?: string;
    indexList?: IndexOfTable[];
    itemDuration?: MiliSeconds;
};
export interface IndexOfTable {
    indexName: string;
    unique?: boolean;
};
export interface ItemConfig {
    tableName: string;
    item: any;
    itemDuration?: MiliSeconds;
};
export interface IndexRange {
    indexName: string;
    onlyIndex?: any;
    lowerIndex?: any;
    upperIndex?: any;
    lowerExclusive?: boolean;
    upperExclusive?: boolean;
};
export interface TableIndexRange {
    tableName: string;
    indexRange?: IndexRange;
}
export type MiliSeconds = number;
