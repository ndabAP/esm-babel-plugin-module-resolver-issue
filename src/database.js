const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

await sleep(2000)
