export function reply(sock, m, teks) {
  return sock.sendMessage(m.from, {text: teks})
}
