#!/usr/bin/env note

console.log("Hello, World!");

const note = process.argv[2]
const NewNote = {
    content: note,
    id: Date.now()
}
console.log(NewNote);