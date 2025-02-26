require 'mongo'

client = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'muse')

result = client[:arts].insert_one({ name: 'FKA Twigs' })
result.n #=> returns 1, because 1 document was inserted.

