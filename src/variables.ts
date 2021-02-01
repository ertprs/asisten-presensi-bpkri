import { config } from 'dotenv'

config()

export const SESSION_ID = `${process.env.SESSION_ID}-session`
export const {
  SECRET_CODE,
  GROUP_ID,
  PORT
} = process.env
