// Iterator

export interface Iterator<T> {
    first(): T
    next(): T
    hasMore(): boolean
}
