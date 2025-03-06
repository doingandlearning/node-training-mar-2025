const ls = {}
const grep = {}
const wc = {}

ls.pipe(grep).pipe(wc)

const scrub = {}
const rinse = {}
const dry = {}

scrub.pipe(rinse).pipe(dry)

// Stream all the things!  -> Streams are Node's most powerful and most underused capabilitiy
