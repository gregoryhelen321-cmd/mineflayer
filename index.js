const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: process.env.MC_HOST,
  port: Number(process.env.MC_PORT || 25565),
  username: process.env.BOT_USERNAME,
  version: process.env.MC_VERSION || '1.21.11'
})

bot.once('spawn', () => {
  console.log('✅ Bot joined the server!')
})

bot.on('end', () => {
  console.log('❌ Bot disconnected')
})

bot.on('kicked', reason => {
  console.log('⚠️ Bot kicked:', reason)
})

bot.on('error', err => {
  console.log('❌ Error:', err.message)
})
