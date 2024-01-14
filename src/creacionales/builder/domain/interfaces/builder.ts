// Builder

export interface Builder {
    loadActions(actions: Action[]): void
    build(): void
    reset(): void
}

export interface Action {
    action: number
    value: string | number
}
