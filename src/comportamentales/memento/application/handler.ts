import { Editor } from '../domain/models/Editor'
import { EditorTaker } from '../domain/services/EditorTaker'

export function handler() {
    const careTaker = new EditorTaker()

    const originator = new Editor()
    originator.setContent('The content')
    originator.setSelectionWidth(10)
    console.log('\nOriginator 1:', originator)

    const currentSnapshot = originator.save()
    careTaker.save(currentSnapshot)

    originator.setContent('The content 2')
    originator.setSelectionWidth(20)
    console.log('\nOriginator 1.1:', originator)

    // Perform the restore
    careTaker.restore()
    console.log('\nOriginator 1.2:', originator)
}

handler()
