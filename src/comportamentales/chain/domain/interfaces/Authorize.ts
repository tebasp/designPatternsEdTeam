// Handler

export interface Authorize {
    authorize(request: number): string
    setNext(authorize: Authorize)
}
