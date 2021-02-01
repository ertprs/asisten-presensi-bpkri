import Fs from 'fs'
import { create, Client } from '@open-wa/wa-automate'
import { GROUP_ID } from './variables'
import config from './config'

let instance: Client
const groupId = GROUP_ID as string

export const remindPresence = async () => {
  if (!instance) instance = await create(config)
  const now = new Date()
  const image = `${__dirname}/../public/bpk-1.jpg`
  const caption = `Sekarang sudah ${now}, jangan lupa input presensi-mu hari ini ya, sekarang lebih baik dari pada ditunda~.`;
  await instance.sendImage(groupId, image, 'Gambar Reminder', caption)
}
