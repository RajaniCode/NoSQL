require 'mongo'
client = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'music')

result = client[:artists].insert_one({ name: 'FKA Twigs' })
result.n #=> returns 1, because 1 document was inserted.

result = client[:artists].insert_many([
  { :name => 'Flying Lotus' },
  { :name => 'Aphex Twin' }
])
result.n #=> returns 2, since 2 documents were inserted.
