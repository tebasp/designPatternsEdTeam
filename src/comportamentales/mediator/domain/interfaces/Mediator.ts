// Mediator

import { Component } from '../models/Component'

export interface IMediator {
    notify(sender: Component, event: string): void
}
