const log = require('./logger')

const NAME = 'projectbluestreak'
const Group = require('./group')
let group = new Group(NAME)

const data = require('./data')

group.getComments(comments => handle(comments))
setInterval(group.getComments, 5*60*1000, comments => handle(comments))

function handle (cmts) {
  log.info(`found a total of ${cmts.length} comment(s).`)
  data.add(cmts)
}
