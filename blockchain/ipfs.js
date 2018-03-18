const IPFS = require('ipfs')
const node = new IPFS();

node.on('ready', () => {
  // Your node is now ready to use \o/
  const validCID = 'QmQ2r6iMNpky5f1m4cnm3Yqw8VSvjuKpTcK1X7dBR1LkJF'

	node.files.get(validCID, function (err, files) {
	  files.forEach((file) => {
	    console.log(file.path)
	    console.log(file.content.toString('utf8'))
	  })
	})


	node.id((err, id) => {
        if (err) {
            return console.log(err)
        }
        console.log(id)
    })

    let files = [
        {
            path: '/home/knolly/b.gif',
            content: File.read('/home/knolly/b.gif', null)
        }
    ]
    node.files.add(files, function (err, files) {
        if (err) {
            console.log(err);
        } else {
            console.log(files)
        }
    })
  // stopping a node
  node.stop(() => {
    // node is now 'offline'
  })
})