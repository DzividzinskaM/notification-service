const Producer = require('./producer')

try {
    Producer.produce();
} catch (err) {
    console.log(err);
}