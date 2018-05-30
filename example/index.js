const StreamSpeed = require('streamspeed')
const {DownloadManager} = require('../src/')

// Creating the manager
const manager = new DownloadManager()
// Putting the number of file to download simultaneously
manager.simultaneousDownloads = 5 // DEFAULT: 1

// Adding files to the queue
manager.addToQueue('http://ovh.net/files/10Mio.dat', 'dl/10Mio.dat')
manager.addToQueue('http://ovh.net/files/10Mio.dat', 'dl/10Mio-2.dat')
manager.addToQueue('http://ovh.net/files/10Mio.dat', 'dl/10Mio-3.dat')
manager.addToQueue('http://ovh.net/files/10Mio.dat', 'dl/10Mio-4.dat')
manager.addToQueue('http://ovh.net/files/10Mio.dat', 'dl/10Mio-5.dat')
manager.addToQueue('http://ovh.net/files/10Mio.dat', 'dl/10Mio-6.dat')

// Registering events
manager.on('start', _ => console.log('Started'))
manager.on('finish', _ => console.log('Finished'))
manager.on('error', err => console.error(err))
manager.on('speed', (speed, avg) => console.log(StreamSpeed.toHuman(avg)))

// Starting the download
manager.start()

