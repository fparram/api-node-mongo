module.exports = {
    port: process.env.PROT || 3000,
    db: process.env.MONGODB || 'mongodb://localhost:27017/shop'
}