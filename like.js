const socket = io()
const btn = document.querySelector('button')
const likesOutput = document.querySelector('.likes')
btn.addEventListener('click', async () => {
    const response = await fetch('/like', { method: 'POST' })
    const data = await response.json()
    likesOutput.textContent = `Likes: ${data.likes}`
    socket.emit('likes:updated')
})
socket.on('likes:update', likes => {
    likesOutput.textContent = `Likes: ${likes}`
})