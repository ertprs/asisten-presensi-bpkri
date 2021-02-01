import { ConfigObject } from '@open-wa/wa-automate'
import { SESSION_ID } from './variables'

const config: ConfigObject = {
  sessionId: SESSION_ID,
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
}

export default config
