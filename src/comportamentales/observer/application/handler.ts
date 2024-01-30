import { DiscordSubscriber } from '../domain/models/DiscordSubscriber'
import { Editor } from '../domain/models/Editor'
import { EmailSubscriber } from '../domain/models/EmailSubscriber'

export function handler() {
    const editor = new Editor('Editor 1')

    // Instantiate the subscribers
    const emailSubscriber = new EmailSubscriber()
    const discordSubscriber = new DiscordSubscriber()

    // Subscribe
    editor._eventManager.subscribe(emailSubscriber)
    editor._eventManager.subscribe(discordSubscriber)

    editor.openFile()
    editor.saveFile()
}

handler()
