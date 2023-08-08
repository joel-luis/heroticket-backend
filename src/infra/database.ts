import mongoose from 'mongoose'

export async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://heroticket:21092013@cluster0.oqy5fka.mongodb.net/hero-tickets',
    )
    console.log('Connect database success')
  } catch (error) {
    console.log('file: database.ts:5 error:', error)
  }
}
