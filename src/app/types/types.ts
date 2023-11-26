export interface PageReturnType {
    pathname: string;
    query: {
        search?: string;
        page: number;
    };
}
