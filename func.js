module.exports = async reply(sock, m, teks) => {
  return sock.sendMessage(m.from, {text: teks})
}
