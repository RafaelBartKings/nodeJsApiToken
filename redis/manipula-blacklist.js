const blacklist = require('./blacklist');

const { promisify } = require('util');
const exitsAsync = promisify(blacklist.exists).bind(blacklist);
const setAsync = promisify(blacklist.set).bind(blacklist); 

const jwt = require('jsonwebtoken'); 
const { createHash } = require('crypto');

function geraTokenHash(token) {
    return createHash('sha256')
    .update(token)
    .digest('hex');

}

module.exports = {
    adiciona: async token => {
        const dataExpricao = jwt.decode(token).exp;
        const tokenHash = geraTokenHash(token);
        await setAsync(tokenHash, '');
        blacklist.expireat(tokenHash, dataExpricao);
    },
    contemToken: async token => {
        const tokenHash = geraTokenHash(token);
        const resultado = await exitsAsync(tokenHash);
        return resultado === 1;
    }
}