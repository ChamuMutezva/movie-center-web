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

export function forwardTenPages(search: string, page: number, path: string) {
    return {
        pathname: path,
        query: {
            ...(search ? { search } : {}),
            page: page < 490 ? page + 10 : page,
        },
    };
}

export function backwardTenPages(search: string, page: number, path: string) {
    return {
        pathname: path,
        query: {
            ...(search ? { search } : {}),
            page: page > 10 ? page - 10 : page,
        },
    };
}
