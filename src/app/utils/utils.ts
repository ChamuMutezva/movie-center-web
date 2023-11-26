export function forward(search: string, page: number, path: string) {
    return {
        pathname: path,
        query: {
            ...(search ? { search } : {}),
            page: page < 500 ? page + 1 : 500,
        },
    };
}

export function backward(search: string, page: number, path: string) {
    return {
        pathname: path,
        query: {
            ...(search ? { search } : {}),
            page: page > 1 ? page - 1 : 1,
        },
    };
}
