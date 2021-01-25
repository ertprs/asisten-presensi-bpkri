import { create } from '@open-wa/wa-automate'
import { SESS_ID } from './variables'

export default create({
  sessionId: SESS_ID,
  headless: true,
  qrTimeout: 0,
  authTimeout: 0,
  cacheEnabled: false,
  throwErrorOnTosBlock: false,
  killProcessOnBrowserClose: true,
  chromiumArgs: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--agressive-cache-discard',
    '--disable-cache',
    '--disable-application-cache',
    '--disabkle-offline-load-stale-cache',
    '--disk-cache-size=0'
  ]
})
